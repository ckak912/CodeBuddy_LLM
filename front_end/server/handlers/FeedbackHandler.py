import json
import os

import requests
from BaseUserHandler import *


class FeedbackHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        print("hello this is the feedback handler")
        try:
            secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
            OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

            API_URL = 'https://api.openai.com/v1/chat/completions'

            task_desc = self.get_body_argument("task_desc")
            
            model_prompt = '''
            You have been given the role of a educator providing feedback to students. You have been given the task description which gives you context for the programming task that the student is trying to complete.
            Based on this task description provide some comprehensive feedback to the student code provided below. The structure of the feedback should be:
                
            
                The current state of the user code is...

                Feedback: Based on the requirements of the task description the student code...

            NOTE: It is important that you just provide feedback in the structure outlined above. Don't tell students how to complete the task.
            '''

            # get the user's current code implementation
            user_code = self.get_body_argument("user_code").replace("\r", "")


            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {OPEN_AI_API_KEY}'
            }

            data = {
                'model': 'gpt-3.5-turbo',
                'messages': [
                    {'role': 'user', 'content': task_desc + '\n\n' + model_prompt + '\n\n' + 'Student Code (this is what you provide feedback for):\n' + user_code}
                ],
                'temperature': 0.8
            }

            response = requests.post(API_URL, headers=headers, json=data)
            result = response.json()

            feedback = result['choices'][0]['message']['content']

            feedback_json = self.write(json.dumps(feedback))
            
            self.content.store_llm_feedback(exercise_id, course_id, assignment_id, feedback)

            self.content.store_user_code(exercise_id, course_id, assignment_id, user_code)

        except Exception as inst:
            print("feedback handler exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch exercise feedback."})

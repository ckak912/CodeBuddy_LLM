import json
import os

import requests
from BaseUserHandler import *


class FeedbackHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        try:
            exercise_feedback = self.content.retrieve_llm_feedback(exercise_id, course_id, assignment_id)
            if not exercise_feedback:
                print("hello this is the feedback handler")


                secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
                OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

                API_URL = 'https://api.openai.com/v1/chat/completions'

                full_solution =  self.get_body_argument("full_solution")
                
                model_prompt = '''
                You have been given the role of a educator providing feedback to students. You have been given the model solution that has a complete implementation of this exercise. This solution contains comments (e.g. "Step 1: Define the average_grade_calculator function") that preceed the code required to satisfy that step. 
                Use this model solution as a guideline to help you provide feedback on the student code.

                Structure your response in the format like below:

                "n: 'feedbackContent'",
                ...
                for each step 'n'

                - If the student code has equivalent functionality to the corresponding code within the model solution , for feedback simply write "You have completed step n".
                        
                - If the student code doesn't have equivalent functionality to the corresponding code within the model solution, explain what is missing using purely natural language, NO CODE.

                - Ensure that you provide feedback for the current state of the student code against the comments in the rubric, even if there isn't relevant code to compare.
                '''

                # get the user's current code implementation
                user_code = self.get_body_argument("user_code").replace("\r", "")
                step_process = self.get_body_argument("step_process")

                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': 'Step Process:\n' + step_process + 'Model Solution (the rubric):\n' + full_solution + '\n\n' + model_prompt + '\n\n' + 'Student Code (this is what you provide feedback for):\n' + user_code}
                    ],
                    'temperature': 0.8
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                feedback = result['choices'][0]['message']['content']

                print(feedback)

                # Convert the new_feedback dictionary back to JSON format
                feedback_json = self.write(json.dumps(feedback))

                # You can store the assistant's reply in the database or perform any other desired action here
                self.content.store_llm_feedback(feedback_json, exercise_id, course_id, assignment_id)
            else:
                print("exercise feedback is in the database")

        except Exception as inst:
            print("Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch exercise feedback."})

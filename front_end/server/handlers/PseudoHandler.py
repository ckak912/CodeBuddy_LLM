import json
import os
import requests
from BaseUserHandler import *

class PseudoHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        print("hello this is the pseudo code handler")
        try:
            secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
            OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

            API_URL = 'https://api.openai.com/v1/chat/completions'


            task_desc = self.get_body_argument("task_desc")
            
            model_prompt = '''
            You have been given the role of a educator who helps students when stuck on a given programming task. You have been given the task description above which gives you context for the programming task that the student is trying to complete.
            Based on the task description requirements, in one concise sentence, provide a helpful statement that the students can use to progress the implementation of the task. The student code is provided below. Examples of advice are listed below:

                    - In order to start the task, you should....
                    - There is a syntax error in the code, you should change it to...

            NOTE: The response should be in purely natural language NEVER generate code
            '''
            
            # get the user's current code implementation
            user_code = self.get_body_argument("user_code").replace("\r", "")

            # # get the static step process file 
            # step_process = self.get_body_argument("step_process")

            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {OPEN_AI_API_KEY}'
            }

            data = {
                'model': 'gpt-3.5-turbo',
                'messages': [
                    {'role': 'user', 'content': task_desc + '\n\n' + model_prompt + '\n\nStudent Code:\n' + user_code}
                ],
                'temperature': 0.8,
            }

            response = requests.post(API_URL, headers=headers, json=data)
            result = response.json()

            pseudo_code = result['choices'][0]['message']['content']

            self.content.store_pseudo_code(exercise_id, course_id, assignment_id, pseudo_code)

            pseudo_code_json = self.write(json.dumps(pseudo_code))

            self.content.store_user_code(exercise_id, course_id, assignment_id, user_code)

        except Exception as inst:
            print("Pseudo Handler Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch pseudo code."})

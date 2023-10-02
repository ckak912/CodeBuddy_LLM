import json

import requests
from BaseUserHandler import *


class HintCodeHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        print("hello this is the hint code handler")
        try:
            secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
            OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

            API_URL = 'https://api.openai.com/v1/chat/completions'

            # get the user's current code implementation
            user_code = self.get_body_argument("user_code").replace("\r", "")

            # # get the static step process file 
            # step_process = self.get_body_argument("step_process")

            # # get the pseudo code from the database
            # pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)

            task_desc = self.get_body_argument("task_desc")
            
            model_prompt = '''
            You have been given the role of a educator who helps students by generating the next line of code upon the students request. You have been given the task description above which gives you context for the programming task that the student is trying to complete.
            Based on the task description requirements above, and the student code provided below, generate the next line of code for the programming task. The structure of the response should be:

                    # Based on the student code, the next line should be...

            NOTE: as this response is student-facing, it is of utmost importance that you only provide the next line of code. Do not, under any circumstances provide multiple lines of code.
            '''

            
            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {OPEN_AI_API_KEY}'
            }

            data = {
                'model': 'gpt-3.5-turbo',
                'messages': [
                    {'role': 'user', 'content': task_desc + '\n\n' + model_prompt + '\n\nStudent Code:\n' + user_code}
                    ],
                'temperature': 0.7,
            }

            response = requests.post(API_URL, headers=headers, json=data)
            result = response.json()

            hint_code = result['choices'][0]['message']['content']

            
            self.content.store_hint_code(exercise_id, course_id, assignment_id, hint_code)

            

            hint_code_json = self.write(json.dumps(hint_code))
            hint_code = ""
            self.content.store_user_code(exercise_id, course_id, assignment_id, user_code)
                
        except Exception as inst:
            print("hint code handler exception:", inst)

            self.set_status(500)
            self.finish({"error": "Failed to fetch hint code."})

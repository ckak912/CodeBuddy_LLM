import json

import requests
from BaseUserHandler import *


class HintCodeHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        print("hello this is the hint code handler")
        try:
            exercise_hint_code = self.content.retrieve_hint_code(exercise_id, course_id, assignment_id)

            if not exercise_hint_code:

                secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
                OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

                API_URL = 'https://api.openai.com/v1/chat/completions'

                # get the user's current code implementation
                user_code = self.get_body_argument("user_code").replace("\r", "")

                # # get the static step process file 
                # step_process = self.get_body_argument("step_process")

                # # get the pseudo code from the database
                # pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)

                model_prompt = '''
                You have been given the role of a lecturer that provides help to students on their programming tasks. This help is in the form
                of generating the next line of code for a student when they are stuck on a given step. Use the user code to understand what step 
                the student is currently stuck on. Then use the Instructor Solution provided as a rubric to generate the next line of code to help the student
                complete that step. Ensure that you only use the instructor solution code to compare functionality (the code comments are only used for structuring the code). It is important here to ONLY generate the next line, not the entire step.
                '''

                full_solution =  self.get_body_argument("full_solution")
                
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': model_prompt + '\n\nStudent Code:\n' + user_code + '\n\nInstructor Solution:\n' + full_solution}
                        ],
                    'temperature': 0.7,
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                hint_code = result['choices'][0]['message']['content']
                
                hint_code_json = self.write(json.dumps(hint_code))
                self.content.store_hint_code(hint_code_json, exercise_id, course_id, assignment_id)
            else:
                print("hint code is in the database")
                
        except Exception as inst:
            print("hint code handler error:", inst)

            self.set_status(500)
            self.finish({"error": "Failed to fetch hint code."})

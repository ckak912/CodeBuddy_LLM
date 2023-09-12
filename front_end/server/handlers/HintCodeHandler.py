import json

import requests
from BaseUserHandler import *


class HintCodeHandler(BaseUserHandler):
    async def get(self, exercise_id, course_id, assignment_id):
        print("hello this is the hint code handler")
        try:
            exercise_hint_code = self.content.retrieve_hint_code(exercise_id, course_id, assignment_id)

            if not exercise_hint_code:

                secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
                OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

                API_URL = 'https://api.openai.com/v1/chat/completions'

                # get the user's current code implementation
                user_code = self.get_body_argument("user_code").replace("\r", "")

                # get the static step process file 
                step_process = self.get_body_argument("step_process")

                # get the pseudo code from the database
                pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)

                model_prompt = '''
                Given the current state of the user code, the step process provided, and the psuedo code for the current step, generate the next line of code that will help a student on the current step
                '''
                
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': user_code},
                        {'role': 'user', 'content': pseudo_code},
                        {'role': 'assistant', 'content': step_process },
                        {'role': 'user', 'content': model_prompt},
                                             ],
                    'temperature': 0.7,
                    'max_tokens': 150  # Adjust the max tokens as needed
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                # Extract the hint code using regex
                hint_code_regex = r"'content': '([^']+)'"
                hint_code_match = re.search(hint_code_regex, str(result))

                # Check if a match was found and get the hint code
                if hint_code_match:
                    hint_code = hint_code_match.group(1)
                    hint_code = hint_code.replace(r'\n', '\n')
                
                hint_code_json = self.write(json.dumps(hint_code))
                self.content.store_hint_code(hint_code_json, exercise_id, course_id, assignment_id)
            else:
                print("hint code is in the database")
                
        except Exception as inst:
            print("hint code handler error:", inst)

            self.set_status(500)
            self.finish({"error": "Failed to fetch hint code."})

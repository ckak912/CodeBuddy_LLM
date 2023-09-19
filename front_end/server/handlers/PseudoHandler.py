import json
import os

import requests
from BaseUserHandler import *


class PseudoHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        try:
            # pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)
            # # if not pseudo_code:
            print("hello this is the pseudo code handler")

            secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
            OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

            API_URL = 'https://api.openai.com/v1/chat/completions'

            full_solution = self.get_body_argument("full_solution").replace("\r","")


            model_prompt = '''
            You have been given the role of a lecture that help their students by providing pseudo code for the current step they're stuck on: a natural language explanation of the logical process required to complete the current step.
            The user code has been provided below which you will use to discover what the current step is. The Instructor Solution is also provided which will give you an idea of what needs to change within the user code in order to complete
            the current step the student is stuck on. Ensure that you only use the instructor solution code to compare functionality (the code comments are only used for structuring the code). Provide a response in the structure of a concise natural language explanation (that is summed up in one paragraph) of what is required to progress to the next logical step.'''
            # get the user's current code implementation
            user_code = self.get_body_argument("user_code").replace("\r", "")

            print("This is user code within the handler: ",user_code)

            # # get the static step process file 
            # step_process = self.get_body_argument("step_process")

            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {OPEN_AI_API_KEY}'
            }

            data = {
                'model': 'gpt-3.5-turbo',
                'messages': [
                    {'role': 'user', 'content': model_prompt + '\nUser Code:\n' + user_code + '\n' + 'Instructor Solution: \n' + full_solution}
                ],
                'temperature': 0.8,
            }

            response = requests.post(API_URL, headers=headers, json=data)
            result = response.json()

            pseudo_code = result['choices'][0]['message']['content']

            pseudo_json = self.write(json.dumps(pseudo_code))
            # You can store the assistant's reply in the database or perform any other desired action here
            self.content.store_pseudo_code(pseudo_json, exercise_id, course_id, assignment_id)

        except Exception as inst:
            print("Pseudo Handler Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch pseudo code."})

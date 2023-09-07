from BaseUserHandler import *
import json
import requests

class WhatsNextHandler(BaseUserHandler):
    async def get(self, exercise_id, course_id, assignment_id):
        try:
            pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)

            if not exercise_hint_code:

                secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
                OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

                API_URL = 'https://api.openai.com/v1/chat/completions'

                user_code = '''
                def calculate_average_grade(grades): 
                    sum = 0
                '''
                step_process = '''
                "1": "Start by defining the calculate_average_grade function that takes an array of subject grades as input. ",
                "2": "The function should calculate and return the average grade. Remember to use a loop to iterate through the input array and calculate the sum of the grades. Then, divide the sum by the number of grades to obtain the average.",
                "3": "Next, define the provide_feedback function that takes the average grade as input. ",
                "4": "The function should provide feedback based on the average grade by using conditional statements. If the average grade is below 40, print \"You need to improve your performance.\" If the average grade is between 40 and 70 (both inclusive), print \"Your performance is satisfactory.\" If the average grade is above 70, print \"You have excelled in your studies.\"",
                "5": "Now, implement the main program that prompts the user to enter the number of subjects they have grades for. ",
                "6": "Use the number of subjects to create an empty array that will hold the grades. ",
                "7": "Prompt the user to enter the grades for each subject and add them to the array. Remember to validate the input and handle errors appropriately. Use a loop to iterate through the array and prompt the user for each grade.",
                "8": "Call the calculate_average_grade function with the grades as input and store the result in a variable.",
                "9": "Call the provide_feedback function with the average grade as input and display the feedback to the user. ",
                "10": "Test the program thoroughly with different inputs to ensure that it handles errors gracefully and provides accurate feedback."
                '''
                model_prompt = '''
                Given the current state of the user code, and the step process provided, use pseudo code to show how to complete the current step
                '''
                
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': user_code},
                        {'role': 'user', 'content': model_prompt},
                        {'role': 'user', 'content': step_process},
                    ],
                    'temperature': 0.7,
                    'max_tokens': 150  # Adjust the max tokens as needed
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                # # Extract the hint code using regex
                # hint_code_regex = r"'content': '([^']+)'"
                # hint_code_match = re.search(hint_code_regex, str(result))

                # # Check if a match was found and get the hint code
                # if hint_code_match:
                #     hint_code = hint_code_match.group(1)
                #     hint_code = hint_code.replace(r'\n', '\n')
                #     print(hint_code)
                
                pseudo_code_json = self.write(json.dumps(pseudo_code_json))
                self.content.store_pseudo_code(pseudo_code_json, exercise_id, course_id, assignment_id)
            else:
                print("pseudo code is in the database")
                
        except Exception as inst:
            self.set_status(500)
            self.finish({"error": "Failed to fetch pseudo code."})

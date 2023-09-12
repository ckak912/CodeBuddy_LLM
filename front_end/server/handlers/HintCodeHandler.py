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

                # get the static step process file 
                step_process = self.get_body_argument("step_process")

                # get the pseudo code from the database
                pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)

                model_prompt = '''
                Given the current state of the user code, and the full solution rubric provided , generate the next line of code that will help a student on the current step
                '''

                full_solution = '''
                # Step 1: Define the calculate_average_grade function
                def calculate_average_grade(grades):
                # Step 2: Calculate the sum of grades using a loop
                total = 0
                for grade in grades:
                    total += grade

                # Step 2 (continued): Calculate the average by dividing the sum by the number of grades
                average = total / len(grades)

                # Return the average grade
                return average

                # Step 3: Define the provide_feedback function
                def provide_feedback(average_grade):

                # Step 4: Use conditional statements to provide feedback based on the average grade
                if average_grade < 40:
                    print("You need to improve your performance.")
                elif average_grade >= 40 and average_grade <= 70:
                    print("Your performance is satisfactory.")
                else:
                    print("You have excelled in your studies.")

                # Step 5: Implement the main program
                def main():

                # Step 5: Prompt the user to enter the number of subjects
                num_subjects = int(input("Enter the number of subjects: "))

                # Step 6: Create an empty array to hold the grades
                grades = []

                # Step 7: Prompt the user to enter the grades for each subject and add them to the array
                for i in range(num_subjects):
                    while True:
                        try:
                            grade = int(input("Enter the grade for subject {}: ".format(i+1)))
                            break
                        except ValueError:
                            print("Invalid input. Please enter a valid grade.")

                    grades.append(grade)

                # Step 8: Call the calculate_average_grade function with the grades as input
                average_grade = calculate_average_grade(grades)

                # Step 9: Call the provide_feedback function with the average grade as input
                provide_feedback(average_grade)

                # Step 10: Test the program
                main()
                '''
                
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': 'Student Code (what you will provide the next line hint for): \n' + user_code + '\n' + 'Rubric Solution (used to know what the next line should be): \n' + full_solution + '\n' + model_prompt}
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

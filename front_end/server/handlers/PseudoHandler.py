import json
import os

import requests
from BaseUserHandler import *


class PseudoHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        try:
            pseudo_code = self.content.retrieve_pseudo_code(exercise_id, course_id, assignment_id)
            if not pseudo_code:
                print("hello this is the pseudo code handler")

                secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
                OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

                API_URL = 'https://api.openai.com/v1/chat/completions'

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
                model_prompt = '''
                You have been given the role of a lecture that provides pseudo code that helps students complete the step
                they're currently stuck on. It is important that the response you give isn't in python syntax, only natural language explanation.
                The current state of the user code is provided below along with the rubric. Ensure that you use the user code provided to understand what step the student is stuck on.
                From there you can use the provided step process details to generate some pseudo code to help them complete that current step. The pseudo code should be concise to ensure it can be displayed nicely within UI'''
                # get the user's current code implementation
                user_code = self.get_body_argument("user_code").replace("\r", "")

                print("This is user code within the handler: ",user_code)

                # get the static step process file 
                step_process = self.get_body_argument("step_process")

                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': model_prompt + '\nUser Code:\n' + user_code + '\n' + 'Step Process: \n' + step_process}
                       ],
                    'temperature': 0.7,
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                pseudo_code = result['choices'][0]['message']['content']

                pseudo_json = self.write(json.dumps(pseudo_code))
                # You can store the assistant's reply in the database or perform any other desired action here
                self.content.store_pseudo_code(pseudo_json, exercise_id, course_id, assignment_id)
            else:
                print("pseudo code is in the database")

        except Exception as inst:
            print("Pseudo Handler Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch pseudo code."})

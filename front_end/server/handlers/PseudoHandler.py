from BaseUserHandler import *
import json
import requests
import os

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
                Given the current state of the user code, and the step by step process provided, USE ONLY PSEUDO CODE to show how to complete the next step'''
                # get the user's current code implementation
                user_code = self.get_body_argument("user_code").replace("\r", "")

                # get the static step process file 
                step_process = self.get_body_argument("step_process")

                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': user_code},
                        {'role': 'assistant', 'content': step_process },
                        {'role': 'user', 'content': model_prompt},
                        {'role': 'user', 'content': pseudo_code}                     ],
                    'temperature': 0.7,
                    'max_tokens': 150  # Adjust the max tokens as needed
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                # Check if the 'choices' key exists in the response
                if 'choices' in result:
                    # Get the first choice (index 0) from the 'choices' list
                    first_choice = result['choices'][0]

                    # Check if the 'message' key exists in the first choice
                    if 'message' in first_choice:
                        message = first_choice['message']

                        # Check if the 'content' key exists in the message
                        if 'content' in message:
                            pseudo_code = message['content']

                if pseudo_code:
                    pseudo_code = pseudo_code.replace(r'\n', '\n')
                    print("this is the pseudo code:\n", pseudo_code)

                pseudo_json = self.write(json.dumps(pseudo_code))
                # You can store the assistant's reply in the database or perform any other desired action here
                self.content.store_pseudo_code(pseudo_json, exercise_id, course_id, assignment_id)
            else:
                print("pseudo code is in the database")

        except Exception as inst:
            print("Pseudo Handler Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch pseudo code."})

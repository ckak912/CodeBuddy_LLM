from BaseUserHandler import *
import json
import requests
import os

class FeedbackHandler(BaseUserHandler):
    async def post(self, exercise_id, course_id, assignment_id):
        try:
            exercise_feedback = self.content.retrieve_llm_feedback(exercise_id, course_id, assignment_id)
            if not exercise_feedback:
                print("hello this is the feedback handler")


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
                You have been given the role of a educator providing feedback to students. You have been given the model solution that has a complete implementation of this exercise. This solution contains comments (e.g. "Step 1: Define the average_grade_calculator function") that preceed the code required to satisfy that step. 
                Use this model solution as a guideline to help you provide feedback on the student code.

                Structure your response as follows:

                JSON Format:

                "Step n Feedback":"feedback", for each step n

                - If the student code has equivalent functionality to the corresponding code within the model solution , for feedback simply write "You have completed step n".
                        
                - If the student code doesn't have equivalent functionality to the corresponding code within the model solution, explain what is missing using purely natural language.

                - Ensure that you provide feedback for the student code against each step of the model solution, even if there isn't relevant code to compare.
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

                # Assuming 'result' is the API response
                feedback = None

                # Check if the 'choices' key exists in the response
                if 'choices' in result:
                    # Get the first choice (index 0) from the 'choices' list
                    first_choice = result['choices'][0]

                    # Check if the 'message' key exists in the first choice
                    if 'message' in first_choice:
                        message = first_choice['message']

                        # Check if the 'content' key exists in the message
                        if 'content' in message:
                            feedback = message['content']

                if feedback:
                    feedback = feedback.replace(r'\n', '\n')
                    print("this is the exercise_feedback:", feedback)

                feedback_json = self.write(json.dumps(feedback))
                # You can store the assistant's reply in the database or perform any other desired action here
                self.content.store_llm_feedback(feedback, exercise_id, course_id, assignment_id)
            else:
                print("exercise feedback is in the database")

        except Exception as inst:
            print("Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch exercise feedback."})

from BaseUserHandler import *
import json
import requests

class FeedbackHandler(BaseUserHandler):
    async def get(self, exercise_id, course_id, assignment_id):
        try:
            # Print the IDs before calling the content methods
            print("Exercise ID:", exercise_id)
            print("Course ID:", course_id)
            print("Assignment ID:", assignment_id)

            # # get exercise, course and assignment IDs
            # exercise_basics = await self.content.get_exercise_basics(course_id, assignment_id, exercise_id)
            # exercise_id = exercise_basics["exercise_id"]
            # course_id = exercise_basics["course_id"]
            # assignment_id = exercise_basics["assignment_id"]

            exercise_feedback = await self.content.retrieve_llm_feedback(exercise_id, course_id, assignment_id)
            
            if not exercise_feedback:
                print("xoxo")
                # exercise_feedback = await self.content.retrieve_llm_feedback(exercise_id, course_id, assignment_id)
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

                user_code = '''
                def calculate_average_grade(grades):
                    sum = 0
                    for grade in grades:
                        sum += grade
                    return sum/len(grades) 
                '''
                
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': f'Bearer {OPEN_AI_API_KEY}'
                }

                data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {'role': 'user', 'content': user_code},
                        {'role': 'assistant', 'content': full_solution},
                        {'role': 'user', 'content': model_prompt}
                    ],
                    'temperature': 0.7,
                    'max_tokens': 150  # Adjust the max tokens as needed
                }

                response = requests.post(API_URL, headers=headers, json=data)
                result = response.json()

                # print(result)
                # Extract step numbers and content using regex
                regex = r'"Step (\d+) Feedback": "([^"]+)"'
                steps = {}
                for match in re.finditer(regex, result['choices'][0]['message']['content']):
                    step_number = match.group(1)
                    step_content = match.group(2)
                    steps[step_number] = step_content.strip()

                # Serialize the obtained steps into JSON format
                exercise_feedback_json = json.dumps(steps)
                # You can store the assistant's reply in the database or perform any other desired action here
                exercise_feedback_json = await self.content.store_llm_feedback(exercise_feedback_json, exercise_id, course_id, assignment_id)
            else:
                print("exercise feedback is in the database")

        except Exception as inst:
            print("Exception:", inst)
            self.set_status(500)
            self.finish({"error": "Failed to fetch exercise feedback."})

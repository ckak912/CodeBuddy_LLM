from BaseUserHandler import *
import json
import requests

class HelpMeHandler(BaseUserHandler):
    async def get(self):
        print("hello world")
        try:
            # exercise_feedback = await self.content.retrieve_llm_feedback(exercise_id, course_id, assignment_id)
            secrets_dict = load_yaml_dict(read_file("secrets/front_end.yaml"))
            OPEN_AI_API_KEY = secrets_dict["openAI_api_key"]

            API_URL = 'https://api.openai.com/v1/chat/completions'

            user_code = '''
            def calculate_average_grade(grades):`
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

            next_step = '''
            Loop through the grades array:
            - For each grade in grades:
            - Add the grade to the sum variable

            Calculate the average grade:
            - Divide the sum by the length of the grades array

            Return the average grade
            '''

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
                    {'role': 'assistant', 'content': step_process },
                    {'role': 'user', 'content': model_prompt},
                    {'role': 'user', 'content': next_step}
                ],
                'temperature': 0.7,
                'max_tokens': 150  # Adjust the max tokens as needed
            }

            response = requests.post(API_URL, headers=headers, json=data)
            result = response.json()

            print(result)
            # # print(result)
            # # Extract step numbers and content using regex
            # regex = r'"Step (\d+) Feedback": "([^"]+)"'
            # steps = {}
            # for match in re.finditer(regex, result['choices'][0]['message']['content']):
            #     step_number = match.group(1)
            #     step_content = match.group(2)
            #     steps[step_number] = step_content.strip()

            # # Serialize the obtained steps into JSON format
            # exercise_feedback_json = json.dumps(steps)
            # # You can store the assistant's reply in the database or perform any other desired action here

            # print(exercise_feedback_json)

        except Exception as inst:
            self.set_status(500)
            self.finish({"error": "Failed to fetch exercise feedback."})

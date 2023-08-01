from BaseUserHandler import *

class ExerciseStepsHandler(BaseUserHandler):
    async def get(self, exercise_id):
        try:
            # Fetch exercise steps from the database
            exercise_steps = await self.get_exercise_steps(exercise_id)

            print(exercise_steps)
            OPENAI_API_KEY = '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'
            API_URL = 'https://api.openai.com/v1/chat/completions'
            model_role = 'Your role is that of a lecturer for an introductory programming course for 1st year university students. You never give out complete answers, you only provide hints.'
            model_task_description = '''
            Here's a task description that incorporates the concepts of arrays, data structures, conditional statements, and loops using functions and user input:

            Task: Student Grade Calculator

            Description:
            You are tasked with creating a program that calculates the average grade of a student based on their individual subject grades. The program should take inputs from the user, calculate the average grade, and provide feedback based on the average grade obtained.

            Requirements:

            Implement a function called calculate_average_grade that takes an array of subject grades as input.
            The grades are represented as integers ranging from 0 to 100.
            The function should calculate and return the average grade.
            Implement a function called provide_feedback that takes the average grade as input.
            Based on the average grade, the function should provide feedback according to the following criteria:
            If the average grade is below 40, print "You need to improve your performance."
            If the average grade is between 40 and 70 (both inclusive), print "Your performance is satisfactory."
            If the average grade is above 70, print "You have excelled in your studies."
            Implement a main program that prompts the user to enter the number of subjects they have grades for.
            Based on the number of subjects, the program should prompt the user to enter the grades for each subject.
            The program should call the calculate_average_grade function with the grades as input and store the result.
            Finally, the program should call the provide_feedback function with the average grade as input and display the feedback to the user.

            Your task is to implement the required functions and main program to achieve the above functionality. Ensure that the program handles invalid inputs gracefully and provides appropriate error messages.
            '''

            model_prompt = '''
            As a lecturer, your task is to devise a step by step process for your students that encapsulates the above description. 
            The steps should be in chronological order with an efficient way to complete the task. Ensure that the sub-steps are in concise paragraphs rather than bullet points. Each step is numbered (e.g. 1. , 2. , 3.)
            '''

            # Append the retrieved exercise steps to the prompt
            model_prompt = f'''
            {model_role}

            {model_task_description}

            {exercise_steps}

            {model_prompt}
            '''

            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {OPENAI_API_KEY}'
            }

            data = {
                'model': 'gpt-3.5-turbo',
                'messages': [{'role': 'user', 'content': f'{model_role}\n\n{model_task_description}\n\n{model_prompt}'}],
                'temperature': 0.7
            }

            session = requests.Session()
            response = session.post(API_URL, headers=headers, json=data)
            result = response.json()

            # Extract step numbers and content using regex
            regex = r'(?:^|\n)(\d+)\.\s+(.*)'
            steps = {}
            for match in re.finditer(regex, result['choices'][0]['message']['content']):
                step_number = match.group(1)
                step_content = match.group(2)
                steps[step_number] = step_content.strip()

            self.write(steps)

        except Exception as inst:
            self.set_status(500)
            self.finish({"error": "Failed to fetch exercise steps."})

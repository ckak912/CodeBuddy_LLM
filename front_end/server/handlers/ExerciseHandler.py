from BaseUserHandler import *
from datetime import datetime, timedelta
import json
import requests

class ExerciseHandler(BaseUserHandler):
    entrypoint = 'exercise'

    async def generate_dropdown_items(self):
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

        # Convert the steps object to JSON
        steps_json = json.dumps(steps, indent=2)

        return steps_json


    async def get(self, course_id, assignment_id, exercise_id):
        try:
            show = self.is_administrator or await self.is_instructor_for_course(course_id) or await self.is_assistant_for_course(course_id)
            course_basics = await self.get_course_basics(course_id)
            course_details = await self.get_course_details(course_id)

            # steps = await self.generate_dropdown_items()

            assignments = await self.get_assignments(course_basics)
            assignment_basics = await self.get_assignment_basics(course_basics, assignment_id)
            assignment_details = await self.get_assignment_details(course_basics, assignment_id)

            if not await self.check_whether_should_show_exercise(course_id, assignment_id, assignment_details, assignments, self.courses, assignment_basics, course_basics):
                return

            exercise_basics = await self.get_exercise_basics(course_basics, assignment_basics, exercise_id)
            exercise_details = await self.get_exercise_details(course_basics, assignment_basics, exercise_id)
            exercise_statuses = self.content.get_exercise_statuses(course_id, assignment_id, self.get_current_user(), current_exercise_id=exercise_id, show_hidden=show)

            back_end_config = get_back_end_config(exercise_details["back_end"])

            next_prev_exercises = self.content.get_next_prev_exercises(course_id, assignment_id, exercise_id, exercise_statuses)

            partner_info = await self.get_partner_info(course_id, True)
            user_list = list(partner_info.keys())

            start_time = None
            if assignment_details["has_timer"]:
                start_time = self.content.get_user_assignment_start_time(course_id, assignment_id, self.get_current_user())

            tests = exercise_details["tests"]
            presubmission, submissions = self.content.get_submissions(course_id, assignment_id, exercise_id, self.get_current_user(), exercise_details)

            mode = self.get_query_argument("mode", default=None)

            studio_mode = self.user_info["use_studio_mode"]
            if mode == "studio":
                studio_mode = True
            elif mode == "classic":
                studio_mode = False

            format_exercise_details(exercise_details, course_id, assignment_id, self.user_info, self.content, next_prev_exercises, format_tests=True)

            steps_json = await self.generate_dropdown_items()

            args = {
                "users": user_list,
                "courses": self.courses,
                "assignments": assignments,
                "course_basics": course_basics,
                "assignment_basics": assignment_basics,
                "assignment_details": assignment_details,
                "exercise_basics": exercise_basics,
                "exercise_details": exercise_details,
                "tests": tests,
                "presubmission": presubmission,
                "submissions": submissions,
                "exercise_statuses": exercise_statuses,
                "next_exercise": next_prev_exercises["next"],
                "prev_exercise": next_prev_exercises["previous"],
                "code_completion_path": back_end_config["code_completion_path"],
                "back_end_description": back_end_config["description"],
                "domain": self.settings_dict['domain'],
                "start_time": start_time,
                "user_info": self.user_info,
                "user_id": self.get_current_user(),
                "is_administrator": self.is_administrator,
                "is_instructor": await self.is_instructor_for_course(course_id),
                "is_assistant": await self.is_assistant_for_course(course_id),
                "check_for_restrict_other_assignments": course_details["check_for_restrict_other_assignments"],
                "help_request": None,
                "same_suggestion": None,
                "steps": steps_json,
            }

            if studio_mode:
                exercise_details['show_instructor_solution'] = bool(
                    exercise_details['show_instructor_solution'] and (exercise_details['solution_code'] != "" or exercise_details['solution_description'] != ""))
                del exercise_details['solution_code']
                del exercise_details['solution_description']

                args['exercise_details'] = exercise_details
                self.render("spa.html", template_variables=args, **args)
            else:
                self.render("exercise.html", **args)
        except Exception as inst:
            render_error(self, traceback.format_exc())

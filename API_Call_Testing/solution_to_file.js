const OPENAI_API_KEY = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';
/* const model_role = 'Your role is that of a lecturer for an introductory programming course for 1st year university students. You never give out complete answers, you only provide hints.'

const model_task_description = `Here's a task description that incorporates the concepts of arrays, data structures, conditional statements, and loops using functions and user input:

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

Your task is to implement the required functions and main program to achieve the above functionality. Ensure that the program handles invalid inputs gracefully and provides appropriate error messages.`;


const model_prompt = `As a lecturer, your task is to devise a step by step process for your students that encapsulates the above description. 
The steps should be in chronological order with an efficient way to complete the task. Ensure that the sub-steps are in concise paragraphs rather than bullet points. Each step is numbered (e.g. 1. , 2. , 3.)` */

const stepProcessGen = `{
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
}`

const model_prompt =`Given the above step process, write a full solution in python that implements all the steps above. The response I am expecting from you is the full code (in one code editor) with each step broken down using code comments`

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`
};
const fs = require('fs');

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: stepProcessGen + '\n\n' + model_prompt}],
  temperature: 0.7
};

fetch(apiUrl, {
  method: 'POST',
  headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    // Assuming the API response is stored in 'response' variable
    const apiResponse = result.choices[0].message.content;

    // Specify the file path and name where the response will be saved
    const filePath = 'response_grades.txt';

    // Write the response to the file
    fs.writeFile(filePath, apiResponse, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Response has been saved to', filePath);
    });
  })
  .catch(error => {
    console.error(error);
    // Handle any errors here
  });




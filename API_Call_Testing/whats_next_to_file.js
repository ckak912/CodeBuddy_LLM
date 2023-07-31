const OPENAI_API_KEY = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';


const userCode = `
def calculate_average_grade(grades):
    sum = 0`

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

const model_prompt =`Given the current state of the user code, and the step process provide, use pseudo code to show how to complete the current step`

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`
};
const fs = require('fs');

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: stepProcessGen + '\n\n' + userCode + '\n\n' + model_prompt}],
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
    const filePath = 'response_next_step.txt';

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




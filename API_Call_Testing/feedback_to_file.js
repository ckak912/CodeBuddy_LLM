const OPENAI_API_KEY = '';
const apiUrl = 'https://api.openai.com/v1/chat/completions';


const fullSolution = `
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
main()`; 

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
}`;



const model_prompt =`You have been given the role of a educator providing feedback to students. You have been given the model solution that has a complete implementation of this exercise. This solution contains comments (e.g. "Step 1: Define the average_grade_calculator function") that preceed the code required to satisfy that step. 
Use this model solution as a guideline to help you provide feedback on the student code.

Structure your response as follows:

JSON Format:

"Step n Feedback":"feedback", for each step n

- If the student code has equivalent functionality to the corresponding code within the model solution , for feedback simply write "You have completed step n".
          
- If the student code doesn't have equivalent functionality to the corresponding code within the model solution, explain what is missing using purely natural language.

- Ensure that you provide feedback for the student code against each step of the model solution, even if there isn't relevant code to compare.

`

var userCode = `
def calculate_average_grade(grades):
    sum = 0
    for grade in grades:
        sum += grade
    return sum/len(grades)
`;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`
};
const fs = require('fs');

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Model Solution (the rubric):' + fullSolution  + '\n\n' + model_prompt +  '\n\n' + 'Student Code (this is what you provide feedback for):' + userCode }],
  temperature: 0.8
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
    const filePath = 'response_feedback.txt';

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




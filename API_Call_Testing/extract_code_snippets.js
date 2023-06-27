const fs = require('fs');

// Specify the file path and name
const filePath = 'response_grades.txt';

// Read the file contents
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Split the data into individual steps
  const steps = data.split('\n');

  // Create an empty object to store the steps
  const stepsObject = {};

  // Process each step
  let currentStep = '';
  steps.forEach((line) => {
    if (line.startsWith('# Step')) {
      // New step found, save the previous step if any
      if (currentStep) {
        const [step, code] = currentStep.split('\n');
        const stepNumber = step.match(/Step (\d+):/)[1];
        stepsObject[`Step ${stepNumber}`] = code.trim();
      }
      // Start a new step
      currentStep = line;
    } else {
      // Continue current step
      currentStep += '\n' + line;
    }
  });

  // Save the last step
  if (currentStep) {
    const [step, code] = currentStep.split('\n');
    const stepNumber = step.match(/Step (\d+):/)[1];
    stepsObject[`Step ${stepNumber}`] = code ? code.trim() : '';
  }

  // Output the steps object
  console.log(stepsObject);
});

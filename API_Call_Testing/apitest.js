const OPENAI_API_KEY = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const model_prompt = `Task: Online Shopping Cart

Description:
You are tasked with creating an online shopping cart system that allows users to browse products, add items to their cart, view the cart contents, and calculate the total price of the items in the cart. The program should provide a user-friendly interface for managing the shopping experience.

Requirements:

Product Management:

Implement a class called "Product" that represents a product in the online store. Each product should have the following attributes:
Name: The name of the product (a string).
Price: The price of the product (a floating-point number).
Quantity: The available quantity of the product (an integer).
Shopping Cart Management:

Create a class called "ShoppingCart" that represents a user's shopping cart. The shopping cart should have the following attributes:

Items: A list to store the products added to the cart.
Implement the following methods in the "ShoppingCart" class:

add_to_cart(product): Adds the given product to the cart.
remove_from_cart(product): Removes the given product from the cart.
view_cart(): Displays the contents of the cart, including product names, prices, and quantities.
calculate_total_price(): Calculates and returns the total price of all items in the cart.
User Interface:

Write a program that utilizes the "Product" and "ShoppingCart" classes to create an online shopping experience. The program should provide the following functionality:
Display a list of available products for the user to browse.
Prompt the user to add products to their shopping cart by entering the product's name and quantity.
Allow the user to view the contents of their cart, including the names, prices, and quantities of the products.
Calculate and display the total price of the items in the cart.
Provide an option for the user to remove items from the cart if desired.
Note:

Ensure that the program validates user inputs, such as checking for valid product names and quantities.
You can implement additional methods or functionalities as per your requirements.
Consider incorporating error handling and user-friendly prompts to enhance the user experience.
This task challenges students to apply their understanding of OOP principles, arrays, and user interaction to create an online shopping cart system. By designing classes for products and the shopping cart, students can practice managing data, performing calculations, and displaying information. The task encourages students to think about user experience and implement an intuitive interface for seamless online shopping.

given this task description, you, the lecturer has devise a step by step process that will help a novice programmer complete the task. This step by step process is concise and only has numbered steps and paragraphs (no bullet points)`;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`
};

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: model_prompt }],
  temperature: 0.7
};

fetch(apiUrl, {
  method: 'POST',
  headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    // Handle the API response here
    const regex = /(\d+)\.\s(.*?)\s?:\s(.*)/g;
    const dropdownItems = {};

    let match;
    while ((match = regex.exec(result.choices[0].message.content)) !== null) {
    const stepNumber = match[1];
    const stepDescription = match[3];
    dropdownItems[stepNumber] = stepDescription;
    }

    console.log(JSON.stringify({ dropdownItems }, null, 2));
  })
  .catch(error => {
    console.error(error);
    // Handle any errors here
  });




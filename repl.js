// Parses an input string and evaluates the corresponding arithmetic expression.
function parseExpression(input) {
  // Tokenize the input into numbers and operators using a regular expression.
  const tokens = input.match(/(\d+|[+\-*/%^!])/g); 
  if (!tokens) throw new Error("Invalid input"); // Throw error if input is not valid.

  // Handle factorial case, which consists of a single number followed by "!".
  if (tokens.length === 2 && tokens[1] === "!") {
      return factorial(tokens[0]); // Calculate the factorial of the number.
  } 
  // Handle binary operations like addition, subtraction, etc.
  else if (tokens.length === 3) {
      const [num1, operator, num2] = tokens; // Extract operands and operator.
      switch (operator) {
          case '+': return add(num1, num2); // Perform addition.
          case '-': return subtract(num1, num2); // Perform subtraction.
          case '*': return multiply(num1, num2); // Perform multiplication.
          case '/': return divide(num1, num2); // Perform division.
          case '%': return modulo(num1, num2); // Perform modulo operation.
          case '^': return exponentiate(num1, num2); // Perform exponentiation.
          default: throw new Error(`Unsupported operator: ${operator}`); // Handle invalid operator.
      }
  } 
  // Throw an error if the expression doesn't match expected formats.
  else {
      throw new Error("Invalid expression");
  }
}

// Evaluates a given input string and returns the result or an error message.
function evalExpression(input) {
  try {
      return parseExpression(input.trim()); // Parse and evaluate the trimmed input.
  } catch (err) {
      return `Error: ${err.message}`; // Catch and return any errors as a readable message.
  }
}

// Implements a REPL (Read-Eval-Print Loop) for the calculator.
function repl() {
  console.log("Arbitrary-Precision Integer Calculator"); // Introductory message.
  console.log("Type 'exit' to quit."); // Instructions for exiting the REPL.

  // Set up a readline interface for user input and output.
  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  // Define a prompt to interact with the user repeatedly.
  const prompt = () => rl.question(">>> ", (input) => {
      if (input.toLowerCase() === "exit") return rl.close(); // Close REPL on "exit".
      console.log(evalExpression(input)); // Evaluate and print the result of the user's input.
      prompt(); // Recursively call prompt to continue interaction.
  });

  prompt(); // Start the REPL prompt.
}

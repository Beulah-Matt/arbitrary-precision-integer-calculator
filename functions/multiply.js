/**
 * Multiplies two large numbers represented as strings and returns the result as a string.
 * This function handles arbitrary precision by simulating manual multiplication.
 * 
 * @param {string} a - The first number, represented as a string.
 * @param {string} b - The second number, represented as a string.
 * @returns {string} - The product of the two numbers, represented as a string.
 * 
 * Initialize an array result with zeros, of size (length of a + length of b)
 * Reverse the strings a and b
 * Convert the characters to integers
 * Compute the product of the two digits
 * Add the product to the corresponding position in result, considering carry
 * Update the position with the last digit of the sum
 * Carry over the remainder to the next position in result
 */

// Multiplication: Handles arbitrary precision
function multiply(a, b) {
  const result = Array(a.length + b.length).fill(0); // Initialize result array
  a = a.split('').reverse(); // Reverse the first number
  b = b.split('').reverse(); // Reverse the second number

  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
          const product = parseInt(a[i], 10) * parseInt(b[j], 10); // Multiply digits
          const sum = product + result[i + j]; // Add current product to the existing value at the position

          result[i + j] = sum % 10; // Store the last digit at the current position
          result[i + j + 1] += Math.floor(sum / 10); // Carry over the remaining part
      }
  }

  while (result.length > 1 && result[result.length - 1] === 0) result.pop(); // Remove trailing zeros

  return result.reverse().join(''); // Reverse and join the result array into a string
}

module.exports = multiply;
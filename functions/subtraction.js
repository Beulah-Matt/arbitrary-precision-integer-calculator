/**
 * 
 * @param {*} a the first string representing an arbitrary int
 * @param {*} b the second string representing an arbitrary int
 * @returns a string with the difference between the two numbers
 * 
 *  Handle Special Case: If the two numbers are equal, return 0 immediately.
 *  Check if the result will be negative (a < b); if so, swap a and b and set a negative flag.
 *  Reverse both strings for easier subtraction from least to most significant digit.
 *  Loop through each digit position.
 *  If a's digit is smaller than b's digit, borrow from the next higher place value.
 *  Append the result of the subtraction to the result array.
 *  Reverse the result array, add the negative sign if applicable, and return the result.
 */

// Subtraction function for arbitrary-precision integers
function subtract(a, b) {
  // Quick exit if the numbers are equal, result is zero
  if (a === b) return '0'; 

  // Initialize borrow and result array
  let borrow = 0, 
  result = []; 
  
  const isNegative = a < b; // Determine if the result will be negative
  if (isNegative) [a, b] = [b, a]; // Swap a and b if a < b to simplify subtraction

  // Reverse both numbers for easier digit-by-digit subtraction
  a = a.split('').reverse();
  b = b.split('').reverse();

  // Loop through each digit of the larger number (a)
  for (let i = 0; i < a.length; i++) {
      // Get the current digit of both numbers
      const digitA = parseInt(a[i], 10);
      const digitB = parseInt(b[i] || '0', 10) + borrow; // Add borrow to b's digit

      if (digitA < digitB) {
          // If a's digit is smaller, borrow from the next digit
          result.push(digitA + 10 - digitB); // Perform the subtraction with borrowing
          borrow = 1; // Set borrow for the next iteration
      } else {
          // No borrowing needed
          result.push(digitA - digitB); // Subtract normally
          borrow = 0; // Reset borrow
      }
  }

  // Remove trailing zeros from the result array
  while (result[result.length - 1] === 0) result.pop();

  // Reverse the result and add a negative sign if needed
  return (isNegative ? '-' : '') + result.reverse().join('');
}
module.exports = subtract;
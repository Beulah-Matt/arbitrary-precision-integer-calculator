/**
 * 
 * @param {*} a the first string representing an arbitrary int
 * @param {*} b the second string representing an arbitrary int
 * @returns the sum of the digits in the two strings.
 * 
 * Reverse both input strings (representing large integers) for easier addition from least significant to most significant digit.
 * Initialize a carry variable to store the carry-over during addition.
 * Determine the maximum length of the two numbers. This is so as to loop over every available digit.
 * Convert the current digit from both numbers (defaulting to 0 if one number is shorter).
 * Add the digits together along with the carry
 * Append any remaining carry to the result
 * Reverse the result and convert it back to a string for output.
 */


/** Addition function for arbitrary-precision integers */
function add(a, b) {
  // Initialize carry and result array
  let carry = 0, result = [];

  // Reverse both input strings for easier digit-by-digit addition
  a = a.split('').reverse(); 
  b = b.split('').reverse();

  // Find the maximum length of the two numbers
  const maxLength = Math.max(a.length, b.length);

  // Loop through each digit position
  for (let i = 0; i < maxLength; i++) {
      // Get the current digit for both numbers (default to 0 if out of bounds)
      const digitA = parseInt(a[i] || '0', 10);
      const digitB = parseInt(b[i] || '0', 10);

      // Add the digits along with the carry
      const sum = digitA + digitB + carry;

      // Append the last digit of the sum to the result array
      result.push(sum % 10);

      // Update carry for the next digit
      carry = Math.floor(sum / 10);
  }

  // If there is a carry left after the loop, add it to the result
  if (carry) result.push(carry);

  // Reverse the result array and join it into a string for final output
  return result.reverse().join('');
}

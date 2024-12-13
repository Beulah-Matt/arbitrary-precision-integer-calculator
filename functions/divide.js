// Division: Handles arbitrary precision (integer division only)
function divide(a, b) {
  if (b === '0') throw new Error('Division by zero'); // Handle division by zero

  let quotient = '', remainder = ''; // Initialize quotient and remainder
  for (let i = 0; i < a.length; i++) {
      remainder += a[i]; // Append the current digit to the remainder
      let divisor = 0;

      while (compare(remainder, b) >= 0) { // Subtract divisor until remainder < divisor
          remainder = subtract(remainder, b);
          divisor++;
      }

      quotient += divisor; // Append the divisor count to the quotient
  }

  return quotient.replace(/^0+/, '') || '0'; // Remove leading zeros and handle zero quotient
}

// Helper function to compare two numbers as strings
function compare(a, b) {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');

  if (a.length !== b.length) return a.length - b.length;
  return a.localeCompare(b);
}

// Helper function to subtract two numbers as strings
function subtract(a, b) {
  let borrow = 0, result = [];
  a = a.split('').reverse();
  b = b.split('').reverse();

  for (let i = 0; i < a.length; i++) {
      const digitA = parseInt(a[i], 10);
      const digitB = parseInt(b[i] || '0', 10) + borrow;
      if (digitA < digitB) {
          result.push(digitA + 10 - digitB);
          borrow = 1;
      } else {
          result.push(digitA - digitB);
          borrow = 0;
      }
  }

  while (result.length > 1 && result[result.length - 1] === 0) result.pop();
  return result.reverse().join('');
}
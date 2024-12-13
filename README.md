# Arbitrary Precision Integer Calculator

This program builds a calculator that performs arithmetic operations on integers of any size or number of digits, beyond the limits of standard data types in most programming languages.

This means wsimulating how a computer performs arithmetic operations on numbers using only basic data types (like strings and arrays).

To solve the arbitrary precision problem in Javascript, the limitations of Standard Number types in JavaScript is that it can't handle very large integers accurately. I chose to design operations to handle numbers of any size by processing them as strings since The language specification requires strings to have a maximum length of 253 - 1 elements. This is also the length of a precision integer.

## Solution Design
 - Store numbers as strings eg ("987654345678675435675") to bypass JavaScript's numerical limitations.
 - Process digits individually to simulate arithmetic operations.
 - Handle arbitrarily large integers without native support or libraries.
 - Use basic math methods for addition, subtraction, and multiplication.
 - For division and modulo, implement long division. 
 - Use repeated squaring for efficient exponentiation.

## Installation
My folder structure is as follows: 
  project/
  │
  ├── functions/
  │   ├── addition.js          # Addition logic
  │   ├── subtraction.js     # Subtraction logic
  │   ├── multiply.js     # Multiplication logic
  │   ├── divide.js       # Division logic
  │
  ├── repl.js              # REPL implementation
  ├── README.md            # Documentation

To run  the project: 
- Node.js (version 14 or higher): Ensure that Node.js is installed on your machine.
- Clone the repo: git clone https://github.com/Beulah-Matt/arbitrary-precision-integer-calculator
- Navigate into the project directory: cd arbitrary-precision-integer-calculator
- Start the repl by running: node repl.js
- Test addition, subtraction, multiplication and division. 
- To exit, press ctrl + C

```
  I have not implemented exponential, factorial and modulo at this time. 
```  
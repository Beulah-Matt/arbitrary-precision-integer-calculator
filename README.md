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
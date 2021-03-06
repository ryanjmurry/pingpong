# Ping Pong Calculator

#### Array and Looping Exercise for Epicodus, 03.12.2018

#### By Ryan Murry

## Description

Create a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

* Numbers divisible by a chosen number are replaced with "ping"
* Numbers divisible by a second chosen number are replaced with "pong"
* Numbers divisible by the product of the two numbers are replaced with "pingpong"

## Specifications
* It can count up to the provided number.
  * Example Input: 10
  * Example Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


* It can return "ping" if a number in the list is divisible by a primary chosen value.
* It can return "pong" if a number in the list is divisible by a secondary chosen value.
* It can return "ping and pong" if a number in the list is divisible by both values.
* It can return "pingpong" if a number in the list is divisible by the product of the two chosen values.
  * Example Input: 2
  * Example Input: 4
  * Example Output: [1, "ping", 3, "ping and pong", 5, "ping", 7, "pingpong", 9, "ping"]

## Setup/Installation Requirements

1. Clone this repository
2. Open the file _index.html_ in your preferred browser

## Known Bugs

* None at this time.

## Support and contact details

Email me at <mailto:ryanjmurry@gmail.com>

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

### License

MIT License

Copyright (c) [2018] [Ryan J. Murry]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

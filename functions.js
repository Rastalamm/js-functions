/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

var numberToString = function(number){
  return number.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var increase = function(number){
  return number + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

var decrease = function(number){
  return number - 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

var add = function(x,y){
  return x + y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

var subtract = function(x, y){
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

var multiply = function(x, y){
  return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

var divide = function(x, y){
  return x / y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

var square = function(x){
  return x * x;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

var calculate = function(operation, x, y){

  if(operation === "add"){
    total = add(x,y);
    console.log(x + " + " + y + " = " + total);
  }else if (operation === "subtract") {
    total = x - y;
    console.log(x + " - " + y + " = " + total);
  }else if(operation === "multiply"){
    total = x * y;
    console.log(x + " * " + y + " = " + total);
  }else if(operation === "divide"){
    total = x / y;
    console.log(x + " / " + y + " = " + total);
  }
  return total;
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

var isGreaterThan = function(a, b) {
  if(a > b){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

var isLessThan = function(a, b) {
  if(a < b){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

var areEqual = function(a, b) {
  if(a === b){
    return true;
  }else{
    return false;
  }
}


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

var minimum = function(x, y){
  return Math.min(x,y);
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

var maximum = function(x, y){
  return Math.max(x,y);
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

var isEven = function(n){
  if((n % 2) === 0){
    return true;
  }else{
    return false;
  }

}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

var isOdd = function(n){
  if((n % 2) !== 0){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 var letterGrade = function(score, total){
  percent = score/total;
  if(percent >= .9 && percent <= 1){
    return "A";
  }else if(percent >= .8 && percent <= .89){
    return "B";
  }else if(percent >= .7 && percent <= .79){
    return "C";
  }else if(percent >= .6 && percent <= .699){
    return "D";
  }else if (percent <= .59 && percent >= 0){
    return "F";
  }
 }


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

var incrementReviews = function(restaurant){
  if(restaurant.reviews !== undefined){
    restaurant.reviews++;
    return restaurant;
  }else{
    restaurant.reviews = 1;
    return restaurant;
  }
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

var combine = function(word1, word2){
  return word1 + " " + word2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

var createCircle = function(radius){

  circle ={};
  circle.circumference = 2*Math.PI*radius;
  circle.area = Math.PI * (radius * radius);
  return circle;
}
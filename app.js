// Code copied from index.mjs

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

///////////////////////
// Math Problems //////
///////////////////////

// Check if all numbers are divisible by 5. Cache the result in a variable.
const divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(divBy5);

// Check if the first number is larger than the last. Cache the result in a variable.
const lrgrThanLast = (n1 > n4);
console.log(lrgrThanLast);
// Accomplish the following arithmetic chain:
    //Subtract the first number from the second number.
const subFNumLNum = (n2 - n1);
console.log(subFNumLNum);
    //Multiply the result by the third number.
const thirdNumResult = (subFNumLNum * n3);
console.log(thirdNumResult);
    //Find the remainder of dividing the result by the fourth number.
const fourthNum = thirdNumResult / n4;
console.log(fourthNum);
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isOver25redone = (n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);
console.log(isOver25);

////////////////////////////////////
// Problem /////////////////////////
////////////////////////////////////

/*Part 2: Practical Math
Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.*/ 

let distance = 1500;
let mph55 = 30;
let mph60 = 28;
let mph75 = 23;
let budget = 175;
let avgCost = 3;

// for 55mph
let totGallon55 = distance / mph55;
console.log(totGallon55);
let totBudget55 = totGallon55 * avgCost;
console.log(totBudget55);
let isOverBudget55 =  budget >= totBudget55;
console.log(isOverBudget55);
let totTripTime55 = distance / 55;
console.log(totTripTime55);


// for 60mph
let totGallon60 = distance / mph60;
console.log(totGallon60);
let totBudget60 = totGallon60 * avgCost;
console.log(totBudget60);
let isOverBudget60 =  budget >= totBudget60;
console.log(isOverBudget60);
let totTripTime60 = distance / 60;
console.log(totTripTime60);


// for 75mph
let totGallon75 = distance / mph75;
console.log(totGallon75);
let totBudget75 = totGallon75 * avgCost;
console.log(totBudget75);
let isOverBudget75 =  budget >= totBudget75;
console.log(isOverBudget75);
let totTripTime75 = distance / 75;
console.log(totTripTime75);


// This code could be more efficient by using functions for answering totBuget and MPH answers
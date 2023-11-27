// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
console.log("-------sum number---------");
const isSum50 = (n1 + n2 + n3 + n4) == 50;

console.log(isSum50);
console.log("-------two odds---------");
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(isTwoOdd);
console.log("-------over25----------");
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

console.log(isOver25 );
console.log("-------unique----------");
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

console.log(isUnique);
console.log("------valid-----------");
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd &&  isOver25 &&  isUnique;

// Finally, log the results.
console.log(isValid);
console.log("-------divisible by 5----------");

const div5 = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0);
console.log(div5);

console.log("--------larger---------");

console.log(n1 > n4);
console.log("--------arithmetic chain---------");

const num1 = (n2 - n1);
console.log(num1);
const num2 = (num1 * n3);
console.log(num2);
const num3 = (num2 / n4);
console.log(num3);
console.log("--------output---------");

console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)

console.log("--------Practical Math---------");

console.log("--------Rode trip---------");
let cost = 3;
let budget = 175;
let trip = 1500
let mph1 = 55;
let mph2 = 60; 
let mph3 = 70;
let mpg1 = 30;
let mpg2 = 28;
let mpg3 = 23;

total = trip / mpg1
console.log("Total gallons is " + total + " for 30 miles per gallon");
if(budget >= ((trip / mpg1) * 3)){
    console.log("We have enough to pay");
} else{
    console.log("We don't have enough");
}

total = trip / mpg2
console.log("Total gallons is " + total + " for 28 miles per gallon");
if(budget >= ((trip / mpg2) * 3)){
    console.log("We have enough to pay");
} else{
    console.log("We don't have enough");
}

total = trip / mpg3
console.log("Total gallons is " + total + " for 23 miles per gallon");
if(budget >= ((trip / mpg3) * 3)){
    console.log("We have enough to pay");
} else{
    console.log("We don't have enough");
}

hours = trip / mph1
console.log("It would take " + hours + " to reach " + trip + " driving 55mph");

hours = trip / mph2
console.log("It would take " + hours + " to reach " + trip + " driving 60mph");
hours = trip / mph3
console.log("It would take " + hours + " to reach " + trip + " driving 70mph");

console.log("I would say driving 60mph is best, even though it is longer than 70mph but it is more affordable in fuel than drvinging 70 and it not too far from 55mph in fuel");

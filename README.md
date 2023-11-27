Part 1: Math Problems
Math is hard, which is why we have the computer solve the math problems for us. Often in programming, you will need to determine the logic behind an operation, and then tell the computer how to do it. Once you have established that logic, it can be reused. This is how we handle repetitive tasks.
For example, consider the following problem:
We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
How can we verify this? Check out the following CodeSandbox for an example. You can change the values of each of the initial numbers, n1 through n4, to see how the code responds in the console.
Copy the code from the editor into your own file to use as a starting point. Make sure to commit!
Now that we have verified that these numbers meet the criteria outlined, we can continue to use them in other ways, depending on what the program is attempting to accomplish. For our purposes, we are  going to explore other comparisons and operations.
Implement the following:
Check if all numbers are divisible by 5. Cache the result in a variable.
Check if the first number is larger than the last. Cache the result in a variable.
Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
These are all arbitrary problems, but they demonstrate the simplicity of working with arithmetic and comparisons in programming. No matter the complexity of the task in front of you, you will always use these core operators to accomplish it.
Before continuing, go back through your code and add console log statements for each check. Use string concatenation or template literals to format the outputs in a reasonable way.
For example, instead of console.log(isValid), we could write console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) or something similar.
Part 2: Practical Math
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
Log the results of your calculations using string concatenation or template literals.
Part 3: Future Exploration
In all of the problems above, there are two tools that would make it much easier to implement the logic we need and to reuse the code to test with different values:
Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.
Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the code or changing the value of variables in the code itself, like we needed to do above.
We will explore control flow in the next lesson, and functions toward the end of the module. Until then, continue exploring with the variety of operators and data types available in JavaScript!

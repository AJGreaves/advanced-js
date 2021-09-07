/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     // code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b; // if function is simple can put the returned value on the same line.
// But if has more complex logic then the curly braces are needed. 

// For even simpler functions that only take one paramater, you can leave off the first brackets as well
const saySomething = message => console.log(message);
saySomething("Something");

// If you have a function that takes no paramaters at all...

const sayHello = () => console.log('hello');
sayHello();
// Implicit Returns

// Returning Multiple Lines

// When returning multi-line results, such as lines of code, the curly braces are needed

const returnMultipleLines = () => (
`<p>
    This is a multi-line string!
</p>` 
)
console.log(returnMultipleLines());
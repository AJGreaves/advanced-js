// map, execute the same function code to each item in the array
// and create a new array of the returned values (functions)

let nums = [1,2,3,4,5];
const results = nums.map(num => num * 3);
console.log(results);

// filter out specific results (conditionals) and return an array of only the
// required values

let nums2 = [1,2,3,4,5,6,7,8,9,10];
let evens = nums2.filter(n => n % 2 === 0);
console.log(evens);

let names = ['mike', 'jill', 'matt', 'jenny', 'meghan'];
let mNames = names.filter(name => name.charAt(0) === 'm');
console.log(mNames);

// reduce all elements of an array into a single output

const nums3 = [0,1,2,3,4];
let sum = nums3.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
nums = [0,1,2,3,4];

// acc = accumulator
// curr = current value
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsExperience: 10
      }
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience);
  
  // Grouping by a property, and totaling it too
  let expByProf = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    };
    return acc;
  }, {})

  console.log(expByProf);

  // Group by profession
let namesByProf = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [curr.name];
    } else {
        acc[key].push(curr.name);
    }
    return acc;
}, {})

console.log(namesByProf);
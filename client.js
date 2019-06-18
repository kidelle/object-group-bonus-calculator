const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let Atticus = { 
name: 'Atticus',
employeeNumber: '2405',
annualSalary: '47000',
reviewRating: 3

}
let Jem = {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
}

let Scout = {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
}

let Robert = {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
}

let Mayella = {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
}


function employeeMoney(employee){
  if (employee.reviewRating === 5 ){
    return 'base bonus of 10%';
  }
  else if (employee.reviewRating === 4 ){
    return 'base bonus of 6%';
  }
  else if (employee.reviewRating === 3 ){
    return 'base bonus of 4%';
  }
  else {
    return 'no bonus';
  }
}
console.log(employeeMoney(Atticus));
console.log(employeeMoney(Jem));
console.log(employeeMoney(Scout));
console.log(employeeMoney(Robert));
console.log(employeeMoney(Mayella));

function employmentLength(employee){
  if ((employee.employeeNumber).length === 4){
    return 'additional 5%';
  }
  else{
    return 'no additional bonus';
  }
}

console.log(employmentLength(Atticus));
console.log(employmentLength(Jem));
console.log(employmentLength(Scout));
console.log(employmentLength(Robert));
console.log(employmentLength(Mayella));

function employeeSalary(employee){
  if( employee.annualSalary > 65000 ){
    return 'bonus adjusted down 1%';
  }
  else {
    return 'no adjustments needed';
  } 
}

console.log(employeeSalary(Atticus));
console.log(employeeSalary(Jem));
console.log(employeeSalary(Scout));
console.log(employeeSalary(Robert));
console.log(employeeSalary(Mayella));


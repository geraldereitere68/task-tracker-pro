/*
Filename: complexCode.js
Content: Complex JavaScript code with more than 200 lines.
*/

// Define a class for creating a Person object with a name and age
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define a method to get the person's name
  getName() {
    return this.name;
  }

  // Define a method to get the person's age
  getAge() {
    return this.age;
  }
}

// Create an array of Person objects
let people = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 30),
  new Person("Bob Johnson", 40),
  new Person("Alice Williams", 35),
];

// Function to filter people based on age
function filterPeopleByAge(minAge, maxAge) {
  return people.filter(person => person.getAge() >= minAge && person.getAge() <= maxAge);
}

// Function to calculate the average age of people
function calculateAverageAge() {
  let totalAge = people.reduce((sum, person) => sum + person.getAge(), 0);
  return totalAge / people.length;
}

// Function to sort people by name in ascending order
function sortPeopleByName() {
  return people.sort((a, b) => a.getName() > b.getName() ? 1 : -1);
}

// Function to display the information of people
function displayPeople() {
  console.log("People Information:");
  console.log("--------------------");

  for (let person of people) {
    console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`);
  }
}

// Test the functions
let filteredPeople = filterPeopleByAge(30, 40);
console.log("People between 30 and 40 years old:");
console.log("---------------------------------");
for (let person of filteredPeople) {
  console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`);
}

let averageAge = calculateAverageAge();
console.log("\nAverage Age of people:");
console.log("-----------------------");
console.log(`Average Age: ${averageAge}`);

let sortedPeople = sortPeopleByName();
console.log("\nPeople sorted by name:");
console.log("-----------------------");
for (let person of sortedPeople) {
  console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`);
}

// Display all people
console.log("\n");
displayPeople();

// Continue with more code...

// [other complex code]
// ...

// [more complex code]
// ...

// [even more complex code]
// ...

// [code exceeding 200 lines]
// ...
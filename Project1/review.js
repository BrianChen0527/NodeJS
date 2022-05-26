// ########################################################################################
// File I/O Practice
// ########################################################################################

const { randomInt } = require('crypto');
const fs = require('fs'); // import file system library

fs.writeFileSync('hello.txt', 'hello from nodeJS'); // output to a file
console.log('Hello from Node.js');


// ########################################################################################
// Functions Practice
// ########################################################################################

let n = 5;
// creating a more concise function with the arrow function 
// notice that sumNums() and sumNums2() do the same thing!
const sumNums = (num1, num2, num3) =>  num1 + num2 + num3;
const sumNums2 = (num1, num2, num3) => {
    return num1 + num2 + num3;
} 

const genRandNum = () => Math.floor(Math.random()*100);

console.log(sumNums(n, n, n));
console.log(genRandNum());

// Template Literals

const name = 'Brian';
console.log(`Here's a cleaner way to print variables: ${n} ${name}`);


// ########################################################################################
// Object Practice
// ########################################################################################

const someObject = {
    name: 'Brian',
    age: 20,
    // This is how you define functions inside objects in javaScript
    sayName() {
        console.log('hi my name is ' +  this.name);
    }
}

someObject.sayName();
let arr = ['string', 123, true]; // you can store different types in arrays
for(let a in arr){
    console.log(a);
}
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    intro(){
        console.log("my name is: " + this.name + "\nMy age is: " + this.age);
    }
}
let bryan = new Student('bryan', 20);
bryan.intro();
let a = someObject;
a.sayName();

// Object Destructuring
// Object destructuring is basically retrieving an object's variable with curly braces
function printName({name}){
    console.log(name);
}
printName(bryan);



// ########################################################################################
// Arrays Practice
// ########################################################################################

let names = ['brian', 'jordan', 'sean'];
let names2 = names.map(name => name + ' - human');
console.log(names2);

// Arrays are not constant! You can only make the pointer to the array constant!'
const hobbies = ['Valorant', 'Snowboarding', 'Boba'];
hobbies.push('Workout');
console.log(hobbies);

// hobbies2 is referencing hobbies, so don't copy an array like this
hobbies2 = hobbies;
hobbies2.push('Movies');
console.log(hobbies);

// If you want to make a copy of an array (instead of referencing to the same array)
// You can use slice()
hobbiesCopy = hobbies.slice();
hobbiesCopy.pop();
console.log(hobbiesCopy);

// Or the spread operator '...'
hobbiesCopy2 = [...hobbies];
hobbiesCopy2.pop();
console.log(hobbiesCopy2);

// '...' can also be used as a rest operator for flexible parameters
let toArray = (...args) => args;
console.log(toArray(1,2,3,4,5));
function toArray2(...args){ return args; }
console.log(toArray2(1,2,3,4,5));

// Array Destructuring
let [hobby1, hobby2] = hobbies;
console.log(hobby1 + hobby2);







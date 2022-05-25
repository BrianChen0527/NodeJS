const { randomInt } = require('crypto');
const fs = require('fs'); // import file system library

fs.writeFileSync('hello.txt', 'hello from nodeJS'); // output to a file
console.log('Hello from Node.js');

const name = 'Brian';

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
for(var a in arr){
    console.log(a);
}

let names = ['brian', 'jordan', 'sean'];
let names2 = names.map(name => name + ' - human');
console.log(names2);
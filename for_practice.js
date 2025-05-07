for (let a = 1; a <= 3; a++) {
  console.log(`a = ${a}`);
}

console.log("------------------");

for (let a = 1; a <= 10; a = a+2) {
  console.log(`a = ${a}`);
}

console.log("------------------");

for (let a= 1; a <= 100; a++) {
  if (a % 2 === 0) {
    console.log(`a = ${a}`);
  }
}

console.log("------------------");

let numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("---------for in---------");

const person = {
  name : "mojae",
  age : 26
}

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}








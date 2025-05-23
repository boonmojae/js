function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Mojae";
  callback(name);
}

processUserInput(greet);


console.log("-----------------------------");


function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));


console.log("-----------------------------");


//현재값, 인덱스가 고정(인자명 상관없이)
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
})
console.log(newArr);

var wrongArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
})
console.log(wrongArr);

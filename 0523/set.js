//set은 key 없이 값만 존재
const testSet = new Set();

testSet.add('value1');
testSet.add('value2');

console.log(testSet.has('value1'));//true

const mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('apple');

console.log(mySet.has('apple'));//true
console.log(mySet.size);//동일한 값을 무시해서 2

console.log("-----------------------------");

const fruits = new Set(['apple', 'orange', 'banana']);

for (const fruit of fruits) {
  console.log(fruit);
}
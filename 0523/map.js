const testMap = new Map();

testMap.set('key', 'value');

console.log(testMap.get('key'));

const myMap = new Map();
myMap.set('name', 'Mojae');
myMap.set(1, 'numberKey');
myMap.set(true, 'boolkey');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.size);


console.log("-----------------------------");

const myMap2 = new Map();
myMap2.set('one', 1);
myMap2.set('two', 2);
myMap2.set('three', 3);

for (const key of myMap2.keys()) {
  console.log(key);
}

console.log("-----------------------------");

for (const value of myMap2.values()) {
  console.log(value);
}

console.log("-----------------------------");

for (const [key, value] of myMap2.entries()) {
  console.log(`${key}: ${value}`);
}
const person = { name: "Lee", age: 30 };

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}
// name
// Lee
// age
// 30
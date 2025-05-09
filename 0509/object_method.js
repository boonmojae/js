const user = { name: "mojae", age: 30};
console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

const user3 = { name: "sam"};
console.log(user3.hasOwnProperty("name"));
console.log(user3.hasOwnProperty("age"));

console.log("-------------------객체 비교-------------------")

const personA = {
  name: "Park",
  age: 25,
  city: "seoul"
};

const personB = {
  name: "Park",
  age: 25,
  city: "seoul"
};

console.log(personA === personB);//같은 데이터를 가지고 있어도 false

console.log("--------------------------------------")

const personC = {
  name: "Lee",
  age: 25,
  city: "Seoul"
};

const personD = personC;

console.log(personC === personD);//personD가 personC객체를 바라봄 true

console.log("-------------------객체 병합-------------------")

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};

//동일한 값이 존재한다면 마지막에 있는 데이터를 덮어씀
const merged = {...obj1, ...obj2};
console.log(merged);

//객체, 배열
//배열이 적절한 경우
const scores = [85, 92, 78];

console.log(scores[0]);

//객체가 적절한 경우
const person = {
  name: "mojae",
  age: 26,
  email: "mojae@mojae.com"
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

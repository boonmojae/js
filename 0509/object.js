let person = {
  name: "박민재",
  age: 26, 
  isStudent: true
};

console.log("------------리터럴 방식-------------")

let car = {
  brand: "Hyundai",
  model: "Sonata",
  year: 2022
};

console.log(car.model);

console.log("------------생성자 방식-------------")

let user = new Object();
user.name = "mojae";
user.age = 30;

console.log(user);


console.log("------------------------------------");

let book = {
  title: "JavaScript",
  price: 15000
};

//점 표기법
console.log(book.title);

//대괄호 표기법
console.log(book["price"]);


console.log("------------객체 속성 추가/수정/삭제-------------")

let user2 = {};
console.log(user2);

user2.name = "sam";
user2["age"] = 28;

console.log(user2);

user2.age = 30;

console.log(user2);

delete user2.name;

console.log(user2);






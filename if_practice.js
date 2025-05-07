console.log("-----------if------------");
let a = -2;

if (a < 2) {
  console.log("a는 음수입니다");
}
console.log("안녕");

console.log("-----------------------");

let b = -12;

if (b < 0 ) {
  console.log("b는 음수입니다.")
  console.log("안녕")
}
if (b > 0 ) {
  console.log("b는 양수입니다.")
  console.log("안녕");
}

console.log("-----------if-else-----------");
let num = 7;

if (num % 2 === 0) {
  console.log(`${num}은 짝수입니다.`)
} else {
  console.log(`${num}은 홀수입니다.`)
}

console.log("----------if-if-else-else----------");

let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

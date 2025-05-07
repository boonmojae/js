console.log(5 << 1);
console.log(3 << 2);

console.log(8 >> 1);
console.log(5 >> 1);
console.log(-8 >> 1);

console.log( 8 >> 1);
console.log(-8 >>> 1);

console.log(2 + 3 * 4 + 5 % 2);
console.log(3 % 4 * 5);

console.log("----------------------------------");

console.log(5 < 10);
console.log(5 >= 5);
console.log("a" < "b");
console.log("apple" > "banana");

console.log("----------------------------------");

console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(false || false);

console.log("apple" && 123);
console.log(0 && "banana");

console.log(null || "default");
console.log("user" || "default");


console.log("-----------------삼항연산자1-----------------");

let age = 20;
let result = age >=18 ? "성인" : "미자";
console.log(result);

console.log("-----------------삼항연산자2-----------------");
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : F;
console.log(grade);


console.log("-----------------연산 대입 연산자-----------------");
console.log("=");
let a = 10;
console.log("a =", a);

console.log("+=");
a += 5;
console.log("a += 5 ->", a);

console.log("-=");
a -= 3;
console.log("a -= 3 ->", a);

console.log("*=");
a *= 2;
console.log("a *= 2 ->", a);

console.log("/=");
a /= 4;
console.log("a /= 4 ->", a);

console.log("%/");
a %= 4;
console.log("a %= 4 ->", a);

console.log("**=");
a **= 3;
console.log("a **= 3 ->", a);

console.log("-----------------쉼표 연산자-----------------");
let x = (1 +2, 3+4);
console.log(x);


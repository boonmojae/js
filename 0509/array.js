let arr = [10, 20, 30];
console.log(arr);
console.log(arr.length);

console.log("-------------------------");

let newArr = new Array(3);
console.log(newArr);
console.log(newArr.length);

console.log("-------------------------");

let arr2 = new Array(3).fill(0);

console.log("-------------------------");

let fruits = ["사과", "바나나", "포도"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("-------------------------");

fruits[1] = "망고";
console.log(fruits);

console.log("-------------------------");

let scores = [85, 92, 78];
for (let i = 0; i < scores.length; i++) {
  console.log(`${i + 1}번째 점수 : ${scores[i]}`);
}

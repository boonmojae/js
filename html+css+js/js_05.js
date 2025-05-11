let arr = [];

for (i = 0; i < 100; i++) {
    arr.push(i + 1);
}

let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
}

let sum2 = 0;
for (let num of arr) {
    sum2 += num;
}

let sum3 = 0;
arr.forEach((number) => {
    sum3 += number;
});

console.log(sum1, sum2, sum3)


let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "밍고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = fruits1.filter((fruit) => fruits2.includes(fruit));//{}사용하면 return 작성
let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));

console.log(same);
console.log(diff);


const now = new Date().getDay();

if (now === 1 || now === 2 || now === 3 || now === 4 || now === 5) {
  console.log('평일');
} else {
  console.log('주말');
}


console.log(Math.floor(Math.random() * 11));//11미만
//Math.floor(Math.random() * 10) + 1;
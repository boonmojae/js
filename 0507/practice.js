console.log("--------------1--------------");
let num = 88;

if (num % 2 == 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

console.log("--------------2--------------");

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log("--------------3--------------");


for(let i=1; i<=9; i++){
  console.log(`1 * ${i} = ${1*i}\t`)
  for(let j=1; j<=9; j++){
  }
}

console.log("--------------4--------------");
let sum1 = 0;
let avg = 0;
let max = 0;
let min = 100;

for (let b = 0; b < 10; b++) {
  let c = Math.floor(Math.random() * 100);
  sum1 += c;
  if (c > max) {
    max = c;
  }
  if (c < min) {
    min = c;
  }
  console.log(c);
}
console.log("------------------");
console.log(sum1/10);
console.log(max);
console.log(min);

console.log("--------------5--------------");

let plus = 75;
let mul = 1400;

for (let hus = 1; hus <= plus; hus++) {
  let wife = plus - hus;

  if (hus * wife === mul && hus + wife === plus && hus > wife) {
    console.log(`남편 : ${hus} 살`);
    console.log(`아내 : ${wife} 살`);
  }
}

// let x = 0;
// let y = 0;
// for (let a = 0; a<75; a++) {
//   for (let b = 0; b< 75; b++) {
//     if(a+b === 75 && a*b === 14000){
//       console.log
//     }
//   }
// }



console.log("--------------6--------------");

// let wSpeed = 120;
// let mSpeed = 180;
// let wStart = 24;
// let mStart = 6;

// let speed = mSpeed - wSpeed;
// let sTime = wStart - mStart;

// let time = sTime / speed;
// let tt = time * 60;

// console.log(tt)

let man = 6;
let woman = 24;

for (let a = 0; a < 100; a++) {
  if (woman + a * 2 < man + a * 3) {
    console.log(a);
    break;
  }
}













// for (let i = 1; i <= 9; i++) {
//   let line = '';
//   for (let j = 1; j <= 9; j++) {
//     line += `${j} * ${i} = ${j * i}\t`;
//   }
//   console.log(line);
// }


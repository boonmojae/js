//기본 함수 표현식
const sum1 = function(a, b) {
  return a + b;
};

//화살표 함수로 변경 (기본 형태)
const sum2 = (a, b) => {
  return a + b;
}

// return도 생략 가능
const sum3 = (a, b) => a + b;

console.log("-----------------------------");

const add = (a, b) => a + b;
console.log(add(2,3));


console.log("-----------------------------");

const arr = [1,2,3];
const doubled = arr.map(x => x * 2);
console.log(doubled);

console.log("-----------------------------");

// document.querySelector('.btn').addEventListener('click', () => {
//   alert('Clicked');
// });

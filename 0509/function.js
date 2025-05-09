function func2() {
  console.log("func2 실행");
}

function func1() {
  console.log("fun1 시작");
  func2();
  console.log("func1 종료");
}

function main() {
  console.log("main 시작");
  func1();
  console.log("main 종료");
}

main();


console.log("----------------일급 함수--------------")

//변수에 함수를 할당
const greet = function () {
  console.log('Hello!');
};
greet();


//함수를 인자로 전달
function execute(fn) {
  fn(); //콜백 함수
}
  execute(function () { //익명함수
    console.log('실행됨!');
});


//함수에서 함수를 반환
function multiplier (factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2); // x * 2 함수가 double에 저장
console.log(double(5)); //double은 function (x) {return x * 2} 


//배열이나 객체에 저장
const actions = [
  function () {console.log('Run'); },
  function () {console.log('jump'); }
];

actions[0]();

const obj = {
  speak: function () {
    console.log('Say something');
  }
};

obj.speak();

//배열의 요소로 함수를 할당
const myArray = [
  function(a, b) {
    return a + b;``
  },
  function(a, b) {
    return a - b;
  }
];

console.log(myArray[0](5, 10));
console.log(myArray[1](10, 5));
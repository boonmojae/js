function example(x) {
  console.log(x);
  var x;
  console.log(x);
  var x = 2;
  console.log(x);
}
example(1);

console.log("-----------------------------");

//함수 선언문은 변수보다 우선 등록
function test() {
  console.log(b);//function b
  var b = 'bbb';
  console.log(b);//bbb
  function b() {

  }
  console.log(b);//bbb
}
test();


console.log("-----------------------------");



function sum(a, b) {
  return a + b;
}

// function multiply(a, b) {
  //   return a * b;
  // }
  var multiply = function(a, b) {//변수에 함수를 넣어도 호이스팅이 안됨
    return a * b;
  }
  console.log(sum(1, 2));
  console.log(multiply(3, 4));

//일반 함수
var obj = {
  outer: function() {
    console.log(this);
    var innerFunc = () => {
      console.log(this );
    };
    innerFunc();
  }
};
obj.outer();

//화살표 함수(는 this가 일정)
var obj = {
  outer: function() {
    console.log(this);
    var innerFunc = () => {//자신이 감싼 스코프의 this를 그대로 사용
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();
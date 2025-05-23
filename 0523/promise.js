console.log("--------------Promise---------------");
//pending => 대기 상태 (데이터다 안와서 돌아가는거)
//fulfilled => 성공적으로 완료된 상태
//rejected => 작업이 실패한 상태

//기본
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('성공');
  }, 1000);
});

promise.then(result => console.log(result));

//실패
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('에러 발생');
  }, 1000);
});

promise2.catch(error => console.log(error));

//체이닝
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 1000);
  });
}

fetchData()
  .then(data => data + 5)
  .then(result => console.log(result));

  
//promist.all
const p1 = new Promise(resolve => setTimeout(() => resolve('1번 완료'), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve('2번 완료'), 1500));
const p3 = new Promise(resolve => setTimeout(() => resolve('3번 완료'), 500));

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log('에러 발생:', err));


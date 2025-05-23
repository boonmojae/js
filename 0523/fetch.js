//node asynchronous.js

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// 1 -> 3 -> 2


console.log("--------------fetch---------------");
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('에러 발생:', error));


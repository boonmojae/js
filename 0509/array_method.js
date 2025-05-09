console.log("-------------push-------------")

let fruits = ["사과", "바나나"];
fruits.push("망고");
console.log(fruits);

console.log("-------------pop-------------")

fruits.pop();;
console.log(fruits);

console.log("-------------unshift-------------")

fruits.unshift("포도");
console.log(fruits);

//자주 사용
console.log("-------------splice-------------")

let nums = [1,2,3,4,];
nums.splice(2,1,99);
console.log(nums);

console.log("-------------slice-------------")

let num2 = [10,20,30,40];
let part = num2.slice(1, 3);
console.log(part)

console.log("-------------indexOf-------------")

let items = ["컴", "책", "가방"];
console.log(items.indexOf("책"));
console.log(items.indexOf("연필"));//반환값이 없어서 -1
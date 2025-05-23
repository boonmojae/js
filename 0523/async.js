// console.log("--------------async / await1---------------");
//promise의 then보다 더 직관적이어서 많이 씀

function delay() {
  return new Promise(resolve => setTimeout(() => resolve('완료'), 1000));
}

async function start() {
  const result = await delay();
  console.log(result);
}

start();


// console.log("--------------async / await2---------------");
//promist는 catch가 기본 지원 => 그래서 try~catch에서 Promise를 사용했을때 catch를 못잡음
//-,는 resolve 안쓴다는 뜻

function fail() {
  return new Promise((_, reject) => setTimeout(() => reject('에러'), 1000));
}

async function execute() {
  try {
    await fail();
  } catch (err) {
    console.log(err);
  }
}

execute();


// console.log("--------------async / await3---------------");
for (let i = 1; i <= 10; i++) {
  if(i === 4) {
    break;
  }
  console.log(`i = ${i}`);
}

console.log("------------------");

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 3; b ++) {
    if (a % 2 !== 0) {
      break;
    }
    console.log(`a = ${a}, b = ${b}`)
  }
}
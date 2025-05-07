for (let a = 1; a <= 5; a ++) {
  for (let b = 1; b <= 3; b++) {
    if (a % 2 !== 0) {
      continue;
    }
    console.log(`a = ${a}, b = ${b}`);
  }
}



let limit = Number(prompt('숫자를 입력하세요'));
limit = Number(limit);

for (let i = 0; i <= limit; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}


for (let i = 2; i <= 9; i++) {
    console.log(`---${i}단---`);
    for (j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let sum = 0;

for (let i = 0; i <= 100; i ++) {
    if (i % 2 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);
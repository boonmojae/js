let grade = 'B';

switch (grade) {
  case 'A': 
  console.log("훌륭합니다");
    break;
  case 'B': 
  console.log("좋음");
    break;
  case 'C': 
  console.log("보통");
    break;
  default: 
  console.log("노력꾸");
}

let score = 93;

switch (true) {
  case score >=90 : console.log("A학점 입니다");
  break;
  case score >= 80 : console.log("B학점 입니다")
  break;
  case score >= 70 : console.log("C학점 입니다")
  break;
  default : console.log("F학점 입니다");
}
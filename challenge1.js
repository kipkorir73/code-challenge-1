let score = 65;

function calculatorgrade(score) {
  if (score >= 0 && score <= 100) {
    if (score >= 80) {
      return grade = 'A';
    } else if (score >= 60 && score <= 79) {
      return grade = 'B';
    } else if (score >= 50 && score <= 59) {
      return grade = 'C';
    } else if (score >= 40 && score <= 49) {
      return grade = 'D';
    } else {
      return grade= 'E';
    }
  } else {
    return 'Invalid score. Score should be between 0 and 100.';
  }
}

let grade = calculatorgrade(score);
console.log("Grade: " + grade);

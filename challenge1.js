
function calculatorgrade() {
  let score = parseInt(prompt("Enter the score:"));
  
  if (score >= 0 && score <= 100) {
    if (score >= 80) {
      return 'A';
    } else if (score >= 60 && score <= 79) {
      return 'B';
    } else if (score >= 50 && score <= 59) {
      return 'C';
    } else if (score >= 40 && score <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  } else {
    return 'Invalid score. Score should be between 0 and 100.';
  }
}

let grade = calculatorgrade();
console.log("Grade: " + grade);

// Function to calculate the grade based on the score
function calculatorgrade() {
  let score = parseInt(prompt("Enter the score:")); // Prompt the user to enter the score 
  
  if (score >= 0 && score <= 100) { // Check if the score is within the valid range
    if (score >= 80) {
      return 'A'; // Return 'A' if the score is 80 or higher
    } else if (score >= 60 && score <= 79) {
      return 'B'; // Return 'B' if the score is between 60 and 79 
    } else if (score >= 50 && score <= 59) {
      return 'C'; // Return 'C' if the score is between 50 and 59
    } else if (score >= 40 && score <= 49) {
      return 'D'; // Return 'D' if the score is between 40 and 49 
    } else {
      return 'E'; // Return 'E' if the score is below 40
    }
  } else {
    return 'Invalid score. Score should be between 0 and 100.'; // Return an error message if the score is outside the valid range
  }
}

let grade = calculatorgrade(); // Call the calculatorgrade function to get the grade
console.log("Grade: " + grade); // Output the grade to the console

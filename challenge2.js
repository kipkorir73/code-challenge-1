// Prompt the user to enter the speed
const speedString = prompt('Enter speed');
const speed = parseInt(speedString);

// Function to check the speed
function speedcheck(speed) {
    const speedlimit = 70; // Speed limit in km/h
    const kmperdemerit = 5; // Number of km per demerit point
    const maxdemeritpoints = 12; // Maximum demerit points allowed

    if (speed <= speedlimit) {
        return "OK"; // Speed is within the limit
    } else {
        const demeritpoints = Math.floor((speed - speedlimit) / kmperdemerit);
        if (demeritpoints > maxdemeritpoints) {
            return "License suspended"; // License suspended if exceeding maximum demerit points
        } else {
            return "Points: " + demeritpoints; // Return the number of demerit points
        }
    }
}

console.log(speedcheck(speed)); // Output the result of the speed check

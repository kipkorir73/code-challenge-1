const speed = 80;

function speedcheck(speed) {
    const speedlimit = 70;
    const kmperdemerit = 5;
    const maxdemeritpoints = 12;

    if (speed <= speedlimit) {
        return "OK";
    } else {
        const demeritpoints = Math.floor((speed - speedlimit) / kmperdemerit);
        if (demeritpoints > maxdemeritpoints) {
            return "License suspended";
        } else {
            return "Points: " + demeritpoints;
        }
    }
}

console.log(speedcheck(speed));

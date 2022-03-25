// Exercise 1

// Prints odds from 1 to n
function printOdds(n) {
    for (let i = 1; i <= n; i++) {
        //only print odds
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds(10); // 1 3 5 7 9
printOdds(100); // 1 3 ... 99
printOdds(5); // 1 3 5

// Exercise 2

// Print yes they can drive, or no they can't
// based on name and age inputs
// you must be 16 to drive 
function checkAge(age, name = "stranger") {
    if (!parseInt(age) && age !== 0) {
        console.log("You didn't give me a valid age.");
    }
    if (age >= 16) {
        // old enough to drive
        console.log(`Congrats ${name}! You are old enough to drive.`)
    } else {
        // too young to drive
        console.log(
            `Sorry ${name}... You must wait ${16 - age} year(s) until you can drive.`
        );
    }
}

checkAge(21, "Ben");
checkAge(16);
checkAge(14, "Seth");
checkAge();
checkAge("twelve");

// Exercise 3

function describePointLocation(x, y) {
    if (y == 0 || x == 0) {
        // point is on an axis
        if (y == 0 && x == 0) {
            console.log("Point is on both axes");
        } else if (x == 0) {
            console.log("Point is on x axis"); 
        } else if (y == 0) {
            console.log("Point is on y axis");
        }
    } else {
        // determine what quadrant

        if (x > 0 && y > 0) {
            // quad 1
            console.log("Point is in quadrant 1");
        } else if (x < 0 && y > 0) {
            // quad 2
            console.log("Point is in quadrant 2");
        } else if (x < 0 && y < 0) {
            // quad 3
            console.log("Point is in quadrant 3");
        } else {
            // quad 4
            console.log("Point is in quadrant 4");
        }
    } 
}

describePointLocation(0, 1);
describePointLocation(1, 0);
describePointLocation(0, 0);
describePointLocation(1, 1);
describePointLocation(-1, 1);
describePointLocation(-1, -1);
describePointLocation(1, -1);
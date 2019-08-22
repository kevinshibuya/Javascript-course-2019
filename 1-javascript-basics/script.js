// // Exercise 1

// console.log("Exercise 1");

// var mMass, mHeight, mBMI, jMass, jHeight, jBMI, higher;

// mMass = 85;
// mHeight = 1.75;
// jMass = 80;
// jHeight = 1.80;

// mBMI = mMass / (mHeight * mHeight);
// jBMI = jMass / (jHeight * jHeight);

// console.log(mBMI);
// console.log(jBMI);

// console.log("");

// // Ternary operator
// console.log("Ternary operator");

// mBMI > jBMI ? console.log("Mark's BMI is greater than John's.") : console.log("John's BMI is greater than Mark's.");

// higher = mBMI > jBMI ? "Mark's higher." : "John's higher.";

// console.log(higher);

// console.log("");

// // Switch statements

// console.log("Switch statements");

// switch(true) {
//     case mBMI > jBMI:
//         console.log("Mark's higher.");
//         break;
//     case jBMI > mBMI:
//         console.log("John's higher.");
//         break;
//     default:
//         console.log("Both MBI's are the same.");
// }

// console.log("");

// // Exercise 2

// console.log("Exercise 2");

// var jTeam, mTeam, maTeam;

// jTeam = (89 + 120 + 103) / 3;
// mTeam = (339 + 120 + 103) / 3;
// maTeam = (339 + 120 + 103) / 3;

// if (jTeam > mTeam && jTeam > maTeam) {
//     console.log("John's team won with an average score of " + jTeam);
// } else if (mTeam > jTeam && mTeam > maTeam) {
//     console.log("Mike's team won with an average score of " + mTeam);
// } else if (maTeam > mTeam && maTeam > jTeam) {
//     console.log("Mary's team won with an average score of " + maTeam);
// } else if (jTeam === mTeam && jTeam !== maTeam) {
//     console.log("John's team with " + jTeam + " and Mike's team with " + mTeam + " have drawn for the first place");
// } else if (mTeam === maTeam && mTeam !== jTeam) {
//     console.log("Mike's team with " + mTeam + " and Mary's team with " + maTeam + " have drawn for the first place");
// } else if (maTeam === jTeam && maTeam !== mTeam) {
//     console.log("Mary's team with " + maTeam + " and Jhon's team with " + jTeam + " have drawn for the first place");
// } else {
//     console.log("Everyone drew for the first place!");
// }

// console.log("");

// // Functions

// console.log("Functions");

// function calcAge(birthYear) {
//     return 2019 - birthYear;
// }

// var ageJohn = calcAge(1995);
// var ageKaren = calcAge(2000);
// var ageMike = calcAge(1990);
// console.log(ageJohn, ageKaren, ageMike);

// function retirementYear(year, firstName) {
//     var retireYear = year + 65;
//     if (retireYear >= 2019) {
//         console.log(firstName + " retires in " + retireYear + ".");
//     } else {
//         console.log(firstName + " is already retired.");
//     }
// }

// retirementYear(1950, "John");

// // Funtions statements and expressions

// // Function declaration
// // function whatDoYouDo(job, firstName){}

// // Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + " teaches people how to code."
//         case 'driver':
//             return firstName + " drives as an Uber."
//         case 'chef':
//             return firstName + " cooks delicious foods."
//         default:
//             return firstName + " does something else."
//     }
// }

// console.log(whatDoYouDo('teacher', 'Mark'));
// console.log(whatDoYouDo('driver', 'John'));
// console.log(whatDoYouDo('chef', 'Mary'));
// console.log(whatDoYouDo('retired', 'Todd'));

// // Arrays

// console.log("Arrays");

// // Initialize new array
// var names = ["John", "Mark", "Someone"];
// var years = new Array(1980, 1990, 1950);

// console.log(names[0], years[1]);
// console.log(names.length);

// // Mutate array data
// names[1] = "Ben";
// names[names.length] = "Mary";

// // Add array data
// names.push("This should be removed.");
// names.unshift("Data");
// console.log(names);

// // Remove array data
// names.pop();
// names.pop();
// names.shift();
// console.log(names);

// // Search for the index
// console.log(names.indexOf("Ben"));

// var searchArray = function(func, search) {
//     if (func.indexOf(search) == -1) {
//         return "The element is not present on the array.";
//     } else {
//         return "The element is present on the array index " + func.indexOf(search) + ".";
//     }
// }

// console.log(searchArray(names, "Mary"));

// // Exercise 3

// console.log("Exercise 3");

// var bills = [124, 48, 268];
// var total = []

// function tipCalculator(bill) {
//     var percent;

//     if (bill < 50) {
//         percent = 0.2;
//     } else if (bill >= 50 && bill < 200) {
//         percent = .15;
//     } else {
//         percent = .1;
//     }

//     return percent * bill;
// }

// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// console.log(tips);

// total.push(bills[total.length] + tips[total.length]);
// total.push(bills[total.length] + tips[total.length]);
// total.push(bills[total.length] + tips[total.length]);

// console.log(total);

// // Objects and properties

// console.log("Objects and properties");

// // Declare object literal
// var kevin = {
//     firstName: "Kevin",
//     lastName: "Shibuya",
//     birthYear: 2000,
//     engaged: true,
//     skills: ["JavaScipt", "HTML 5", "CSS 3", "Bootstrap 4", "Adobe Photoshop", "Adobe XD"],
//     job: 'front-end developer'
// };

// // Retrieve properties
// console.log(kevin.firstName);
// console.log(kevin['lastName']);
// var x = 'birthYear';
// console.log(kevin[x]);

// // Mutate properties
// kevin.skills[5] = "React.js";
// kevin['job'] = 'Fullstack Developer';
// console.log(kevin);

// // New object syntax
// var carol = new Object();
// carol.firstName = "Carol";
// carol.lastName = "Baptista";
// carol.birthYear = 2001;
// carol.engaged = true;
// carol['job'] = 'Doctor';
// console.log(carol);

// // Objects and methods

// console.log('Objects and methods');

// var kevin = {
//     firstName: "Kevin",
//     lastName: "Shibuya",
//     birthYear: 2000,
//     engaged: true,
//     skills: ["JavaScipt", "HTML 5", "CSS 3", "Bootstrap 4", "Adobe Photoshop", "Adobe XD"],
//     job: 'front-end developer',
//     // Object method
//     calcAge: function() {
//         // this keyword
//         this.age = 2019 - this.birthYear;
//     }
// }

// kevin.calcAge();
// console.log(kevin);

// // Exercise 4

// console.log('Exercise 4');

// var mark = {
//     firstName: 'Mark',
//     lastName: 'Smith',
//     mass: 90,
//     height: 1.75,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//     }
// }
// mark.calcBMI();

// var john = new Object();
// john.firstName = "John";
// john.lastName = "Smithe";
// john.mass = 80;
// john.height = 1.75;
// john.BMI = john.mass / (john.height * john.height);

// if (john.BMI > mark.BMI) {
//     console.log(john.firstName + " " + john.lastName + " has a BMI of " + john.BMI);
// } else if (mark.BMI > john.BMI) {
//     console.log(mark.firstName + " " + mark.lastName + " has a BMI of " + mark.BMI);
// } else {
//     console.log('Mark and Jhon have the same BMI of ' + john.BMI);
// }

// // Loops and iteration

// console.log('Loops and iteration');

// var names = ["John", "Mark", "Someone", false, 42, "Jales"];

// // For loop
// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // While loop
// var i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// // Continue and break statements
// for (var i = 0; i < names.length; i++) {
//     if (typeof names[i] !== 'string') continue;
//     console.log(names[i]);
// }

// for (var i = 0; i < names.length; i++) {
//     if (typeof names[i] !== 'string') break;
//     console.log(names[i]);
// }

// // For loop backwards
// for (var i = names.length; i >= 0; i--) {
//     console.log(names[i]);
// }

// Exercise 5

console.log('Exercise 5');

var johnFam = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    paid: [],
    tipPercent: function(tip) {
        // Calc and adds values to the tips[]
        for (var i = 0; i < tip.length; i++) {
            // Add bills[] to tips[]
            this.tips.push(tip[i]);
            // Calc tips[]
            if (this.tips[i] < 50) {
                this.tips[i] *= 0.2;
            } else if (tip[i] >= 50 && tip[i] < 200) {
                this.tips[i] *= 0.15;
            } else {
                this.tips[i] *= 0.1;
            }
        }
    },
    // Calc paid[]
    paidTotal: function(tip) {
        for (var i = 0; i < tip.length; i++) {
            this.paid.push(this.bills[i] + this.tips[i]);
        }
    }
}

var markFam = {
    bills: [77, 475, 110, 45],
    tips: [],
    paid: [],
    // Calc and adds values to the tips[]
    tipPercent: function(tip) {
        for (var i = 0; i < tip.length; i++) {
            // Add bills[] to tips[]
            this.tips.push(tip[i]);
            // Calc tips[]
            if (this.tips[i] < 100) {
                this.tips[i] *= 0.2;
            } else if (tip[i] >= 100 && tip[i] < 300) {
                this.tips[i] *= 0.1;
            } else {
                this.tips[i] *= 0.25;
            }
        }
    },
    // Calc paid[]
    paidTotal: function(tip) {
        for (var i = 0; i < tip.length; i++) {
            this.paid.push(this.bills[i] + this.tips[i]);
        }
    }
}

function tipAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

johnFam.tipPercent(johnFam.bills);
johnFam.paidTotal(johnFam.tips);
markFam.tipPercent(markFam.bills);
markFam.paidTotal(markFam.tips);
johnFam.average = tipAverage(johnFam.tips);
markFam.average = tipAverage(markFam.tips);

console.log("John family data: ", johnFam);
console.log("Mark family data: ", markFam);

if (markFam.average < johnFam.average) {
    console.log("John family have the highest tip average of " + johnFam.average);
} else if (markFam.average > johnFam.average) {
    console.log("Mark family have the highest tip average of " + markFam.average);
} else {
    console.log("Both families have the same tip average of " + johnFam.average);
}
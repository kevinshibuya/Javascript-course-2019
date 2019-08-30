// // Lecture: let and const

// // ES5
// var name5 = 'Jame Smith';
// var age5 = 23;
// name5 = 'Jame Miller';

// console.log(name5 + ' ' + age5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 26;

// console.log(name6 + ' ' + age6);

// // ES5
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1995;
//     }
//     console.log(firstName + ', was born in ' + yearOfBirth + ' and is now able to drive a car.');
// }

// driversLicense5(true);

// // ES6
// function driversLicense6(passedTest) {
//     let firstName;
//     const yearOfBirth = 1995;
    
//     if (passedTest) {
//         firstName = 'John';
//     }
//     console.log(firstName + ', was born in ' + yearOfBirth + ' and is now able to drive a car.');
// }

// driversLicense6(true);


// let i = 33;
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log(i);

// // Lecture: Blocks and IIFEs

// // ES6 - Blocks
// {
//     let a = 1;
//     const b = 5;
//     var c = 3;
// }

// console.log(c);

// // ES5 - IIFEs
// var something = (function() {
//     var c = 4;
// })();

// console.log(c);

// // Lecture: Strings

// let firstName = 'John';
// let lastName = 'Wick';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('ck'));
// console.log(n.includes(' '));
// console.log(`${n} `.repeat(5));

// Lecture: Arrow functions

const years = [1990, 1985, 1982, 1937];

// ES5
var ages5 = years.map(function(cur) {
    return 2016 - cur;
});

console.log(ages5);

// ES6
let ages6 = years.map(cur => 2016 - cur);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}: ${age}.`;
})
console.log(ages6);
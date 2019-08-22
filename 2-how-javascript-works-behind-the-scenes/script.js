///////////////////////////////////////
// Lecture: Hoisting

// Hoisting works on function declarations
calcAge(2000);

function calcAge(year) {
    console.log(2019 - year);
}

// Hoisting doesn't work on function expressions
//retirement(2000);

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

// Hoisting variables return undefined
console.log(age);
var age = 35;

function foo() {
    var age = 25;
    console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

wafu(2000);

function wafu(year) {
    console.log(2019 - year);
    console.log(this);
}

var kevin = {
    firstName: "Kevin",
    birthYear: 2000,
    years: function() {
        console.log(2019 - this.birthYear);
        console.log(this);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

kevin.years();

var carol = {
    firstName: "Carol",
    birthYear: 2001
}

carol.years = kevin.years;
carol.years();
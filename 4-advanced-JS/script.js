// // Function constructor

// // Literal object
// // var john = {
// //     name: 'John',
// //     yearOfBirth: 1990,
// //     job: 'teacher'
// // }

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     console.log(2019 - this.yearOfBirth)
// }
// Person.prototype.lastName = 'Tatcher'

// var john = new Person('John', 1990, 'teacher');
// var johnny = new Person('Johnny', 1995, 'vagabond');
// var margaret = new Person('Margaret', 1997, 'secretary');
// john.calculateAge();
// johnny.calculateAge();
// margaret.calculateAge();
// console.log(john.name + ' ' + john.lastName);
// console.log(johnny.name + ' ' + johnny.lastName);
// console.log(margaret.name + ' ' + margaret.lastName);

// console.log(john.hasOwnProperty('job')); // Returns true because job is a property of the object
// console.log(john.hasOwnProperty('lastName')); // Returns false because lastName is a prototype
// console.log(john instanceof Person); // Returns true because john was made from the Person object constructor

// var Game = function(name, genre, studio) {
//     this.name = name;
//     this.genre = genre;
//     this.studio = studio;
// }

// Game.prototype.yearRevenue = function() {
//     console.log(300 - 200);
// }

// var treasureHunt = new Game('Treasure Hunt', 'Action/Puzzple', '8bits');

// console.log(treasureHunt);

// let x = [0, 2, 4];
// console.log(x); // Almost everything is JS is an object, including an array with it's own methods and properties

// // Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto, {
//     name: { value: 'John' },
//     yearOfBirth: {  value: 1995 },
//     job: { value: 'teacher' }
// })

// console.log(john)

// // Primitives vs Objects

// var x = 23;
// var y = x;
// x = 45; // Doesn't change the value of y

// console.log(x);
// console.log(y);

// var obj1 = {
//     name: 'Kevin',
//     age: 19
// }
// var obj2 = obj1;
// obj1.age = 20 // Change the value of obj2

// console.log(obj1.age);
// console.log(obj2.age);

// // Same thing happens here with function
// var ab = 27;
// var bc = {
//     name: 'Carol',
//     age: 18
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'Sao Paulo'
// }

// change(ab, bc);

// console.log(ab);
// console.log(bc.city);

// // First CLass Functions: Passing functions as arguments

// var years = [1995, 2000, 1980, 2005, 1987];

// function arrayCalc(arr, fn) {
//     var arrRes = [];

//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }

//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el) {
//     return 18 <= el;
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1
//     }
// }


// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages)
// console.log(rates);

// // First CLass Functions: Functions returning funtions

// function interviewQuestion(job) {
//     if (job === 'developer') {
//         return function(name) {
//             console.log(name + ', what did you develop in the past 6 months?');
//         }
//     } else if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you explain me 3 principles of design?');
//         }
//     } else {
//         return function(name) {
//             console.log(name + ', what do you do?');
//         }
//     }
// }

// var developerQuestion = interviewQuestion('developer');
// var designerQuestion = interviewQuestion('designer');

// developerQuestion('Kevin');
// developerQuestion('Pedro');
// designerQuestion('Jales');

// interviewQuestion('something')('Carol');

// // Immediately Invoked Function Expressions(IIFE)

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5); // This is a way to encapsulate functions and make it more secure

// // Closures

// // With closures I can access the vars and the parameters from the outer function
// // on the inner function.
// function retirement(retirementAge) {
//     var a = ' years left until retirement.';

//     return function(yearOfBirth, name) {
//         var age = 2019 - yearOfBirth;
//         console.log(name + ' has ' + (retirementAge - age) + a);
//     }
// }

// var retirementBR = retirement(60);
// var retirementUS = retirement(66);
// var retirementJP = retirement(70);

// retirementBR(2000, 'Kevin');
// retirementUS(2000, 'Kevin');
// retirementJP(2000, 'Kevin');

// // Code rewritten with closures
// function interviewQuestion(job) {
//     var developer = ', what did you make in the past 6 months?';
//     var designer = ', can you explain me 3 principles of design?';
//     var unknown = ', what do you do?';

//     return function(name) {
//         if (job === 'developer') {
//             console.log(name + developer);
//         } else if (job === 'designer') {
//             console.log(name + designer);
//         } else {
//             console.log(name + unknown);
//         }
//     }
// }

// var developerQuestion = interviewQuestion('developer');
// var designerQuestion = interviewQuestion('designer');

// developerQuestion('Kevin');
// developerQuestion('Pedro');
// designerQuestion('Jales');

// // Bind, Call and Apply

// var kevin = {
//     name: 'Kevin',
//     age: 19,
//     job: 'developer',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }

// var carol = {
//     name: 'Carol',
//     age: 18,
//     job: 'medic'
// }

// kevin.presentation('friendly', 'morning');
// kevin.presentation.call(carol, 'formal', 'evening'); // Method borrowing
// kevin.presentation.apply(carol, ['friendly', 'night']); // Same thing as call

// // Store a preset from the method
// var kevinFriendly = kevin.presentation.bind(kevin, 'friendly');
// kevinFriendly('evening'); // Carrying

// var carolFormal = kevin.presentation.bind(carol, 'formal');
// carolFormal('night');

// // Using bind on a real world problem
// var years = [1995, 2000, 1980, 2005, 1987];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         // Here the fn accepts only one parameter, so I need to use bind
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// // The limit will be predefined with bind
// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// // Here is the use of bind
// var fullAgesJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullAgesJapan);

// Exercise 7

// My version

// var Question = function(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//     this.askQuestion = function(arr, fn) {
//         var number = Math.floor(Math.random() * (arr.length));
//         var questionSelected = arr[number];
//         var score = 0;

//         console.log(questionSelected.question);
//         questionSelected.answers.forEach(answer => {
//             console.log(answer);
//         });

//         var answer = prompt('What\'s the correct answer?\nType exit to quit.');
        
//         if (answer === questionSelected.correctAnswer) {
//             score++;
//             console.log('You\'re correct!\nYour score: ' + score);
//             console.log('===========================================');
//         } else if (answer !== questionSelected.correctAnswer) {
//             console.log('Sorry, you are wrong.\nYour score: ' + score);
//             console.log('===========================================');
//         }

//         if (answer === 'exit') {
//             console.log('Game quitted.')
//         } else {
//             fn();
//         }
//     }
// }

// var javascriptQuestion = new Question('Is Javascript the most awesome language in the world?', [0 + ': Yes', 1 + ': No'], '0');
// var courseQuestion = new Question('Is this the best course to learn Javascript in 2019?', [0 + ': Absolutely', 1 + ': Not really'], '0')

// var questions = [javascriptQuestion, courseQuestion];

// javascriptQuestion.askQuestion(questions, repeatQuestion);

// function repeatQuestion() {
//     return javascriptQuestion.askQuestion(questions, repeatQuestion);
// }

// Professor version

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('You are correct!');

            sc = callback(true);
        } else {
            console.log('You are wrong :(');

            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------------')
    }

    var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What\'s the name of this course\'s teacher?', ['Jhon', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best describe programming?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * (questions.length))

        questions[n].displayQuestion();

        var answer = prompt('What\'s the correct answer?\nType exit to leave.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();

// create a trivia game 
// upon webpage load have a clickable button
// once button is pressed load the game 
// once game starts start the countdown timer.
// user has to answer all the questions before time runs out
// if time runs out, game ends 
// once game ends calculate total score 
// total up right to wrong 


//setting global variables for the game.
var score = 0;
var total = 7;
var point = 1;
var highest = total * point;

// set up varibles and objects for our questions

var questions = [
    {
        question: "Who of the following was not playable in Smash 64?",
        answers: {
            a: 'Yoshi',
            b: 'Pikachu',
            c: 'Ness',
            d: 'Peach',
        },
        correctAnswer: 'd',
    },
    {
        question: "Who of the following was not playable in Melee?",
        answers: {
            a: 'Eliwood',
            b: 'Mr. Game & Watch',
            c: 'Bowswer',
            d: 'Shiek',
        },
        correctAnswer: 'a'
    },
    {
        question: "Who of the following was not playable in Brawl?",
        answers: {
            a:'Wolf',
            b:'Lucas',
            c:'Sonic The Hedgehog',
            d:'Roy',
        },
        correctAnswer: 'd'
    },
    {
        question: "Who of the following was not playable in Smash 4?",
        answers: {
            a:'Mega Man',
            b:'Little Mac',
            c:'Lucina',
            d:'Ivysaur',
        },
        correctAnswer: 'd'
    },
    {
        question: "Who of the following was not playable in Smash Ultimate?",
        answers: {
            a:'Ken',
            b:'Shadow The Hedgehog',
            c:'Joker',
            d:'Simon',
        },
        correctAnswer: 'b'
    },
    {
        question: "Which items can you use in Smash Ultimate?",
        answers: {
            a:'Pokeball',
            b:'Party Stick',
            c:'Dragoon',
            d:'Beam Sword',
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following are not assist trophies?",
        answer: {
            a:'Black Knight',
            b:'Waluigi',
            c:'Dark Samus',
            d:'Krystal',
        },
        correctAnswer: 'c'
    },
];
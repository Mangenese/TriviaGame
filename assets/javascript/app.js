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

var correct = 0;
var incorrect= 0;

// set up varibles and objects for our questions

var number = 10;
var intervalId;

var questions = [
    {
        question: "Who of the following was not playable in Smash 64?",
        answers: ['Yoshi', 'Pikachu', 'Ness', 'Peach',],
        correctAnswer: 'Peach',
    },
    {
        question: "Who of the following was not playable in Melee?",
        answers: ['Eliwood', 'Mr. Game & Watch', 'Bowswer', 'Shiek',],
        correctAnswer: 1,
    },
    {
        question: "Who of the following was not playable in Brawl?",
        answers: ['Wolf', 'Lucas', 'Sonic The Hedgehog', 'Roy',],
        correctAnswer: 3,
    },
    {
        question: "Who of the following was not playable in Smash 4?",
        answers: ['Mega Man', 'Little Mac', 'Lucina', 'Ivysaur',],
        correctAnswer: 3,
    },
    {
        question: "Who of the following was not playable in Smash Ultimate?",
        answers: ['Ken', 'Shadow The Hedgehog', 'Joker', 'Simon',],
        correctAnswer: 1,
    },
    {
        question: "Which items can you use in Smash Ultimate?",
        answers: ['Pokeball', 'Party Stick', 'Dragoon', 'Beam Sword',],
        correctAnswer: 1,
    },
    {
        question: "Which of the following are not assist trophies?",
        answers: ['Black Knight', 'Waluigi', 'Dark Samus', 'Krystal',],
        correctAnswer: 2,
    },
];

//function for pasting the questions in html 


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#remainingTime").html("<h1> Time Remaining:" + number + "</h1>");
    if (number === 0) {
        // run results
        stop();

    };
};


function stop() {
    clearInterval(intervalId);
}
// a function to paste the questions into the quiz area
function showQuestions(Start) {


    for (var i = 0; i < questions.length; i++) {
        var h3 = $("<h3>");
        h3.text(questions[i].question);
        $("#quizQuestion").append(h3);
        var ul = $("<div>");

        for (var j = 0; j < questions[i].answers.length; j++) {
            var li = $("<button>");
            li.addClass("answer");
            li.attr("data-name", questions[i].answers[j]);
            li.text(questions[i].answers[j]);
            ul.append(li);
            $("#quizQuestion").append(ul);
        }
    };
    clickyBoi();
};
//function for on click
var clickyBoi = function() {
    $("button").on("click", function(){
    var answer = $(this).attr("data-name");
    
    if ($(this).attr("data-name") === questions[0].correctAnswer) {
        console.log("WEINER!");
    } else if ($(this).attr("data-name") != questions[0].correctAnswer) {
        console.log("NO BUENO!");
    } console.log(answer);
    });

    
    }
    



run();
showQuestions();

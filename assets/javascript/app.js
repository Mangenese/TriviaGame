// create a trivia game 
// upon webpage load have a clickable button
// once button is pressed load the game 
// once game starts start the countdown timer.
// user has to answer all the questions before time runs out
// if time runs out, game ends 
// once game ends calculate total score 
// total up right to wrong 

var i = 0
var userChoice;
var score = 0;
var wrong = 0;
var unanswered = 7;
var timer = 5;
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
$(".answer").hide();
$("#start-btn").on("click", startGame);

function startGame() {
    $("#start-btn").hide();
    $("#questions").show();
    $(".answer").show();
    run();
    $("#display").show();
    $("#question").html(questions[i].question)
    $("#a").html(questions[i].answers[0]);
    $("#b").html(questions[i].answers[1]);
    $("#c").html(questions[i].answers[2]);
    $("#d").html(questions[i].answers[3]);

};



$(".answer").on("click", function () {
    userChoice = $(this).val();
    console.log(userChoice);
    if (userChoice == questions[i].correctAnswer) {
        i++;
        score++;
        unanswered--;
        timer = 5;
        nextQuestion();
    } else {
        wrong++;
        i++;
        unanswered--;
        timer = 5;
        nextQuestion();
    }
})

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    if (timer > 0) {
        timer--;
        $("#display").text(timer);
        console.log(timer);
    } else if (timer === 0) {
        gameOver();
        stop();
    }

};


function stop() {
    clearInterval(intervalId);
}
function nextQuestion() {
    if (i > 7 - 1) {
        i = 0;
        results();
        $("#right").html("Right answers: " + score)
        $("#wrong").html("Wrong answers: " + wrong)
        $("#unanswered").html("Unanswered: " + unanswered)
    }
    $("#question").html(questions[i].question)
    $("#a").html(questions[i].answers[0]);
    $("#b").html(questions[i].answers[1]);
    $("#c").html(questions[i].answers[2]);
    $("#d").html(questions[i].answers[3]);


    console.log(questions[i].question)

}
function gameOver() {
    alert("Wow, couldn't beat 9.9 Classic Mode. Pathetic. You should uninstall your Switch.")
    $("#question").hide();
    $("button").hide();
    $("#display").hide();
    $("#right").html("Right answers: " + score)
    $("#wrong").html("Wrong answers: " + wrong)
    $("#unanswered").html("Unanswered: " + unanswered)
}

function results() {
    alert("BUSTA WOLF!")
    stop();
    $("#question").hide();
    $("button").hide();
    $("#display").hide();
    $("#right").html("Right answers: " + score)
    $("#wrong").html("Wrong answers: " + wrong)
    $("#unanswered").html("Unanswered: " + unanswered)
}



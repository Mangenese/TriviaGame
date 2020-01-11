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
var timer = 15;
var intervalId;

var questions = [
    {
        question: "Who of the following was not playable in Smash 64?",
        answers: ['Yoshi', 'Pikachu', 'Ness', 'Peach',],
        correctAnswer: 3,
    },
    {
        question: "Who of the following was not playable in Melee?",
        answers: ['Eliwood', 'Mr. Game & Watch', 'Bowswer', 'Shiek',],
        correctAnswer: 0,
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
        question: "Which item is not in Smash Ultimate?",
        answers: ['Pokeball', 'Party Stick', 'Dragoon', 'Beam Sword',],
        correctAnswer: 1,
    },
    {
        question: "Which of the following are not assist trophies in Smash Ulimate?",
        answers: ['Black Knight', 'Waluigi', 'Dark Samus', 'Krystal',],
        correctAnswer: 2,
    },
];
// for website load, it hides the buttons and requires you to click start
$(".answer").hide();
$("#start-btn").on("click", startGame);

//function that starts the game 
function startGame() {
    $("#start-btn").hide();
    $("#questions").show();
    $(".answer").show();
    // calls the timer function to start
    run();
    $("#display").show();
    // displays the quesion array with its corresponding objects
    $("#question").html(questions[i].question)
    $("#a").html(questions[i].answers[0]);
    $("#b").html(questions[i].answers[1]);
    $("#c").html(questions[i].answers[2]);
    $("#d").html(questions[i].answers[3]);

};


// on click function to store the variables using this
$(".answer").on("click", function () {
    userChoice = $(this).val();
    console.log(userChoice);
    if (userChoice == questions[i].correctAnswer) {
        i++;
        score++;
        unanswered--;
        timer = 15;
        nextQuestion();
    } else {
        wrong++;
        i++;
        unanswered--;
        timer = 15;
        nextQuestion();
    }
})
// function for the timer to start
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
// function for time to go down by 1 sec
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

//stops timer function
function stop() {
    clearInterval(intervalId);
}
// pulls the next question
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
// function for a timeout
function gameOver() {
    alert("Wow, couldn't beat 9.9 Classic Mode. Pathetic. You should uninstall your Switch.")
    $("#question").hide();
    $("button").hide();
    $("#display").hide();
    $("#right").html("Right answers: " + score)
    $("#wrong").html("Wrong answers: " + wrong)
    $("#unanswered").html("Unanswered: " + unanswered)
}
// function for completing the quiz
function results() {
    alert(" HEY! C'MON C'MON BUSTA WOLF! ")
    stop();
    $("#question").hide();
    $("button").hide();
    $("#display").hide();
    $("#right").html("Right answers: " + score)
    $("#wrong").html("Wrong answers: " + wrong)
    $("#unanswered").html("Unanswered: " + unanswered)
}



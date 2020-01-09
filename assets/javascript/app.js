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

var number= 10;
var intervalId;

var questions = [
    {
        question: "Who of the following was not playable in Smash 64?",
        answers: [
             'Yoshi',
             'Pikachu',
             'Ness',
             'Peach',
        ],
        correctAnswer: 'd',
    },
    {
        question: "Who of the following was not playable in Melee?",
        answers: [
             'Eliwood',
             'Mr. Game & Watch',
             'Bowswer',
             'Shiek',
        ],
        correctAnswer: 'a'
    },
    {
        question: "Who of the following was not playable in Brawl?",
        answers: [
            'Wolf',
            'Lucas',
            'Sonic The Hedgehog',
            'Roy',
],
        correctAnswer: 'd'
    },
    {
        question: "Who of the following was not playable in Smash 4?",
        answers: [
            'Mega Man',
            'Little Mac',
            'Lucina',
            'Ivysaur',
        ],
        correctAnswer: 'd'
    },
    {
        question: "Who of the following was not playable in Smash Ultimate?",
        answers: [
            'Ken',
            'Shadow The Hedgehog',
            'Joker',
            'Simon',
        ],
        correctAnswer: 'b'
    },
    {
        question: "Which items can you use in Smash Ultimate?",
        answers: [
            'Pokeball',
            'Party Stick',
            'Dragoon',
            'Beam Sword',
        ],
        correctAnswer: 'b'
    },
    {
        question: "Which of the following are not assist trophies?",
        answers: [
            'Black Knight',
            'Waluigi',
            'Dark Samus',
            'Krystal',
        ],
        correctAnswer: 'c'
    },
];

//function for pasting the questions in html 


function run(){
    clearInterval(intervalId);
    intervalId =setInterval(decrement ,1000);
 }
 
 function decrement() {
     number--;
     $("#display").html("<h2>" + number + "</h2>");
     if (number === 0) {
         // run results
         stop();
 
         alert("times up");
     };
 };
 
 
 function stop(){
     clearInterval(intervalId);
 } 

function showQuestions(Start) {
   
    
    for(var i = 0; i<questions.length; i++){
        var h3 = $("<h3>");
        h3.text(questions[i].question);
        $("#quiz").append(h3);
        var ul = $("<ul>");

        for(var j = 0; j<questions[i].answers.length; j++){
            var li = $("<li <input='radio'>");
            
           
            li.text(questions[i].answers[j]);
            ul.append(li);
            $("#quiz").append(ul);
        }
    };
     
    
};




run();
showQuestions();

    
console.log(questions);

//<form class="questionForm" id="q1" data-question="1">
{/* <h3>Who of the following was not playable in Smash 64?</h3>  
<ul>
    <li><input type="radio" name="q1" value="a">Yoshi</li>
    <li><input type="radio" name="q1" value="b">Pikachu</li>
    <li><input type="radio" name="q1" value="c">Ness</li>
    <li><input type="radio" name="q1" value="d">Peach</li>
</ul>
</form> */}
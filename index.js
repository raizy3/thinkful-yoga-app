const STORE=[
    {

        photo:"yoga-images/easy-pose.jpg",
        options:["Easy Pose","Meditation Pose","Crosslegged Pose","Prayer Pose"],
        correctAnswer:"Easy Pose"},
    
    {

        photo:"yoga-images/downward-dog.jpg",
        options:["Downward Dog", "Gosh, I just noticed that I need a manicure",
            "Triangle Pose", "Calf Stretch"],
        correctAnswer:"Downward Dog"
    },

    {
        photo:"yoga-images/side-plank-pose.jpg",
        options:["This is way harder than it looks", "Side Plank", "Extended Side Twist",
                    "Reach for the Stars Pose"],
        correctAnswer:"Side Plank"
    },

    {
        photo:"yoga-images/extended-childs-pose.jpg",
        options:["Puppy Posture", "Worship Pose", "Extended Child's Pose",
                    "Finally, a break!"],
        correctAnswer:"Extended Child's Pose"
    },

    {
        photo:"yoga-images/dancer-pose.jpg",
        options:["Nope, not even gonna try that one", "Dancer Pose",
                    "One-legged Tree Pose", "Balance Posture"],
        correctAnswer:"Dancer Pose"
    }
]
//set values for current question and 
let currentQuestion=0;
let score=0;

function startQuiz(){
   $(".js-question-box").on('click', '#start', function (e){
    e.preventDefault();
    currentQuestion=0;
    score=0;
        renderQuiz(currentQuestion);
        getAnswerFeedback();
   });
}
//Display options for each question
function generateOptionsString(){
    console.log('generating question');

    let myOptions = STORE[currentQuestion].options;

    for(let i=0;i<myOptions.length;i++){
        $(".js-options").append(`<input type="radio" name="pose" value="${myOptions[i]}" id="pose-${i+1}" class="multiple-choice"required> <label for="pose-${i+1}">${myOptions[i]}</label><br>`);
    };
 }

//creates the HTML for the question pages
function renderQuiz(currentQues){
    console.log('`renderQuiz` ran');
    let photo = STORE[currentQues].photo;

    const quizStartString=`<form class=><fieldset><legend>What is the Name of this Yoga Pose?<img class="photo" src="${photo}" alt="Woman in a crosslegged seat with hands at her heart"></legend><div class="js-options"></div><button type="submit" class="js-submit" >Submit</button><button type="submit" class="next">Next</button></fieldset></form>`;

    $('.js-question-box').html(quizStartString);

    generateOptionsString();

    whatQuestion();

    displayScore();

    $('.next').hide();


}

//display the question number
function whatQuestion(){
    console.log('`whatQuestion ran')
    $(".js-question-number").html(`<span> Question: ${currentQuestion+1}</span>`)
    //Display the number of the question the header
}

//responsible to display number of correct answers so far
function displayScore(){
    console.log('displaying Score');
    $(".js-score-header").html(`<span>Score: ${score}/${STORE.length}</span>`);

}

//responsible to give feedback on whether answer is correct or incorrect
function rightAnswer(){
    console.log(`what's your answer?`)
    $('.js-submit').hide();
    $('.next').show();

   let answer = $("input[name=pose]:checked").val();
    let correct = STORE[currentQuestion].correctAnswer;
    
    if(answer === correct){
        score++;

        displayScore();
        $('.js-options').append('<p>Correct!</p>');
    }
    else{
        $('.js-options').append(`<p>Nope, the correct answer is ${correct}`)
    };

    currentQuestion++;

    
   
}

//Answer feedback on submit
function getAnswerFeedback(){
    $('form').on('click', '.js-submit', function(e){
        e.preventDefault();
       rightAnswer();
       nextQuestion();
    });
}



//responsible to take user to next question
function nextQuestion(){
    $('form').on('click', '.next', function(e){
        e.preventDefault();
        if(currentQuestion===STORE.length){
           yourResults();
        }
       
        else{
        renderQuiz(currentQuestion);
        getAnswerFeedback();
    };
});

}
//Resets the QUestion and Score Values and rerenders the question
/*function restartQuiz(){
    $('.js-question-box').on('click', '.restart-quiz', function(e){
        console.log('restartQuiz ran');
        e.preventDefault();
        currentQuestion=0;
        score=0;
        renderQuiz(currentQuestion);
        restartQuiz();
    });
    

}*/
//responsible to display the Score Page when the quiz is finished
function yourResults(){
    console.log(`your results ran`);
    const resultString=`<h3>Your Score is ${score}</h3><p>I hope you'll join me for a class sometime!</p><button id="start" type="submit">Retry</button>`;
    $('.js-question-box').html(resultString);
    startQuiz();
}

//Calls the above functions
function runQuiz(){
    startQuiz();
    getAnswerFeedback();
   // restartQuiz();
  
}

$(runQuiz())
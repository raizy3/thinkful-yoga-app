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
        photo:"dancer-pose.jpg",
        options:["Nope, not even gonna try that one", "Dancer Pose",
                    "One-legged Tree Pose", "Balance Posture"],
        correctAnswer:"Dancer Pose"
    }
]
//set values for current question and 
let currentQuestion=0;
let score=0;
function startQuiz(){
   // $("#start").on('click', function (event){
        renderQuiz();
  //  });
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
function renderQuiz(){
    console.log('`renderQuiz` ran');
    let photo = STORE[currentQuestion].photo;

    const quizStartString=`<form class=><fieldset><legend>What is the Name of this Yoga Pose?<img class="photo" src="${photo}" alt="Woman in a crosslegged seat with hands at her heart"></legend><div class="js-options"></div><button type="submit" class="js-submit" >Submit</button><button type="submit" class="next">Next</button></fieldset></form>`;

    $('.js-question-box').html(quizStartString);

    generateOptionsString();

    whatQuestion();

    displayScore();

    $('.next').hide();
    //form should be rendered in ".js-question-box"
    //form should include a legend with question
    //loop through objects in STORE and render 'photo' in the div
    //and render 'options' as radio inputs
    //render a button to check answer


}

//display the question number
function whatQuestion(){
    console.log('`whatQuestion ran')
    $(".js-header-display").html(`<h2>Question: ${currentQuestion+1}</h2>`)
    //Display the number of the question the header
}

//responsible to display number of correct answers so far
function displayScore(){
    console.log('displaying Score');
    $(".js-header-display").append(`<h2>Score: ${score}/5</h2>`);

}

//responsible to give feedback on whether answer is correct or incorrect
function rightAnswer(){
    $('.js-submit').hide;
    $('.next').show;
    let answer = $("input[name=pose]:checked").val();
    let correct = STORE[currentQuestion].correctAnswer;
    if(answer === correct){
        score++;
        $('js-options').append('<p>Correct!</p>');
    }
    else{
        $('js-options').append(`<p>Nope, the correct answer is ${correct}`)
    };
}

//Answer feedback on submit
function getAnswerFeedback(){
    $('form').on('click', '.js-submit', function(e){
        console.log('is your answer correct?')
        e.preventDefault();
        rightAnswer();
    });
}



//responsible to take user to next question
function nextQuestion(){

}

//responsible to display the Score Page when the quiz is finished
function yourResults(){

}

//Calls the above functions
function runQuiz(){
    startQuiz();
    getAnswerFeedback();
    nextQuestion();
    yourResults();
}

$(runQuiz())
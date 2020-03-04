const STORE=[
    {

        photo:"easy-pose.jpg",
        options:["Easy Pose","Meditation Pose","Crosslegged Pose","Prayer Pose"],
        correctAnswer:"Easy Pose"},
    
    {

        photo:"downward-dog.jpg",
        options:["Downward Dog", "Gosh, I just noticed that I need a manicure",
            "Triangle Pose", "Calf Stretch"],
        correctAnswer:"Downward Dog"
    },

    {
        photo:"side-plank-pose.jpg",
        options:["This is way harder than it looks", "Side Plank", "Extended Side Twist",
                    "Reach for the Stars Pose"],
        correctAnswer:"Side Plank"
    },

    {
        photo:"extended-childs-pose.jpg",
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

//Start the quiz
function renderQuiz(){
    console.log('`renderQuiz` ran')
    const quizStartString='<form><fieldset><legend>What is the Name of this Yoga Pose?</legend> <div> <img src="yoga-images/easy-pose.jpg" alt="woman sitting in a crosslegged seat"></div></fieldset></form>';

    $('.js-question-box').html(quizStartString);
    //form should be rendered in ".js-question-box"
    //form should include a legend with question
    //loop through objects in STORE and render 'photo' in the div
    //and render 'options' as radio inputs
    //render a button to check answer
}

//display the question number
function whatQuestion(){
    console.log('`whatQuestion ran')
    //Display the number of the question the header
}

//responsible to display number of correct answers so far
function displayScore(){

}

//responsible to give feedback on whether answer is correct or incorrect
function rightAnswer(){

}


//responsible to take user to next question
function nextQuestion(){

}

//responsible to display the Score Page when the quiz is finished
function yourResults(){

}

//Calls the above functions
function runQuiz(){
    renderQuiz();
    nextQuestion();
    yourResults();
}

$(runQuiz())
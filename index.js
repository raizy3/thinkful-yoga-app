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
        photo:"side-plank-pose.jpg"
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
                    "One-legged Tree Pose", "Balance Posture"]
        correctAnswer:"Dancer Pose"
    }
]

//Start the quiz
function renderQuiz(){
    console.log('`renderQuiz` ran')
    //render the quiz question and multiple choice options
}

//display the question number
function whatQuestion(){
    console.log('`whatQuestion ran')
    //Display the number of the question the header
}

//responsible to display number of correct answers so far
function displayScore(){

}

//responsible to give feedback if answer is correct
function rightAnswer(){

}


//responsible to display feedback for incorrect answers
function wrongAnswerFeedback(){

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
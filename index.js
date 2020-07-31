$(function() {
    mainMenuStart();
    verifyAnswer();
});

function updateScore(currentScore)  {
    $('#js-score').html(`${currentScore}`)
}

function mainMenuStart() {          //handles click event for the button on the main screen that starts the test
    console.log('mainMenuStart function ran')
    $('.js-main-menu-btn').click(function(event) {      //main menu button event
        handleScoreBarVisibility();
        render();
        console.log('button clicked');
    })
}

function increaseQuestion() {
    questionNumber++;
    currentQuestionIndex++;
}

function verifyAnswer() {
    $('.quiz-questions').on('submit', function(event)   {
        event.preventDefault();
        console.log('The submit button says: "You touched me!"');
        let userAnswer = "Bane";
        console.log(typeof(userAnswer), typeof(correctAnswer));
        let selected = $('input:checked');
        if (true)   {
            score++;
            updateScore(score);            
            $('.comment-section')
            .html(`<p>Correct! The correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
            <p>${quizDataBase[currentQuestionIndex].comment}</p>`)
            .fadeIn();
        }
    })
}

function handleScoreBarVisibility()   {     // hides/unhides score bar results
    $('.score-bar div').toggleClass('hidden');
}

function render()   {    // this function conditionally regenerates the view each time the store is updated
    $('#js-question-number').html(`${questionNumber}/${quizDataBase.length}`);
    updateScore(score);
    $('.js-main-screen').html(quizLayout);
}

function startOver()  {     //  Resets variables to the starting point, used when user wants to take the test again
    score = 0;
    questionNumber = 1;
    currentQuestionIndex = 0;
}



$(function() {
    mainMenuStart();
    verifyAnswer();
    goToNextScreen()
});

function updateScore(currentScore)  {
    $('#js-score').html(`${currentScore}`)
}

function mainMenuStart() {          //handles click event for the button on the main screen that starts the test
    console.log('mainMenuStart function ran')
    $('.js-main-menu-btn').click(function(event) {      //main menu button event
        handleScoreBarVisibility();
        render();
    })
}

function increaseQuestion() {
    questionNumber++;
    currentQuestionIndex++;
}

function verifyAnswer() {
    $('.quiz-questions').on('submit', function(event)   {
        event.preventDefault();
        console.log('VerifyAnswer function ran');
        $('#js-check-answer-btn').replaceWith(nextButton);
        let correctAnswer = getCorrectAnswer();
        let userAnswer = $('input:checked').val();
        if (userAnswer === correctAnswer)   {
            score++;
            updateScore(score);            
            $('.comment-section')
            .html(`<p>KA-POW! You are right! Correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
            <p>${quizDataBase[currentQuestionIndex].comment}</p>`)
            .fadeIn();
        } else  {
            $('.comment-section')
            .html(`<p>Are you afraid of the bats? You're wrong! Correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
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
    $('.js-main-screen').html(quizLayout());
    questionsForm();
}

function goToNextScreen() {
    //add if statements

    $('.quiz-questions').on('click', '#js-next-question-btn', function(event)   {
        console.log('goToNextScreen function ran');
        increaseQuestion();
        console.log(questionNumber);
        render();
        // $('#js-check-answer-btn').replaceWith(nextButton);
        // let userAnswer = $('input:checked').val();
        // console.log(userAnswer);
        // if (userAnswer === correctAnswer)   {
        //     score++;
        //     updateScore(score);            
        //     $('.comment-section')
        //     .html(`<p>KA-POW! You are right! Correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
        //     <p>${quizDataBase[currentQuestionIndex].comment}</p>`)
        //     .fadeIn();
        // } else  {
        //     $('.comment-section')
        //     .html(`<p>Bummer! Are you afraid of the bats? Correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
        //     <p>${quizDataBase[currentQuestionIndex].comment}</p>`)
        //     .fadeIn();
        // }
    })

}

function startOver()  {     //  Resets variables to the starting point, used when user wants to take the test again
    score = 0;
    questionNumber = 1;
    currentQuestionIndex = 0;
}



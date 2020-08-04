$(function() {
    mainMenuStart();
    verifyAnswer();
    handleNextQuestion()
    startOverButton();
});

function mainMenuStart() {          //handles click event for the button on the main screen that starts the test
    $('.js-main-menu-btn').click(function(event) {      //main menu button event
        toggleScoreBarVisibility();
        render();
    })
}

function updateScore(currentScore)  {
    $('#js-score').html(`${currentScore}`)
}

function verifyAnswer() {
    $('.quiz-questions').on('submit', function(event)   {
        event.preventDefault();
        if (questionNumber === questionsCount)  {
            $('#js-check-answer-btn').replaceWith(finishButton);
        } else {$('#js-check-answer-btn').replaceWith(nextButton);}
        
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

function handleNextQuestion() {
    $('.quiz-questions').on('click', '#js-next-question-btn', function(event)   {
    if (questionNumber === questionsCount)  {
        summaryDisplay();
    } else if (questionNumber < questionsCount) {
        increasingQuestionStats();
        render();
        }
    })
}

function startOverButton()  {
    $('.quiz-questions').on('click', '#js-start-over-btn', function(event) {
        startOver();
        toggleScoreBarVisibility();
        render();
    })
}

function increasingQuestionStats() {
    questionNumber++;
    currentQuestionIndex++;
}

function questionsForm()  {     //make  a new version using .map() or .each() method...
    $('.answers-form').html(`<form>
        <input name="answer" type="radio" value="${quizDataBase[currentQuestionIndex].answers[0]}" required> 
            <label for="red">${quizDataBase[currentQuestionIndex].answers[0]}</label><br>
        <input name="answer" type="radio" value="${quizDataBase[currentQuestionIndex].answers[1]}" required>
            <label for="blue">${quizDataBase[currentQuestionIndex].answers[1]}</label><br>
        <input name="answer" type="radio" value="${quizDataBase[currentQuestionIndex].answers[2]}" required>
            <label for="white">${quizDataBase[currentQuestionIndex].answers[2]}</label><br>
        <input name="answer" type="radio" value="${quizDataBase[currentQuestionIndex].answers[3]}" required>
            <label for="white">${quizDataBase[currentQuestionIndex].answers[3]}</label><br>
        <button type="submit" class="btn" id="js-check-answer-btn">Submit</button>
    </form>`);
  }

function getCorrectAnswer() {
    return `${quizDataBase[currentQuestionIndex].answers[quizDataBase[currentQuestionIndex].correctAnswerIndex]}`;
  }

function toggleScoreBarVisibility()   {     // hides/unhides score bar results
    $('.score-bar div').toggleClass('hidden');
}

function render()   {    // this function conditionally regenerates the view each time the store is updated
    $('#js-question-number').html(`${questionNumber}/${quizDataBase.length}`);
    updateScore(score);
    $('.js-main-screen').html(quizLayout(questionNumber, currentQuestionIndex));
    questionsForm();
}

function startOver()  {     //  Resets variables to the starting point, used when user wants to take the test again
    score = 0;
    questionNumber = 1;
    currentQuestionIndex = 0;
}

function summaryDisplay() {
    toggleScoreBarVisibility();
    $('.js-main-screen').html(printSummary());
}

function printSummary() {
    let summary = `<h1>It's over!</h1>
    <p>You scored ${score} points!</p>
    <p>${quizDataBase.length - score} out of ${quizDataBase.length} questions where incorrect. If you want to try again, smash the button below.</p>
    <button type="button" class="btn" id="js-start-over-btn">Start over</button>`;
    return summary;
  }
  
function quizLayout(questionNumber, currentQuestionIndex) {
    let outputLayout = `<div class="question">
    <h2>Question ${questionNumber}</h2>
    <p>${quizDataBase[currentQuestionIndex].question}</p>
    </div>
    <div class="answers-form">
    </div>
    <div class="comment-section">
    <p>Put a comment here.</p>
    </div> `;
    return outputLayout;
} 


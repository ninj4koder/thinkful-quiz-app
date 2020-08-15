function handleMainMenu(questionsDataBase) {     //handles click event for the button on the main screen,
    $('.js-main-menu-btn').click(function(event) {             //that starts the test main menu button event
        toggleScoreBarVisibility();
        render(questionsDataBase);
    })
}

function updateScoreBar(currentScore)  {
    $('#js-score').html(`${currentScore}`)
}

function handleSumbit(questionsCount, questions) {               // function handles everything regarding question generating,including testing if it should display a question
    
    $('.quiz-questions').on('submit', function(event)   {             //or summary, if question was correct or wrong and prints comments respectively
        event.preventDefault();
        let currentQuestionIndex = STORE.currentQuestionIndex;
        let questionNumber = STORE.questionNumber;
        if (questionNumber === questionsCount)  {           //update buttons()
            $('#js-check-answer-btn').replaceWith(generateSummaryButton());
        } else {
            $('#js-check-answer-btn').replaceWith(generateNextButton());
        }        
        let correctAnswer = getCorrectAnswer(questions[currentQuestionIndex]);
        let userAnswer = $('input:checked').val();
        if (userAnswer === correctAnswer)   {
            increaseUserPoints();
            updateScoreBar(STORE.score);  
            displayCorrectAnswerComment(correctAnswer, questions[currentQuestionIndex].comment);
        } else  {
            displayWrongAnswerComment(correctAnswer, questions[currentQuestionIndex].comment);
        }
    })    
}

function handleNextQuestion(questionsCount) {
    
    $('.quiz-questions').on('click', '#js-next-question-btn', function(event)   {
        let questionNumber = STORE.questionNumber;
        if (questionNumber === questionsCount)  {
            toggleScoreBarVisibility();
            $('.js-main-screen').html(printSummary());
        } else if (questionNumber < questionsCount) {
            increaseQuestionStats();
            render(STORE.quizDataBase);
        }
    })
}

function handleStartOver()  {       //  resets variables and app layout
    $('.quiz-questions').on('click', '#js-start-over-btn', function(event) {
        startOver();
        toggleScoreBarVisibility();
        render(STORE.quizDataBase);
    })
}

function increaseQuestionStats() {
    STORE.questionNumber++;
    STORE.currentQuestionIndex++;
}

function increaseUserPoints()   {
    STORE.score++;
}

function generateQuestion(question) { 
    let questionList = ''
    question.answers.forEach(element => {
        questionList += `<input name="answer" type="radio" value="${element}" required> 
        <label for="red">${element}</label><br>`;
    })    
    let questionTemplate = `
        <form>
            <fieldset>
                <legend class="questionText">${question.question}</legend>
            </fieldset>
            ${questionList}
            <button type="submit" class="btn" id="js-check-answer-btn">Submit</button>
        </form>`;
        return questionTemplate;
}

function getCorrectAnswer(question) {           //function gets correct answer from the data base
    // let quizDataBase = STORE.quizDataBase;
    // let currentQuestionIndex = STORE.currentQuestionIndex;
    return `${question.answers[question.correctAnswerIndex]}`;
  }

function toggleScoreBarVisibility()   {     // hides/unhides score bar results
    $('.score-bar div').toggleClass('hidden');
}

function render(questionsDataBase)   {    // function conditionally regenerates the view each time the store is updated
    $('#js-question-number').html(`${STORE.questionNumber}/${questionsDataBase.length}`);
    updateScoreBar(STORE.score);
    $('.js-main-screen').html(generateQuizLayout(STORE.questionNumber));
    $('.answers-form').html(generateQuestion(questionsDataBase[STORE.currentQuestionIndex]));
}

function startOver()  {     //  Resets variables to the starting point, used when user wants to take the test again
    STORE.score = 0;
    STORE.questionNumber = 1;
    STORE.currentQuestionIndex = 0;
}

function printSummary() {       //template displaying the summary
    let score = STORE.score;
    let quizDataBase = STORE.quizDataBase;
    let summary = `<h1>It's over!</h1>
    <p>You scored ${score} points!</p>
    <p>${quizDataBase.length - score} out of ${quizDataBase.length} questions where incorrect. If you want to try again, smash the button below.</p>`;
    summary += generateStartOverButton();  //append "start over" button
    return summary;
  }
  
function generateQuizLayout(questionNumber) {  //  template serving single question 
    return `<div class="question">
    <h2>Question ${questionNumber}</h2>
    </div>
    <div class="answers-form">
    </div>
    <div class="comment-section">
    <p>Put a comment here.</p>
    </div> `;
}

function displayCorrectAnswerComment(correctAnswer, comment)  {
    $('.comment-section')
            .html(`<p>KA-POW! You are right! Correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
            <p>${comment}</p>`)
            .fadeIn();
}

function displayWrongAnswerComment(correctAnswer, comment)    {
    $('.comment-section')
            .html(`<p>Are you afraid of the bats? You're wrong! Correct answer is: <span class="correct-answer">"${correctAnswer}"</span></p>
            <p>${comment}</p>`)
            .fadeIn();
}

function setAppVariables(STORE) {       //  sets app variables with correct values
    STORE.questionsCount = STORE.quizDataBase.length;
}

function generateStartOverButton()   {
    return '<button type="button" class="btn" role="button" id="js-start-over-btn">Start over</button>';
}

function generateNextButton()   {
    return `<button type="button" role="button" class="btn" id="js-next-question-btn">Next</button>`;
}

function generateSummaryButton()   {
    return `<button type="button" role="button" class="btn" id="js-next-question-btn">Summary</button>`;
}

$(function() {
    setAppVariables(STORE);
    handleMainMenu(STORE.quizDataBase);
    handleSumbit(STORE.questionsCount, STORE.quizDataBase);
    handleNextQuestion(STORE.questionsCount)
    handleStartOver();
});
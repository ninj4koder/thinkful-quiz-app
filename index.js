$(handleQuiz)

function handleQuiz()  {
    mainMenuStart();
    console.log('handle Quiz function ran');
}

function mainMenuStart() {
    $('.js-main-menu-btn').click(function(event) {
        handleScoreBarVisibility();
        setScoreBarCounts();
        $('.js-main-screen').html(quizLayout);
        console.log('button clicked');
    })
}

function handleScoreBarVisibility()   {     // hides/unhides score bar results
    $('.score-bar div').toggleClass('hidden');
}

function setScoreBarCounts()   {
    $('#js-question-number').html(`${questionNumber}/${quizDataBase.length}`)
    $('#js-score').html(`${score}`)
}

function startOver()  {     //  Resets variables to the starting point
    score = 0;
    questionNumber = 1;
    currentQuestionIndex = 0;
}


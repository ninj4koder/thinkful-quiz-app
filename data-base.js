const STORE = {
  quizDataBase: [
    {
        question: "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
        answers: ["Bane", "Joker", "Killer Croc", "Ra's Al Ghul"],
        correctAnswerIndex: 0,
        comment: "Bane not only defeated Batman, but broke his back, leaving him crippled and wheelchair-bound. Eventually, after much rehabilitation and training with the beautiful but deadly Lady Shiva, Wayne returned to Gotham to reclaim the mantle of the Dark Knight."
      },
    
      {
        question: "Who is credited with creating Batman?",
        answers: ["Jack Kirby", "Joe Shuster", "Bob Kane", "Jerry Siegel"],
        correctAnswerIndex: 2,
        comment: "Although he worked with Bill Finger on the original comics, Bob Kane is generally credited with creating the character of Batman."
      },
    
      {
        question: "What year was the character of Robin first introduced?",
        answers: ["1970", "1940", "1960", "1950"],
        correctAnswerIndex: 1,
        comment: "Bob Kane introduced Batman's young sidekick, Robin the Boy Wonder, in 1940 to give Batman someone to talk to."
      },

      {
        question: "Which of these Bat-villains was introduced first?",
        answers: ["Catwoman", "The Riddler", "Mr. Freeze", "The Penguin"],
        correctAnswerIndex: 0,
        comment: "Catwoman made her first appearance in Batman #1 (Spring, 1940). The Penguin (1941), The Riddler (1948), and Mr. Freeze (1959) were all introduced later."
      },

      {
        question: "Which of the following characters did Bruce Wayne have a son with?",
        answers: ["Talia Al Ghul", "Catwoman", "Vesper Fairchild", "Poison Ivy"],
        correctAnswerIndex: 0,
        comment: "Talia told Batman she'd had a miscarriage, but actually left the child to be raised by the League of Assassins."
      },

      {
        question: "What villain did Arnold Schwarzenegger play in Batman & Robin?",
        answers: ["Two-face", "Bane", "Killer Croc", "Mr. Freeze"],
        correctAnswerIndex: 3,
        comment: "Schwarzenegger played the cold-hearted villain Mr. Freeze to George Clooney's Batman."
      },

      {
        question: "Who is the Joker's accomplice and lover?",
        answers: ["Cheshire", "Poison Ivy", "Scarecrone", "Harley Quinn"],
        correctAnswerIndex: 3,
        comment: "Harley Quinn met the Joker while working as a psychiatrist at Arkham Asylum. During therapy sessions, she fell in love with him and eventually helped him escape."
      },
      
      {
        question: "Who killed Jason Todd (the second Robin)?",
        answers: ["Joker", "Batman", "Bane", "Two-face"],
        correctAnswerIndex: 0,
        comment: "After Jason is killed by the Joker and resurrected in the Lazarus Pit, he goes on to become the Red Hood."
      }],
  score: 0,                 //points gained by the user
  questionNumber: 1,        //question number - used for the score bar display
  currentQuestionIndex: 0,   //current question index - used  in the question template, unlike questionNumber above starts from a 0
  questionsCount: 0,         //needs to be set up after initializing store variable
  nextButton: `<button type="button" role="button" class="btn" id="js-next-question-btn">Next</button>`,
  finishButton: `<button type="button" role="button" class="btn" id="js-next-question-btn">Summary</button>`
  }

            /* ### string templates below ### */

// let questionsCount = quizDataBase.length;
// let nextButton = `<button type="button" role="button" class="btn" id="js-next-question-btn">Next</button>`;
// let finishButton = `<button type="button" role="button" class="btn" id="js-next-question-btn">Summary</button>`;
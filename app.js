const store = {
    questions: [{
            question: 'Which fruit is actually a berry?',
            answers: [
                'Banana',
                'Apple',
                'Pineapple',
                'Kiwi'
            ],
            correctAnswer: 'Banana'
        },
        {
            question: 'Which fruit is made up on a bunch of smaller aggregate fruits?',
            answers: [
                'Watermelon',
                'Raspberry',
                'Blueberry',
                'Cantaloupe'
            ],
            correctAnswer: 'Raspberry'
        },
        {
          question: 'Which fruit is related to roses?',
          answers: [
              'Blueberries',
              'Plum',
              'Watermelon',
              'Peaches'
          ],
          correctAnswer: 'Peaches'
      },
        {
            question: 'Which fruit was sacred in ancient Egypt?',
            answers: [
                'Honeydew Melon',
                'Pomegranate',
                'Kiwis',
                'Pears'
            ],
            correctAnswer: 'Honeydew Melon'
        },
        {
            question: 'Which fruit has air bubbles inside them that allow them to bounce and float?',
            answers: [
                'Blackberries',
                'Elderberries',
                'Strawberries',
                'Cranberries'
            ],
            correctAnswer: 'Cranberries'
        },
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
};








/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//think of this function as a GENERATE page
//this function awaits the end user to click start, then activates the quiz
function generateStartPage() {
  let startPage = `
  <div class="startPage">
  <h1>Welcome to the Frooty Fruit Quiz!</h1>

  <section class="startPageFlex">
      <div class="startPageFruit">
          <div class="fruitPic">
              <img src="https://images.unsplash.com/photo-1589606743932-747c74e7330e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Image of Pineapple"></div>
          <div class="fruitPic">
              <img src="https://images.unsplash.com/photo-1584209742773-f7b461564449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="Image of Kiwi"></div>
          <div class="fruitPic">
              <img src="https://images.unsplash.com/photo-1580157508103-2a4e9fe8ed29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80" alt="Image of Pomegranate"></div>
      </div>
  </section>

  <div class="start-button-center">
  <button class="start-button">
  <span class="button-label">Start!</span>
  </button>
  </div>
</div>`;
  return startPage;
}

//this function renders the start page html from above
function renderStartPage() { 
  $('#container').html(generateStartPage());
}

//this function generates our questions calling upon the question array parameters above
//we will have to erase our correctCount in our end
function generateQuestionPage() {
  let question = store.questions[store.questionNumber];
  console.log(question);
  let questionCount= (store.questionNumber)
  questionCount ++;
  let questionPage = `
<div class="card">
<p>Score:${store.score}</p>
<p>Question:${questionCount}/${store.questions.length}</p>
  <h2>${question.question}</h2>
 <form>
      <label> ${question.answers[0]}</label>
      <input type="radio" name="answer" value="${question.answers[0]}">
      <br>
      <label> ${question.answers[1]}</label>
      <input type="radio" name="answer" value="${question.answers[1]}">
      <br>
      <label> ${question.answers[2]}</label>
      <input type="radio" name="answer" value="${question.answers[2]}">
      <br>
      <label> ${question.answers[3]}</label>
      <input type="radio" name="answer" value="${question.answers[3]}">
      <br>
      <button type="submit">Submit your answer</button>
  </form>
</div>`;
  return questionPage;
}

//this render question function uses the above generate function to output it to html
//this is so the questions are physcially displayed 
function renderQuestionPage(){
  $('.failed').remove();
  console.log(store.questionNumber);
  let questionHTML = generateQuestionPage();
  // insert that HTML into the DOM
  $('#container').html(questionHTML);
}


//grab the value of the question answer and compare that to the defined answer
//if it is right move on to the next question 
//if it is wrong generate feedback and render feedback sequence
function generateFeedback(){
  let failedAnswer= `<div class="failed">
  <p>So close! The right answer is actually ${store.questions[store.questionNumber].correctAnswer} </p>
<br/><button class="next-question">Next question</button></div>`;
return failedAnswer;
}


//after you render the feedback you also need to display a button that advances user on to next question
function renderFeedback(){
let feedback= generateFeedback();
$('#failed').html(feedback);
$('button[type=submit]').remove();
handleNextPage();
}



// this function will generate the end page html and play again button
//it also needs to display the final count of correct answers
function generateEndPage(){
  let endPage = `<div class="endPage">
  <h1>Great Job!</h1>
  <p>Score:${store.score}</p>
  <button class="play-again-button">
    <span class="button-label">Play Again!</span>
  </button>
  </div>`
  return endPage;
}

//this function will take care of displaying the end page html and button
function renderEndPage(){
  $('.failed').remove();
  let endPage = generateEndPage();
  $('#container').html(endPage);
  handleEndPage();
}

//BELOW ARE THE HANDLE FUNCTIONS!!
//javascript is just waiting until a user clicks a button
//handleStartQuiz just renders the start page and starts the quiz
function handleStartQuiz() {
  $('.start-button').on('click',function() {
      store.quizStarted = true;
      renderQuestionPage();
      console.log("Quiz Started!");
  })
}

//the handle function allows for users to submit each question
function handleAnswerSubmit() {
  //here we put the score counter
  //let scoreCount = 0
  $('#container').on("submit", function(){
    let selectedAnswer = document.querySelector('input[name=answer]:checked').value;
    console.log(selectedAnswer, store.questionNumber);
    if (store.questions[store.questionNumber].correctAnswer === selectedAnswer){
      store.score ++;
    }
  })
  $("main").on("submit", "form", function(evt) {
      evt.preventDefault();
      console.log(store.questionNumber);
      if((store.questionNumber + 1) >= store.questions.length){
        store.questionNumber++;
        renderEndPage();
      }else{
        let selectedAnswer = document.querySelector('input[name=answer]:checked').value;
        console.log(selectedAnswer);
        if(selectedAnswer !== store.questions[store.questionNumber].correctAnswer){
          renderFeedback();
        } else {
          store.questionNumber++;
          renderQuestionPage();
        }
      }
  })
}

//this will generate questionPage and render questionPage
//it will also advance store.questionNumber
function handleNextPage(){
  $(".next-question").on("click", function(evt) {
    store.questionNumber++;
    renderQuestionPage();
  });
}

//the handle function will allow users to play again by pressing the play again button
function handleEndPage(){
  $(".play-again-button").on("click", function(evt){
    store.questionNumber = 0;
    store.score = 0;
    store.quizStarted = false;
    renderStartPage();
    handleStartQuiz();
  });
}


//main function is going to do the modifications on our DOM
//first call main
//then it will render functions which modify the DOM
//then it will handle our functions which add our event listeners (also modifying the DOM)
//
function main() {
  console.log("hi");
  renderStartPage();
  handleStartQuiz();
  handleAnswerSubmit();
}
main();

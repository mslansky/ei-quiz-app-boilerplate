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

function startPage() {
  let startPage = `
<div class="card>
<h2>Welcome to my quiz</h2>
<p> It's going to be great</p>
</div>`;
  return startPage();
}


function render() {
  console.log
  if (store.quizStarted === false) {
      $('main').html(startPage);
  } else if (store.quizStarted) {
      $('main').html(questionPage());
      store.questionNumber++;
      render();
  }
}


function questionPage() {
  let question = store.questions[store.questionNumber];
  console.log(question);
  let questionPage = `
<div class="card">
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


function handleStartQuiz() {
  $('main').on('click', '#start', function() {
      store.quizStarted = true;
      render()
  })
}


function handleAnswerSubmit() {
  $("main").on("submit", "form", function(evt) {
      evt.preventDefault();
      store.questionNumber++;
      render();
  })
}


function main() {
  render();
  handleStartQuiz();
  handleAnswerSubmit();
}
import Question from "./Question.js";
import Quiz from "./Quiz.js";
const App = ((_) => {
  const $choices = document.querySelector(".quiz__choices");
  const $choice = document.querySelectorAll(".quiz__choice");
  const $question = document.querySelector(".quiz__question");
  const $tracker = document.querySelector(".quiz__tracker");
  const $tagline = document.querySelector(".quiz__tagline");
  const $next = document.querySelector(".quiz__next");
  const $progress = document.querySelector(".quiz__progress");
  const $progressInner = document.querySelector(".progress__inner");
  let arr = [...$choice];
  const q1 = new Question(
    "Who is the National Poet of Pakistan?",
    ["Allama Iqbal", "Quiad-e-Azam", "Imran Khan", "Bacha Khan"],
    0
  );
  const q2 = new Question(
    "Who is the founder of Pakistan?",
    ["Rehmant Ali", "Quiad-e-Azam", "Sir Syed Ahmed Khan", "Bacha Khan"],
    1
  );
  const q3 = new Question(
    "What is the National Animal of Pakistan?",
    ["Lion", "Tiger", "Polar Bear", "Markhor"],
    3
  );
  const q4 = new Question(
    "When was Pakistan became Independent?",
    ["1945", "1938", "1947", "1931"],
    2
  );
  const quiz = new Quiz([q1, q2, q3, q4]);
  console.log(quiz);
  const listeners = () => {
    $choices.addEventListener("click", (e) => {
      if (e.target.classList.contains("quiz__choice")) {
        for (let item of [...$choices.children]) {
          console.log(item);
          item.classList.remove("active");
        }
        e.target.classList.add("active");
        e.target.lastElementChild.checked = true;
      }
    });

    $next.addEventListener("click", () => {
      let selectedOption;
      selectedOption = document.querySelector('input[name="choice"]:checked');
      if (Number(selectedOption?.value) > -1) {
        quiz.evaluate(Number(selectedOption.value));
      }
      if (quiz.ended()) {
        renderEndScreen();
      } else {
        renderAll();
      }
    });
  };

  const renderQuestion = (question) => {
    $question.innerHTML = question;
  };

  const renderTracker = (current, length) => {
    $tracker.innerHTML = `${current + 1} of ${length}`;
  };

  const renderTagLine = () => {
    quiz.ended()
      ? ($tagline.innerHTML = `Your Score is ${
          (quiz.score / quiz.questions.length) * 100
        }%`)
      : ($tagline.innerHTML = "Pick a choice below");
  };

  const renderChoices = () => {
    let markup = "";

    for (let i = 0; i < quiz.currentQuestion().options.length; i++) {
      markup += `
  <div class="quiz__choice">
${quiz.currentQuestion().options[i]}
<i class="fa-solid fa-check check"></i>
<input value="${i}" type="radio" class="radio" name="choice" id="choice${i}">
 </div>
  `;
    }

    $choices.innerHTML = markup;
  };

  const renderProgress = () => {
    let width = $progressInner.style.width;
    console.log("here is the width ", width);

    
    $progressInner.style.width = `${((quiz.currentIndex)/quiz.questions.length)*200}px`;


  
  };

  const renderAll = () => {
    renderQuestion(quiz.currentQuestion().question);
    renderTracker(quiz.currentIndex, quiz.questions.length);
    renderTagLine();
    renderChoices();
    renderProgress();
  };
  const renderEndScreen = () => {
    renderQuestion("Great Job!");
    renderTracker(quiz.currentIndex, quiz.questions.length);
    renderTagLine();
    // renderChoices();
    renderProgress();
    $next.classList.add("nonActive");
  };

  return {
    listeners,
    renderAll,
  };
})();

App.listeners();
App.renderAll();

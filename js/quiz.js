const quizForm = document.querySelector(".quiz-form");

const output = document.querySelector(".output");
const submitBtn = document.querySelector('[type="submit"]');

let score = 0;

const answers = [
  "90",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "equilateral triangle",
  "80",
];

function flush(score) {
  submitBtn.innerHTML = "In progress...";
  output.innerHTML = "";

  setTimeout(() => {
    output.setAttribute("class", "result");
    output.innerHTML = `You scored ${score} points`;
  }, 3000);

  setTimeout(() => {
    submitBtn.innerHTML = "Submit";
  }, 2999);
}

quizForm.addEventListener("submit", (e) => {
  let formData = new FormData(quizForm);
  let index = 0;

  for (let value of formData) {
    if (answers[index] == value[1]) {
      score++;
    }
    index++;
  }

  flush(score);
  score = 0;
  e.preventDefault();
});

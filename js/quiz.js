const quizForm = document.querySelector(".quiz-form");

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
  let para = document.createElement("p");

  para.innerHTML = `You scored ${score} points`;

  para.setAttribute("class", "result");
  quizForm.insertBefore(
    para,
    quizForm.childNodes[quizForm.childNodes.length - 2]
  );

  setTimeout(() => {
    para.remove();
  }, 3000);
}

quizForm.addEventListener("submit", (e) => {
  let formData = new FormData(quizForm);
  let index = 0;

  for (let value of formData) {
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);
    if (answers[index] == value[1]) {
      score++;
    }
    index++;
  }

  flush(score);
  score = 0;
  e.preventDefault();
});

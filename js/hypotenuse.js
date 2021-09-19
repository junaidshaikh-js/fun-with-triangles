const baseValue = document.querySelector("#base");

const heightValue = document.querySelector("#height");

const hypotenuseForm = document.querySelector(".hypotenuse-form");

const output = document.querySelector(".output");
const submitBtn = document.querySelector('[type="submit"]');

function flush(hypotenuse) {
  submitBtn.innerHTML = "Calculating...";
  output.innerHTML = "";

  setTimeout(() => {
    output.setAttribute("class", "result");
    output.innerHTML = `The length of hypotensuse is ${hypotenuse}`;
  }, 3000);

  setTimeout(() => {
    submitBtn.innerHTML = "Calculate Hypotenuse";
  }, 2999);
}

function calculateHypotenuse(e) {
  const base = +baseValue.value;
  const height = +heightValue.value;

  const hypotenuse = Math.sqrt(base ** 2 + height ** 2);

  flush(hypotenuse.toFixed(2));

  e.preventDefault();
}

hypotenuseForm.addEventListener("submit", calculateHypotenuse);

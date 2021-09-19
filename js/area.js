const baseValue = document.querySelector("#base");

const heightValue = document.querySelector("#height");

const areaForm = document.querySelector(".area-form");

const output = document.querySelector(".output");
const submitBtn = document.querySelector('[type="submit"]');

function flush(area) {
  submitBtn.innerHTML = "Calculating...";
  output.innerHTML = "";

  setTimeout(() => {
    output.setAttribute("class", "result");
    output.innerHTML = `The area of triangle is ${area}`;
    output.setAttribute("class", "result");
  }, 3000);

  setTimeout(() => {
    submitBtn.innerHTML = "Calculate Area";
  }, 2999);
}

function calculateArea(e) {
  const base = +baseValue.value;
  const height = +heightValue.value;

  const area = (1 / 2) * (base * height);

  flush(area.toFixed(2));

  e.preventDefault();
}

areaForm.addEventListener("submit", calculateArea);

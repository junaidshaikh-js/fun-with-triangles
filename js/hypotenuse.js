const baseValue = document.querySelector("#base");

const heightValue = document.querySelector("#height");

const hypotenuseForm = document.querySelector(".hypotenuse-form");

function flush(hypotenuse) {
  let para = document.createElement("p");

  para.innerHTML = `The length of hypotensuse is ${hypotenuse}`;

  para.setAttribute("class", "result");
  hypotenuseForm.insertBefore(
    para,
    hypotenuseForm.childNodes[hypotenuseForm.childNodes.length - 2]
  );

  setTimeout(() => {
    para.remove();
    baseValue.value = "";
    heightValue.value = "";
  }, 3000);
}

function calculateHypotenuse(e) {
  const base = +baseValue.value;
  const height = +heightValue.value;

  const hypotenuse = Math.sqrt(base ** 2 + height ** 2);

  flush(hypotenuse.toFixed(2));

  e.preventDefault();
}

hypotenuseForm.addEventListener("submit", calculateHypotenuse);

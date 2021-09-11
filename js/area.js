const baseValue = document.querySelector("#base");

const heightValue = document.querySelector("#height");

const areaForm = document.querySelector(".area-form");

function flush(area) {
  let para = document.createElement("p");

  para.innerHTML = `The area of triangle is ${area}`;

  para.setAttribute("class", "result");
  areaForm.insertBefore(
    para,
    areaForm.childNodes[areaForm.childNodes.length - 2]
  );

  setTimeout(() => {
    para.remove();
    baseValue.value = "";
    heightValue.value = "";
  }, 3000);
}

function calculateArea(e) {
  const base = +baseValue.value;
  const height = +heightValue.value;

  const area = (1 / 2) * (base * height);

  flush(area.toFixed(2));

  e.preventDefault();
}

areaForm.addEventListener("submit", calculateArea);

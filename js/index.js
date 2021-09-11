const angle1 = document.querySelector("#angle-1");

const angle2 = document.querySelector("#angle-2");

const angle3 = document.querySelector("#angle-3");

const angleForm = document.querySelector(".is-triangle-form");

console.log(angleForm);

function flush(one, two, three) {
  let sum = one + two + three;
  let para = document.createElement("p");

  if (sum == 180) {
    para.innerText = `Yayy!! The angles forms a triangle`;
  } else {
    para.innerText = `Oh ho!! The angles do no form a triangle.`;
  }

  para.setAttribute("class", "result");
  angleForm.insertBefore(
    para,
    angleForm.childNodes[angleForm.childNodes.length - 2]
  );

  setTimeout(() => {
    para.remove();
    angle1.value = "";
    angle2.value = "";
    angle3.value = "";
  }, 3000);
}

function isTriangle(e) {
  const angleOneValue = +angle1.value;
  const angleTwoValue = +angle2.value;
  const angleThreeValue = +angle3.value;

  flush(angleOneValue, angleTwoValue, angleThreeValue);

  e.preventDefault();
}

angleForm.addEventListener("submit", isTriangle);

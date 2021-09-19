const angle1 = document.querySelector("#angle-1");

const angle2 = document.querySelector("#angle-2");

const angle3 = document.querySelector("#angle-3");

const angleForm = document.querySelector(".is-triangle-form");

const submitBtn = document.querySelector('[type="submit"]');

const output = document.querySelector(".output");

function flush(one, two, three) {
  submitBtn.innerHTML = "calculating...";
  output.innerHTML = "";

  setTimeout(() => {
    let sum = one + two + three;

    if (sum == 180) {
      output.innerHTML = `Yayy!! The angles forms a triangle`;
    } else {
      output.innerText = `Oh no!! The angles do no form a triangle.`;
    }

    output.setAttribute("class", "result");
    angleForm.insertBefore(
      para,
      angleForm.childNodes[angleForm.childNodes.length - 2]
    );
  }, 3000);

  setTimeout(() => {
    submitBtn.innerHTML = "Check";
  }, 2999);
}

function isTriangle(e) {
  const angleOneValue = +angle1.value;
  const angleTwoValue = +angle2.value;
  const angleThreeValue = +angle3.value;

  flush(angleOneValue, angleTwoValue, angleThreeValue);

  e.preventDefault();
}

angleForm.addEventListener("submit", isTriangle);

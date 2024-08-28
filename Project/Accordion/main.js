const accordionWrapper = document.querySelector(".accordionWrapper");

//console.log(data);

function displayAccordionData() {
  data.map((item) => {
    const accordionDiv = document.createElement("div");
    const accordionQuestionDiv = document.createElement("div");
    const accordionAnswerDiv = document.createElement("div");
    const answerText = document.createElement("p");
    const quesionText = document.createElement("h2");
    const quesionIcon = document.createElement("i");

    quesionIcon.classList.add("fa-solid", "fa-arrow-up");
    accordionDiv.classList.add("accordion-main");
    accordionQuestionDiv.classList.add("accordion-question");
    accordionAnswerDiv.classList.add("accordion-answer");

    quesionText.textContent = item.question;
    answerText.textContent = item.answer;

    accordionQuestionDiv.appendChild(quesionText);
    accordionQuestionDiv.appendChild(quesionIcon);
    accordionAnswerDiv.appendChild(answerText);
    accordionDiv.appendChild(accordionQuestionDiv);
    accordionDiv.appendChild(accordionAnswerDiv);
    accordionWrapper.appendChild(accordionDiv);
  });
  accordionFunctionaly();
}

//step-1
/* function accordionFunctionaly() {
  const quesions = document.querySelectorAll(".accordion-question");

  quesions.forEach((quesionBtn) => {
    quesionBtn.addEventListener("click", function (event) {
      if (quesionBtn.classList.contains("active")) {
        quesionBtn.classList.remove("active");
      } else {
        let getCurrentActiveClass = document.querySelectorAll(".active");
        getCurrentActiveClass.forEach((currentActiveItem) => {
          currentActiveItem.classList.remove("active");
        });
        quesionBtn.classList.add("active");
      }
    });
  });
} */

function accordionFunctionaly() {
  const questions = document.querySelectorAll(".accordion-main");

  questions.forEach((question) => {
    //console.log(question);
    const quesBtn = question.querySelector(".accordion-question");
    //console.log(quesBtn);
    
    quesBtn.addEventListener("click", () => {
      questions.forEach((item) => {
        //console.log(item);

        if (item !== question) {

          item.classList.remove("show-text")
        }else{
          item.classList.toggle("show-text")
        }
      });
    });
  });
}

displayAccordionData();

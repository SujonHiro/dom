const accordionWrapper = document.querySelector(".accordionWrapper");

//console.log(data);

function displayAccordionData() {
  data.map((item) => {
    const accordionDiv = document.createElement("div");
    const accordionQuestionDiv = document.createElement("div");
    const accordionAnswerDiv = document.createElement("div");
    const answerText = document.createElement("p");
    const quesionText = document.createElement("h2");
    const quesionIcon=document.createElement("i")

    quesionIcon.classList.add("fa-solid", "fa-arrow-up")
    accordionDiv.classList.add("accordion-main");
    accordionQuestionDiv.classList.add("accordion-question");
    accordionAnswerDiv.classList.add("accordion-answer");
   
    quesionText.textContent = item.question;
    answerText.textContent = item.answer;

    accordionQuestionDiv.appendChild(quesionText);
    accordionQuestionDiv.appendChild(quesionIcon)
    accordionAnswerDiv.appendChild(answerText);
    accordionDiv.appendChild(accordionQuestionDiv);
    accordionDiv.appendChild(accordionAnswerDiv);
    accordionWrapper.appendChild(accordionDiv);
  });
  accordionFunctionaly();
}

function accordionFunctionaly() {
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
}

displayAccordionData();

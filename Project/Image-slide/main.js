const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dot-container");
async function fetchImageSlide() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=10",
      {
        method: "GET",
      }
    );
    const result = await response.json();
    if (result && result.length > 0) displayImages(result);
  } catch (error) {
    console.log(error);
  }
}

function displayImages(getImagesList) {
  slider.innerHTML = getImagesList
    .map(
      (item) => `<div class="slide">
          <img src=${item.download_url} alt=${item.author}/>
          </div>`
    )
    .join(" ");

  dotContainer.innerHTML = getImagesList
    .map(
      (item, index) => `<span class="dot ${
        index === 0 ? "active" : ""
      }" data-slide=${index}>
      
      </span>`
    )
    .join(" ");
}

fetchImageSlide();

setTimeout(() => {
  const slide = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;
  function activeSlide(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  }
  function changeCurrentSlide(currentSlide) {
    slide.forEach(
      (sliteItem, index) =>
        (sliteItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }

  changeCurrentSlide(currentSlide);

  nextBtn.addEventListener("click", function () {
    currentSlide++;
    /* let testCurrentSlide=slide.length-1; */
    /* console.log(testCurrentSlide);   */
    if (slide.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeCurrentSlide(currentSlide);
    activeSlide(currentSlide);
  });

  prevBtn.addEventListener("click", function () {
    currentSlide--;

    if (0 > currentSlide) {
      currentSlide = slide.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeSlide(currentSlide);
  });
  dotContainer.addEventListener("click", function (event) {
    
    //console.log(event.target.dataset);
    if (event.target.classList.contains("dot")) {
      const currentSlide = event.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeSlide(currentSlide);
    }
  });
}, 1000);

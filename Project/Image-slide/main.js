const sliderContainer = document.querySelector(".slider-container");
const dotContainer = document.querySelector(".dot-container");

async function fetchImageApi() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=5",
      {
        method: "GET",
      }
    );
    const result = await response.json();

    if (result && result.length) displayImages(result);
  } catch (error) {
    console.log(error);
  }
}
fetchImageApi();

function displayImages(getCurrentImages) {
  sliderContainer.innerHTML = getCurrentImages
    .map(
      (item) =>
        `<div class="slide"><img src=${item.download_url} alt={item.author}/></div>`
    )
    .join(" ");

  dotContainer.innerHTML = getCurrentImages
    .map(
      (item, index) =>
        `<span class="dot ${
          index === 0 ? "active" : ""
        }" data-slide=${index}></span>`
    )
    .join(" ");
}

// slider functionality

setTimeout(() => {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;

  function activeSLide(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  }
  function changeCurrentSlide(currentSlide) {
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }
  changeCurrentSlide(currentSlide);

  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeCurrentSlide(currentSlide);
    activeSLide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeSLide(currentSlide);
  });
  dotContainer.addEventListener("click", (event) => {
    console.log(event.target.classList,event.target.dataset);
    if(event.target.classList.contains('dot')){
      const currentSlide=event.target.dataset.slide
      changeCurrentSlide(currentSlide)
      activeSLide(currentSlide)
    }
  });
}, 1000);

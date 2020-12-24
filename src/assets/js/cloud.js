document.addEventListener(`DOMContentLoaded`, function () {
  //! Анимация
  const features = document.querySelectorAll(".features__item-img");
  const screenshots = document.querySelector(".screenshots__list");

  // Аналог $(document).ready(function(){
  document.addEventListener("scroll", function () {
    if (isPartiallyVisible(screenshots)) {
      screenshots.classList.add("animate__animated");
      screenshots.classList.add("animate__zoomIn");
    }
  });
  document.addEventListener("scroll", function () {
    features.forEach((item) => {
      if (isPartiallyVisible(item)) {
        item.classList.add("animate__animated");
        item.classList.add("animate__swing");
      }
    });
  });

  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return top + height >= 0 && height + window.innerHeight >= bottom + 50;
  }
  //! Конец анимации

  const btnImgArr = document.querySelectorAll(".screenshots__item-img-btn");

  btnImgArr.forEach((img) => {
    let fakeImg = img.lastChild.lastChild;
    img.addEventListener("click", (e) => {
			btnImgArr.forEach((img) => {
				img.lastChild.lastChild.classList.remove("zoom");
			});
      if (!fakeImg.classList.contains("zoom")) {
        fakeImg.classList.add("zoom");
      } else {
        fakeImg.classList.remove("zoom");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("screenshots__item-image") &&
      !e.target.classList.contains("screenshots__item-fake")
    ) {
      btnImgArr.forEach((img) => {
        let fakeImg = img.lastChild.lastChild;
        fakeImg.classList.remove("zoom");
      });
    }
  });
});

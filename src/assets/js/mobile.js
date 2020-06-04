document.addEventListener(`DOMContentLoaded`, function () {

	//! Анимация
  const functions = document.querySelector(".functions");
  const features = document.querySelectorAll(".features__item-img");

  // Аналог $(document).ready(function(){
  document.addEventListener("scroll", function () {
    if (isPartiallyVisible(functions)) {
      functions.classList.add("animate__animated");
      functions.classList.add("animate__zoomIn");
    }
  });
  document.addEventListener("scroll", function () {
		features.forEach(item => {

			if (isPartiallyVisible(item)) {
				item.classList.add("animate__animated");
				item.classList.add("animate__swing");
			}
		})
  });

  function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return top + height >= 0 && height + window.innerHeight >= bottom+50;
	}
	//! Конец анимации
});

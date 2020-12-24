document.addEventListener(`DOMContentLoaded`, function () {

	//! Анимация
  const functions = document.querySelector(".functions__list");
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

	//!Показываем видео только для русских
	const videoContainer = document.querySelector(".mobiles-manual__container");
	const currentPathArr = location.pathname.split("/");
	const mobilesHeroBtn = document.querySelector(".mobile_hero--dwnld_appstore")
	const mobilesAdvBtn = document.querySelector(".mobile_advantages--dwnld_appstore")
	// if (currentPathArr[1] == "ru") {
	// 	videoContainer.classList.add("active")
	// }
	
	switch (currentPathArr[1]) {
		case "ru":
			videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/ru/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/ru/app/id1475739728#?platform=iphone'
			break;
		case "en":
			// videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/us/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/us/app/id1475739728#?platform=iphone'
			break;
		case "it":
			// videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/it/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/it/app/id1475739728#?platform=iphone'
			break;
		case "es":
			// videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/es/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/es/app/id1475739728#?platform=iphone'
			break;
		case "de":
			// videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/de/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/de/app/id1475739728#?platform=iphone'
			break;
		case "fr":
			// videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/fr/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/fr/app/id1475739728#?platform=iphone'
			break;
		case "pt":
			// videoContainer.classList.add("active")
			mobilesHeroBtn.href = 'https://apps.apple.com/pt/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/pt/app/id1475739728#?platform=iphone'
			break;
			
		default:
			mobilesHeroBtn.href = 'https://apps.apple.com/us/app/id1475739728#?platform=iphone'
			mobilesAdvBtn.href = 'https://apps.apple.com/us/app/id1475739728#?platform=iphone'
		break;
	}
});

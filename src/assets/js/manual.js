document.addEventListener(`DOMContentLoaded`, function () {

	const videoContainer = document.querySelector(".manual__item-link--rusManual");
	const currentPathArr = location.pathname.split("/");
	if (currentPathArr[1] == "ru") {
		videoContainer.classList.add("active")
	}

})
document.addEventListener(`DOMContentLoaded`, function () {
  //!================================================================
  //!===================переменные===================================
  //!================================================================

  const currentPathArr = location.pathname.split("/"); 											//* массив путей url
  let 	currentFlag = document.querySelector(".langs__btn-icon"); 					//* текущий флаг(наверху)
  let 	currentLangName = document.querySelector(".langs__btn-text"); 			//* текущее имя локали
  const heroLinks = document.querySelectorAll(".mainhero__item-wrap-link");	//* ссылки на главной странице в hero-section
  const headerLogo = document.querySelector(".header__logo"); 							//* логотип наверху
  const footerLogo = document.querySelector(".footer__logo"); 							//* логотип внизу
  const deskHeroLink = document.querySelector(".deskhero-cta"); 						//* логотип наверху
  const blogLinks = document.querySelectorAll(".rec-btn__btn--blog"); 			//* кнопки READ MORE на странице /blog
  const menuLangLinks = document.querySelectorAll(".langs__item-link"); 		//* кнопки выбора языка
  const downloadAppStoreLink = document.querySelector(".apple-btn--hero"); 	//* кнопка скачать из App Store
  const downloadAppStoreLinkFeatures = document.querySelector(".apple-btn--features"); 	//* кнопка скачать из App Store
  const downloadGooglePlayLink= document.querySelector(".playmarket-cta"); 	//* кнопка скачать из Play Market
  const downloadGooglePlayLinkFeat= document.querySelector(".features-cta"); 	//* кнопка скачать из Play Market
  const blogArtsLinks = document.querySelectorAll(".blog__image-link"); 		//* ссылки на картинках на странице /blog

	if (downloadGooglePlayLink) {
		downloadGooglePlayLink.href="https://play.google.com/store/apps/details?id=rekk.call.recorder"
	}
	if (downloadGooglePlayLinkFeat) {
		downloadGooglePlayLinkFeat.href="https://play.google.com/store/apps/details?id=rekk.call.recorder"
	}
  //!================================================================
  //!===================switch на выбор языка========================
  //!================================================================
  //? Если в пути URL сначала идёт слово из 2х символов или меньше - локаль
  if (currentPathArr[1].length <= 2) {
    switch (currentPathArr[1]) {
      case "":
        currentFlag.src = "/assets/img/icons/flag-en.svg";
        currentLangName.innerHTML = "Eng";
        headerLogo.href = "/";
        footerLogo.href = "/";
        break;
      case "ru":
        currentLangName.innerHTML = "Рус";
        switchLinksGlobal("ru");
        break;
      case "en":
        currentLangName.innerHTML = "Eng";
        switchLinksGlobal("en");
        break;
      case "it":
        currentLangName.innerHTML = "Ita";
        switchLinksGlobal("it");
        break;
      case "es":
        currentLangName.innerHTML = "Esp";
        switchLinksGlobal("es");
        break;
      case "pt":
        currentLangName.innerHTML = "Por";
        switchLinksGlobal("pt");
        break;

      default:
        break;
    }
    //? если в пути после локали есть ещё что то (rekk.io/ru/blog)
    if (currentPathArr[2] && !currentPathArr[3]) {
      let path = "/" + currentPathArr[2];
      switchMainLinks(path);
    }
    //? если в пути после локали есть ещё что то (rekk.io/ru/blog/article)
    if (currentPathArr[3]) {
      let path = "/" + currentPathArr[2] + "/" + currentPathArr[3];
      switchMainLinks(path);
    }
    //? если в начале пути не локаль (rekk.io/cloud) - язык по умолч.
  } else if (currentPathArr[1].length > 2) {
    currentFlag.src = "/assets/img/icons/flag-en.svg";
    currentLangName.innerHTML = "En";
    //? если путь с двойной вложенностью (rekk.io/blog/article)
    if (currentPathArr[2]) {
      let path = "/" + currentPathArr[1] + "/" + currentPathArr[2];
      switchMainLinks(path);
    } else {
      //? если путь с одной вложенностью (rekk.io/desktop)
      let path = "/" + currentPathArr[1];
      switchMainLinks(path);
    }
    //? в других случаях - язык по умолч.
  } else {
    currentFlag.src = "/assets/img/icons/flag-en.svg";
    currentLangName.innerHTML = "En";
  }

  //!====================================================================
  //!=====================ФУНКЦИИ ПОДМЕНЫ ССЫЛОК=========================
  //!====================================================================

  //?меняем ссылки при смене языка
  function switchLinksGlobal(path) {
    currentFlag.src = "/assets/img/icons/flag-" + path + ".svg";
    headerLogo.href = "/" + path;
    footerLogo.href = "/" + path;
    if (heroLinks) {
      switchHeroLinks(path);
    }
    if (blogLinks) {
      switchBlogLinks(path);
    }
    if (downloadAppStoreLink) {
      if (path == "en") {
        switchAppleLink("us");
      } else {
        switchAppleLink(path);
      }
    }
    if (downloadGooglePlayLink) {
      switchGoogleLink(path);
    }
    if (blogArtsLinks) {
      switchBlogArtsLinks(path);
    }
    if (deskHeroLink) {
      deskHeroLink.href = "/" + path + "/cloud";
    }
  }
  //?ссылки на главном экране в index
  function switchHeroLinks(lang) {
    heroLinks.forEach((link) => {
      link.href = `/${lang + link.pathname}`;
    });
  }
  //?ссылки по кнопке Read more в /blog
  function switchBlogLinks(lang) {
    blogLinks.forEach((link) => {
      link.href = `/${lang + link.pathname}`;
    });
  }
  //?ссылки по картинкам на странице /blog
  function switchBlogArtsLinks(lang) {
    blogArtsLinks.forEach((link) => {
      link.href = `/${lang + link.pathname}`;
    });
  }
  //?кнопки языков в главном меню
  function switchMainLinks(path) {
    menuLangLinks.forEach((link) => {
      link.href = link.href + path;
    });
  }
  //?ссылка в APPSTORE
  function switchAppleLink(path) {
    downloadAppStoreLink.href =
      "https://apps.apple.com/" +
      path +
			"/app/rekk-call-recording/id1475739728";
			downloadAppStoreLinkFeatures.href =
      "https://apps.apple.com/" +
      path +
			"/app/rekk-call-recording/id1475739728";
			
  }
  //?ссылка в GooglePlay
  function switchGoogleLink(path) {
		downloadGooglePlayLink.href = "https://play.google.com/store/apps/details?id=rekk.call.recorder";
		// console.log(path);
		
  }
});

document.addEventListener(`DOMContentLoaded`, function () {
  //!================================================================
  //!===================закрывание/открывание меню===================
  //!================================================================

  //?=========================================
  //?=====ременные для подменю applications===
  //?=========================================
  const appmenuBtn = document.querySelector(
    ".header__main-menu-item-link--apps"
  );
  const appmenuList = appmenuBtn.nextSibling;
	const appList = appmenuBtn.parentNode;
	
  //?=========================================
  //?=====переменные для подменю info=========
  //?=========================================
  const submenuBtn = document.querySelector(
    ".header__main-menu-item-link--submenu"
  );
  const submenuList = submenuBtn.nextSibling;
  const curList = submenuBtn.parentNode;

  //?========================================
  //?=====переменные для меню языков=========
  //?========================================
	const langBtn = document.querySelector(".langs__btn");
	const langSubmenuList = langBtn.nextSibling;
  const langList = langBtn.parentNode;

  //?====================================
  //?=====функция "открыть меню"=========
  //?====================================
  function openMenu(btn, list, sublist) {
    btn.addEventListener("click", (e) => {

      e.preventDefault();
      if (!list.classList.contains("active")) {
        list.classList.add("active");
        listenClick(btn, sublist, list);
      } else {
        closeSubmenu(list);
      }
    });
  }

  //?====================================
  //?=====функция "закрыть меню"=========
  //?====================================
  function closeSubmenu(list) {
    list.classList.remove("active");
  }

  //?======================================================
  //?=====функция "закрыть меню по клику вне меню"=========
  //?======================================================
  function listenClick(btn, sublist, list) {
    document.addEventListener("click", (e) => {
      if (e.target != btn && e.target != sublist) {
        closeSubmenu(list);
      }
    });
  }

  //!==========================================
  //!=========запускаем функции меню===========
  //!==========================================
  openMenu(appmenuBtn, appList, appmenuList);
  openMenu(submenuBtn, curList, submenuList);
  openMenu(langBtn, langList, langSubmenuList);

  //!==========================================================================
  //!===================закрывание/открывание гамбургер-меню===================
  //!==========================================================================

  const burger = document.querySelector(".hamburger");
  const mainMenu = document.querySelector(".header__navigation");
  const body = document.querySelector("body");

  function openBurgerMenu() {
    burger.addEventListener("click", (e) => {
      e.preventDefault();

      if (mainMenu.classList.contains("active")) {
        mainMenu.classList.remove("active");
        burger.classList.remove("is-active");
        body.style.overflow = "initial";
      } else {
        body.style.overflow = "hidden";
        mainMenu.classList.add("active");
        burger.classList.add("is-active");
      }
    });
  }

  openBurgerMenu();

  //!==========================================================================
  //!===================закрывание/открывание формы============================
  //!==========================================================================

  const formWrap = document.querySelector(".form__wrap");
  const openFormBtn = document.querySelectorAll(".openFormBtn");
  const closeFormBtn = document.querySelector(".form__close");

  function openForm() {
    openFormBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (!formWrap.classList.contains("active")) {
          formWrap.classList.add("active");
        } else {
          formWrap.classList.remove("active");
        }
      });
    });
  }
  openForm();

  function closeForm() {
    formWrap.classList.remove("active");
  }

  closeFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
  });

  //!==========================================================================
  //!===================отправка формы на сервер===============================
  //!==========================================================================
	const myForm = document.querySelector(".form");
	let sendBtn = document.querySelector(".form__send-button-btn")
	const nameLabel = document.querySelector(".form__label--name")
	const emailLabel = document.querySelector(".form__label--email")
	const messageLabel = document.querySelector(".form__label--message")
  let formData = new FormData(); // то, что нужно передать
  let url = "/send.php"; //подставить URL

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json"; // тип данных
  xhr.open("POST", url); // каким методом отправить
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // заголовок
	
	sendBtn.addEventListener("click", e => {
		e.preventDefault();
		nameLabel.classList.remove("error")
		emailLabel.classList.remove("error")
		messageLabel.classList.remove("error")
		let nameValue = myForm.elements.name.value
		let emailValue = myForm.elements.email.value
		let messageValue = myForm.elements.message.value
		// valid()
		if (nameValue == "") {
			nameLabel.classList.add("error")
			
		} else if (emailValue == "" || emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1) {
			emailLabel.classList.add("error")

		} else if (messageValue == "") {
			messageLabel.classList.add("error")

		} else {
			nameLabel.classList.remove("error")
			emailLabel.classList.remove("error")
			messageLabel.classList.remove("error")
			
			formData.append("name", nameValue);
			formData.append("email", emailValue);
			formData.append("message", messageValue);
			xhr.send(formData); // то, что хотим отправить
		}
	})
  xhr.addEventListener("load", function () {
		
    // пока грузится запрос
		sendBtn.classList.add("blocked")
		sendBtn.disabled = true
		
    if (xhr.status >= 400) {
      // обработка по статусу
			document.querySelector(".form__send-button").classList.add("error")
			sendBtn.classList.remove("blocked")
			sendBtn.disabled = false
    } else {
			let nameValue = myForm.elements.name
			let emailValue = myForm.elements.email
			let messageValue = myForm.elements.message
			sendBtn.classList.remove("blocked")
			sendBtn.disabled = false;
			nameValue.value = "";
			emailValue.value = "";
			messageValue.value = "";
			closeForm();
    }
  });
});

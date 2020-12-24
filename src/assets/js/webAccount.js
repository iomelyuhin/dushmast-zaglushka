document.addEventListener(`DOMContentLoaded`, function () {
  const form = document.querySelector(".form-account");
  const formBtn = document.querySelector(".form-account__send-button-btn");
  const urlParams = window.location.href.split("?")[1];

  const emailInput = form.querySelector("input[name='email']");
  const passInput = form.querySelector("input[name='password']");
  const repassInput = form.querySelector("input[name='re-password']");

  const errorBlock = form.querySelector(".form-account__input-error--server");

  //? подставляем email из параметров в инпут
  function getDefaultEmail(param, input) {
    let urlEmail = param.split("email=")[1];
    input.value = urlEmail;
  }

  if (urlParams) {
    getDefaultEmail(urlParams, emailInput);
  }
	//? подставили email из параметров в инпут
	
	//! валидируем 
	function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
	}
	
  function passwordsMatch(pass, repass) {
    if (pass != repass) {
      return false;
    } else {
      return true;
    }
  }

  function passwordLength(pass) {
    if (pass.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  //! провалидировали 

	//? показываем тултипы
	function applyError(inputs, msg) {
		inputs.forEach(input => {
			input.parentElement.classList.add("error");
			input.nextElementSibling.classList.add("active")
		});
		inputs[inputs.length-1].nextElementSibling.innerText = msg
	}

  function showError(type) {
    switch (type) {
      case "email":
				let msg1 = "Please enter a valid e-mail adress"
				let inputs1 = [emailInput]
				applyError(inputs1, msg1)
        break;
				
      case "shortPassword":
				let msg = "The password must contain at least 6 characters"
				let inputs = [passInput]
				applyError(inputs, msg)
        break;
				
      case "dontMatchPasswords":
				let msg2 = "The passwords don’t match"
				let inputs2 = [passInput, repassInput]
				applyError(inputs2, msg2)
        break;

      default:
        break;
    }
  }
	//? показали тултипы
	
	//! чистим тултипы
	function clearErrors() {
		let labels = form.querySelectorAll("label")
		let errorsBlocks = form.querySelectorAll(".form-account__input-error")
		labels.forEach(label => {
			label.classList.remove("error")
		});

		errorsBlocks.forEach(error => {
			error.classList.remove("active")
			error.innerText = ""
		});
	}
	//! очистили тултипы

	//? отправляем форму на сервер
	function sendingForm(formData) {
		formBtn.classList.add("blocked") //блокируем кнопку

		let url = "/";
		const xhr = new XMLHttpRequest();
		xhr.responseType = "json"; 
		xhr.open("POST", url); 
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.send(formData);

		xhr.addEventListener("load", function () {
			// пока грузится запрос
			// console.log(xhr.response); // ответ сервера
			// console.log(xhr.response.message); // сообщение сервера
			formBtn.classList.remove("blocked")
			
			if (xhr.status >= 400) {
				console.error("Server error");
				errorBlock.innerText ="Something went wrong. Refresh the page and try again"
				errorBlock.classList.add("active")
				// обработка по статусу
				// overlay.open();
				// overlay.setContent('Что-то пошло не так');
			} else {
				console.log("server ok");
				// overlay.open();
				// overlay.setContent(xhr.response.message);
			}
		});
	}
	//? отправили форму на сервер


	//! обработка клика по кнопке
  formBtn.addEventListener("click", (e) => {
		e.preventDefault();
		clearErrors();
		if (!validateEmail(emailInput.value)) {
			console.error("Nont valid email");
			showError("email")
		} else if (!passwordLength(passInput.value)) {
			console.error("The password is too short");
			showError("shortPassword")
    } else if (!passwordsMatch(passInput.value, repassInput.value)) {
      console.error("Пароли не совпадают!");
			showError("dontMatchPasswords")
    } else {
			console.log("Всё ок");
			let formData = new FormData();
			formData.append("email", emailInput.value)
			formData.append("password", passInput.value)
			sendingForm(formData)
    }
  });
});

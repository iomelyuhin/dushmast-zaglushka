document.addEventListener(`DOMContentLoaded`, function () {

	//!==========================================================================
  //!===================отправка формы на сервер===============================
  //!==========================================================================
	const myForm = document.querySelector(".support-form");
	let sendBtn = document.querySelector(".support-form__send-button-btn")
	const nameLabel = document.querySelector(".support-form__label--name")
	const emailLabel = document.querySelector(".support-form__label--email")
	const messageLabel = document.querySelector(".support-form__label--message")
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
			document.querySelector(".support-form__send-button").classList.add("error")
			sendBtn.classList.remove("blocked")
			sendBtn.disabled = false
    } else {
			let nameValue = myForm.elements.name
			let emailValue = myForm.elements.email
			let messageValue = myForm.elements.message
			let successMess = document.querySelector(".form__input-success")
			sendBtn.classList.remove("blocked")
			sendBtn.disabled = false;
			nameValue.value = "";
			emailValue.value = "";
			messageValue.value = "";
			// closeForm();
			successMess.classList.add('active')
    }
  });

})
const emailForm = document.getElementById("email-form");

const handleSubmit = async (evt) => {
	evt.preventDefault();
	const formFeedback = document.getElementById("form-feedback");
	const data = new FormData(evt.target);
	fetch(evt.target.action, {
		method: emailForm.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((res) => {
			if (res.ok) {
				formFeedback.innerHTML = "Sent!";
				formFeedback.classList.add("success");
				emailForm.reset();
			} else {
				res.json().then((data) => {
					if (Object.hasOwn(data, "errors")) {
						formFeedback.innerHTML = data["errors"]
							.map((error) => error["message"])
							.join(", ");
						formFeedback.classList.add("error");
					} else {
						formFeedback.innerHTML =
							"Oops! There was a problem sending your message. Please try again.";
						formFeedback.classList.add("error");
					}
				});
			}
		})
		.catch((err) => {
			formFeedback.innerHTML =
				"Oops! There was a problem sending your message. Please try again.";
		});
};

emailForm.addEventListener("submit", handleSubmit);

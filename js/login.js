const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const myStorage = window.localStorage;

	let errorCount = 0;
	const email = document.querySelector("#useremail");
	const password = document.querySelector("#password");

	const emialValue = email.value.trim();
	const passwordValue = password.value.trim();
	if (emialValue === "") {
		handleError(email, "Email Cannot be empty", true);
		errorCount++;
	} else {
		handleError(email, "Everything is correct", false);
		myStorage.setItem("Username", emialValue);
	}
	if (passwordValue === "") {
		errorCount++;
		handleError(password, "Password cannot be empty", true);
	} else {
		handleError(password, "Everything is correct", false);
		const hash = passwordValue
			.split("")
			.reduce(
				(prevHash, currVal) =>
					((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
				0,
			);
		myStorage.setItem("Password", hash);
	}

	if (errorCount == 0) {
		myStorage.setItem("Subscribed", true);
		window.location.href = "./index.html";
	}
}

function handleError(element, msg, isError) {
	const parent = element.parentElement;
	const smallElement = parent.querySelector("small");
	if (isError) {
		element.classList.add("error");
		smallElement.innerText = msg;
		smallElement.classList.add("error");
	} else {
		element.className = "success";
		smallElement.innerText = "";
		smallElement.classList.remove("error");
	}
}

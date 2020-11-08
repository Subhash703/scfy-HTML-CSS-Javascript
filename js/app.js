const show_username = document.getElementById("show_username");
const myStorage = window.localStorage;
let isLoggedIn = myStorage.Username == "" ? false : true;

if (isLoggedIn) {
	// let login_link = document.createElement("");
	// login_link.setAttribute("href", "./index.html");
	// login_link.innerText = "Welcome " + mystorage.Username.split("@")[0];
	console.log(isLoggedIn);
	var li = document.createElement("li");
	li.innerHTML = `Logout`;
	li.classList.add("logout-btn");
	document.querySelector(".control-links").appendChild(li);
}

if (isLoggedIn) {
	var logoutBtn = document.querySelector(".logout-btn");
	logoutBtn.addEventListener("click", () => {
		myStorage.Username = "";
		myStorage.Password = "";
		window.location.href = "./index.html";
		logoutBtn.style.display = "none";
	});
}

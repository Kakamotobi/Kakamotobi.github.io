const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");
const body = document.querySelector("body");

darkMode.addEventListener("click", (evt) => {
	body.classList.add("dark");
	darkMode.classList.add("active");
	lightMode.classList.remove("active");
});

lightMode.addEventListener("click", () => {
	body.classList.remove("dark");
	lightMode.classList.add("active");
	darkMode.classList.remove("active");
});

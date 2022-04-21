const openBurger = document.querySelector(".open-burger");
const closeBurger = document.querySelector(".close-burger");
const configurationsContainer = document.querySelector(
	".configurations-container"
);

openBurger.addEventListener("click", () => {
	openBurger.classList.add("burger-inactive");
	closeBurger.classList.add("burger-active");
	configurationsContainer.classList.add("burger-active");
});

closeBurger.addEventListener("click", () => {
	closeBurger.classList.remove("burger-active");
	openBurger.classList.remove("burger-inactive");
	configurationsContainer.classList.remove("burger-active");
});

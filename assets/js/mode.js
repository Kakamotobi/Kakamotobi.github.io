const configMode = document.querySelector(".configuration.mode");
const modeSwitches = document.querySelectorAll(".mode-switch");
const body = document.querySelector("body");

for (let modeSwitch of modeSwitches) {
	modeSwitch.addEventListener("click", () => {
		const mode = modeSwitch.getAttribute("mode");
		if (mode === "dark") body.classList.add("dark");
		else if (mode === "light") body.classList.remove("dark");

		configMode.querySelector(".active")?.classList.remove("active");
		modeSwitch.classList.add("active");
	});
}

const configMode = document.querySelector(".configuration.mode");
const modeSwitches = document.querySelectorAll(".mode-switch");
const body = document.querySelector("body");

const matcher = window.matchMedia("(prefers-color-scheme: light)");
if (matcher.matches) {
  body.classList.remove("dark");
  modeSwitches[0].classList.add("link-active");
} else {
  body.classList.add("dark");
  modeSwitches[1].classList.add("link-active");
}

for (let modeSwitch of modeSwitches) {
  modeSwitch.addEventListener("click", () => {
    const mode = modeSwitch.getAttribute("mode");
    if (mode === "dark") body.classList.add("dark");
    else if (mode === "light") body.classList.remove("dark");

    configMode.querySelector(".link-active")?.classList.remove("link-active");
    modeSwitch.classList.add("link-active");
  });
}

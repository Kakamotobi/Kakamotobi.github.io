const configLang = document.querySelector(".configuration.lang");
const langSwitches = document.querySelectorAll(".lang-switch");

const bioName = document.querySelector(".bio__name");
const bioGreetings = document.querySelector(".bio__greetings");
const bioAboutMe = document.querySelector(".bio__about-me");
const downloadResumeKor = document.querySelector("#download-resume-kor");
const downloadResumeEng = document.querySelector("#download-resume-eng");
const projectOneDesc = document.querySelector("#project-one__desc");
const projectTwoDesc = document.querySelector("#project-two__desc");
const projectThreeDesc = document.querySelector("#project-three__desc");
const projectFourDesc = document.querySelector("#project-four__desc");
const emailFormGuide = document.querySelector(".email-form__guide");
const formSubmitBtn = document.querySelector(".form__submit-btn");

for (let langSwitch of langSwitches) {
	langSwitch.addEventListener("click", () => {
		configLang.querySelector(".link-active")?.classList.remove("link-active");
		langSwitch.classList.add("link-active");

		const lang = langSwitch.getAttribute("lang");

		bioName.innerText = data[lang].bioName;
		bioGreetings.innerText = data[lang].bioGreetings;
		bioAboutMe.innerText = data[lang].bioAboutMe;
		downloadResumeKor.innerText = data[lang].downloadResumeKor;
		downloadResumeEng.innerText = data[lang].downloadResumeEng;
		projectOneDesc.innerText = data[lang].projectOneDesc;
		projectTwoDesc.innerText = data[lang].projectTwoDesc;
		projectThreeDesc.innerText = data[lang].projectThreeDesc;
		projectFourDesc.innerText = data[lang].projectFourDesc;
		emailFormGuide.innerHTML = data[lang].emailFormGuide;
		formSubmitBtn.innerText = data[lang].formSubmitBtn;
	});
}

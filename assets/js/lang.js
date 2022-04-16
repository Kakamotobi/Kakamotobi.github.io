// Language
const korLang = document.querySelector("#kor-lang");
const engLang = document.querySelector("#eng-lang");
const bioName = document.querySelector(".bio__name");
const bioGreetings = document.querySelector(".bio__greetings");
const bioAboutMe = document.querySelector(".bio__about-me");
const downloadResume = document.querySelector("#download-resume");
const projectOneDesc = document.querySelector("#project-one__desc");
const projectTwoDesc = document.querySelector("#project-two__desc");
const projectThreeDesc = document.querySelector("#project-three__desc");
const contactMethod = document.querySelector(".email-form__container p");
const formSubmitBtn = document.querySelector(".form__submit-btn");

korLang.addEventListener("click", (evt) => {
	korLang.classList.add("active");
	engLang.classList.remove("active");

	bioName.innerText = "정대람";
	bioGreetings.innerText = "안녕하세요 👋";
	bioAboutMe.innerText =
		"프로그래밍에 입문한지 1년 된 프론트엔드 개발자 정대람입니다. 프로그래밍의 세계에 매료된 후 깔끔하고 정교한 코드를 구현하는 것에 대해 늘 고민하고 있습니다. 노력과 지속을 통해 목표를 이룰 수 있다는 마음가짐으로, 꾸준히 데일리 커밋을 실천하고 있습니다. 독학을 결심하였던 순간부터 지금까지 프로그래밍은 저에게 매우 흥미롭고 즐거운 여정이었고, 앞으로도 프로그래밍의 무궁무진한 세계가 기대됩니다.";
	downloadResume.innerText = "이력서 다운받기";
	projectOneDesc.innerText =
		"리액트를 이용하여 만든 데일리 투두 리스트를 관리할 수 있는 웹 어플리케이션입니다. 추가, 수정, 체크, 삭제 기능을 지원합니다.";
	projectTwoDesc.innerText =
		"OpenWeatherMap API를 활용하여 현재 위치와 다른 지역의 날씨를 알려주는 웹 어플리케이션입니다.";
	projectThreeDesc.innerText =
		"랜딩 페이지의 반응적 레이아웃을 구현하는 frontendmentor.io의 챌린지입니다.";
	contactMethod.innerHTML =
		"연락이 필요하시면 아래 폼에 입력해주시거나 <a href='mailto:daeram.chung@gmail.com'>daeram.chung@gmail.com</a>을 통해 연락해주세요.";
	formSubmitBtn.innerText = "보내기";
});

engLang.addEventListener("click", (evt) => {
	engLang.classList.add("active");
	korLang.classList.remove("active");

	bioName.innerText = "Daeram Chung";
	bioGreetings.innerText = "Hi there. 👋";
	bioAboutMe.innerText =
		"I am an aspiring front-end developer 1 year into programming. I am immersed in the contemplation of writing code that is clean and refine. Above all, I realize the value of dedication and consistency, which I am actualizing through daily commits. My self-learning journey has been a splendid one and I am keen to continue my endeavors.";
	downloadResume.innerText = "Download Resume";
	projectOneDesc.innerText =
		"A minimalistic React application for managing our daily todos, providing functionality to add, edit, check-off and remove todos";
	projectTwoDesc.innerText =
		"A web application that uses OpenWeatherMap's API to display the weather at your current location and another location.";
	projectThreeDesc.innerText =
		"A landing page responsive layout challenged provided by frontentmentor.io.";
	contactMethod.innerHTML =
		"You can contact me on this form or via <a href='mailto:daeram.chung@gmail.com'>daeram.chung@gmail.com</a>.";
	formSubmitBtn.innerText = "Send";
});

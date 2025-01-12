document.getElementById("send").addEventListener("click", getResponse, false);
document
	.getElementById("inst-btn")
	.addEventListener("click", switchInst, false);
document.getElementById("back-btn").addEventListener("click", resetInst, false);
document.getElementById("lock-btn").addEventListener("click", openLock, false);
document.getElementById("jumpOff").addEventListener("click", jumpOff, false);

function jumpOff() {
	const URL =
		"http://enterURLHere.com" +
		`?persCode=${encodeURIComponent(
			Participant.persCode
		)}&nickName=${encodeURIComponent(Participant.nickName)}`;
	window.location.href = URL;
}

function resetInst() {
	document.getElementById("inst-page3").classList.toggle("hidden");
	Settings.instPage = 1;
	document.getElementById("inst-page1").classList.toggle("hidden");
	document.getElementById("inst-btn").innerHTML = "Weiter";
}

function switchInst() {
	switch (Settings.instPage) {
		case 0:
			document.getElementById("inst-page1").classList.toggle("hidden");
			document.getElementById("inst-page2").classList.toggle("hidden");
			break;
		case 1:
			document.getElementById("inst-page2").classList.toggle("hidden");
			document.getElementById("inst-page3").classList.toggle("hidden");
			document.getElementById("back-btn").classList.toggle("hidden");
			document.getElementById("inst-btn").innerHTML = "Start";
			break;
		case 2:
			document
				.getElementById("stavmat-instructions")
				.classList.toggle("hidden");
			document.getElementById("stavmat-test").classList.toggle("hidden");
			resetTime();
			Settings.logTime = Date.now();
			timelimit(960);
		default:
			break;
	}
	Settings.instPage++;
}

document.addEventListener("gesturestart", function (e) {
	e.preventDefault();
});

window.addEventListener(
	"load",
	function () {
		new FastClick(document.body);
	},
	false
);

getURL();
if (
	Participant.persCode !== "" &&
	Participant.persCode !== "null" &&
	Participant.nickName !== "" &&
	Participant.nickName !== "null"
) {
	document.getElementById("lock-btn").click();
}

let helper = document.getElementById("mat-el1");

let elInfo = {
	width: 100,
	height: 100,
};

function drawCorner(el, pos = 0, col = "#000000") {
	let ctx = el.getContext("2d");
	let corners = [
		[10, 10],
		[10, 90],
		[90, 90],
	];

	switch (pos) {
		case 0:
			corners[0][0] = 0;
			corners[0][1] = 0;
			corners[1][0] = corners[0][0] + elInfo.width / 4;
			corners[1][1] = corners[0][1];
			corners[2][0] = corners[0][0];
			corners[2][1] = corners[0][1] + elInfo.height / 4;
			break;
		case 1:
			corners[0][0] = 0;
			corners[0][1] = elInfo.height;
			corners[1][0] = corners[0][0] + elInfo.width / 4;
			corners[1][1] = corners[0][1];
			corners[2][0] = corners[0][0];
			corners[2][1] = corners[0][1] - elInfo.height / 4;
			break;
		case 2:
			corners[0][0] = elInfo.width;
			corners[0][1] = elInfo.height;
			corners[1][0] = corners[0][0] - elInfo.width / 4;
			corners[1][1] = corners[0][1];
			corners[2][0] = corners[0][0];
			corners[2][1] = corners[0][1] - elInfo.height / 4;
			break;
		case 3:
			corners[0][0] = elInfo.width;
			corners[0][1] = 0;
			corners[1][0] = corners[0][0] - elInfo.width / 4;
			corners[1][1] = corners[0][1];
			corners[2][0] = corners[0][0];
			corners[2][1] = corners[0][1] + elInfo.height / 4;
			break;
		default:
			corners[0][0] = 0;
			corners[0][1] = 0;
			corners[1][0] = corners[0][0] + elInfo.width / 4;
			corners[1][1] = corners[0][1];
			corners[2][0] = corners[0][0];
			corners[2][1] = corners[0][1] + elInfo.height / 4;
			break;
	}

	ctx.beginPath();
	ctx.moveTo(corners[0][0], corners[0][1]);
	ctx.lineTo(corners[1][0], corners[1][1]);
	ctx.lineTo(corners[2][0], corners[2][1]);
	ctx.closePath();

	ctx.lineWidth = 1;
	ctx.strokeStyle = col;
	ctx.stroke();

	ctx.fillStyle = col;
	ctx.fill();
}

function drawLine(el, pos = 0, col = "#000000") {
	let ctx = el.getContext("2d");
	let corners = [
		[10, 10],
		[10, 90],
	];

	switch (pos) {
		case 0:
			corners[0][0] = elInfo.width * 0.12;
			corners[0][1] = elInfo.height * 0.5;
			corners[1][0] = elInfo.width * 0.5;
			corners[1][1] = elInfo.height * 0.12;
			break;
		case 1:
			corners[0][0] = elInfo.width * 0.12;
			corners[0][1] = elInfo.height * 0.5;
			corners[1][0] = elInfo.width * 0.5;
			corners[1][1] = elInfo.height * 0.88;
			break;
		case 2:
			corners[0][0] = elInfo.width * 0.5;
			corners[0][1] = elInfo.height * 0.88;
			corners[1][0] = elInfo.width * 0.88;
			corners[1][1] = elInfo.height * 0.5;
			break;
		case 3:
			corners[0][0] = elInfo.width * 0.5;
			corners[0][1] = elInfo.height * 0.12;
			corners[1][0] = elInfo.width * 0.88;
			corners[1][1] = elInfo.height * 0.5;
			break;

		default:
			corners[0][0] = elInfo.width * 0.12;
			corners[0][1] = elInfo.height * 0.4;
			corners[1][0] = elInfo.width * 0.4;
			corners[1][1] = elInfo.height * 0.12;
			break;
	}

	ctx.beginPath();
	ctx.moveTo(corners[0][0], corners[0][1]);
	ctx.lineTo(corners[1][0], corners[1][1]);
	ctx.closePath();

	ctx.lineWidth = 1;
	ctx.strokeStyle = col;
	ctx.stroke();
}

function drawBox(el, pos = 0, col = "#000000") {
	let ctx = el.getContext("2d");
	let corners = [
		[10, 10],
		[10, 90],
		[90, 90],
		[90, 10],
	];

	switch (pos) {
		case 0:
			corners[0][0] = elInfo.width * 0.375;
			corners[0][1] = elInfo.height * 0.0;
			corners[1][0] = elInfo.width * 0.625;
			corners[1][1] = elInfo.height * 0.0;
			corners[2][0] = elInfo.width * 0.625;
			corners[2][1] = elInfo.height * 0.12;
			corners[3][0] = elInfo.width * 0.375;
			corners[3][1] = elInfo.height * 0.12;
			break;
		case 1:
			corners[0][0] = elInfo.width * 0.0;
			corners[0][1] = elInfo.height * 0.375;
			corners[1][0] = elInfo.width * 0.12;
			corners[1][1] = elInfo.height * 0.375;
			corners[2][0] = elInfo.width * 0.12;
			corners[2][1] = elInfo.height * 0.625;
			corners[3][0] = elInfo.width * 0.0;
			corners[3][1] = elInfo.height * 0.625;
			break;
		case 2:
			corners[0][0] = elInfo.width * 0.375;
			corners[0][1] = elInfo.height * 0.88;
			corners[1][0] = elInfo.width * 0.625;
			corners[1][1] = elInfo.height * 0.88;
			corners[2][0] = elInfo.width * 0.625;
			corners[2][1] = elInfo.height * 1;
			corners[3][0] = elInfo.width * 0.375;
			corners[3][1] = elInfo.height * 1;
			break;
		case 3:
			corners[0][0] = elInfo.width * 0.88;
			corners[0][1] = elInfo.height * 0.375;
			corners[1][0] = elInfo.width * 1;
			corners[1][1] = elInfo.height * 0.375;
			corners[2][0] = elInfo.width * 1;
			corners[2][1] = elInfo.height * 0.625;
			corners[3][0] = elInfo.width * 0.88;
			corners[3][1] = elInfo.height * 0.625;
			break;

		default:
			break;
	}

	ctx.beginPath();
	ctx.moveTo(corners[0][0], corners[0][1]);
	ctx.lineTo(corners[1][0], corners[1][1]);
	ctx.lineTo(corners[2][0], corners[2][1]);
	ctx.lineTo(corners[3][0], corners[3][1]);
	ctx.closePath();

	ctx.lineWidth = 1;
	ctx.strokeStyle = col;
	ctx.stroke();

	ctx.fillStyle = col;
	ctx.fill();
}

function drawShape(el, shape = 0, fill = false, col = "#000000") {
	let ctx = el.getContext("2d");
	ctx.beginPath();

	switch (shape) {
		case 0:
			ctx.moveTo(elInfo.width * 0.4, elInfo.height * 0.4);
			ctx.lineTo(elInfo.width * 0.6, elInfo.height * 0.4);
			ctx.lineTo(elInfo.width * 0.6, elInfo.height * 0.6);
			ctx.lineTo(elInfo.width * 0.4, elInfo.height * 0.6);
			break;
		case 1:
			ctx.arc(
				elInfo.width / 2,
				elInfo.height / 2,
				elInfo.width / 10,
				0,
				2 * Math.PI
			);
			break;

		default:
			break;
	}

	ctx.closePath();

	ctx.lineWidth = 1;
	ctx.strokeStyle = col;
	ctx.stroke();

	if (fill) {
		ctx.fillStyle = col;
		ctx.fill();
	}
}

function drawTriangle(el, pos = 0, col = "#000000") {
	let ctx = el.getContext("2d");
	let corners = [
		[10, 10],
		[10, 90],
		[90, 90],
	];

	switch (pos) {
		case 0:
			corners[0][0] = elInfo.width * 0.5;
			corners[0][1] = elInfo.height * 0.12;
			corners[1][0] = elInfo.width * 0.375;
			corners[1][1] = elInfo.height * 0.24;
			corners[2][0] = elInfo.width * 0.625;
			corners[2][1] = elInfo.height * 0.24;
			break;
		case 1:
			corners[0][0] = elInfo.width * 0.12;
			corners[0][1] = elInfo.height * 0.5;
			corners[1][0] = elInfo.width * 0.24;
			corners[1][1] = elInfo.height * 0.375;
			corners[2][0] = elInfo.width * 0.24;
			corners[2][1] = elInfo.height * 0.625;
			break;
		case 2:
			corners[0][0] = elInfo.width * 0.5;
			corners[0][1] = elInfo.height * 0.88;
			corners[1][0] = elInfo.width * 0.625;
			corners[1][1] = elInfo.height * 0.76;
			corners[2][0] = elInfo.width * 0.375;
			corners[2][1] = elInfo.height * 0.76;
			break;
		case 3:
			corners[0][0] = elInfo.width * 0.88;
			corners[0][1] = elInfo.height * 0.5;
			corners[1][0] = elInfo.width * 0.76;
			corners[1][1] = elInfo.height * 0.375;
			corners[2][0] = elInfo.width * 0.76;
			corners[2][1] = elInfo.height * 0.625;
			break;

		default:
			break;
	}

	ctx.beginPath();
	ctx.moveTo(corners[0][0], corners[0][1]);
	ctx.lineTo(corners[1][0], corners[1][1]);
	ctx.lineTo(corners[2][0], corners[2][1]);
	ctx.closePath();

	ctx.lineWidth = 1;
	ctx.strokeStyle = col;
	ctx.stroke();

	ctx.fillStyle = col;
	ctx.fill();
}

function populateOptions() {
	drawCorner(document.getElementById("opt-el1"), 0);
	drawCorner(document.getElementById("opt-el2"), 1);
	drawCorner(document.getElementById("opt-el3"), 2);
	drawCorner(document.getElementById("opt-el4"), 3);

	drawLine(document.getElementById("opt-el5"), 0);
	drawLine(document.getElementById("opt-el6"), 1);
	drawLine(document.getElementById("opt-el7"), 2);
	drawLine(document.getElementById("opt-el8"), 3);

	drawBox(document.getElementById("opt-el9"), 0);
	drawBox(document.getElementById("opt-el10"), 1);
	drawBox(document.getElementById("opt-el11"), 2);
	drawBox(document.getElementById("opt-el12"), 3);

	drawShape(document.getElementById("opt-el13"), 0, true);
	drawShape(document.getElementById("opt-el14"), 0, false);
	drawShape(document.getElementById("opt-el15"), 1, true);
	drawShape(document.getElementById("opt-el16"), 1, false);

	drawTriangle(document.getElementById("opt-el17"), 0);
	drawTriangle(document.getElementById("opt-el18"), 1);
	drawTriangle(document.getElementById("opt-el19"), 2);
	drawTriangle(document.getElementById("opt-el20"), 3);
}

populateOptions();

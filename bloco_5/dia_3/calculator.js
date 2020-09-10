function squareNumber(num) {
	let squaredNumber = num * num;
	divSolution.innerText = squaredNumber;
	return squaredNumber;
}

let divSolution = document.querySelector('#solution');
let buttonSquare = document.getElementById('square-button');
buttonSquare.addEventListener('click', squareFuncion);
function squareFuncion() {
	num = document.getElementById('square-input').value;
	return squareNumber(num);
}

function halfOf(num) {
	num = document.getElementById('half-input').value;
	let half = num / 2;
	divSolution.innerText = 'Half of ' + num + ' is ' + half;
}
let buttonHalf = document.getElementById('half-button');
buttonHalf.addEventListener('click', halfOf);

function percentOf(num1, num2) {
	num1 = document.getElementById('percent1-input').value;
	num2 = document.getElementById('percent2-input').value;
	let percent = (num1 / num2) * 100;
	divSolution.innerText = num1 + ' is ' + percent + '% of ' + num2;
}
let buttonPercentOf = document.getElementById('percent-button');
buttonPercentOf.addEventListener('click', percentOf);

function areaOfCircle(radius) {
	radius = document.getElementById('area-input').value;
	let area = Math.PI * squareNumber(radius);
	divSolution.innerText =
		'The area of circle with radius ' + radius + ' is ' + area;
}
let buttonCircleArea = document.getElementById('area-button');
buttonCircleArea.addEventListener('click', areaOfCircle);

function doCrazyStuff(num) {
	var half = halfOf(num);
	var squared = squareNumber(half);
	var area = areaOfCircle(squared);
	var result = percentOf(squared, area);
}

var getFirst = document.getElementById("first");
var getSecond = document.getElementById("second");
var solution = document.getElementById("solutionContainer");
var addIt = document.getElementById("add").addEventListener("click", mathAdd);
var SubIt = document.getElementById("subtract").addEventListener("click", mathSub);
var MulIt = document.getElementById("multiply").addEventListener("click", mathMul);
var DivIt = document.getElementById("divide").addEventListener("click", mathDiv);



function mathAdd() {
	var add = parseInt(getFirst.value) + parseInt(getSecond.value);
	solution.innerHTML = `The answer is ${add}`;

}

function mathSub() {
	var sub = parseInt(getFirst.value) - parseInt(getSecond.value);
	solution.innerHTML = `The answer is ${sub}`;
}

function mathMul() {
	var mul = parseInt(getFirst.value) * parseInt(getSecond.value);
	solution.innerHTML = `The answer is ${mul}`;
}


function mathDiv() {
	var div = parseInt(getFirst.value) / parseInt(getSecond.value);
	solution.innerHTML = `The answer is ${div}`;
}
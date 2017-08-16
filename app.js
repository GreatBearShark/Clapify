var clapifyForm = document.getElementById('form');
var inputClapify = document.getElementById("inputClapify");
var outputClapify = document.getElementById("outputClapify");

var waveForm = document.getElementById('wave-form');
var inputWave = document.getElementById("inputWave");
var outputWave = document.getElementById("outputWave");

var bForm = document.getElementById('b-form');
var inputB = document.getElementById("inputB");
var outputB = document.getElementById("outputB");

clapifyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var output = inputClapify.value.replace(/ /g , ' \&#128079 ');
  outputClapify.innerHTML = output;
});

waveForm.addEventListener('submit', (e) => {
	e.preventDefault();
	var output = inputWave.value.split('').join(' ');
	outputWave.innerHTML = output;
});

bForm.addEventListener('submit', (e) => {
	e.preventDefault();
	var output = inputClapify.value.replace('b', '🅱');
	outputB.innerHTML = output;
});


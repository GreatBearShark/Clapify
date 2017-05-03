var form = document.getElementById('form');
var inputClapify = document.getElementById("inputClapify");
var outputClapify = document.getElementById("outputClapify");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  var output = inputClapify.value.replace(/ /g , ' \&#128079 ');
  outputClapify.innerHTML = output;
}
);

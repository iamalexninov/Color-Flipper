let simpleButtonElement = document.getElementById("simpleBtn");
let changeButtonElement = document.getElementById("clickBtn");
let mainSectionElement = document.getElementById("main-section");
let spanElement = document.querySelector('#background')

simpleButtonElement.addEventListener("click", function (e) {
  mainSectionElement.style.backgroundColor = "white";
  spanElement.textContent = 'Background Color: ' + '#FFFFFF'
});

changeButtonElement.addEventListener("click", generate);

function generate(e) {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  mainSectionElement.style.backgroundColor = randomColor;
  spanElement.textContent = 'Background Color: ' + randomColor
}

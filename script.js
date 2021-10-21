const container = document.querySelector(".container");

function fillup(e) {
  let n = e.target.value;
  for (i = 0; i < 4 ** n; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    let grid = ["two", "four", "eight", "sixteen", "thirtytwo", "sixtyfour"];
    blocks.setAttribute("id", grid[n - 1]);
    container.append(blocks);
  }
}

//Slider element
const slider = document.getElementById("slider");

//slider value panel
const sliderValuePanel = document.getElementById("slider-value");
function showSliderValue(e) {
  let value = e.target.value;
  value = parseInt(value);
  sliderValuePanel.textContent = `${2 ** value} X ${2 ** value}`;
}

// Remove previous settings
function removeBlocks() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((node) => node.remove());
}

// Event listners on slider
slider.addEventListener("mouseup", showSliderValue);
slider.addEventListener("mouseup", fillup);
slider.addEventListener("mousedown", removeBlocks);

// Color selection
const blackbtn = document.getElementById("black");
const erasebtn = document.getElementById("erase");
const rainbowbtn = document.getElementById("rainbow");

blackbtn.addEventListener("click", addListenerBlack);
erasebtn.addEventListener("click", addListenerWhite);
rainbowbtn.addEventListener("click", addListenerRainbow);

function addListenerBlack() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((node) => node.removeEventListener("mouseover", makeRainbow));
  blocks.forEach((node) => node.removeEventListener("mouseover", makeWhite));
  blocks.forEach((node) => node.addEventListener("mouseover", makeBlack));
}
function addListenerWhite() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((node) => node.removeEventListener("mouseover", makeBlack));
  blocks.forEach((node) => node.removeEventListener("mouseover", makeRainbow));
  blocks.forEach((node) => node.addEventListener("mouseover", makeWhite));
}
function addListenerRainbow() {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((node) => node.removeEventListener("mouseover", makeBlack));
  blocks.forEach((node) => node.removeEventListener("mouseover", makeWhite));
  blocks.forEach((node) => node.addEventListener("mouseover", makeRainbow));
}

function makeBlack(e) {
  e.target.style.backgroundColor = "black";
}

function makeWhite(e) {
  e.target.style.backgroundColor = "white";
}

function makeRainbow(e) {
  e.target.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//Reset Grid
const reset = document.getElementById("reset");
reset.addEventListener("click", reload);
function reload() {
  window.location.reload();
}

const container = document.querySelector(".container");
// const randomColor = Math.floor(Math.random() * 16777215).toString(16);

function fillup(e) {
  if (e.target.value == 1) {
    for (i = 0; i < 4; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "two");
      container.append(blocks);
    }
  } else if (e.target.value == 2) {
    for (i = 0; i < 16; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "four");
      container.append(blocks);
    }
  } else if (e.target.value == 3) {
    for (i = 0; i < 64; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "eight");
      container.append(blocks);
    }
  } else if (e.target.value == 4) {
    for (i = 0; i < 256; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "sixteen");
      container.append(blocks);
    }
  } else if (e.target.value == 5) {
    for (i = 0; i < 1024; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "thirtytwo");
      container.append(blocks);
    }
  } else if (e.target.value == 6) {
    for (i = 0; i < 4096; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "sixtyfour");
      container.append(blocks);
    }
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
  e.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}



// function selectBlack() {
//   const blocks = document.querySelectorAll(".block");
//   blocks.forEach((node) => node.classList.remove("white"));
//   blocks.forEach((node) => node.classList.remove("rainbow"));
//   blocks.forEach((node) => node.classList.add("black"))
// }

// function erase() {
//   const blocks = document.querySelectorAll(".block");
//   blocks.forEach((node) => node.classList.remove("black"));
//   blocks.forEach((node) => node.classList.remove("rainbow"));
//   blocks.forEach((node) => node.classList.add("white"));
// }

// rainbowbtn.addEventListener("click", selectRainbow);
// blackbtn.addEventListener("click", selectBlack);
// erasebtn.addEventListener("click", erase);

// function drawBlack(){
// const blackBlocks = document.querySelectorAll('.black')
// console.log(blackBlocks[1].target)
// blackBlocks.forEach(item => console.log(item.target))
// }

// blocks.addEventListener(
//   "mouseover",
//   () => (blocks.style.backgroundColor = "#" + randomColor)
// );

// const randomColor = Math.floor(Math.random() * 16777215).toString(16);

// const blackbtn = document.getElementById('black')
// blackbtn.addEventListener('click', makeBlack)

// blocks.addEventListener(
//         "mouseover",
//         () => (blocks.style.backgroundColor = "#" + randomColor)
//       );

// function makeItBlack(){
//    element.style.backgroundColor = "black"
// const className = event.target.className;
//   blocks.classList.remove(className);
//   blocks.classList.add('.white');
// }

// const sixteenblocks = document.querySelectorAll('sixteen');
// sixteenblocks.forEach(block => block.addEventListener('mouseover',() => block.style.backgroundColor = "black");

// const slider = document.querySelector('.slider-value')
// function slider() {

// }

//Reset Grid
const reset = document.getElementById("reset");
reset.addEventListener("click", reload);
function reload() {
  window.location.reload();
}

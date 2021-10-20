const container = document.querySelector(".container");

function fillup(e) {
  if (e.target.value == 1) {
    for (i = 0; i < 4; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "two");
      blocks.addEventListener(
        "mouseover",
        () => (blocks.style.backgroundColor = "#" + randomColor)
      );
      container.append(blocks);
    }
  } else if (e.target.value == 2) {
    for (i = 0; i < 16; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "four");
      blocks.addEventListener(
        "mouseover",
        () => (blocks.style.backgroundColor = "#" + randomColor)
      );
      container.append(blocks);
    }
  } else if (e.target.value == 3) {
    for (i = 0; i < 64; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "eight");
      blocks.addEventListener(
        "mouseover",
        () => (blocks.style.backgroundColor = "#" + randomColor)
      );
      container.append(blocks);
    }
  } else if (e.target.value == 4) {
    for (i = 0; i < 256; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "sixteen");
      blocks.addEventListener(
        "mouseover",
        () => (blocks.style.backgroundColor = "black")
      );
      container.append(blocks);
    }
  } else if (e.target.value == 5) {
    for (i = 0; i < 1024; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "thirtytwo");
      blocks.addEventListener(
        "mouseover",
        () => (blocks.style.backgroundColor = "#" + randomColor)
      );
      container.append(blocks);
    }
  } else if (e.target.value == 6) {
    for (i = 0; i < 4096; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.setAttribute("id", "sixtyfour");
      blocks.addEventListener(
        "mouseover",
        () => (blocks.style.backgroundColor = "black")
      );
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
  blocks = document.querySelectorAll(".block");
  blocks.forEach((item) => item.remove());
}

// Event listners on slider
slider.addEventListener("mouseup", showSliderValue);
slider.addEventListener("mouseup", fillup);
slider.addEventListener("mousedown", removeBlocks);

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

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

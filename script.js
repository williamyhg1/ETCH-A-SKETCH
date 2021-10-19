const container = document.querySelector(".container");

function fillup(size) {
  if (size == 2) {
    for (i = 0; i < 4; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("two");
      container.append(blocks);
    }
  } else if (size == 4) {
    for (i = 0; i < 16; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("four");
      container.append(blocks);
    }
  } else if (size == 8) {
    for (i = 0; i < 64; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("eight");
      container.append(blocks);
    }
  } else if (size == 16) {
    for (i = 0; i < 256; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("sixteen");
      blocks.addEventListener('mouseover',() => blocks.style.backgroundColor = "black");
      container.append(blocks);
    }
  } else if (size == 32) {
    for (i = 0; i < 1024; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("thirtytwo");
      blocks.addEventListener('mouseover',() => blocks.style.backgroundColor = "#" + randomColor);
      container.append(blocks);
    }
  } else if (size == 64) {
    for (i = 0; i < 4096; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("sixtyfour");
      container.append(blocks);
    }
  }
}



fillup(16);


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

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

// const slider = document.querySelector('.slider-value')
// function slider() {

// }

//Reset Grid
const reset = document.getElementById("reset");
reset.addEventListener("click", reload);
function reload() {
  window.location.reload();
}


//Slider value

// slider.addEventListener('click',(e)=>console.log(e.target))

// function getValue(){
//   const slidervalue = document.getElementById('slider-value')
//   const value = document.getElementById('slider').value;
//   if (value == 1){
//     slidervalue.textContent = '2 X 2';
//   } else if (value == 2){
//     sliderValue.textContent = '4 X 4';
//   }
// }

// getValue();
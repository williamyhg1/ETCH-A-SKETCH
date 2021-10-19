const container = document.querySelector(".container");

function makeBlocks(){

}

function fillup(size) {
  if (size == 2) {
    for (i = 0; i < 4; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("two-blocks");
      container.append(blocks);
    }
  } else if (size == 4) {
    for (i = 0; i < 16; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("four-blocks");
      container.append(blocks);
    }
  } else if (size == 8) {
    for (i = 0; i < 64; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("eight-blocks");
      container.append(blocks);
    }
  } else if (size == 16){
    for (i = 0; i < 256; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("sixteen-blocks");
      container.append(blocks);
    }
  }
}

fillup(16);

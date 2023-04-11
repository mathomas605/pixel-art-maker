//====================================================
//set-up
const grid = document.querySelector(".grid");
const GRID_SIZE = 45;
const PIXLE_SIZE = 25;
grid.style.width = `${GRID_SIZE * (PIXLE_SIZE + 2)}px`;
let selectedcolor = "white";
let displayCurColor = document.createElement("div");
displayCurColor.setAttribute("id", "brush");
//==================================================
//create grid

for (let i = 0; i < GRID_SIZE ** 2; i++) {
  const pixel = document.createElement("div");
  pixel.style.width = PIXLE_SIZE + "px";
  pixel.style.height = PIXLE_SIZE + "px";
  pixel.style.border = "1px solid black";
  pixel.style.background = "white";
  /*pixel.addEventListener("click", function () {
    pixel.style.background = selectedcolor;
  });*/
  var mouseIsDown = false;
  pixel.addEventListener("mousedown", function () {
    mouseIsDown = true;
    pixel.style.backgound = selectedcolor;
  });
  pixel.addEventListener("mouseup", function () {
    mouseIsDown = false;
  });
  pixel.addEventListener("mousemove", function () {
    if (mouseIsDown) {
      pixel.style.background = selectedcolor;
    }
  });

  grid.append(pixel);
}

//=====================================================
// palette
let colors = [
  "red",
  "orange",
  "purple",
  "lightblue",
  "blue",
  "yellow",
  "green",
  "teal",
  "tan",
  "gold",
  "hotpink",
  "cyan",
  "pink",
  "grey",
  "white",
  "black",
  "SaddleBrown",
  "FireBrick",
  "Chartreuse",
  "LawnGreen",
  "MediumSeaGreen",
  "DeepPink",
  "PaleVioletRed",
  "LightSlateGray",
  "MidnightBlue",
  "DeepSkyBlue",
  "Maroon",
  "Goldenrod",
  "SandyBrown",
  "SaddleBrown",
  "Burlywood",
  "DarkOrange",
  "OrangeRed",
  "DarkOrchid",
  "Magenta",
  "Indigo",
  "PeachPuff",
  "Moccasin",
  "PapayaWhip",
  "LightPink",
  "ForestGreen",
];
let palette = document.querySelector(".palette");

for (let i = 0; i < colors.length; i++) {
  let color = document.createElement("div");
  color.classList.add("button");
  color.id = "color" + i;
  color.style.width = "55px";
  color.style.height = "55px";
  color.style.background = colors[i];
  color.addEventListener("click", () => {
    selectedcolor = colors[i];
    displayCurColor.style.background = selectedcolor;
  });
  palette.append(color);
  palette.append(displayCurColor);
}

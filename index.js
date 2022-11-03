// VARIABLES

let widthRatio = document.getElementById("ratio-width");
let heightRatio = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");

// FUNCTIONS

const calculateWidth = () => {
  let aspectRatio = widthRatio.value / heightRatio.value;
  width.value = parseFloat((height.value * aspectRatio).toFixed(2));
};

const calculateHeight = () => {
  let aspectRatio = widthRatio.value / heightRatio.value;
  height.value = parseFloat((width.value / aspectRatio).toFixed(2));
};

// EVENT LISTENERS

height.addEventListener("input", calculateWidth);
width.addEventListener("input", calculateHeight);

heightRatio.addEventListener("input", calculateHeight);
widthRatio.addEventListener("input", calculateWidth);

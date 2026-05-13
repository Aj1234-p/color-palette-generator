const generateButton = document.getElementById('generate-btn');
const paletteContainer = document.querySelector('.palette-container');

generateButton.addEventListener('click',generatePalette);

function generatePalette(){
  console.log("inside1");
  const colors = [];
  for(let i=0;i<5;i++){
    colors.push(generateColor());
  }
  updatePaletteDisplay(colors);
}

function generateColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";
  for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}


function updatePaletteDisplay(colors){
  const colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach((box,index)=>{
    const color = colors[index];
    const colorDiv = box.querySelector('.color');
    const hexValue = box.querySelector('.hex-value');

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  })
}

// generatePalette();


// generateButton.addEventListener('click',()=>{
//     generatePalette();
// })
const grid = document.querySelector('.grid');
const rainbowButton = document.querySelector('.rainbowButton');
const staticColorButton = document.querySelector('.colorChoice');
let isRainbow = false;

function updateGrid(){
    let size = document.querySelector('#slider').value;
    clearGrid();
    sizeCounter(size);
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        if (isRainbow) {
            console.log('test');
            square.addEventListener('mouseover', rainbowPaint);
        } else {
            square.addEventListener('mouseover', paint);
        }
    });
}

function buttonChoice(){

}
function sizeCounter(e){
  document.querySelector('.range').textContent = `${e} X ${e}`
}
function clearGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    })
}

function getColor(){
    return document.querySelector('.colorpicker').value;
}

function paint(e){
    const selector = e.target;
    let color = getColor(); 
    selector.style.backgroundColor = `${color}`;
}

function rainbowPaint(e){
    let rand = Math.floor(Math.floor(Math.random() * 5));
    let color;
    switch(rand){
        case 0:
            color = 'red';
            break;
        case 1:
            color = 'orange';
            break;
        case 2:
            color = 'yellow';
            break;
        case 3:
            color = 'green';
            break;
        case 4:
            color = 'purple';
            break;
    }
    const selector = e.target;
    selector.style.backgroundColor = `${color}`;
}

function switchToRainbowMode() {
    isRainbow = true;
    updateGrid();
  }
  
function switchToStaticMode() {
    isRainbow = false;
    updateGrid();
}

function clearButtonFunc(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'black';
    }) 
}
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clearButtonFunc)

const slider = document.querySelector('#slider');
slider.addEventListener('input', updateGrid);

rainbowButton.addEventListener('click', switchToRainbowMode);
staticColorButton.addEventListener('click', switchToStaticMode);

updateGrid();

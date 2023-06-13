const grid = document.querySelector('.grid');

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
      square.addEventListener('mouseover', paint);
    });
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
updateGrid();

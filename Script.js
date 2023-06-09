const grid = document.querySelector('.grid');

for(let i = 0; i < 16 * 16; i++){
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
}

function getColor(){
    return document.querySelector('.colorpicker').value;
}

function paint(e){
    const selector = e.target;
    let color = getColor(); 
    selector.style.backgroundColor = `${color}`;
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', paint);
});
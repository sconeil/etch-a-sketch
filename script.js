let gridItem = document.querySelectorAll("#square");
const container = document.getElementById("container");
const squarenode = document.getElementById('#square');
const btn = document.querySelector('#btn');
let size = 16;

gridMaker();

function gridMaker(){
    let x = 0
    let numberOfBoxes = size * size;
    while (x < numberOfBoxes) {
        let square = document.createElement('div');

        square.className = "grid-item";
        square.id = "square";
        
        document.getElementById('container').appendChild(square);
        x++;
    }
    container.style.cssText = 
    `grid-template-columns: repeat(` + size + `, 1fr);
    grid-template-rows: repeat(` + size + `, 1fr);`

     colorEvent();
}

function colorEvent(){
    gridItem = document.querySelectorAll("#square");
    gridItem.forEach(function(q){
        q.addEventListener('mouseover', function () {
        q.classList.add('colorer');
        });
    });
}

btn.addEventListener('click', function (e) {
    console.log('clicked');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    size = prompt("Enter how many squares you'd like on both sides. (Ex. 16)");
    gridMaker();
});
    
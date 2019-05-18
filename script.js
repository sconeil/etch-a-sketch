let x = 0
while(x < 256){
    let square = document.createElement('div');
    square.className = "grid-item";
    square.id = "square";
    //square.textContent= "testing";
    document.getElementById('container').appendChild(square);
    x++;
}
const gridItem = document.querySelectorAll("#square");

    gridItem.forEach(function(q){
       q.addEventListener('mouseover', function () {
          q.classList.add('drawer');
       });
    });
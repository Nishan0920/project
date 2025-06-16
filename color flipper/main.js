let color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let button = document.getElementById("btn");


const changecolor= ()=>{
    return Math.floor(Math.random()*color.length);

}
button.addEventListener("click", function() {
    let hexcolor = "#";  // Start with just #
    
    for (let i = 0; i < 6; i++) {
        hexcolor += color[changecolor()];
    }
    // hexcolor = "#"+ changer.textContent;
    document.body.style.background = hexcolor;
});




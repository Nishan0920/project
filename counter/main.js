let count = 0;
const decbuttons = document.getElementById("click1")
const resetbuttons = document.getElementById("click2")
const incbuttons = document.getElementById("click3")

const changer = document.querySelector(".color")

decbuttons.addEventListener("click",function(){
   if(count>0) {
    count --;
   changer.innerHTML = count;
   }
});

resetbuttons.addEventListener("click",function(){
    count = 0;
    changer.innerHTML = count;
});

incbuttons.addEventListener("click",function(){
    count ++;
    changer.innerHTML = count;
});
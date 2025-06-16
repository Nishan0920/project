let randomNumber = Math.floor(Math.random()*100)+1;
let attempts = 0;
function Show(){
    const guess = parseInt(document.getElementById("in1").value);
    const message = document.querySelector(".para1")
    attempts ++;
    document.getElementById("s1").textContent = attempts;
    document.getElementById("in1").value = ""
    if(isNaN(guess)|| guess<1 ||guess>100){
        message.textContent = "Please enter a number between 1 and 100";
        return;
    }
    if(guess === randomNumber){
        message.textContent = `Congratulation you have guess it in ${attempts} attempts!`;
        document.getElementById("s1").textContent = 0;
        
}else if(guess>randomNumber){
    message.textContent = "Too high, try again";

}else if(guess<randomNumber){
    message.textContent = "Too low, try again";

}else{
    
}













}
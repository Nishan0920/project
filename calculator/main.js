 let display = document.getElementById("display")
function appendToDisplay(value){
   display.value += value;
    
}
function clearDisplay(){
    display.value = "";
}
function Calculate(){
    try{
        display.value= eval(display.value);
    }catch(error){
        display.value= 'Error'
        setTimeout(clearDisplay,1000)
    }
}






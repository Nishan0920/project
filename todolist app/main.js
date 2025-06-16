function ADD(){
    const input = document.getElementById('task');
    const list = document.getElementById("list")
    let Newinput = input.value.trim();
    if(Newinput === ""){
        alert("Please enter a task");
    }else{
      li = document.createElement("li");
      li.innerHTML = `${Newinput}<i class="fas fa-trash" id="btn" onclick="this.parentElement.remove()"></i>`;
      
      list.appendChild(li);
      input.value ="";
      
      
      
    }
}
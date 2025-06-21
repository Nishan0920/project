const display = document.getElementById("display")
const Todos = document.getElementById("Todos")
let todo = JSON.parse(localStorage.getItem("todo")) || [];
function getTodo(){
     Todos.innerHTML = "";
     todo.forEach((task,index)=> {
        const li = document.createElement("li");
        li.innerHTML =  `       <input type="checkbox" id="check${index}" class="peer" /><label for="check${index}" class="peer-checked:line-through  cursor-pointer">${task}</label>
                               <button onClick={deleteTask(${index})} class="  text-black text-[1rem] rounded-2xl p-2 absolute right-2 cursor-pointer mr-2">Delete</button>`
        li.className="font-bold bg-[white] text-[black] p-2 rounded-4xl "
        Todos.appendChild(li);
        
     });
}
function Add(){
  const text = display.value.trim();
  if(text !== ""){
     todo.push(text)
     localStorage.setItem("todo",JSON.stringify(todo))
     display.value = "";
     getTodo();
}else{
    alert("Please enter a task")
}
}
function deleteTask(index) {
      todo.pop(index); 
      localStorage.removeItem("todo", JSON.stringify(todo));
      getTodo();
    }
display.addEventListener("keypress", function(e){
     if(e.key === "Enter"){
        Add();
     }

})
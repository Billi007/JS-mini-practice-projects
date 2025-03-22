let input = document.getElementById("inputBox");
let todo = document.getElementById("todo");

function Add(){
    if(input.value === " "){
      alert("Please enter a task");
    }else{
      let newElem = document.createElement('li');	
      newElem.innerHTML = `${input.value} <button>delete</button>`;
      todo.appendChild(newElem);
      input.value = "";

     newElem.querySelector('button').addEventListener('click', () => {
      newElem.remove();
      saveTasks();
     })
     saveTasks();
    }
}

function saveTasks(){
   let todoArr = [];

   document.querySelectorAll('#todo li').forEach((item) => {
      todoArr.push(item.innerText);

      localStorage.setItem('todos', JSON.stringify(todoArr));
   })
}
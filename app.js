let addTodo = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const container = document.querySelector('.todos-container')


let getTodoValue;

addBtn.addEventListener('click', function(){
    console.log(addTodo.value);
    getTodoValue = addTodo.value;
    addTodo.value = "";
    addingTodo(getTodoValue)

})

function addingTodo(x){
    let li = document.createElement('li');
    li.innerHTML = `
        <div class="todo-item">${x}</div>
        <button class="delete-btn">❌</button>`;

    li.className = 'todo-item'

    li.addEventListener('click', function(){
        li.children[0].classList.toggle('done')
    })

    li.querySelector('.delete-btn').addEventListener('click', function(){
        li.remove()
    })

    container.children[0].append(li);
}
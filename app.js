let addTodo = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');

let getTodoValue;

addBtn.addEventListener('click', function(){
    console.log(addTodo.value);
    getTodoValue = addTodo.value;
    addTodo.value = "";
    addingTodo(getTodoValue)
    // let li = document.createElement('li');
    // li.innerHTML = `${getTodoValue}  <span class = "remove-btn">x</span>`;
    // li.className='todo-item'
    // console.log(li)
    //  document.querySelector('.todos-container').appendChild(li)

})

function addingTodo(x){
    let li = document.createElement('li');
    li.innerHTML = `${x}  <span class = "remove-btn">x</span>`;
    li.className='todo-item'
    console.log(li)
    // document.querySelector('.todos-container').appendChild(li);
    li.querySelector('.remove-btn').addEventListener('click', function(){
        console.log('ok');
        li.remove()
    })

    document.querySelector('.todos-container').appendChild(li);

}
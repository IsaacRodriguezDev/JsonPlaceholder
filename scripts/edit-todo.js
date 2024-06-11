"use strict";
window.onload = () => {
    onLoadDisable()
    let getTodoId = document.querySelector("#getTodoId");
    getTodoId.addEventListener("submit", getTodoForm);
  let editForm = document.querySelector("#editForm");
  editForm.addEventListener("submit", updatingPosting);
  let cancelBtn = document.querySelector('#cancelBtn')
  cancelBtn.addEventListener('click',cancel)
};
function onLoadDisable(){
    document.querySelector('#id').disabled = true
    document.querySelector('#userId').disabled = true
    document.querySelector('#title').disabled = true
    document.querySelector('#completed').disabled = true
}
let getTodoForm = async (event)=>{
    event.preventDefault();
    let todoIdData = await id(event.target.todoId.value)
    console.log(todoIdData.userId,'this')
    console.log(event.target.todoId.value)
    document.querySelector('#id').value = todoIdData.id
    document.querySelector('#userId').value =todoIdData.userId
    document.querySelector('#title').value =todoIdData.title
    document.querySelector('#completed').value =todoIdData.completed
    disabled(event.target.todoId.value)
}
const id = async (todoId) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + todoId);
    let todoIdData = await response.json();

    return todoIdData;

}
let updatingPosting = async (event)=>{
    event.preventDefault();
  
    console.log( event.target.id.value)
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/"+ event.target.id.value,
            {
                method: "PUT",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userID: event.target.userId.value,
                    title: event.target.title.value,
                    completed: event.target.completed.value,
                })
            }
        )

        let add = await response.json()
        console.log(add)
    }catch(err){
        console.log(err)
    }
}
let cancel = ()=>{
    window.location.href = "./index.html"
}

let disabled = (field)=>{
    console.log(field)
if(field === field){
    document.querySelector('#userId').disabled = false
    document.querySelector('#userId').disabled = false
    document.querySelector('#title').disabled = false
    document.querySelector('#completed').disabled = false
}
    document.querySelector('#todoId').disabled = true

}
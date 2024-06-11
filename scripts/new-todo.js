"use strict";
window.onload = () => {
  let todoForm = document.querySelector("#todoForm");
  todoForm.addEventListener("submit", posting);
};


let posting = async (event)=>{
    event.preventDefault();
    let formData = new FormData(event.target)
    let formDataAsObject = Object.fromEntries(formData)
    console.log(formDataAsObject)
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/",
            {
                method:"POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify(formDataAsObject)
            }
        )

        let add = await response.json()
        console.log(add)
    }catch(err){
        console.log(err)
    }
}


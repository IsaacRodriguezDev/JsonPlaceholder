"use strict";
window.onload = () => {
  let button = document.querySelector("#theButton");
  button.addEventListener("click", todoID);
};

async function todoID() {
  let userInput = document.querySelector("#todoId");
  let results = document.querySelector("#results");
  let url = "https://jsonplaceholder.typicode.com/todos/";
  let userUrl = url + userInput.value;
  if(userInput.value ===''){
   return results.innerHTML = 'Nice try! Enter an ID'
  }
  try {
    let response = await fetch(userUrl);
    if(!response.ok){
      throw new Error(`UH OH! ERROR: ${response.status}`) 
    }
    let data = await response.json();

    console.log(data);
    
    results.innerHTML = JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}
// async function submitedApi(){
//     let userInput = document.querySelector('#todoId')
//     let results = document.querySelector('#results')
//     let url = "https://jsonplaceholder.typicode.com/todos/"
//     let userUrl = url + userInput.value
//     let testFunc = await test(userUrl)
//     results.innerHTML = JSON.stringify(testFunc)
// }

// async function test(testInput){
//     try{
//         let response = await fetch(testInput)
//         let data = await response.json()
//       return data
//       }catch (error){
//         console.log(error)
//       }
// }

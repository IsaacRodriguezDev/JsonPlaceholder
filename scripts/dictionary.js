"use strict";
window.onload = () => {
  let button = document.querySelector("#theButton");
  button.addEventListener("click", searchWord);
};

async function searchWord() {
  let userInput = document.querySelector("#searchWord");
  let results = document.querySelector("#results");
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  let userUrl = url + userInput.value;
  if(userInput.value ===''){
   return results.innerHTML = 'Nice try! Enter a Word'
  }
  try {
    let response = await fetch(userUrl);
    if(!response.ok){
      throw new Error(`UH OH! ERROR: ${response.status}`) 
    }
    let data = await response.json();
data.forEach((datas,idx)=>{
    results.innerHTML = `<pre>${JSON.stringify(datas.meanings[idx].definitions)}</pre>`
})
    
    
    
  } catch (error) {
    console.log(error);
  }
}
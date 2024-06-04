'use strict'
window.onload = ()=>{
    let tableBody = document.querySelector('#tableBody')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       return response.json()
    })
    .then((data)=>{
        for(let i = 0; i<data.length;i++){
            let row = tableBody.insertRow(-1)
            let cell1 = row.insertCell(0)
            cell1.innerHTML = data[i].id
            let cell2 = row.insertCell(1)
            cell2.innerHTML = data[i].name
            let cell3 = row.insertCell(2)
            cell3.innerHTML = data[i].username
            let cell4 = row.insertCell(3)
            cell4.innerHTML = data[i].phone
            let cell5 = row.insertCell(4)
            cell5.innerHTML = data[i].address.city
            let cell6 = row.insertCell(5)
            cell6.innerHTML = data[i].website  
        }
    })
}

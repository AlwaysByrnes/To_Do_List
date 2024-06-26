let list = JSON.parse(localStorage.getItem('list')) || [];// array to add values to it
const addBtn = document.getElementById("add-btn"); //Button to add input
const ul = document.getElementById('list'); //ul list

document.addEventListener("DOMContentLoaded", () =>{
    render(list)
})

addBtn.addEventListener("click", () =>{
   
   let input = document.getElementById("input").value
    //if input is valid
    if(input){
        list.push(input)
        //Save list to local storage
        localStorage.setItem('list', JSON.stringify(list))
    }
    //otherwise alert us if it is not.
    else{
        alert("Please fill in the textfield")
    } 
    //Clear input field after entering value
    document.getElementById("input").value = ""
    //Call list function
    render(list)
})

//function to render out the list
function render(list){
    //Add items to the list array
    let addList = "";
    for(let i = 0; i < list.length; i++){
        addList += `
        <li>
            ${list[i]} 
            <span class="close" onclick="removeItem(${i})">x</span>
            
        </li>
        `;
        //span tag add the x mark in the list
    }
    ul.innerHTML = addList;
}


//Remove item from list and call render function
function removeItem(index){
   //Remove item from list
    list.splice(index, 1);
    //Save list to local storage
    localStorage.setItem('list', JSON.stringify(list))
    //Render list
    render(list);
}
 
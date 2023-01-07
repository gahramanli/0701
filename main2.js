let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function(){

    var paragraph = document.createElement(`li`);
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
})

// Get the input box and list container elements from the HTML document
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task function called when user clicks the "Add" button
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }

    inputBox.value = "";
    saveData();

}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


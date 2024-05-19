// Get the input box and list container elements from the HTML document
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task function called when user clicks the "Add" button
function addTask() {
        // Check if the input box is empty
        if (inputBox.value === '') {
        // If empty, show an alert message
        alert("You must write something!");
    } 
                
// If not empty, create a new list item with the value of the input box
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Create a span element with a "x" symbol to allow the user to remove the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
        
// Clear the input box
inputBox.value = "";
        // Save the data to local storage
        saveData();
}

// Add event listener to the list container to handle user clicks on list items and "x" symbols
listContainer.addEventListener("click", function(e) {
        // If the user clicks on a list item
        if (e.target.tagName === "LI") {
        // Toggle the "checked" class on the list item
        e.target.classList.toggle("checked");
        // Save the data to local storage
        saveData();
    } 

// If the user clicks on the "x" symbol               
else if (e.target.tagName === "SPAN") {
        // Remove the parent list item
        e.target.parentElement.remove();
        // Save the data to local storage
        saveData();
    }
}, false);

// Function to save the data to local storage
function saveData(){
    // Save the list container's inner HTML to local storage with the key "data"
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show the saved tasks when the page loads
function showTask(){
    // If there is saved data in local storage, set the list container's inner HTML to the saved data
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to show the saved tasks when the page loads
showTask();


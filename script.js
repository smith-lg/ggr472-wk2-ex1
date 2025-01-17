// Create variable for button element using ID
const button = document.getElementById("my-btn");

// Define function to return message
const alertMessage = () => {
    alert("You clicked me!");
};

// Add event listener to button element with function to open dialogue box with message
button.addEventListener("click", alertMessage);
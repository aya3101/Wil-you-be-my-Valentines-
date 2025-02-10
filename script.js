// Define the correct password
const correctPassword = "2023-09-23";

// Get elements from HTML
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordScreen = document.getElementById("passwordScreen");
const valentineScreen = document.getElementById("valentineScreen");
const passwordMessage = document.getElementById("passwordMessage");

// Add event listener for button click
submitPassword.addEventListener("click", () => {
    let enteredPassword = passwordInput.value.trim(); // Remove extra spaces
    console.log("Entered Password:", enteredPassword); // Debugging line

    if (enteredPassword === correctPassword) {
        // Hide password screen and show the Valentine's message
        passwordScreen.classList.add("hidden");
        valentineScreen.classList.remove("hidden");
    } else {
        // Show error message if password is incorrect
        passwordMessage.innerText = "Wrong password! Try again.";
    }
});

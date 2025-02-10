// Correct password
const correctPassword = "2023-09-23";

// Get password-related elements
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");
const passwordScreen = document.getElementById("passwordScreen");
const valentineScreen = document.getElementById("valentineScreen");

// Get Valentine buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const messageDiv = document.getElementById("message");

// Handle password submission
submitPassword.addEventListener("click", () => {
    let enteredPassword = passwordInput.value.trim();

    console.log("Entered Password:", enteredPassword); // Debugging log

    if (enteredPassword === correctPassword) {
        passwordScreen.classList.add("hidden"); // Hide password screen
        valentineScreen.classList.remove("hidden"); // Show main screen
    } else {
        passwordMessage.innerText = "Wrong password! Try again."; // Show error
    }
});

// Handle "No" button clicks (Make Yes button grow)
let yesButtonSize = 16;
noButton.addEventListener("click", () => {
    yesButtonSize += 5; // Increase size
    yesButton.style.fontSize = `${yesButtonSize}px`;
});

// Handle "Yes" button click (Show celebration message with GIF)
yesButton.addEventListener("click", () => {
    valentineScreen.innerHTML = `
        <h1>HOOORAYYY TUMTUMMM HOOORAY!!</h1>
        <p>You are the sweetest! ❤️</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJpNjJ3aGNsbHJxZG0za3lyNWh2YmNtcDY4cHE5c3h6ZGV5eDd5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VbnUQpnihPSIgIXuZv/giphy.gif" 
             alt="Happy Jumping Cat" 
             width="300">
    `;
});

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

// Handle password submission
submitPassword.addEventListener("click", () => {
    let enteredPassword = passwordInput.value.trim();

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

// Handle "Yes" button click (Show video & GIF)
yesButton.addEventListener("click", () => {
    valentineScreen.innerHTML = `
        <h1>HOOORAYYY TUMTUMMM HOOORAY!!</h1>
        <p>You are the sweetest! ❤️</p>
        <img src="https://media.giphy.com/media/Y4bzv6DYbYzy8jDnoW/giphy.gif" 
             alt="Happy Jumping Kitten" 
             width="300">

        <!-- Google Drive Video Embed (Fullscreen) -->
        <div id="videoContainer">
            <iframe id="loveVideo" 
                src="https://drive.google.com/file/d/1eSnqZDXOLcSR6zZ4uv5pRTxxsJ4oEEQV/preview" 
                allow="autoplay">
            </iframe>
        </div>
    `;

    playHearts();
});

// Function to create floating hearts
function playHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random float speed
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);
}

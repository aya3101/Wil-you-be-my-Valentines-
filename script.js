const correctPassword = "9-23-2023";  // Change this to your actual first chat date
const passwordScreen = document.getElementById("passwordScreen");
const valentineScreen = document.getElementById("valentineScreen");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

let yesBtnSize = 1;

// Password Check
submitPassword.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
        passwordScreen.classList.add("hidden");
        valentineScreen.classList.remove("hidden");
    } else {
        passwordMessage.innerText = "Wrong password! Try again.";
    }
});

// Yes Button Click
yesBtn.addEventListener("click", () => {
    response.innerHTML = `<h2>HOOORAYYY TUMTUMMM HOOORAY!! 🎉🎉</h2>
                          <p>You're the sweetest, and I can't wait for all our adventures together! 💖</p>`;
});

// No Button Moves & Yes Button Grows
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
    yesBtnSize += 0.3;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
});

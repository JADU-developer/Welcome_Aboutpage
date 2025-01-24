
alert("Website is in development and some information are incorrect and to be check");

const lines = [
    "Explore the ultimate gaming experience with us!",
    "Embark on an unforgettable journey.",
    "Challenge your skills and push boundaries.",
    "Discover the world of Welcome!"
];
let currentLine = 0;
const typingText = document.getElementById("typing-text");

function typeAndErase() {
    const line = lines[currentLine];
    let charIndex = 0;

    function typeChar() {
        if (charIndex < line.length) {
            typingText.textContent += line[charIndex];
            charIndex++;
            setTimeout(typeChar, 100); // Adjust typing speed
        } else {
            setTimeout(eraseLine, 2000); // Pause after typing
        }
    }

    function eraseLine() {
        if (charIndex > 0) {
            typingText.textContent = line.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseLine, 50); // Adjust erasing speed
        } else {
            currentLine = (currentLine + 1) % lines.length; // Move to next line
            setTimeout(typeAndErase, 500); // Short pause before next typing starts
        }
    }

    typeChar(); // Start typing
}

// Initialize typing effect
typeAndErase();


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
    });
});


const screenshotsContainer = document.querySelector('.screenshots');

let isDown = false;
let startX;
let scrollLeft;

screenshotsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - screenshotsContainer.offsetLeft;
    scrollLeft = screenshotsContainer.scrollLeft;
});

screenshotsContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

screenshotsContainer.addEventListener('mouseup', () => {
    isDown = false;
});

screenshotsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - screenshotsContainer.offsetLeft;
    const walk = (x - startX) * 3; //adjust the scroll speed
    screenshotsContainer.scrollLeft = scrollLeft - walk;
});
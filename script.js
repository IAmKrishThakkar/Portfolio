// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing Effect
const words = [" Developer", " Creative Coder", " Problem Solver"];
let wordIndex = 0;
let letterIndex = 0;
const typedSpan = document.querySelector('.typed');

function typeText() {
    if (letterIndex < words[wordIndex].length) {
        typedSpan.textContent += words[wordIndex][letterIndex++];
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (letterIndex > 0) {
        typedSpan.textContent = words[wordIndex].substring(0, letterIndex--);
        setTimeout(eraseText, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeText, 500);
    }
}

typeText();
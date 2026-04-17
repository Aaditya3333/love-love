// Animation sequence
const words = document.querySelectorAll('.word');
const heartsContainer = document.querySelector('.hearts-container');

// Show words from top to bottom with delay
function animateWords() {
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('show');
            createSparkles(word);
        }, index * 1000);
    });
}

// Create sparkle effects around the word
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = centerX + (Math.random() - 0.5) * 200 + 'px';
        sparkle.style.top = centerY + (Math.random() - 0.5) * 100 + 'px';
        sparkle.style.animationDelay = Math.random() * 1 + 's';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
    }
}

// Create floating hearts in background
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 6000);
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Start word animation
    animateWords();
    
    // Create floating hearts continuously
    setInterval(createHeart, 800);
    
    // Restart word animation every 6 seconds
    setInterval(() => {
        words.forEach(word => word.classList.remove('show'));
        setTimeout(animateWords, 500);
    }, 6000);
});

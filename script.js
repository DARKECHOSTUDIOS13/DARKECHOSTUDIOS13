// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ghost hover animation
document.querySelectorAll('.ghost').forEach(ghost => {
    ghost.addEventListener('mouseenter', () => {
        const x = Math.random() * 50 - 25;
        const y = Math.random() * 50 - 25;
        ghost.style.transform = `translate(${x}px, ${y}px) scale(1.2) rotate(5deg)`;
    });
    ghost.addEventListener('mouseleave', () => {
        ghost.style.transform = '';
    });
});

// Background audio
const audio = document.getElementById('bg-audio');
if (audio) audio.volume = 0.2;

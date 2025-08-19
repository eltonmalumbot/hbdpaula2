// Efek Konfeti
const confettiContainer = document.querySelector('.confetti-container');
const colors = ['#e91e63', '#f06292', '#ffcdd2', '#ff80ab'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.width = Math.random() * 8 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    confettiContainer.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

setInterval(createConfetti, 100);

// Kontrol Musik
const music = document.getElementById('birthday-music');
const musicButton = document.getElementById('music-btn');

let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicButton.textContent = '🔇';
    } else {
        music.play();
        musicButton.textContent = '🎵';
    }
    isPlaying = !isPlaying;
}

// Tambahkan event listener ke tombol musik
musicButton.addEventListener('click', toggleMusic);

// Putar musik otomatis saat halaman dimuat (jika diizinkan browser)
window.addEventListener('load', () => {
    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPlaying = true;
            musicButton.textContent = '🎵';
        }).catch(() => {
            // Jika browser memblokir putar otomatis, biarkan tombol menunjukkan 'diam'
            isPlaying = false;
            musicButton.textContent = '🔇';
        });
    }
});

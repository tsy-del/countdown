document.addEventListener('DOMContentLoaded', () => {
    function updateCountdown() {
        const targetDate = new Date('2026-03-31T23:59:59');
        const now = new Date();
        const diff = targetDate - now;

        const timerElement = document.getElementById('timer');
        if (!timerElement) return;

        if (diff <= 0) {
            timerElement.innerHTML = "時間到！";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.innerHTML = 
            `${days}天 ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
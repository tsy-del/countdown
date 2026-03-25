let timerInterval;

function startCountdown() {
    clearInterval(timerInterval);
    const minutes = document.getElementById('minutes').value;
    let totalSeconds = minutes * 60;
    const timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerDisplay.innerHTML = "00:00:00";
            return;
        }
        totalSeconds--;
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        timerDisplay.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
}
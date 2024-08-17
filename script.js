
document.getElementById('startTimerBtn').addEventListener('click', function() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);
    const totalTime = (hours * 3600) + (minutes * 60) + seconds;
    
    if (totalTime > 0) {
        startTimer(totalTime);
    }
});

function startTimer(duration) {
    const timersContainer = document.getElementById('timers');
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';
    
    const timeLeft = document.createElement('span');
    timeLeft.textContent = formatTime(duration);
    timerElement.appendChild(timeLeft);
    
    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'Stop Timer';
    stopBtn.addEventListener('click', function() {
        clearInterval(timerInterval);
        timerElement.remove();
    });
    timerElement.appendChild(stopBtn);
    
    timersContainer.appendChild(timerElement);

    const timerInterval = setInterval(() => {
        duration--;
        timeLeft.textContent = formatTime(duration);

        if (duration <= 0) {
            clearInterval(timerInterval);
            timerElement.remove();
        }
    }, 1000);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `Time left: ${hrs}h ${mins}m ${secs}s`;
}

const countDownDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = `${days}<div class="timer-label">Days</div>`;
  document.getElementById("hours").innerHTML = `${hours}<div class="timer-label">Hours</div>`;
  document.getElementById("minutes").innerHTML = `${minutes}<div class="timer-label">Minutes</div>`;
  document.getElementById("seconds").innerHTML = `${seconds}<div class="timer-label">Seconds</div>`;

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-container").innerHTML = "EXPIRED";
  }
}, 1000);
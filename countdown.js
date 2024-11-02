// Set the date for the wedding
const weddingDate = new Date("2026-05-01T15:00:00"); // Replace with your wedding date and time (e.g., "2024-09-15T14:00:00")

function updateCountdown() {
    const now = new Date();
    const timeDifference = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the timer display
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Stop the countdown when it reaches zero
    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "<p>The Big Day is Here!</p>";
    }
}

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

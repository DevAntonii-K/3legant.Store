// Function to start the countdown
export const initCountdown = () => {
  // 1. Set target date to "now" plus exactly 24 hours (in milliseconds)
  const endDate = new Date().getTime() + (24 * 60 * 60 * 1000);

  const countdown = () => {
    const now = new Date().getTime();
    let distance = endDate - now;

    // 2. If the timer hits zero, stop it at 0
    if (distance < 0) {
      distance = 0; 
    }

    // 3. Math formulas to extract days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. Push numbers to HTML and add a leading zero
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  };

  // 5. Run the function every 1 second
  setInterval(countdown, 1000);

  // 6. Run immediately once to prevent 1-second delay
  countdown();
};

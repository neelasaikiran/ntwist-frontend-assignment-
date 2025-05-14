document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const timerDisplay = document.getElementById('timer');
    const confirmation = document.getElementById('confirmation');
    let startTime = null;

    // Start timer on first input focus
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (!startTime) {
                startTime = new Date();
                updateTimer();
            }
        });
    });

    // Update timer every second
    function updateTimer() {
        if (startTime) {
            const currentTime = new Date();
            const seconds = Math.floor((currentTime - startTime) / 1000);
            timerDisplay.textContent = `Time spent: ${seconds} seconds`;
            setTimeout(updateTimer, 1000);
        }
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            confirmation.classList.remove('hidden');
            form.reset();
            startTime = null;
            timerDisplay.textContent = 'Time spent: 0 seconds';
            setTimeout(() => {
                confirmation.classList.add('hidden');
            }, 3000);
        } else {
            form.reportValidity();
        }
    });
});
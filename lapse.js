// lapse.js - Script Execution Core

function updateStatus(message, percent) {
    const msgs = document.getElementById('msgs');
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const logOutput = document.getElementById('log-output');

    if (msgs) msgs.textContent = message;
    if (progressBar) progressBar.style.width = percent + '%';
    if (progressPercent) progressPercent.textContent = percent + '%';

    if (logOutput) {
        const p = document.createElement('p');
        p.className = 'text-green-400';
        p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logOutput.appendChild(p);
        logOutput.scrollTop = logOutput.scrollHeight;
    }
}

function initLapseChain() {
    let step = 0;
    const steps = [
        { msg: "Triggering Webkit memory layout...", p: 20 },
        { msg: "Arbitrary read/write achieved...", p: 45 },
        { msg: "Executing ROP chain...", p: 75 },
        { msg: "Lapse chain loaded successfully!", p: 100 }
    ];

    const interval = setInterval(() => {
        if (step < steps.length) {
            updateStatus(steps[step].msg, steps[step].p);
            step++;
        } else {
            clearInterval(interval);
        }
    }, 600);
}

// البدء عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    updateStatus("Loading lapse chain...", 5);
    setTimeout(initLapseChain, 500);
});


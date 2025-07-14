// update status from internal api (api.juljeryt.pl)
// its source code isnt public for now
async function updateStatus() {
    try {
        const response = await fetch('https://api.juljeryt.pl/status');
        const data = await response.json();

        if (!data.status) return;

        let statusText;
        switch (data.status) {
            case 'online':
                statusText = 'online 🟢';
                break;
            case 'dnd':
                statusText = 'do not disturb ⛔';
                break;
            case 'idle':
                statusText = 'idle 🌙';
                break;
            case 'offline':
                statusText = 'offline 🔴';
                break;
            default:
                return;
        }

        document.getElementById('status').textContent = statusText;
        document.getElementById('status').removeAttribute('hidden');
    } catch (error) {
        console.error('failed to fetch status:', error);
    }
}

updateStatus();

// animated title
function animateTitle() {
    var index = 0;
    var reverse = false;
    var animatedTitle = "jul's website";
    setInterval(function () {
        index = (index + (reverse ? -1 : 1)) % (animatedTitle.length + 1);
        if (index === 0 || index === animatedTitle.length) reverse = !reverse;
        document.title = animatedTitle.slice(0, (index ? index : 1));
    }, 300);
}

window.onload = animateTitle;
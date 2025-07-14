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
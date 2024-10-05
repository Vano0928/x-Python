document.addEventListener('DOMContentLoaded', function() {
    const powerButton = document.getElementById('power-button');
    const statusText = document.getElementById('status');
    const stageText = document.getElementById('stage');

    function updateStatus() {
        fetch('/status')
            .then(response => response.json())
            .then(data => {
                statusText.textContent = data.status
                stageText.textContent = data.stage ? data.stage.replace('_', ' ') : 'None';
            });
    }

    setInterval(updateStatus, 2000);

    powerButton.addEventListener('click', function() {
        fetch('/start', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                console.log(response)
            })
            .catch(error => {
                console.log(response)
            });
    });
});

const statusText = document.getElementById('status');
const stageText = document.getElementById('stage');

const glassDiv = document.getElementById('glass');
const rotatingElements = document.querySelectorAll('.item');


function startRotation() {
    rotatingElements.forEach((element) => {
        element.style.animationDuration = `${rotationSpeed}s`;
        element.classList.add('rotating');
    });
}

function stopRotation() {
    rotatingElements.forEach((element) => {
        element.classList.remove('rotating');
    });
}

if (statusText === "running") {
    startRotation();
} else {
    stopRotation();
}

function setRotationSpeed(newSpeed) {
    rotationSpeed = newSpeed;
    rotatingElements.forEach((element) => {
        element.style.animationDuration = `${rotationSpeed}s`;
    });
}

setTimeout(() => {
    setRotationSpeed(1);
}, 5000);

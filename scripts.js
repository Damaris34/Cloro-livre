document.getElementById('increase').addEventListener('click', function() {
    let currentLevel = parseFloat(document.getElementById('current-level').value) || 0;
    document.getElementById('current-level').value = (currentLevel + 0.1).toFixed(1) + ' mg/L';
});

document.getElementById('decrease').addEventListener('click', function() {
    let currentLevel = parseFloat(document.getElementById('current-level').value) || 0;
    document.getElementById('current-level').value = (currentLevel - 0.1).toFixed(1) + ' mg/L';
});


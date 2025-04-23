document.getElementById('cloro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/api/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Exemplo de gráfico com Chart.js
const ctx = document.getElementById('cloro-chart').getContext('2d');
const cloroChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Nível de Cloro',
            data: [1.2, 1.5, 1.8, 1.3, 1.6, 1.9],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

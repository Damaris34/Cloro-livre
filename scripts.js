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
        // Atualizar a galeria de fotos
        fetchPhotos();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Função para buscar e exibir as fotos
function fetchPhotos() {
    fetch('/api/photos')
        .then(response => response.json())
        .then(data => {
            const photoGrid = document.getElementById('photo-grid');
            photoGrid.innerHTML = '';
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.path;
                img.alt = photo.location;
                photoGrid.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Carregar fotos ao iniciar a página
fetchPhotos();

document.getElementById('generate-pdf-btn').addEventListener('click', function() {
    fetch('/api/generate-pdf')
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'relatorio_cloro_livre.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
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

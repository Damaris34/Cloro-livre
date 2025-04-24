document.getElementById('cloro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/api/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const feedback = document.getElementById('feedback');
        feedback.innerHTML = `<p style="color: green;">${data.message}</p>`;
        feedback.classList.add('success');
        feedback.classList.remove('error');
        // Atualizar a galeria de fotos
        fetchPhotos();
    })
    .catch(error => {
        const feedback = document.getElementById('feedback');
        feedback.innerHTML = `<p style="color: red;">Erro ao enviar os dados: ${error.message}</p>`;
        feedback.classList.add('error');
        feedback.classList.remove('success');
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
                const photoCard = document.createElement('div');
                photoCard.className = 'photo-card';
                photoCard.innerHTML = `
                    <img src="${photo.path}" alt="${photo.location}">
                    <h3>${photo.location}</h3>
                `;
                photoGrid.appendChild(photoCard);
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
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error('Erro ao gerar o PDF: ' + response.statusText);
            }
        })
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
            alert('Erro ao gerar o PDF: ' + error.message);
        });
});

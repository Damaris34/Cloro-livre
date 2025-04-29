document.getElementById('photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('photo-preview').src = e.target.result;
            document.getElementById('photo-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('cloro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const date = formData.get('date');

    // Validação de data
    if (!date) {
        document.getElementById('date-error').textContent = 'A data é obrigatória.';
        return;
    } else {
        document.getElementById('date-error').textContent = '';
    }

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
    })
    .catch(error => {
        const feedback = document.getElementById('feedback');
        feedback.innerHTML = `<p style="color: red;">Erro ao enviar os dados: ${error.message}</p>`;
        feedback.classList.add('error');
        feedback.classList.remove('success');
        console.error('Error:', error);
    });
});

document.querySelectorAll('.file-input').forEach(input => {
    input.addEventListener('change', function(e) {
        const fileName = e.target.files[0] ? e.target.files[0].name : 'Nenhum arquivo escolhido';
        e.target.nextElementSibling.textContent = fileName;
    });
});


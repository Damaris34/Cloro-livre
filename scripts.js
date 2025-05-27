document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const dataRegistro = today.toLocaleDateString('pt-BR');
    document.getElementById('data-registro').textContent = dataRegistro;

    // Gerar PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(document.querySelector('.container'), {
        callback: function(doc) {
            doc.save('controle-cloro-livre.pdf');
        },
        x: 10,
        y: 10,
        width: 190,
        windowWidth: 800
    });
});

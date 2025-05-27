document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('data-registro').value = formattedDate;

    document.getElementById('generate-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Captura o conteúdo do container
        const element = document.querySelector('.container');

        // Configurações para o PDF
        const options = {
            callback: function(doc) {
                doc.save('controle-cloro-livre.pdf');
            },
            x: 10,
            y: 10,
            width: 190,
            windowWidth: 800,
            margin: [10, 10, 10, 10],
            autoPaging: 'text',
            pagesplit: true
        };

        // Gera o PDF
        doc.html(element, options);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('data-registro').value = formattedDate;

    document.getElementById('generate-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Captura o conteúdo do container
        const element = document.getElementById('pdf-content');

        // Usa html2canvas para capturar o conteúdo como imagem
        html2canvas(element, {
            scale: 2, // Aumenta a resolução para melhor qualidade
            useCORS: true, // Permite carregar imagens de origens diferentes
            allowTaint: true // Permite carregar imagens com taint
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            // Adiciona a imagem ao PDF
            doc.addImage(imgData, 'PNG', 10, 10, 180, 0);

            // Salva o PDF
            doc.save('controle-cloro-livre.pdf');
        }).catch(error => {
            console.error("Erro ao gerar PDF:", error);
        });
    });
});

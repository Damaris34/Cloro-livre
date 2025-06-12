document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('data-registro').value = formattedDate;

    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loading-indicator';
    loadingIndicator.style.display = 'none';
    loadingIndicator.style.position = 'fixed';
    loadingIndicator.style.top = '50%';
    loadingIndicator.style.left = '50%';
    loadingIndicator.style.transform = 'translate(-50%, -50%)';
    loadingIndicator.textContent = 'Gerando PDF...';
    document.body.appendChild(loadingIndicator);

    document.getElementById('generate-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Mostra o indicador de carregamento
        loadingIndicator.style.display = 'block';

        // Captura o conteúdo do container
        const element = document.getElementById('pdf-content');

        // Usa html2canvas para capturar o conteúdo como imagem
        html2canvas(element, {
            scale: 2, // Aumenta a resolução para melhor qualidade
            useCORS: true, // Permite carregar imagens de origens diferentes
            allowTaint: true, // Permite carregar imagens com taint
            logging: true // Ativa o logging para depuração
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            // Adiciona a imagem ao PDF
            doc.addImage(imgData, 'PNG', 10, 10, 180, 0);

            // Adiciona um rodapé com a data de geração
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(10);
                doc.text(`Gerado em: ${formattedDate}`, 10, doc.internal.pageSize.height - 10);
            }

            // Salva o PDF
            doc.save('controle-cloro-livre.pdf');

            // Esconde o indicador de carregamento
            loadingIndicator.style.display = 'none';
        }).catch(error => {
            console.error("Erro ao gerar PDF:", error);
            alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
            loadingIndicator.style.display = 'none';
        });
    });
});


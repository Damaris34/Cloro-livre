document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('data-registro').textContent = formattedDate;

    // Simulando dados para os pontos de saída
    document.getElementById('saida-tratamento').textContent = "Dados da Saída de Tratamento";
    document.getElementById('cozinha').textContent = "Dados da Cozinha";
    document.getElementById('producao').textContent = "Dados da Produção";
    document.getElementById('administracao').textContent = "Dados da Administração";
    document.getElementById('recebimento').textContent = "Dados do Recebimento";

    document.getElementById('generate-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Captura o conteúdo do container
        const element = document.getElementById('pdf-content');

        // Usa html2canvas para capturar o conteúdo como imagem
        html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            // Adiciona a imagem ao PDF
            doc.addImage(imgData, 'PNG', 10, 10, 180, 0);

            // Salva o PDF
            doc.save('relatorio_controle_cloro_livre.pdf');
        }).catch(error => {
            console.error("Erro ao gerar PDF:", error);
            alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
        });
    });
});

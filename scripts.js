document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Função para desenhar um retângulo arredondado
    function roundedRect(x, y, w, h, r, style = 'S') {
        doc.setDrawColor(0, 0, 255);
        doc.setFillColor(240, 248, 255);
        doc.roundedRect(x, y, w, h, r, r, style);
    }

    // Cabeçalho
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 10, 190, 20, 'FD');

    // Data
    roundedRect(10, 40, 190, 20, 5, 'FD');

    // Localização dos Pontos
    // Apenas o título, sem informações adicionais
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('Localização dos Pontos', 105, 70);

    // Saída de Tratamento
    roundedRect(20, 80, 50, 50, 5, 'FD');

    // Cozinha
    roundedRect(80, 80, 50, 50, 5, 'FD');

    // Produção
    roundedRect(140, 80, 50, 50, 5, 'FD');

    // Administração
    roundedRect(20, 140, 50, 50, 5, 'FD');

    // Recebimento
    roundedRect(80, 140, 50, 50, 5, 'FD');

    // Rodapé
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 200, 190, 20, 'FD');

    // Salvar o PDF
    setTimeout(() => {
        doc.save('relatorio_cloro_livre.pdf');
    }, 1000); // Espera um pouco para garantir que as imagens sejam carregadas
});

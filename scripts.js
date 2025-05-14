document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Função para desenhar um retângulo arredondado
    function roundedRect(x, y, w, h, r, style = 'S') {
        doc.setDrawColor(0, 0, 255);
        doc.setFillColor(240, 248, 255);
        doc.roundedRect(x, y, w, h, r, r, style);
    }

    // Função para adicionar texto com estilo
    function addStyledText(text, x, y, size = 12, isBold = false) {
        doc.setFontSize(size);
        doc.setFont(isBold ? "helvetica" : "helvetica", isBold ? "bold" : "normal");
        doc.text(text, x, y);
    }

    // Cabeçalho
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 10, 190, 20, 'FD');
    addStyledText('Controle de Cloro Livre', 105, 20, 16, true);

    // Data
    roundedRect(10, 40, 190, 20, 5, 'FD');
    addStyledText(document.getElementById('date').value, 105, 50, 12, false);

    // Localização dos Pontos
    addStyledText('Localização dos Pontos', 105, 70, 14, true);

    // Saída de Tratamento
    roundedRect(20, 80, 50, 40, 5, 'FD');
    // Adicionar imagem para Saída de Tratamento
    // Note: Você precisará de uma função para converter a imagem para base64 e adicioná-la ao PDF

    // Cozinha
    roundedRect(80, 80, 50, 40, 5, 'FD');
    // Adicionar imagem para Cozinha

    // Produção
    roundedRect(140, 80, 50, 40, 5, 'FD');
    // Adicionar imagem para Produção

    // Administração
    roundedRect(20, 130, 50, 40, 5, 'FD');
    // Adicionar imagem para Administração

    // Recebimento
    roundedRect(80, 130, 50, 40, 5, 'FD');
    // Adicionar imagem para Recebimento

    // Botão Gerar PDF
    doc.setFillColor(0, 0, 139);
    roundedRect(80, 180, 50, 15, 5, 'FD');
    addStyledText('Gerar PDF', 105, 188, 10, true);

    // Rodapé
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 200, 190, 20, 'FD');
    addStyledText('© 2023 Controle de Cloro Livre', 105, 210, 10, false);

    // Salvar o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

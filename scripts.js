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
    addStyledText(document.getElementById('treatment-exit').value, 45, 100, 12, false);

    // Cozinha
    roundedRect(80, 80, 50, 40, 5, 'FD');
    addStyledText(document.getElementById('kitchen').value, 105, 100, 12, false);

    // Produção
    roundedRect(140, 80, 50, 40, 5, 'FD');
    addStyledText(document.getElementById('production').value, 165, 100, 12, false);

    // Administração
    roundedRect(20, 130, 50, 40, 5, 'FD');
    addStyledText(document.getElementById('administration').value, 45, 150, 12, false);

    // Recebimento
    roundedRect(80, 130, 50, 40, 5, 'FD');
    addStyledText(document.getElementById('receiving').value, 105, 150, 12, false);

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

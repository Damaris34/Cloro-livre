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
    roundedRect(10, 10, 190, 20, 5, 'FD');
    addStyledText('Controle de Cloro Livre', 105, 20, 16, true);

    // Data
    roundedRect(10, 40, 190, 20, 5, 'FD');
    addStyledText('Data:', 20, 50);
    addStyledText(document.getElementById('date').value, 40, 50);

    // Localização dos Pontos
    addStyledText('Localização dos Pontos', 20, 70, 14, true);

    // Saída de Tratamento
    roundedRect(10, 80, 55, 40, 5, 'FD');
    addStyledText('Saída de Tratamento', 32.5, 90, 10, true);
    addStyledText('Escolher Arquivo', 20, 100);
    addStyledText('Nenhum arquivo escolhido', 20, 110);
    addStyledText(document.getElementById('treatment-exit').value, 32.5, 120);

    // Cozinha
    roundedRect(75, 80, 55, 40, 5, 'FD');
    addStyledText('Cozinha', 100, 90, 10, true);
    addStyledText('Escolher Arquivo', 75, 100);
    addStyledText('Nenhum arquivo escolhido', 75, 110);
    addStyledText(document.getElementById('kitchen').value, 100, 120);

    // Produção
    roundedRect(140, 80, 55, 40, 5, 'FD');
    addStyledText('Produção', 165, 90, 10, true);
    addStyledText('Escolher Arquivo', 140, 100);
    addStyledText('Nenhum arquivo escolhido', 140, 110);
    addStyledText(document.getElementById('production').value, 165, 120);

    // Administração
    roundedRect(10, 130, 55, 40, 5, 'FD');
    addStyledText('Administração', 32.5, 140, 10, true);
    addStyledText('Escolher Arquivo', 10, 150);
    addStyledText('Nenhum arquivo escolhido', 10, 160);
    addStyledText(document.getElementById('administration').value, 32.5, 170);

    // Recebimento
    roundedRect(75, 130, 55, 40, 5, 'FD');
    addStyledText('Recebimento', 100, 140, 10, true);
    addStyledText('Escolher Arquivo', 75, 150);
    addStyledText('Nenhum arquivo escolhido', 75, 160);
    addStyledText(document.getElementById('receiving').value, 100, 170);

    // Botão Gerar PDF
    roundedRect(75, 180, 55, 15, 5, 'FD');
    addStyledText('Gerar PDF', 100, 188, 10, true);

    // Rodapé
    roundedRect(10, 200, 190, 20, 5, 'FD');
    addStyledText('© 2023 Controle de Cloro Livre', 105, 210, 10, false);

    // Salvar o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

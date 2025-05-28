document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

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
    doc.setFillColor(240, 248, 255);
    doc.rect(10, 40, 190, 20, 'FD');
    addStyledText('Data: ' + document.getElementById('date').value, 105, 50, 12, false);

    // Nível Atual
    doc.rect(10, 70, 190, 20, 'FD');
    addStyledText('Nível Atual: ' + document.getElementById('current-level').value, 105, 80, 12, false);

    // Alvo
    doc.rect(10, 100, 190, 20, 'FD');
    addStyledText('Alvo: ' + document.getElementById('target-level').value, 105, 110, 12, false);

    // Localização dos Pontos
    addStyledText('Localização dos Pontos', 105, 140, 14, true);

    const locations = [
        { x: 20, y: 160, text: 'Saída de Tratamento', value: document.getElementById('treatment-exit').value },
        { x: 80, y: 160, text: 'Cozinha', value: document.getElementById('kitchen').value },
        { x: 140, y: 160, text: 'Produção', value: document.getElementById('production').value },
        { x: 20, y: 200, text: 'Administração', value: document.getElementById('administration').value },
        { x: 80, y: 200, text: 'Recebimento', value: document.getElementById('receiving').value }
    ];

    locations.forEach(loc => {
        doc.setFillColor(240, 248, 255);
        doc.rect(loc.x, loc.y, 50, 50, 'FD');
        addStyledText(loc.text, loc.x + 25, loc.y + 10, 10, true);
        addStyledText(loc.value, loc.x + 25, loc.y + 30, 10, false);
    });

    // Rodapé
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 260, 190, 20, 'FD');
    addStyledText('© 2023 Controle de Cloro Livre', 105, 270, 10, false);

    // Salvar o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

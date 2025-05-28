document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    function roundedRect(x, y, w, h, r, style = 'S') {
        doc.setDrawColor(0, 0, 255);
        doc.setFillColor(240, 248, 255);
        doc.roundedRect(x, y, w, h, r, r, style);
    }

    function addStyledText(text, x, y, size = 12, isBold = false) {
        doc.setFontSize(size);
        doc.setFont(isBold ? "helvetica" : "helvetica", isBold ? "bold" : "normal");
        doc.text(text, x, y);
    }

    doc.setFillColor(0, 0, 139);
    doc.rect(10, 10, 190, 20, 'FD');
    addStyledText('Controle de Cloro Livre', 105, 20, 16, true);

    roundedRect(10, 40, 190, 20, 5, 'FD');
    addStyledText('Data: ' + document.getElementById('date').value, 105, 50, 12, false);

    addStyledText('Localização dos Pontos', 105, 70, 14, true);

    const positions = [
        { x: 20, y: 80, text: 'Saída de Tratamento', value: document.getElementById('treatment-exit').value },
        { x: 80, y: 80, text: 'Cozinha', value: document.getElementById('kitchen').value },
        { x: 140, y: 80, text: 'Produção', value: document.getElementById('production').value },
        { x: 20, y: 140, text: 'Administração', value: document.getElementById('administration').value },
        { x: 80, y: 140, text: 'Recebimento', value: document.getElementById('receiving').value }
    ];

    positions.forEach(pos => {
        roundedRect(pos.x, pos.y, 50, 50, 5, 'FD');
        addStyledText(pos.text, pos.x + 25, pos.y + 10, 10, true);
        addStyledText(pos.value, pos.x + 25, pos.y + 30, 10, false);
    });

    doc.setFillColor(0, 0, 139);
    doc.rect(10, 200, 190, 20, 'FD');
    addStyledText('© 2023 Controle de Cloro Livre', 105, 210, 10, false);

    doc.save('relatorio_cloro_livre.pdf');
});

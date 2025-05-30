document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Título do relatório
    doc.setFontSize(18);
    doc.text('Relatório de Controle de Cloro Livre', 105, 10, { align: 'center' });

    // Data
    doc.setFontSize(12);
    doc.text(`Data: ${document.getElementById('date').value}`, 10, 30);

    // Saída de Tratamento
    doc.text('Saída de Tratamento:', 10, 50);
    doc.text(document.getElementById('treatment-exit').value, 70, 50);

    // Cozinha
    doc.text('Cozinha:', 10, 60);
    doc.text(document.getElementById('kitchen').value, 70, 60);

    // Produção
    doc.text('Produção:', 10, 70);
    doc.text(document.getElementById('production').value, 70, 70);

    // Administração
    doc.text('Administração:', 10, 80);
    doc.text(document.getElementById('administration').value, 70, 80);

    // Recebimento
    doc.text('Recebimento:', 10, 90);
    doc.text(document.getElementById('receiving').value, 70, 90);

    // Salvar o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

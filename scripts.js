document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text('Relatório de Controle de Cloro Livre', 10, 10);
    doc.text(`Data: ${document.getElementById('date').value}`, 10, 20);

    doc.text('Saída de Tratamento:', 10, 30);
    doc.text(document.getElementById('treatment-exit').value, 50, 30);

    doc.text('Cozinha:', 10, 40);
    doc.text(document.getElementById('kitchen').value, 50, 40);

    doc.text('Produção:', 10, 50);
    doc.text(document.getElementById('production').value, 50, 50);

    doc.text('Administração:', 10, 60);
    doc.text(document.getElementById('administration').value, 50, 60);

    doc.text('Recebimento:', 10, 70);
    doc.text(document.getElementById('receiving').value, 50, 70);

    doc.save('relatorio_cloro_livre.pdf');
});

document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Título do relatório
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFont("helvetica", "bold");
    doc.text('Relatório de Controle de Cloro Livre', 105, 20, { align: 'center' });

    // Linha horizontal abaixo do título
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    // Data
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0);
    doc.text(`Data: ${document.getElementById('date').value}`, 20, 40);

    // Configuração de estilo para os itens
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");

    // Saída de Tratamento
    doc.text('Saída de Tratamento:', 20, 60);
    doc.setFont("helvetica", "normal");
    doc.text(document.getElementById('treatment-exit').value, 90, 60);

    // Cozinha
    doc.setFont("helvetica", "bold");
    doc.text('Cozinha:', 20, 70);
    doc.setFont("helvetica", "normal");
    doc.text(document.getElementById('kitchen').value, 90, 70);

    // Produção
    doc.setFont("helvetica", "bold");
    doc.text('Produção:', 20, 80);
    doc.setFont("helvetica", "normal");
    doc.text(document.getElementById('production').value, 90, 80);

    // Administração
    doc.setFont("helvetica", "bold");
    doc.text('Administração:', 20, 90);
    doc.setFont("helvetica", "normal");
    doc.text(document.getElementById('administration').value, 90, 90);

    // Recebimento
    doc.setFont("helvetica", "bold");
    doc.text('Recebimento:', 20, 100);
    doc.setFont("helvetica", "normal");
    doc.text(document.getElementById('receiving').value, 90, 100);

    // Salvar o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

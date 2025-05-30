document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adiciona o título do relatório
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.text('Relatório de Controle de Cloro Livre', 105, 20, { align: 'center' });

    // Adiciona a data
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.text(`Data: ${document.getElementById('date').value}`, 20, 40);

    // Função para adicionar seções ao PDF
    const addSection = (y, title, value) => {
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text(title, 20, y);
        doc.text(value, 100, y);
    };

    // Adiciona as seções ao PDF
    addSection(60, 'Saída de Tratamento:', document.getElementById('treatment-exit').value);
    addSection(70, 'Cozinha:', document.getElementById('kitchen').value);
    addSection(80, 'Produção:', document.getElementById('production').value);
    addSection(90, 'Administração:', document.getElementById('administration').value);
    addSection(100, 'Recebimento:', document.getElementById('receiving').value);

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

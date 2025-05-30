document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Função para adicionar um retângulo colorido como fundo
    const addBackground = (y, height) => {
        doc.setFillColor(240, 240, 240); // Cor de fundo cinza claro
        doc.rect(10, y, 190, height, 'F');
    };

    // Adiciona o título do relatório com fundo
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFont("helvetica", "bold");
    addBackground(10, 20);
    doc.text('Relatório de Controle de Cloro Livre', 105, 25, { align: 'center' });

    // Adiciona a data
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.setFont("helvetica", "normal");
    doc.text(`Data: ${document.getElementById('date').value}`, 20, 45);

    // Função para adicionar seções ao PDF com estilo
    const addStyledSection = (y, title, value) => {
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, y);

        doc.setFont("helvetica", "normal");
        doc.text(value, 100, y);

        // Adiciona uma linha horizontal abaixo de cada seção para separação
        doc.setDrawColor(200);
        doc.setLineWidth(0.2);
        doc.line(20, y + 2, 190, y + 2);
    };

    // Adiciona as seções ao PDF com fundo
    addBackground(55, 90);
    addStyledSection(65, 'Saída de Tratamento:', document.getElementById('treatment-exit').value);
    addStyledSection(85, 'Cozinha:', document.getElementById('kitchen').value);
    addStyledSection(105, 'Produção:', document.getElementById('production').value);
    addStyledSection(125, 'Administração:', document.getElementById('administration').value);
    addStyledSection(145, 'Recebimento:', document.getElementById('receiving').value);

    // Adiciona um rodapé
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('© 2023 Controle de Cloro Livre', 105, 170, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

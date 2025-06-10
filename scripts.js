document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Função para adicionar um título com estilo
    const addTitle = (text, y, size, color) => {
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.setFont("helvetica", "bold");
        doc.text(text, 105, y, { align: 'center' });
    };

    // Função para adicionar seções ao PDF com estilo
    const addSection = (y, title) => {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 128); // Azul escuro para os títulos das seções
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, y);

        // Adiciona uma linha para preenchimento
        doc.setDrawColor(200, 200, 200); // Cinza claro para as linhas de preenchimento
        doc.setLineWidth(0.2);
        doc.line(70, y + 2, 100, y + 2);

        // Adiciona uma linha horizontal abaixo de cada seção para separação
        doc.setDrawColor(173, 216, 230); // Azul claro para as linhas divisórias
        doc.setLineWidth(0.2);
        doc.line(20, y + 10, 190, y + 10);
    };

    // Adiciona o título do relatório
    addTitle('Relatório de Controle de Cloro Livre', 20, 20, [0, 0, 128]);

    // Adiciona a data com espaço para preenchimento
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Preto
    doc.text('Data:', 20, 40);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(40, 42, 100, 42);

    // Adiciona o título da seção de localização dos pontos
    addTitle('Localização dos Pontos', 60, 16, [0, 0, 128]);

    // Adiciona as seções de localização ao PDF com espaço para preenchimento
    addSection(80, 'Saída de Tratamento:');
    addSection(100, 'Cozinha:');
    addSection(120, 'Produção:');
    addSection(140, 'Administração:');
    addSection(160, 'Recebimento:');

    // Adiciona um rodapé com informações de copyright
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Cinza
    doc.text('© 2023 Controle de Cloro Livre', 105, 280, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

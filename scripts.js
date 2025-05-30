document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Função para adicionar um retângulo colorido como fundo
    const addBackground = (y, height, color) => {
        doc.setFillColor(color[0], color[1], color[2]);
        doc.rect(10, y, 190, height, 'F');
    };

    // Função para adicionar um título com estilo
    const addTitle = (text, y) => {
        doc.setFontSize(22);
        doc.setTextColor(255, 255, 255); // Cor do texto branca
        doc.setFont("helvetica", "bold");
        doc.text(text, 105, y, { align: 'center' });
    };

    // Função para adicionar seções ao PDF com estilo
    const addStyledSection = (y, title, value) => {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 139); // Cor do texto azul escuro
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(0); // Cor do texto preto para os valores
        doc.text(value, 100, y);

        // Adiciona uma linha horizontal abaixo de cada seção para separação
        doc.setDrawColor(139, 0, 0); // Cor da linha vermelha escura
        doc.setLineWidth(0.2);
        doc.line(20, y + 2, 190, y + 2);
    };

    // Adiciona o cabeçalho com fundo verde
    addBackground(10, 20, [34, 139, 34]); // Cor de fundo verde
    addTitle('Relatório de Controle de Cloro Livre', 25);

    // Adiciona a data
    doc.setFontSize(14);
    doc.setTextColor(0); // Cor do texto preto
    doc.setFont("helvetica", "normal");
    doc.text(`Data: ${document.getElementById('date').value}`, 20, 50);

    // Adiciona as seções ao PDF com fundo amarelo claro
    addBackground(55, 100, [255, 255, 224]); // Cor de fundo amarelo claro

    // Adiciona bordas ao redor das seções
    doc.setDrawColor(34, 139, 34); // Cor da borda verde
    doc.setLineWidth(0.5);
    doc.rect(10, 55, 190, 100);

    addStyledSection(65, 'Saída de Tratamento:', document.getElementById('treatment-exit').value);
    addStyledSection(85, 'Cozinha:', document.getElementById('kitchen').value);
    addStyledSection(105, 'Produção:', document.getElementById('production').value);
    addStyledSection(125, 'Administração:', document.getElementById('administration').value);
    addStyledSection(145, 'Recebimento:', document.getElementById('receiving').value);

    // Adiciona um rodapé com fundo verde
    addBackground(160, 10, [34, 139, 34]); // Cor de fundo verde
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255); // Cor do texto branca
    doc.text('© 2023 Controle de Cloro Livre', 105, 167, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

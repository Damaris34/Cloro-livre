document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Função para adicionar um título com estilo e cor
    const addTitle = (text, y, size, color) => {
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.setFont("helvetica", "bold");
        doc.text(text, 105, y, { align: 'center' });
    };

    // Função para adicionar seções ao PDF com estilo e cor
    const addSection = (y, title, value, titleColor, valueColor) => {
        doc.setFontSize(12);
        doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(valueColor[0], valueColor[1], valueColor[2]);
        doc.text(value, 70, y);

        // Adiciona uma linha horizontal abaixo de cada seção para separação
        doc.setDrawColor(173, 216, 230); // Azul claro para as linhas
        doc.setLineWidth(0.2);
        doc.line(20, y + 5, 190, y + 5);
    };

    // Adiciona o título do relatório
    addTitle('Relatório de Controle de Cloro Livre', 20, 20, [0, 0, 128]); // Azul escuro

    // Adiciona a data
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Preto
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, 40);

    // Adiciona as seções de localização ao PDF com cores diferenciadas
    addSection(60, 'Saída de Tratamento:', '--- mg/L', [0, 102, 204], [0, 0, 0]); // Azul para título, preto para valor
    addSection(80, 'Cozinha:', '--- mg/L', [0, 153, 51], [0, 0, 0]); // Verde para título, preto para valor
    addSection(100, 'Produção:', '--- mg/L', [204, 0, 102], [0, 0, 0]); // Roxo para título, preto para valor
    addSection(120, 'Administração:', '--- mg/L', [255, 102, 0], [0, 0, 0]); // Laranja para título, preto para valor
    addSection(140, 'Recebimento:', '--- mg/L', [153, 0, 153], [0, 0, 0]); // Roxo escuro para título, preto para valor

    // Adiciona um rodapé com informações de copyright
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Cinza
    doc.text('© 2023 Controle de Cloro Livre', 105, 280, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

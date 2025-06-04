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
    const addSection = (y, title, value) => {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 128); // Azul escuro para os títulos das seções
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(0); // Preto para os valores
        doc.text(value, 70, y);

        // Adiciona uma linha horizontal abaixo de cada seção para separação
        doc.setDrawColor(173, 216, 230); // Azul claro para as linhas
        doc.setLineWidth(0.2);
        doc.line(20, y + 5, 190, y + 5);
    };

    // Adiciona o título do relatório
    addTitle('Relatório de Controle de Cloro Livre', 20, 20, [0, 0, 128]);

    // Adiciona a data
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Data: ${document.getElementById('date').value}`, 20, 40);

    // Adiciona o título da seção de localização dos pontos
    addTitle('Localização dos Pontos', 60, 16, [0, 0, 128]);

    // Adiciona as seções de localização ao PDF
    addSection(80, 'Saída de Tratamento:', document.getElementById('treatment-exit').value);
    addSection(100, 'Cozinha:', document.getElementById('kitchen').value);
    addSection(120, 'Produção:', document.getElementById('production').value);
    addSection(140, 'Administração:', document.getElementById('administration').value);
    addSection(160, 'Recebimento:', document.getElementById('receiving').value);

    // Adiciona um rodapé com informações de copyright
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('© 2023 Controle de Cloro Livre', 105, 280, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

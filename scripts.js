document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Função para adicionar um retângulo colorido como fundo
    const addBackground = (y, height, color) => {
        doc.setFillColor(color[0], color[1], color[2]);
        doc.rect(0, y, 210, height, 'F');
    };

    // Função para adicionar um título com estilo
    const addTitle = (text, y, size, color) => {
        doc.setFontSize(size);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.setFont("helvetica", "bold");
        doc.text(text, 105, y, { align: 'center' });
    };

    // Função para adicionar seções ao PDF com estilo
    const addSection = (y, title, value) => {
        doc.setFontSize(14);
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

    // Adiciona a capa com fundo gradiente (simulado com retângulos)
    addBackground(0, 60, [30, 144, 255]); // Azul Dodger
    addTitle('Relatório de Controle de Cloro Livre', 30, 24, [255, 255, 255]); // Branco

    // Adiciona uma nova página para o conteúdo
    doc.addPage();

    // Adiciona o título do relatório na nova página
    addTitle('Relatório de Controle de Cloro Livre', 20, 20, [0, 0, 128]); // Azul escuro

    // Adiciona a data
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Data: ${document.getElementById('date').value}`, 20, 40);

    // Adiciona as seções ao PDF
    addSection(60, 'Saída de Tratamento:', document.getElementById('treatment-exit').value);
    addSection(80, 'Cozinha:', document.getElementById('kitchen').value);
    addSection(100, 'Produção:', document.getElementById('production').value);
    addSection(120, 'Administração:', document.getElementById('administration').value);
    addSection(140, 'Recebimento:', document.getElementById('receiving').value);

    // Adiciona um rodapé com informações de copyright
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('© 2023 Controle de Cloro Livre', 105, 280, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

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
    const addSection = (y, title, details) => {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 128); // Azul escuro para os títulos das seções
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, y);

        doc.setFont("helvetica", "normal");
        doc.setTextColor(0); // Preto para os detalhes
        doc.text(details, 20, y + 10);

        // Adiciona uma linha horizontal abaixo de cada seção para separação
        doc.setDrawColor(173, 216, 230); // Azul claro para as linhas
        doc.setLineWidth(0.2);
        doc.line(20, y + 20, 190, y + 20);
    };

    // Adiciona a capa com fundo azul e título em branco
    doc.setFillColor(30, 144, 255);
    doc.rect(0, 0, 210, 60, 'F');
    addTitle('Relatório de Controle de Cloro Livre', 30, 24, [255, 255, 255]);

    // Adiciona uma nova página para o conteúdo
    doc.addPage();

    // Adiciona o título do relatório na nova página
    addTitle('Relatório de Controle de Cloro Livre', 20, 20, [0, 0, 128]);

    // Adiciona a data
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, 40);

    // Adiciona informações adicionais
    addSection(60, 'Responsável:', 'Nome: ___________________________');
    addSection(90, 'Fórmula de Cálculo:', 'Fórmula: Cloro Livre = Cloro Total - Cloro Combinado');
    doc.text('_________________________________________________', 20, 100);

    // Adiciona o título da seção de localização dos pontos
    addTitle('Localização dos Pontos', 130, 16, [0, 0, 128]);

    // Adiciona as seções de localização ao PDF
    addSection(150, 'Saída de Tratamento:', 'Valor: ______ mg/L');
    addSection(170, 'Cozinha:', 'Valor: ______ mg/L');
    addSection(190, 'Produção:', 'Valor: ______ mg/L');
    addSection(210, 'Administração:', 'Valor: ______ mg/L');
    addSection(230, 'Recebimento:', 'Valor: ______ mg/L');

    // Adiciona um rodapé com informações de copyright
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('© 2023 Controle de Cloro Livre', 105, 280, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Função para adicionar um retângulo arredondado com texto
    const addRoundedRectWithText = (x, y, width, height, text, isTitle = false) => {
        doc.setDrawColor(0, 0, 128); // Azul escuro para bordas
        doc.setFillColor(200, 216, 230); // Azul claro para fundo
        doc.roundedRect(x, y, width, height, 3, 3, 'FD');

        doc.setFontSize(isTitle ? 16 : 12);
        doc.setTextColor(0, 0, 0); // Preto para o texto
        doc.setFont("helvetica", isTitle ? "bold" : "normal");
        const textWidth = doc.getTextWidth(text);
        const textX = x + (width - textWidth) / 2;
        doc.text(text, textX, y + height / 2);
    };

    // Adiciona o cabeçalho com fundo azul escuro
    doc.setFillColor(0, 0, 128);
    doc.rect(0, 0, 210, 20, 'F');
    addRoundedRectWithText(105, 10, 100, 10, 'Controle de Cloro Livre', true);

    // Adiciona a seção de data
    addRoundedRectWithText(15, 30, 40, 10, 'Data:');
    addRoundedRectWithText(55, 30, 100, 10, new Date().toLocaleDateString());

    // Adiciona o título da seção de localização dos pontos
    addRoundedRectWithText(105, 50, 100, 10, 'Localização dos Pontos', true);

    // Adiciona as seções de localização ao PDF
    const points = [
        { x: 15, y: 70, title: 'Saída de Tratamento' },
        { x: 85, y: 70, title: 'Cozinha' },
        { x: 155, y: 70, title: 'Produção' },
        { x: 15, y: 120, title: 'Administração' },
        { x: 85, y: 120, title: 'Recebimento' }
    ];

    points.forEach(point => {
        addRoundedRectWithText(point.x, point.y, 60, 15, point.title, true);
        addRoundedRectWithText(point.x, point.y + 15, 60, 10, 'Escolher Arquivo');
        addRoundedRectWithText(point.x, point.y + 25, 60, 10, 'Nenhum arquivo escolhido');
    });

    // Adiciona o botão de gerar PDF
    doc.setFillColor(200, 216, 230);
    doc.roundedRect(85, 170, 40, 15, 3, 3, 'F');
    addRoundedRectWithText(105, 172, 30, 10, 'Gerar PDF', true);

    // Adiciona um rodapé com informações de copyright
    doc.setFillColor(0, 0, 128);
    doc.rect(0, 280, 210, 10, 'F');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('© 2023 Controle de Cloro Livre', 105, 287, { align: 'center' });

    // Salva o PDF
    doc.save('relatorio_cloro_livre.pdf');
});

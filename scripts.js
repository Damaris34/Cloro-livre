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
        doc.setFontSize(20);
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.text(text, 105, y, { align: 'center' });
    };

    // Função para adicionar seções ao PDF com estilo
    const addSection = (x, y, width, height, title) => {
        doc.setDrawColor(0, 191, 255); // Azul claro para bordas
        doc.setLineWidth(0.5);
        doc.roundedRect(x, y, width, height, 3, 3);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 128); // Azul escuro para o texto
        doc.setFont("helvetica", "bold");
        doc.text(title, x + 10, y + 10);

        // Adiciona texto de placeholder
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0);
        doc.text("Escolher Arquivo", x + 10, y + 20);
        doc.text("Nenhum arquivo escolhido", x + 10, y + 30);
    };

    // Adiciona o cabeçalho com fundo azul escuro
    addBackground(10, 20, [25, 25, 112]);
    addTitle('Controle de Cloro Livre', 25);

    // Adiciona a data em uma caixa com fundo azul claro
    doc.setFillColor(173, 216, 230);
    doc.roundedRect(20, 40, 170, 15, 3, 3, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Data: ${document.getElementById('date').value}`, 25, 50);

    // Adiciona as seções organizadas em uma grade
    addSection(20, 60, 50, 50, 'Saída de Tratamento');
    addSection(80, 60, 50, 50, 'Cozinha');
    addSection(140, 60, 50, 50, 'Produção');
    addSection(20, 120, 50, 50, 'Administração');
    addSection(80, 120, 50, 50, 'Recebimento');

    // Adiciona um botão para gerar PDF
    doc.setFillColor(173, 216, 230);
    doc.roundedRect(80, 170, 50, 15, 3, 3, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('Gerar PDF', 105, 178, { align: 'center' });

    // Adiciona um rodapé com fundo azul escuro
    addBackground(190, 10, 190, [25, 25, 112]);
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text('© 2023 Controle de Cloro Livre', 105, 295, { align: 'center' });

    // Salva o PDF
    doc.save('controle_cloro_livre.pdf');
});

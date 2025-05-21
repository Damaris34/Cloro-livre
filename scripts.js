document.getElementById('generate-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Função para desenhar um retângulo arredondado
    function roundedRect(x, y, w, h, r, style = 'S') {
        doc.setDrawColor(0, 0, 255);
        doc.setFillColor(240, 248, 255);
        doc.roundedRect(x, y, w, h, r, r, style);
    }

    // Função para adicionar texto com estilo
    function addStyledText(text, x, y, size = 12, isBold = false) {
        doc.setFontSize(size);
        doc.setFont(isBold ? "helvetica" : "helvetica", isBold ? "bold" : "normal");
        doc.text(text, x, y);
    }

    // Função para adicionar imagem
    function addImageFromInput(inputId, x, y, w, h) {
        const fileInput = document.getElementById(inputId);
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                doc.addImage(e.target.result, 'JPEG', x, y, w, h);
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    // Cabeçalho
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 10, 190, 20, 'FD');
    addStyledText('Controle de Cloro Livre', 105, 20, 16, true);

    // Data
    roundedRect(10, 40, 190, 20, 5, 'FD');
    addStyledText(document.getElementById('date').value, 105, 50, 12, false);

    // Localização dos Pontos
    addStyledText('Localização dos Pontos', 105, 70, 14, true);

    // Saída de Tratamento
    roundedRect(20, 80, 50, 50, 5, 'FD');
    addStyledText('Saída de Tratamento', 45, 110, 10, true);
    addImageFromInput('treatment-exit-image', 20, 80, 50, 40);

    // Cozinha
    roundedRect(80, 80, 50, 50, 5, 'FD');
    addStyledText('Cozinha', 105, 110, 10, true);
    addImageFromInput('kitchen-image', 80, 80, 50, 40);

    // Produção
    roundedRect(140, 80, 50, 50, 5, 'FD');
    addStyledText('Produção', 165, 110, 10, true);
    addImageFromInput('production-image', 140, 80, 50, 40);

    // Administração
    roundedRect(20, 140, 50, 50, 5, 'FD');
    addStyledText('Administração', 45, 170, 10, true);
    addImageFromInput('administration-image', 20, 140, 50, 40);

    // Recebimento
    roundedRect(80, 140, 50, 50, 5, 'FD');
    addStyledText('Recebimento', 105, 170, 10, true);
    addImageFromInput('receiving-image', 80, 140, 50, 40);

    // Rodapé
    doc.setFillColor(0, 0, 139);
    doc.rect(10, 200, 190, 20, 'FD');
    addStyledText('© 2023 Controle de Cloro Livre', 105, 210, 10, false);

    // Salvar o PDF
    setTimeout(() => {
        doc.save('relatorio_cloro_livre.pdf');
    }, 1000); // Espera um pouco para garantir que as imagens sejam carregadas
});

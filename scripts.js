document.addEventListener('DOMContentLoaded', function() {
    // Verifica se a biblioteca jsPDF está disponível
    if (typeof jsPDF !== 'undefined') {
        const { jsPDF } = window.jspdf;

        document.getElementById('generate-pdf').addEventListener('click', function() {
            // Cria uma nova instância de jsPDF
            const doc = new jsPDF();

            // Adiciona um título ao PDF
            doc.setFontSize(22);
            doc.text('Controle de Cloro Livre', 105, 15, { align: 'center' });

            // Adiciona a data ao PDF
            const date = document.getElementById('date').value || 'N/A';
            doc.setFontSize(16);
            doc.text(`Data: ${date}`, 20, 30);

            // Adiciona uma linha horizontal para separar o cabeçalho do conteúdo
            doc.setDrawColor(0);
            doc.line(20, 35, 190, 35);

            // Adiciona os dados dos pontos de localização ao PDF
            doc.setFontSize(14);
            doc.text('Localização dos Pontos:', 20, 50);

            const locations = [
                { name: 'Saída de Tratamento', value: document.getElementById('treatment-exit').value || 'N/A' },
                { name: 'Cozinha', value: document.getElementById('kitchen').value || 'N/A' },
                { name: 'Produção', value: document.getElementById('production').value || 'N/A' },
                { name: 'Administração', value: document.getElementById('administration').value || 'N/A' },
                { name: 'Recebimento', value: document.getElementById('receiving').value || 'N/A' }
            ];

            let y = 60;
            locations.forEach(location => {
                doc.text(`${location.name}: ${location.value}`, 20, y);
                y += 10;
            });

            // Adiciona um rodapé
            doc.setFontSize(10);
            doc.text('© 2023 Controle de Cloro Livre', 105, 280, { align: 'center' });

            // Salva o PDF
            doc.save('Controle_de_Cloro_Livre.pdf');
        });
    } else {
        console.error('A biblioteca jsPDF não está carregada.');
    }
});

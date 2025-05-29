document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;

    document.getElementById('generate-pdf').addEventListener('click', function() {
        const doc = new jsPDF();

        // Adiciona um título ao PDF
        doc.setFontSize(22);
        doc.text('Controle de Cloro Livre', 105, 15, { align: 'center' });

        // Adiciona a data ao PDF
        const date = document.getElementById('date').value;
        doc.setFontSize(16);
        doc.text(`Data: ${date}`, 20, 30);

        // Adiciona os dados dos pontos de localização ao PDF
        doc.setFontSize(14);
        doc.text('Localização dos Pontos:', 20, 50);

        const locations = [
            { name: 'Saída de Tratamento', value: document.getElementById('treatment-exit').value },
            { name: 'Cozinha', value: document.getElementById('kitchen').value },
            { name: 'Produção', value: document.getElementById('production').value },
            { name: 'Administração', value: document.getElementById('administration').value },
            { name: 'Recebimento', value: document.getElementById('receiving').value }
        ];

        let y = 60;
        locations.forEach(location => {
            doc.text(`${location.name}: ${location.value}`, 20, y);
            y += 10;
        });

        // Salva o PDF
        doc.save('Controle_de_Cloro_Livre.pdf');
    });
});

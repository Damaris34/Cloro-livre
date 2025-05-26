<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle de Cloro Livre</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header, .footer {
            background-color: #00008B;
            color: white;
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .section {
            margin-bottom: 20px;
        }
        .section-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .grid-item {
            border: 1px solid #00008B;
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            background-color: #F0F8FF;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Controle de Cloro Livre</h1>
        </div>

        <div class="section">
            <div class="section-title">Data:</div>
            <input type="date" id="date" value="2023-10-01">
        </div>

        <div class="section">
            <div class="section-title">Localização dos Pontos</div>
            <div class="grid-container">
                <div class="grid-item">Saída de Tratamento</div>
                <div class="grid-item">Cozinha</div>
                <div class="grid-item">Produção</div>
                <div class="grid-item">Administração</div>
                <div class="grid-item">Recebimento</div>
            </div>
        </div>

        <div class="footer">
            <p>© 2023 Controle de Cloro Livre</p>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const { jsPDF } = window.jspdf;

            function generatePDF() {
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

                // Cozinha
                roundedRect(80, 80, 50, 50, 5, 'FD');

                // Produção
                roundedRect(140, 80, 50, 50, 5, 'FD');

                // Administração
                roundedRect(20, 140, 50, 50, 5, 'FD');

                // Recebimento
                roundedRect(80, 140, 50, 50, 5, 'FD');

                // Rodapé
                doc.setFillColor(0, 0, 139);
                doc.rect(10, 200, 190, 20, 'FD');
                addStyledText('© 2023 Controle de Cloro Livre', 105, 210, 10, false);

                // Salvar o PDF
                doc.save('relatorio_cloro_livre.pdf');
            }

            // Vincular a função de geração de PDF a um botão ou evento conforme necessário
            // Por exemplo, você pode adicionar um botão no HTML para chamar generatePDF()
        });
    </script>
</body>
</html>

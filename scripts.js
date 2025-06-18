<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle de Cloro Livre</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            width: 100%;
            max-width: 800px;
            margin: auto;
        }
        .card, .location-card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
        }
        input[type="text"], input[type="date"] {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
</head>
<body>
    <div class="container">
        <!-- Cabeçalho do documento -->
        <header>
            <h1>Controle de Cloro Livre</h1>
        </header>

        <!-- Conteúdo principal -->
        <main>
            <!-- Seção para a data -->
            <section class="dashboard">
                <div class="card">
                    <h2>Data</h2>
                    <input type="date" id="date">
                </div>
            </section>

            <!-- Seção para as localizações dos pontos -->
            <section class="locations">
                <h2>Localização dos Pontos</h2>

                <!-- Saída de Tratamento -->
                <div class="location-card">
                    <h3>Saída de Tratamento</h3>
                    <input type="text" id="treatment-exit" placeholder="-- mg/L">
                </div>

                <!-- Cozinha -->
                <div class="location-card">
                    <h3>Cozinha</h3>
                    <input type="text" id="kitchen" placeholder="-- mg/L">
                </div>

                <!-- Produção -->
                <div class="location-card">
                    <h3>Produção</h3>
                    <input type="text" id="production" placeholder="-- mg/L">
                </div>

                <!-- Administração -->
                <div class="location-card">
                    <h3>Administração</h3>
                    <input type="text" id="administration" placeholder="-- mg/L">
                </div>

                <!-- Recebimento -->
                <div class="location-card">
                    <h3>Recebimento</h3>
                    <input type="text" id="receiving" placeholder="-- mg/L">
                </div>
            </section>

            <!-- Botão para gerar PDF -->
            <section class="controls">
                <button id="generate-pdf">Gerar PDF</button>
            </section>
        </main>

        <!-- Rodapé do documento -->
        <footer>
            <p>© 2023 Controle de Cloro Livre</p>
        </footer>
    </div>

    <!-- Script para gerar o PDF -->
    <script>
        document.getElementById('generate-pdf').addEventListener('click', function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Título do relatório
            doc.setFontSize(18);
            doc.text('Relatório de Controle de Cloro Livre', 105, 10, { align: 'center' });

            // Data
            doc.setFontSize(12);
            doc.text(`Data: ${document.getElementById('date').value}`, 10, 30);

            // Saída de Tratamento
            doc.text('Saída de Tratamento:', 10, 50);
            doc.text(document.getElementById('treatment-exit').value, 70, 50);

            // Cozinha
            doc.text('Cozinha:', 10, 60);
            doc.text(document.getElementById('kitchen').value, 70, 60);

            // Produção
            doc.text('Produção:', 10, 70);
            doc.text(document.getElementById('production').value, 70, 70);

            // Administração
            doc.text('Administração:', 10, 80);
            doc.text(document.getElementById('administration').value, 70, 80);

            // Recebimento
            doc.text('Recebimento:', 10, 90);
            doc.text(document.getElementById('receiving').value, 70, 90);

            // Salvar o PDF
            doc.save('relatorio_cloro_livre.pdf');
        });
    </script>
</body>
</html>

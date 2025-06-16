import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

import java.io.IOException;

public class EnhancedChlorineReportGenerator {

    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        try {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Set font and font size for the title
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(200, 700);
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            // Add headers for the table with a different layout
            String[] headers = {"Data", "Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};
            float margin = 50;
            float yStart = 650;
            float yPosition = yStart;

            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
            for (String header : headers) {
                contentStream.beginText();
                contentStream.newLineAtOffset(margin, yPosition);
                contentStream.showText(header);
                contentStream.endText();
                margin += 100;
            }

            // Draw a line under headers
            contentStream.setStrokingColor(0, 0, 0);
            contentStream.moveTo(50, yPosition - 10);
            contentStream.lineTo(550, yPosition - 10);
            contentStream.stroke();

            // Add some sample data
            String[][] data = {
                {"2023-10-01", "1.2", "1.5", "1.3", "1.4", "1.6"},
                {"2023-10-02", "1.1", "1.4", "1.2", "1.3", "1.5"},
                {"2023-10-03", "1.0", "1.3", "1.1", "1.2", "1.4"}
            };

            yPosition -= 30;
            contentStream.setFont(PDType1Font.HELVETICA, 10);
            for (String[] row : data) {
                margin = 50;
                for (String cell : row) {
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText(cell);
                    contentStream.endText();
                    margin += 100;
                }
                yPosition -= 20;
            }

            // Add a footer
            contentStream.setFont(PDType1Font.HELVETICA, 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 50);
            contentStream.showText("Contato: contato@empresa.com | Relatório gerado em: " + java.time.LocalDate.now());
            contentStream.endText();

            contentStream.close();

            // Save the document
            document.save("Relatorio_Cloro_Livre_Enhanced.pdf");
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                document.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

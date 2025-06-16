import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.awt.Color;
import java.io.IOException;

public class EnhancedChlorineReportGenerator {

    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        try {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Define colors
            Color titleColor = new Color(0, 51, 102); // Dark Blue
            Color headerColor = new Color(204, 229, 255); // Light Blue
            Color rowColor1 = new Color(255, 255, 255); // White
            Color rowColor2 = new Color(230, 242, 255); // Very Light Blue

            // Draw a colored rectangle for the title background
            contentStream.setNonStrokingColor(titleColor);
            contentStream.addRect(0, 720, 600, 30);
            contentStream.fill();

            // Set font and color for the title
            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(180, 730);
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            // Set font and color for headers
            contentStream.setNonStrokingColor(Color.BLACK);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);

            // Add headers for the table with background color
            String[] headers = {"Data", "Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};
            float margin = 50;
            float yStart = 680;
            float yPosition = yStart;

            contentStream.setNonStrokingColor(headerColor);
            contentStream.addRect(50, yPosition - 15, 500, 20);
            contentStream.fill();

            contentStream.setNonStrokingColor(Color.BLACK);
            for (String header : headers) {
                contentStream.beginText();
                contentStream.newLineAtOffset(margin, yPosition);
                contentStream.showText(header);
                contentStream.endText();
                margin += 100;
            }

            // Add some sample data with alternating row colors
            String[][] data = {
                {"2023-10-01", "1.2", "1.5", "1.3", "1.4", "1.6"},
                {"2023-10-02", "1.1", "1.4", "1.2", "1.3", "1.5"},
                {"2023-10-03", "1.0", "1.3", "1.1", "1.2", "1.4"}
            };

            yPosition -= 30;
            contentStream.setFont(PDType1Font.HELVETICA, 10);
            for (int i = 0; i < data.length; i++) {
                margin = 50;
                // Alternate row colors
                contentStream.setNonStrokingColor(i % 2 == 0 ? rowColor1 : rowColor2);
                contentStream.addRect(50, yPosition - 15, 500, 20);
                contentStream.fill();

                contentStream.setNonStrokingColor(Color.BLACK);
                for (String cell : data[i]) {
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText(cell);
                    contentStream.endText();
                    margin += 100;
                }
                yPosition -= 20;
            }

            // Add a footer
            contentStream.setNonStrokingColor(titleColor);
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

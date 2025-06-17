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
            Color sectionColor = new Color(230, 242, 255); // Very Light Blue
            Color borderColor = new Color(0, 51, 102); // Dark Blue

            // Draw a colored rectangle for the title background
            contentStream.setNonStrokingColor(titleColor);
            contentStream.addRect(0, 750, 600, 50);
            contentStream.fill();

            // Set font and color for the title
            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 24);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 770);
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            // Add additional header information
            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.setFont(PDType1Font.HELVETICA, 12);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 730);
            contentStream.showText("Empresa: Empresa XYZ | Data do Relatório: " + java.time.LocalDate.now());
            contentStream.endText();

            // Set font and color for section headers
            contentStream.setNonStrokingColor(Color.BLACK);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 14);

            // Add date field
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 680);
            contentStream.showText("Data da Coleta:");
            contentStream.endText();

            // Draw a rectangle for the date field
            contentStream.setStrokingColor(borderColor);
            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.addRect(180, 660, 150, 20);
            contentStream.fill();
            contentStream.stroke();

            // Add section title for localization
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 620);
            contentStream.showText("Localização dos Pontos de Coleta");
            contentStream.endText();

            // Define locations and their details
            String[][] locations = {
                {"Saída de Tratamento", "Valor: 1.2 mg/L", "Status: Dentro do Padrão"},
                {"Cozinha", "Valor: 1.5 mg/L", "Status: Dentro do Padrão"},
                {"Produção", "Valor: 1.3 mg/L", "Status: Dentro do Padrão"},
                {"Administração", "Valor: 1.4 mg/L", "Status: Dentro do Padrão"},
                {"Recebimento", "Valor: 1.6 mg/L", "Status: Dentro do Padrão"}
            };

            // Draw rectangles for each location section
            float yPosition = 590;
            contentStream.setFont(PDType1Font.HELVETICA, 12);
            for (String[] location : locations) {
                contentStream.setNonStrokingColor(sectionColor);
                contentStream.addRect(50, yPosition - 20, 250, 50);
                contentStream.fill();
                contentStream.stroke();

                contentStream.setNonStrokingColor(Color.BLACK);
                contentStream.beginText();
                contentStream.newLineAtOffset(60, yPosition);
                contentStream.showText(location[0]);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText(location[1]);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText(location[2]);
                contentStream.endText();

                yPosition -= 70;
            }

            // Add a footer
            contentStream.setNonStrokingColor(titleColor);
            contentStream.setFont(PDType1Font.HELVETICA, 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 30);
            contentStream.showText("© 2023 Controle de Cloro Livre | contato@empresa.com");
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

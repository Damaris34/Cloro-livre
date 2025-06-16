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
            Color sectionColor = new Color(204, 229, 255); // Light Blue
            Color borderColor = new Color(0, 51, 102); // Dark Blue

            // Draw a colored rectangle for the title background
            contentStream.setNonStrokingColor(titleColor);
            contentStream.addRect(0, 750, 600, 30);
            contentStream.fill();

            // Set font and color for the title
            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(180, 760);
            contentStream.showText("Controle de Cloro Livre");
            contentStream.endText();

            // Set font and color for section headers
            contentStream.setNonStrokingColor(Color.BLACK);
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);

            // Add date field
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 700);
            contentStream.showText("Data:");
            contentStream.endText();

            // Draw a rectangle for the date field
            contentStream.setStrokingColor(borderColor);
            contentStream.setNonStrokingColor(sectionColor);
            contentStream.addRect(100, 680, 100, 20);
            contentStream.fill();
            contentStream.stroke();

            // Add section title for localization
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 650);
            contentStream.showText("Localização dos Pontos");
            contentStream.endText();

            // Define locations and their details
            String[][] locations = {
                {"Saída de Tratamento", "Escolher Arquivo", "Nenhum arquivo escolhido"},
                {"Cozinha", "Escolher Arquivo", "Nenhum arquivo escolhido"},
                {"Produção", "Escolher Arquivo", "Nenhum arquivo escolhido"},
                {"Administração", "Escolher Arquivo", "Nenhum arquivo escolhido"},
                {"Recebimento", "Escolher Arquivo", "Nenhum arquivo escolhido"}
            };

            // Draw rectangles for each location section
            float yPosition = 620;
            for (String[] location : locations) {
                contentStream.setNonStrokingColor(sectionColor);
                contentStream.addRect(50, yPosition - 20, 150, 60);
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

                yPosition -= 80;
            }

            // Add a button for generating PDF
            contentStream.setNonStrokingColor(sectionColor);
            contentStream.addRect(250, yPosition - 40, 100, 20);
            contentStream.fill();
            contentStream.stroke();

            contentStream.setNonStrokingColor(Color.BLACK);
            contentStream.beginText();
            contentStream.newLineAtOffset(260, yPosition - 35);
            contentStream.showText("Gerar PDF");
            contentStream.endText();

            // Add a footer
            contentStream.setNonStrokingColor(titleColor);
            contentStream.setFont(PDType1Font.HELVETICA, 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 50);
            contentStream.showText("© 2023 Controle de Cloro Livre");
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

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;

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
            Color titleColor = new Color(23, 70, 162); // Darker Blue
            Color headerColor = new Color(187, 222, 251); // Light Blue
            Color sectionColor = new Color(237, 245, 255); // Very Light Blue
            Color borderColor = new Color(23, 70, 162); // Darker Blue

            // Draw a colored rectangle for the title background
            contentStream.setNonStrokingColor(titleColor);
            contentStream.addRect(0, 750, 600, 50);
            contentStream.fill();

            // Set font and color for the title
            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA_BOLD), 24);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 770);
            contentStream.showText("Controle de Cloro Livre");
            contentStream.endText();

            // Add date field
            contentStream.setNonStrokingColor(Color.BLACK);
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA_BOLD), 12);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 700);
            contentStream.showText("Data: dd/mm/aaaa");
            contentStream.endText();

            // Add section title for localization
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA_BOLD), 14);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 650);
            contentStream.showText("Localização dos Pontos");
            contentStream.endText();

            // Define locations and their details
            String[][] locations = {
                {"Saída de Tratamento", "Escolher Arquivo", "Nenhum arquivo escolhido", "-- mg/L"},
                {"Cozinha", "Escolher Arquivo", "Nenhum arquivo escolhido", "-- mg/L"},
                {"Produção", "Escolher Arquivo", "Nenhum arquivo escolhido", "-- mg/L"},
                {"Administração", "Escolher Arquivo", "Nenhum arquivo escolhido", "-- mg/L"},
                {"Recebimento", "Escolher Arquivo", "Nenhum arquivo escolhido", "-- mg/L"}
            };

            // Draw rectangles for each location section
            float yPosition = 620;
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA), 12);
            for (String[] location : locations) {
                contentStream.setNonStrokingColor(sectionColor);
                contentStream.addRect(50, yPosition - 40, 250, 60);
                contentStream.fill();
                contentStream.setStrokingColor(borderColor);
                contentStream.stroke();

                contentStream.setNonStrokingColor(Color.BLACK);
                contentStream.beginText();
                contentStream.newLineAtOffset(60, yPosition);
                contentStream.showText(location[0]);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText(location[1]);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText(location[2]);
                contentStream.newLineAtOffset(0, -20);
                contentStream.showText(location[3]);
                contentStream.endText();

                yPosition -= 100;
            }

            // Add a button for generating PDF
            contentStream.setNonStrokingColor(titleColor);
            contentStream.addRect(250, yPosition - 40, 100, 20);
            contentStream.fill();
            contentStream.setStrokingColor(Color.BLACK);
            contentStream.stroke();

            contentStream.setNonStrokingColor(Color.WHITE);
            contentStream.beginText();
            contentStream.newLineAtOffset(260, yPosition - 35);
            contentStream.showText("Gerar PDF");
            contentStream.endText();

            // Add a footer
            contentStream.setNonStrokingColor(titleColor);
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA), 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 30);
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

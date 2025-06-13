import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.common.PDRectangle;

import java.io.IOException;

public class CreatePDF {
    public static void main(String[] args) {
        // Create a new document
        PDDocument document = new PDDocument();
        PDPage page = new PDPage(PDRectangle.A4);
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            // Define colors
            java.awt.Color headerColor = new java.awt.Color(0, 0, 139); // Dark Blue
            java.awt.Color sectionColor = new java.awt.Color(173, 216, 230); // Light Blue

            // Draw header
            contentStream.setNonStrokingColor(headerColor);
            contentStream.addRect(50, 700, 500, 50);
            contentStream.fill();

            // Add header text
            contentStream.beginText();
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 20);
            contentStream.setNonStrokingColor(java.awt.Color.WHITE);
            contentStream.newLineAtOffset(250, 720);
            contentStream.showText("Controle de Cloro Livre");
            contentStream.endText();

            // Draw sections
            String[] sections = {"Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};
            for (int i = 0; i < sections.length; i++) {
                contentStream.setNonStrokingColor(sectionColor);
                contentStream.addRect(50, 600 - i * 100, 200, 80);
                contentStream.fill();

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
                contentStream.setNonStrokingColor(java.awt.Color.BLACK);
                contentStream.newLineAtOffset(60, 650 - i * 100);
                contentStream.showText(sections[i]);
                contentStream.endText();
            }

            // Draw "Gerar PDF" button
            contentStream.setNonStrokingColor(headerColor);
            contentStream.addRect(250, 100, 100, 30);
            contentStream.fill();

            contentStream.beginText();
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
            contentStream.setNonStrokingColor(java.awt.Color.WHITE);
            contentStream.newLineAtOffset(260, 115);
            contentStream.showText("Gerar PDF");
            contentStream.endText();

        } catch (IOException e) {
            e.printStackTrace();
        }

        // Save the document
        try {
            document.save("Controle_de_Cloro_Livre.pdf");
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

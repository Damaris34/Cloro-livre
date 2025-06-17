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
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            // Add date field
            contentStream.setNonStrokingColor(Color.BLACK);
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA_BOLD), 12);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 700);
            contentStream.showText("Data: " + java.time.LocalDate.now().toString());
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
            float yPosition = 650;
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA), 12);
            for (String[] location : locations) {
                contentStream.setNonStrokingColor(sectionColor);
                contentStream.addRect(50, yPosition - 40, 500, 50);
                contentStream.fill();
                contentStream.setStrokingColor(borderColor);
                contentStream.stroke();

                contentStream.setNonStrokingColor(Color.BLACK);
                contentStream.beginText();
                contentStream.newLineAtOffset(60, yPosition);
                contentStream.showText(location[0] + " | " + location[1] + " | " + location[2]);
                contentStream.endText();

                yPosition -= 80;
            }

            // Add a footer
            contentStream.setNonStrokingColor(titleColor);
            contentStream.setFont(new Standard14Fonts.Font(PDType1Font.HELVETICA), 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 30);
            contentStream.showText("© 2023 Controle de Cloro Livre | Todos os direitos reservados");
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

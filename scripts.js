import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.io.IOException;

public class ChlorineReportGenerator {

    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        try {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Define a font and font size
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(250, 700);
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            // Add headers for the table
            contentStream.beginText();
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Data");
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Saída de Tratamento");
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Cozinha");
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Produção");
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Administração");
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Recebimento");
            contentStream.endText();

            // Add some sample data
            contentStream.beginText();
            contentStream.newLineAtOffset(100, 630);
            contentStream.showText("2023-10-01");
            contentStream.newLineAtOffset(100, 630);
            contentStream.showText("1.2");
            contentStream.newLineAtOffset(100, 630);
            contentStream.showText("1.5");
            contentStream.newLineAtOffset(100, 630);
            contentStream.showText("1.3");
            contentStream.newLineAtOffset(100, 630);
            contentStream.showText("1.4");
            contentStream.newLineAtOffset(100, 630);
            contentStream.showText("1.6");
            contentStream.endText();

            contentStream.close();

            // Save the document
            document.save("Relatorio_Cloro_Livre.pdf");
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

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.io.IOException;

public class CreatePDFReport {
    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
            contentStream.beginText();
            contentStream.newLineAtOffset(200, 700);
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            contentStream.setFont(PDType1Font.HELVETICA, 12);
            contentStream.beginText();
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Data:");
            contentStream.endText();

            contentStream.beginText();
            contentStream.newLineAtOffset(100, 600);
            contentStream.showText("Saída de Tratamento:");
            contentStream.endText();

            contentStream.beginText();
            contentStream.newLineAtOffset(100, 550);
            contentStream.showText("Cozinha:");
            contentStream.endText();

            // Continue adicionando mais seções conforme necessário

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
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

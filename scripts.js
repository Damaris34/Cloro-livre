import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.awt.Color;
import java.io.IOException;

public class PDFModifier {

    public static void main(String[] args) {
        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage();
            document.addPage(page);

            try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
                // Adicionar um título
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);
                contentStream.beginText();
                contentStream.setNonStrokingColor(Color.BLUE);
                contentStream.newLineAtOffset(100, 700);
                contentStream.showText("Relatório de Controle de Qualidade de Água");
                contentStream.endText();

                // Adicionar um parágrafo
                contentStream.setFont(PDType1Font.HELVETICA, 12);
                contentStream.setNonStrokingColor(Color.BLACK);
                contentStream.beginText();
                contentStream.newLineAtOffset(100, 650);
                contentStream.showText("Este é um exemplo de como modificar um PDF usando Apache PDFBox.");
                contentStream.endText();
            }

            // Salvar o documento modificado
            document.save("modified_document.pdf");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

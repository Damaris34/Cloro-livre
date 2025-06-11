import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.color.PDColor;
import org.apache.pdfbox.pdmodel.graphics.color.PDDeviceRGB;

import java.io.IOException;

public class CreateColoredPDFReport {
    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            // Definir a fonte e o tamanho para o título
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

            // Definir a cor do título (azul)
            contentStream.setNonStrokingColor(PDColor.rgbToCMYK(0, 0, 255));

            // Escrever o título
            contentStream.beginText();
            contentStream.newLineAtOffset(180, 700);
            contentStream.showText("Relatório de Controle de Cloro Livre");
            contentStream.endText();

            // Definir a fonte e o tamanho para as seções
            contentStream.setFont(PDType1Font.HELVETICA, 12);

            // Definir a cor do texto das seções (preto)
            contentStream.setNonStrokingColor(PDColor.rgbToCMYK(0, 0, 0));

            // Escrever as seções
            contentStream.beginText();
            contentStream.newLineAtOffset(100, 650);
            contentStream.showText("Data:");
            contentStream.endText();

            // Definir a cor de preenchimento para a seção (cinza claro)
            contentStream.setNonStrokingColor(new PDColor(new float[]{0.9f, 0.9f, 0.9f}, PDDeviceRGB.INSTANCE));
            contentStream.addRect(100, 640, 300, 20);
            contentStream.fill();

            contentStream.setNonStrokingColor(PDColor.rgbToCMYK(0, 0, 0));
            contentStream.beginText();
            contentStream.newLineAtOffset(100, 600);
            contentStream.showText("Saída de Tratamento:");
            contentStream.endText();

            contentStream.setNonStrokingColor(new PDColor(new float[]{0.9f, 0.9f, 0.9f}, PDDeviceRGB.INSTANCE));
            contentStream.addRect(100, 590, 300, 20);
            contentStream.fill();

            contentStream.setNonStrokingColor(PDColor.rgbToCMYK(0, 0, 0));
            contentStream.beginText();
            contentStream.newLineAtOffset(100, 550);
            contentStream.showText("Cozinha:");
            contentStream.endText();

            // Continue adicionando mais seções conforme necessário

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            document.save("Relatorio_Cloro_Livre_Colorido.pdf");
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

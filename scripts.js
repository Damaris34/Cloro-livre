import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.color.PDColor;
import org.apache.pdfbox.pdmodel.graphics.color.PDDeviceRGB;

import java.io.IOException;

public class CreateStructuredPDFReport {
    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            // Definir a fonte e o tamanho
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 14);

            // Cabeçalho azul
            contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0, 1}, PDDeviceRGB.INSTANCE));
            contentStream.addRect(100, 650, 400, 50);
            contentStream.fill();

            // Título do cabeçalho
            contentStream.setNonStrokingColor(PDColor.WHITE);
            contentStream.beginText();
            contentStream.newLineAtOffset(200, 675);
            contentStream.showText("Controle de Cloro Livre");
            contentStream.endText();

            // Data
            contentStream.setNonStrokingColor(PDColor.BLACK);
            contentStream.setFont(PDType1Font.HELVETICA, 12);
            contentStream.beginText();
            contentStream.newLineAtOffset(120, 600);
            contentStream.showText("Data:");
            contentStream.endText();
            contentStream.addRect(120, 580, 100, 25);
            contentStream.stroke();

            // Título da seção de localização
            contentStream.beginText();
            contentStream.newLineAtOffset(120, 550);
            contentStream.showText("Localização dos Pontos");
            contentStream.endText();

            // Desenhar retângulos para cada localização
            drawLocationBox(contentStream, "Saída de Tratamento", 120, 500);
            drawLocationBox(contentStream, "Cozinha", 270, 500);
            drawLocationBox(contentStream, "Produção", 420, 500);
            drawLocationBox(contentStream, "Administração", 120, 350);
            drawLocationBox(contentStream, "Recebimento", 270, 350);

            // Botão Gerar PDF
            contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0, 1}, PDDeviceRGB.INSTANCE));
            contentStream.addRect(220, 250, 160, 30);
            contentStream.fill();
            contentStream.setNonStrokingColor(PDColor.WHITE);
            contentStream.beginText();
            contentStream.newLineAtOffset(250, 265);
            contentStream.showText("Gerar PDF");
            contentStream.endText();

            // Rodapé azul
            contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0, 1}, PDDeviceRGB.INSTANCE));
            contentStream.addRect(100, 50, 400, 50);
            contentStream.fill();
            contentStream.setNonStrokingColor(PDColor.WHITE);
            contentStream.beginText();
            contentStream.newLineAtOffset(150, 70);
            contentStream.showText("© 2023 Controle de Cloro Livre");
            contentStream.endText();

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            document.save("Relatorio_Cloro_Livre_Estruturado.pdf");
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

    private static void drawLocationBox(PDPageContentStream contentStream, String title, float x, float y) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.7f, 0.7f, 1f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(x, y, 120, 100);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.beginText();
        contentStream.newLineAtOffset(x + 10, y + 85);
        contentStream.showText(title);
        contentStream.newLineAtOffset(0, -20);
        contentStream.showText("Escolher Arquivo");
        contentStream.newLineAtOffset(0, -20);
        contentStream.showText("Nenhum arquivo escolhido");
        contentStream.endText();
        contentStream.setStrokingColor(PDColor.BLUE);
        contentStream.addRect(x, y, 120, 100);
        contentStream.stroke();
    }
}

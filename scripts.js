import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.color.PDColor;
import org.apache.pdfbox.pdmodel.graphics.color.PDDeviceRGB;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class StructuredPDFReport {
    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            // Cabeçalho
            drawHeader(contentStream);

            // Título do relatório
            drawTitle(contentStream, "Controle de Cloro Livre");

            // Data atual
            String formattedDate = LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            drawDateField(contentStream, "Data: " + formattedDate, 600);

            // Título da seção de localização
            drawSectionTitle(contentStream, "Localização dos Pontos", 550);

            // Seções de controle
            drawLocationBox(contentStream, "Saída de Tratamento", "3.15", 120, 500);
            drawLocationBox(contentStream, "Cozinha", "3.00", 270, 500);
            drawLocationBox(contentStream, "Produção", "3.35", 420, 500);
            drawLocationBox(contentStream, "Administração", "3.10", 120, 350);
            drawLocationBox(contentStream, "Recebimento", "3.25", 270, 350);

            // Botão Gerar PDF
            drawGeneratePDFButton(contentStream);

            // Rodapé
            drawFooter(contentStream);

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

    private static void drawHeader(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0, 0.75f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(100, 650, 400, 50);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
        drawCenteredText(contentStream, "Controle de Cloro Livre", 675);
    }

    private static void drawTitle(PDPageContentStream contentStream, String title) throws IOException {
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
        drawCenteredText(contentStream, title, 625);
    }

    private static void drawDateField(PDPageContentStream contentStream, String text, float y) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.8f, 0.8f, 0.9f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(200, y - 15, 200, 25);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA, 12);
        drawCenteredText(contentStream, text, y);
    }

    private static void drawSectionTitle(PDPageContentStream contentStream, String title, float y) throws IOException {
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 14);
        drawCenteredText(contentStream, title, y);
    }

    private static void drawLocationBox(PDPageContentStream contentStream, String title, String value, float x, float y) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.8f, 0.8f, 0.9f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(x, y - 40, 120, 60);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 10);
        contentStream.beginText();
        contentStream.newLineAtOffset(x + 10, y - 20);
        contentStream.showText(title);
        contentStream.newLineAtOffset(0, -15);
        contentStream.showText("Escolher Arquivo");
        contentStream.newLineAtOffset(0, -15);
        contentStream.showText("Nenhum arquivo escolhido");
        contentStream.newLineAtOffset(0, -15);
        contentStream.showText(value);
        contentStream.endText();
        contentStream.setStrokingColor(new PDColor(new float[]{0, 0, 1}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(x, y - 40, 120, 60);
        contentStream.stroke();
    }

    private static void drawGeneratePDFButton(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0, 0.75f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(220, 200, 160, 30);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
        drawCenteredText(contentStream, "Gerar PDF", 215);
    }

    private static void drawFooter(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0, 0.75f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(100, 50, 400, 50);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA, 10);
        drawCenteredText(contentStream, "© 2023 Controle de Cloro Livre", 70);
    }

    private static void drawCenteredText(PDPageContentStream contentStream, String text, float y) throws IOException {
        float fontSize = contentStream.getFont().getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * contentStream.getFontSize();
        float textWidth = contentStream.getFont().getStringWidth(text) * fontSize / 1000;
        contentStream.beginText();
        contentStream.newLineAtOffset((600 - textWidth) / 2, y);
        contentStream.showText(text);
        contentStream.endText();
    }
}

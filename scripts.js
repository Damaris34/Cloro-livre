import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.color.PDColor;
import org.apache.pdfbox.pdmodel.graphics.color.PDDeviceRGB;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class EnhancedPDFReport {
    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            // Cabeçalho
            drawHeader(contentStream);

            // Título do relatório
            drawTitle(contentStream, "Relatório de Controle de Cloro Livre");

            // Data atual
            String formattedDate = LocalDate.now().format(DateTimeFormatter.ISO_DATE);
            drawSection(contentStream, "Data: " + formattedDate, 100, 650);

            // Seções de controle
            drawSection(contentStream, "Saída de Tratamento: Informações sobre a saída de tratamento...", 100, 600);
            drawSection(contentStream, "Cozinha: Informações sobre a cozinha...", 100, 550);
            drawSection(contentStream, "Produção: Informações sobre a produção...", 100, 500);
            drawSection(contentStream, "Administração: Informações sobre a administração...", 100, 450);
            drawSection(contentStream, "Recebimento: Informações sobre o recebimento...", 100, 400);

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
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

    private static void drawHeader(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0.5f, 0.75f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(0, 750, 600, 50);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
        contentStream.beginText();
        contentStream.newLineAtOffset(180, 770);
        contentStream.showText("Empresa de Controle de Qualidade");
        contentStream.endText();
    }

    private static void drawTitle(PDPageContentStream contentStream, String title) throws IOException {
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);
        contentStream.beginText();
        contentStream.newLineAtOffset(180, 700);
        contentStream.showText(title);
        contentStream.endText();
    }

    private static void drawSection(PDPageContentStream contentStream, String text, float x, float y) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.85f, 0.85f, 0.85f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(x, y - 10, 400, 25);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA, 12);
        contentStream.beginText();
        contentStream.newLineAtOffset(x + 10, y);
        contentStream.showText(text);
        contentStream.endText();
    }
}

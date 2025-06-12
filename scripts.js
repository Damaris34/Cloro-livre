import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.color.PDColor;
import org.apache.pdfbox.pdmodel.graphics.color.PDDeviceRGB;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class CentralizedPDFReport {
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
            String formattedDate = LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            drawCenteredText(contentStream, "Data: " + formattedDate, 650);

            // Seções de controle centralizadas
            drawCenteredSection(contentStream, "Saída de Tratamento: Informações sobre a saída de tratamento...", 600);
            drawCenteredSection(contentStream, "Cozinha: Informações sobre a cozinha...", 570);
            drawCenteredSection(contentStream, "Produção: Informações sobre a produção...", 540);
            drawCenteredSection(contentStream, "Administração: Informações sobre a administração...", 510);
            drawCenteredSection(contentStream, "Recebimento: Informações sobre o recebimento...", 480);

            // Informações adicionais
            drawCenteredAdditionalInfo(contentStream);

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            document.save("Relatorio_Cloro_Livre_Centralizado.pdf");
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
        drawCenteredText(contentStream, "Empresa de Controle de Qualidade", 770);
    }

    private static void drawTitle(PDPageContentStream contentStream, String title) throws IOException {
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);
        drawCenteredText(contentStream, title, 700);
    }

    private static void drawCenteredText(PDPageContentStream contentStream, String text, float y) throws IOException {
        float fontSize = contentStream.getFont().getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * contentStream.getFontSize();
        float textWidth = PDType1Font.HELVETICA_BOLD.getStringWidth(text) * fontSize / 1000;
        contentStream.beginText();
        contentStream.newLineAtOffset((600 - textWidth) / 2, y);
        contentStream.showText(text);
        contentStream.endText();
    }

    private static void drawCenteredSection(PDPageContentStream contentStream, String text, float y) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.85f, 0.85f, 0.85f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(100, y - 15, 400, 25);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA, 12);
        drawCenteredText(contentStream, text, y);
    }

    private static void drawCenteredAdditionalInfo(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA, 12);
        drawCenteredText(contentStream, "Informações Adicionais:", 430);
        drawCenteredText(contentStream, "Este relatório foi gerado automaticamente para controle de qualidade.", 410);
        drawCenteredText(contentStream, "Para mais informações, entre em contato com o departamento de qualidade.", 400);
    }
}

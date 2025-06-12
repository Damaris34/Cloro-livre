import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.color.PDColor;
import org.apache.pdfbox.pdmodel.graphics.color.PDDeviceRGB;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class StructuredPDFGenerator {

    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            // Draw header
            drawHeader(contentStream);

            // Draw title
            drawTitle(contentStream, "Controle de Cloro Livre");

            // Draw date field
            drawDateField(contentStream, "Data: " + LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));

            // Draw location sections
            drawLocationSection(contentStream, "Saída de Tratamento", 100, 550);
            drawLocationSection(contentStream, "Cozinha", 300, 550);
            drawLocationSection(contentStream, "Produção", 100, 350);
            drawLocationSection(contentStream, "Administração", 300, 350);
            drawLocationSection(contentStream, "Recebimento", 500, 350);

            // Draw generate PDF button
            drawGeneratePDFButton(contentStream);

            // Draw footer
            drawFooter(contentStream);

        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            document.save("Controle_Cloro_Livre.pdf");
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
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0.39f, 0.76f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(50, 700, 500, 50);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 18);
        contentStream.beginText();
        contentStream.newLineAtOffset(180, 720);
        contentStream.showText("Controle de Cloro Livre");
        contentStream.endText();
    }

    private static void drawTitle(PDPageContentStream contentStream, String title) throws IOException {
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
        contentStream.beginText();
        contentStream.newLineAtOffset(220, 670);
        contentStream.showText(title);
        contentStream.endText();
    }

    private static void drawDateField(PDPageContentStream contentStream, String date) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.9f, 0.9f, 0.95f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(220, 620, 160, 30);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA, 12);
        contentStream.beginText();
        contentStream.newLineAtOffset(230, 635);
        contentStream.showText(date);
        contentStream.endText();
    }

    private static void drawLocationSection(PDPageContentStream contentStream, String title, float x, float y) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0.9f, 0.9f, 0.95f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(x, y, 180, 120);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.BLACK);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
        contentStream.beginText();
        contentStream.newLineAtOffset(x + 10, y + 100);
        contentStream.showText(title);
        contentStream.newLineAtOffset(0, -20);
        contentStream.setFont(PDType1Font.HELVETICA, 10);
        contentStream.showText("Escolher Arquivo");
        contentStream.newLineAtOffset(0, -20);
        contentStream.showText("Nenhum arquivo escolhido");
        contentStream.newLineAtOffset(0, -20);
        contentStream.showText("-- mg/L");
        contentStream.endText();
        contentStream.setStrokingColor(new PDColor(new float[]{0.7f, 0.7f, 0.7f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(x, y, 180, 120);
        contentStream.stroke();
    }

    private static void drawGeneratePDFButton(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0.39f, 0.76f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(250, 150, 100, 30);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
        contentStream.beginText();
        contentStream.newLineAtOffset(260, 165);
        contentStream.showText("Gerar PDF");
        contentStream.endText();
    }

    private static void drawFooter(PDPageContentStream contentStream) throws IOException {
        contentStream.setNonStrokingColor(new PDColor(new float[]{0, 0.39f, 0.76f}, PDDeviceRGB.INSTANCE));
        contentStream.addRect(50, 50, 500, 50);
        contentStream.fill();
        contentStream.setNonStrokingColor(PDColor.WHITE);
        contentStream.setFont(PDType1Font.HELVETICA, 10);
        contentStream.beginText();
        contentStream.newLineAtOffset(200, 70);
        contentStream.showText("© 2023 Controle de Cloro Livre");
        contentStream.endText();
    }
}

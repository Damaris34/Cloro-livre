import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.io.IOException;

public class CustomChlorineReportGenerator {

    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        try {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Define a font and font size
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);

            // Add a custom header
            contentStream.beginText();
            contentStream.newLineAtOffset(200, 700);
            contentStream.showText("Custom Free Chlorine Control Report");
            contentStream.endText();

            // Add headers for the table
            String[] headers = {"Date", "Treatment Exit", "Kitchen", "Production", "Administration", "Reception"};
            float margin = 50;
            float yStart = 650;
            float yPosition = yStart;

            for (String header : headers) {
                contentStream.beginText();
                contentStream.newLineAtOffset(margin, yPosition);
                contentStream.showText(header);
                contentStream.endText();
                margin += 100;
            }

            // Add some sample data
            String[][] data = {
                {"2023-10-01", "1.2", "1.5", "1.3", "1.4", "1.6"},
                {"2023-10-02", "1.1", "1.4", "1.2", "1.3", "1.5"},
                {"2023-10-03", "1.0", "1.3", "1.1", "1.2", "1.4"}
            };

            yPosition -= 20;
            for (String[] row : data) {
                margin = 50;
                for (String cell : row) {
                    contentStream.beginText();
                    contentStream.newLineAtOffset(margin, yPosition);
                    contentStream.showText(cell);
                    contentStream.endText();
                    margin += 100;
                }
                yPosition -= 20;
            }

            contentStream.close();

            // Save the document
            document.save("Custom_Chlorine_Report.pdf");
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

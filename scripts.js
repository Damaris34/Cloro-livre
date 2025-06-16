import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

import java.io.IOException;

public class EnhancedChlorineReportGenerator {

    public static void main(String[] args) {
        PDDocument document = new PDDocument();
        try {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);

            // Load an image for the header logo
            PDImageXObject logo = PDImageXObject.createFromFile("path/to/logo.png", document);

            // Draw the logo
            contentStream.drawImage(logo, 50, 650, 100, 50);

            // Set font and font size for the title
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);

            // Add a title
            contentStream.beginText();
            contentStream.newLineAtOffset(160, 700);
            contentStream.showText("Enhanced Free Chlorine Control Report");
            contentStream.endText();

            // Draw a line graph (simplified representation)
            contentStream.setStrokingColor(0, 0, 255);
            contentStream.moveTo(50, 550);
            contentStream.lineTo(100, 500);
            contentStream.lineTo(150, 530);
            contentStream.lineTo(200, 570);
            contentStream.lineTo(250, 520);
            contentStream.stroke();

            // Add headers for the table
            String[] headers = {"Date", "Treatment Exit", "Kitchen", "Production", "Administration", "Reception"};
            float margin = 50;
            float yStart = 500;
            float yPosition = yStart;

            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
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
            contentStream.setFont(PDType1Font.HELVETICA, 10);
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

            // Add a footer
            contentStream.setFont(PDType1Font.HELVETICA, 10);
            contentStream.beginText();
            contentStream.newLineAtOffset(50, 50);
            contentStream.showText("Contact: contact@example.com | Report generated on: " + java.time.LocalDate.now());
            contentStream.endText();

            contentStream.close();

            // Save the document
            document.save("Enhanced_Chlorine_Report.pdf");
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

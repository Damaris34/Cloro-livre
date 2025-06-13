import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.borders.SolidBorder;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;

import java.io.FileNotFoundException;
import java.io.IOException;

public class CreateCustomPDF {
    public static void main(String[] args) {
        String dest = "Relatorio_Controle_Cloro_Livre.pdf";

        PdfDocument pdf = new PdfDocument(new PdfWriter(dest));
        Document document = new Document(pdf);

        // Define colors
        DeviceRgb headerColor = new DeviceRgb(0, 0, 139);
        DeviceRgb sectionColor = new DeviceRgb(173, 216, 230);

        // Add header
        Paragraph header = new Paragraph("Relatório de Controle de Cloro Livre")
                .setFontSize(18)
                .setBold()
                .setTextAlignment(TextAlignment.CENTER)
                .setBackgroundColor(headerColor)
                .setMargin(0)
                .setPadding(10)
                .setFontColor(ColorConstants.WHITE);
        document.add(header);

        // Add date field
        document.add(new Paragraph("Data:").setMarginTop(20));

        // Create a table for sections
        Table table = new Table(UnitValue.createPercentArray(new float[]{1, 1, 1}));
        table.setWidth(UnitValue.createPercentValue(100));

        // Add sections to the table
        String[] sections = {"Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};
        for (String section : sections) {
            Cell cell = new Cell().add(new Paragraph(section));
            cell.setBorder(new SolidBorder(sectionColor, 1));
            cell.setBackgroundColor(ColorConstants.WHITE);
            cell.setPadding(10);
            table.addCell(cell);
        }

        document.add(table);

        // Close the document
        document.close();
    }
}

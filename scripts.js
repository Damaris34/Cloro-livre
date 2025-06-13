import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.borders.RoundedCornersBorder;
import com.itextpdf.layout.borders.SolidBorder;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;

import java.io.IOException;

public class CreateCustomPDF {
    public static void main(String[] args) {
        String dest = "Relatorio_Controle_Cloro_Livre.pdf";

        PdfDocument pdf = new PdfDocument(new PdfWriter(dest));
        Document document = new Document(pdf);

        // Define colors
        DeviceRgb darkBlue = new DeviceRgb(0, 51, 102);
        DeviceRgb lightBlue = new DeviceRgb(173, 216, 230);

        // Add header
        Paragraph header = new Paragraph("Relatório de Controle de Cloro Livre")
                .setFontSize(18)
                .setBold()
                .setTextAlignment(TextAlignment.CENTER)
                .setBackgroundColor(darkBlue)
                .setMargin(0)
                .setPadding(10)
                .setFontColor(ColorConstants.WHITE);
        document.add(header);

        // Add date field
        Table dateTable = new Table(new float[]{1});
        dateTable.setWidth(UnitValue.createPercentValue(100));
        dateTable.setMarginTop(20);

        Cell dateCell = new Cell().add(new Paragraph("Data: dd/mm/aaaa"));
        dateCell.setBorder(new RoundedCornersBorder(5));
        dateCell.setBackgroundColor(ColorConstants.WHITE);
        dateCell.setPadding(10);
        dateTable.addCell(dateCell);
        document.add(dateTable);

        // Add sections with photo placeholders
        String[] sections = {"Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};
        for (String section : sections) {
            Table sectionTable = new Table(new float[]{1, 1});
            sectionTable.setWidth(UnitValue.createPercentValue(100));
            sectionTable.setMarginTop(10);

            Cell sectionCell = new Cell().add(new Paragraph(section));
            sectionCell.setBorder(new SolidBorder(ColorConstants.BLACK, 1));
            sectionCell.setBackgroundColor(lightBlue);
            sectionCell.setPadding(10);

            Cell photoCell = new Cell().add(new Paragraph("Espaço para Foto"));
            photoCell.setBorder(new SolidBorder(ColorConstants.BLACK, 1));
            photoCell.setBackgroundColor(ColorConstants.WHITE);
            photoCell.setPadding(10);

            sectionTable.addCell(sectionCell);
            sectionTable.addCell(photoCell);
            document.add(sectionTable);
        }

        // Close the document
        document.close();
    }
}


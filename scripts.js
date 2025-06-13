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

        // Initialize PDF writer
        PdfWriter writer = new PdfWriter(dest);

        // Initialize PDF document
        PdfDocument pdf = new PdfDocument(writer);

        // Initialize document
        Document document = new Document(pdf);

        // Define colors
        DeviceRgb darkBlue = new DeviceRgb(0, 51, 102);
        DeviceRgb lightBlue = new DeviceRgb(173, 216, 230);
        DeviceRgb lightGray = new DeviceRgb(211, 211, 211);
        DeviceRgb lightGreen = new DeviceRgb(144, 238, 144);

        // Add a stylized header
        Paragraph header = new Paragraph("Relatório de Controle de Cloro Livre")
                .setFontSize(24)
                .setBold()
                .setTextAlignment(TextAlignment.CENTER)
                .setBackgroundColor(darkBlue)
                .setMargin(0)
                .setPadding(15)
                .setFontColor(ColorConstants.WHITE);
        document.add(header);

        // Add a stylized date field
        Table dateTable = new Table(UnitValue.createPercentArray(new float[]{1}));
        dateTable.setWidth(UnitValue.createPercentValue(100));
        dateTable.setMarginTop(20);

        Cell dateCell = new Cell().add(new Paragraph("Data: dd/mm/aaaa"));
        dateCell.setBorder(new RoundedCornersBorder(10));
        dateCell.setBackgroundColor(lightGray);
        dateCell.setPadding(10);
        dateCell.setTextAlignment(TextAlignment.CENTER);
        dateTable.addCell(dateCell);
        document.add(dateTable);

        // Define sections with photo placeholders and descriptions
        String[][] sections = {
            {"Saída de Tratamento", "Medição do cloro livre na saída do tratamento."},
            {"Cozinha", "Medição do cloro livre na área da cozinha."},
            {"Produção", "Medição do cloro livre na área de produção."},
            {"Administração", "Medição do cloro livre na área administrativa."},
            {"Recebimento", "Medição do cloro livre na área de recebimento."}
        };

        for (String[] section : sections) {
            String sectionName = section[0];
            String sectionDescription = section[1];

            // Create a table for each section
            Table sectionTable = new Table(UnitValue.createPercentArray(new float[]{1}));
            sectionTable.setWidth(UnitValue.createPercentValue(100));
            sectionTable.setMarginTop(15);

            // Section name cell with color
            Cell sectionCell = new Cell().add(new Paragraph(sectionName));
            sectionCell.setBorder(new SolidBorder(darkBlue, 2));
            sectionCell.setBackgroundColor(lightBlue);
            sectionCell.setPadding(10);
            sectionCell.setTextAlignment(TextAlignment.CENTER);

            // Create a nested table for the photo and description
            Table contentTable = new Table(UnitValue.createPercentArray(new float[]{1, 1}));
            contentTable.setWidth(UnitValue.createPercentValue(100));

            // Photo placeholder cell with color
            Cell photoCell = new Cell().add(new Paragraph("Espaço para Foto"));
            photoCell.setBorder(new SolidBorder(darkBlue, 1));
            photoCell.setBackgroundColor(lightGreen);
            photoCell.setPadding(10);
            photoCell.setHeight(100);
            photoCell.setTextAlignment(TextAlignment.CENTER);

            // Description cell with color
            Cell descriptionCell = new Cell().add(new Paragraph(sectionDescription));
            descriptionCell.setBorder(new SolidBorder(darkBlue, 1));
            descriptionCell.setBackgroundColor(lightGray);
            descriptionCell.setPadding(10);

            contentTable.addCell(photoCell);
            contentTable.addCell(descriptionCell);

            // Add cells to the section table
            sectionTable.addCell(sectionCell);
            sectionTable.addCell(contentTable);

            // Add the table to the document
            document.add(sectionTable);
        }

        // Add additional information with color
        Paragraph additionalInfo = new Paragraph("Informações Adicionais\nEste relatório foi gerado para monitorar os níveis de cloro livre em diferentes áreas da empresa. É importante manter os níveis de cloro dentro dos padrões estabelecidos para garantir a segurança e a qualidade da água.")
                .setMarginTop(20)
                .setBackgroundColor(lightBlue)
                .setPadding(15)
                .setTextAlignment(TextAlignment.CENTER);
        document.add(additionalInfo);

        // Close the document
        document.close();
    }
}


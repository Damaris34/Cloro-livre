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

import java.io.FileNotFoundException;
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
        Table dateTable = new Table(UnitValue.createPercentArray(new float[]{1}));
        dateTable.setWidth(UnitValue.createPercentValue(100));
        dateTable.setMarginTop(20);

        Cell dateCell = new Cell().add(new Paragraph("Data: dd/mm/aaaa"));
        dateCell.setBorder(new RoundedCornersBorder(5));
        dateCell.setBackgroundColor(ColorConstants.WHITE);
        dateCell.setPadding(10);
        dateTable.addCell(dateCell);
        document.add(dateTable);

        // Add sections with photo placeholders and descriptions
        String[] sections = {
            "Saída de Tratamento: Medição do cloro livre na saída do tratamento.",
            "Cozinha: Medição do cloro livre na área da cozinha.",
            "Produção: Medição do cloro livre na área de produção.",
            "Administração: Medição do cloro livre na área administrativa.",
            "Recebimento: Medição do cloro livre na área de recebimento."
        };

        for (String section : sections) {
            String[] parts = section.split(":");
            String sectionName = parts[0];
            String sectionDescription = parts[1];

            Table sectionTable = new Table(UnitValue.createPercentArray(new float[]{1}));
            sectionTable.setWidth(UnitValue.createPercentValue(100));
            sectionTable.setMarginTop(10);

            Cell sectionCell = new Cell().add(new Paragraph(sectionName));
            sectionCell.setBorder(new SolidBorder(darkBlue, 1));
            sectionCell.setBackgroundColor(lightBlue);
            sectionCell.setPadding(10);

            Cell photoCell = new Cell().add(new Paragraph("Espaço para Foto"));
            photoCell.setBorder(new SolidBorder(ColorConstants.BLACK, 1));
            photoCell.setBackgroundColor(ColorConstants.WHITE);
            photoCell.setPadding(10);
            photoCell.setHeight(100);

            Cell descriptionCell = new Cell().add(new Paragraph(sectionDescription));
            descriptionCell.setBorder(new SolidBorder(ColorConstants.BLACK, 1));
            descriptionCell.setBackgroundColor(ColorConstants.WHITE);
            descriptionCell.setPadding(10);

            sectionTable.addCell(sectionCell);
            sectionTable.addCell(photoCell);
            sectionTable.addCell(descriptionCell);

            document.add(sectionTable);
        }

        // Add additional information
        Paragraph additionalInfo = new Paragraph("Informações Adicionais\nEste relatório foi gerado para monitorar os níveis de cloro livre em diferentes áreas da empresa. É importante manter os níveis de cloro dentro dos padrões estabelecidos para garantir a segurança e a qualidade da água.")
                .setMarginTop(20)
                .setBackgroundColor(new DeviceRgb(230, 247, 255))
                .setPadding(10);
        document.add(additionalInfo);

        // Add footer
        Paragraph footer = new Paragraph("© 2023 Controle de Cloro Livre | Empresa XYZ")
                .setFontSize(12)
                .setTextAlignment(TextAlignment.CENTER)
                .setBackgroundColor(darkBlue)
                .setMargin(0)
                .setPadding(10)
                .setFontColor(ColorConstants.WHITE);
        document.add(footer);

        // Close the document
        document.close();
    }
}

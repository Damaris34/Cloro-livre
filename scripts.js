import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
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

public class GenerateStyledPdf {
    public static void main(String[] args) {
        String dest = "relatorio_cloro_livre.pdf";

        try {
            // Inicializa o escritor e o documento PDF
            PdfWriter writer = new PdfWriter(dest);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            // Define a fonte
            PdfFont font = PdfFontFactory.createFont(com.itextpdf.io.font.constants.StandardFonts.HELVETICA);
            PdfFont boldFont = PdfFontFactory.createFont(com.itextpdf.io.font.constants.StandardFonts.HELVETICA_BOLD);

            // Adiciona o título
            Paragraph title = new Paragraph("Relatório de Controle de Cloro Livre")
                    .setFont(boldFont)
                    .setFontSize(20)
                    .setTextAlignment(TextAlignment.CENTER)
                    .setFontColor(new DeviceRgb(25, 25, 112)); // Azul escuro
            document.add(title);

            // Adiciona a data
            Paragraph dateParagraph = new Paragraph("Data: 20/06/2025")
                    .setFont(font)
                    .setFontSize(12)
                    .setFontColor(new DeviceRgb(70, 130, 180)) // Azul steel
                    .setTextAlignment(TextAlignment.CENTER);
            document.add(dateParagraph);

            // Adiciona uma linha em branco
            document.add(new Paragraph("\n"));

            // Cria uma tabela para os dados
            Table table = new Table(UnitValue.createPercentArray(new float[]{3, 2}));
            table.setWidth(UnitValue.createPercentValue(80));
            table.setTextAlignment(TextAlignment.CENTER);
            table.setHorizontalAlignment(com.itextpdf.layout.properties.HorizontalAlignment.CENTER);

            // Adiciona cabeçalhos à tabela
            table.addHeaderCell(new Cell().add(new Paragraph("Localização").setFont(boldFont).setFontColor(ColorConstants.WHITE)).setBackgroundColor(new DeviceRgb(25, 25, 112)));
            table.addHeaderCell(new Cell().add(new Paragraph("Valor (mg/L)").setFont(boldFont).setFontColor(ColorConstants.WHITE)).setBackgroundColor(new DeviceRgb(25, 25, 112)));

            // Adiciona os dados dos pontos à tabela
            String[][] points = {
                {"Saída de Tratamento", "2.0"},
                {"Cozinha", "1.8"},
                {"Produção", "1.9"},
                {"Administração", "1.7"},
                {"Recebimento", "2.1"}
            };

            for (String[] point : points) {
                table.addCell(new Cell().add(new Paragraph(point[0]).setFont(font)).setBorder(new SolidBorder(new DeviceRgb(70, 130, 180), 1)).setBackgroundColor(new DeviceRgb(224, 236, 244)));
                table.addCell(new Cell().add(new Paragraph(point[1]).setFont(font)).setBorder

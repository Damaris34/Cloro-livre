import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
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

            // Adiciona o cabeçalho
            Paragraph header = new Paragraph("Relatório de Controle de Cloro Livre")
                    .setFont(boldFont)
                    .setFontSize(20)
                    .setTextAlignment(TextAlignment.CENTER)
                    .setFontColor(ColorConstants.WHITE)
                    .setBackgroundColor(new DeviceRgb(25, 25, 112))
                    .setPadding(10)
                    .setMarginBottom(20);
            document.add(header);

            // Adiciona a seção de data
            Table dateTable = new Table(UnitValue.createPercentArray(new float[]{1}));
            dateTable.setWidth(UnitValue.createPercentValue(30));
            dateTable.setHorizontalAlignment(com.itextpdf.layout.properties.HorizontalAlignment.CENTER);

            dateTable.addCell(new Cell().add(new Paragraph("Data").setFont(boldFont).setFontColor(ColorConstants.WHITE)).setBackgroundColor(new DeviceRgb(25, 25, 112)).setTextAlignment(TextAlignment.CENTER));
            dateTable.addCell(new Cell().add(new Paragraph("20/06/2025").setFont(font)).setBorder(new SolidBorder(new DeviceRgb(70, 130, 180), 1)).setBackgroundColor(new DeviceRgb(240, 248, 255)).setPadding(5).setTextAlignment(TextAlignment.CENTER));

            document.add(dateTable);

            // Adiciona o título da seção de localização dos pontos
            Paragraph locationsHeader = new Paragraph("Localização dos Pontos")
                    .setFont(boldFont)
                    .setFontSize(14)
                    .setFontColor(new DeviceRgb(25, 25, 112))
                    .setTextAlignment(TextAlignment.LEFT)
                    .setMarginBottom(10);
            document.add(locationsHeader);

            // Cria uma tabela para os pontos de controle
            Table pointsTable = new Table(UnitValue.createPercentArray(new float[]{1, 1}));
            pointsTable.setWidth(UnitValue.createPercentValue(100));

            // Adiciona os pontos à tabela
            String[] points = {"Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};

            for (String point : points) {
                Table pointTable = new Table(UnitValue.createPercentArray(new float[]{1}));
                pointTable.setWidth(UnitValue.createPercentValue(100));

                // Adiciona o título do ponto
                pointTable.addCell(new Cell().add(new Paragraph(point).setFont(boldFont).setFontColor(ColorConstants.WHITE)).setBackgroundColor(new DeviceRgb(25, 25, 112)).setPadding(5).setTextAlignment(TextAlignment.CENTER));

                // Adiciona o campo de arquivo
                pointTable.addCell(new Cell().add(new Paragraph("Escolher Arquivo: Nenhum arquivo escolhido").setFont(font)).setBorder(new SolidBorder(new DeviceRgb(70, 130, 180), 1)).setBackgroundColor(new DeviceRgb(240, 248, 255)).setPadding(5).setTextAlignment(TextAlignment.CENTER));

                // Adiciona o campo de valor
                pointTable.addCell(new Cell().add(new Paragraph("-- mg/L").setFont(font)).setBorder(new SolidBorder(new DeviceRgb(70, 130, 180), 1)).setBackgroundColor(new DeviceRgb(240, 248, 255)).setPadding(5).setTextAlignment(TextAlignment.CENTER));

                pointsTable.addCell(new Cell().add(pointTable).setBorder(new RoundedCornersBorder(5)).setPadding(5));
            }

            document.add(pointsTable);

            // Adiciona o rodapé
            Paragraph footer = new Paragraph("© 2023 Controle de Cloro Livre")
                    .setFont(font)
                    .setFontSize(10)
                    .setTextAlignment(TextAlignment.CENTER)
                    .setFontColor(ColorConstants.WHITE)
                    .setBackgroundColor(new DeviceRgb(25, 25, 112))
                    .setPadding(10)
                    .setMarginTop(20);
            document.add(footer);

            // Fecha o documento
            document.close();

            System.out.println("PDF criado com sucesso!");

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

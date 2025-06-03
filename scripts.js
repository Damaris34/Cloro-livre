package com.example.clorolivre;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.FileOutputStream;
import java.io.IOException;

public class RelatorioControleCloroLivre {

    public static void main(String[] args) {
        Document document = new Document();

        try {
            PdfWriter.getInstance(document, new FileOutputStream("Relatorio_Controle_Cloro_Livre.pdf"));
            document.open();

            // Adiciona título com estilo
            Font titleFont = new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD);
            Paragraph title = new Paragraph("Relatório de Controle de Cloro Livre", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(new Paragraph(" ")); // Linha em branco

            // Adiciona a data com estilo
            Font dataFont = new Font(Font.FontFamily.HELVETICA, 12, Font.NORMAL);
            Paragraph data = new Paragraph("Data: ______/______/______", dataFont);
            document.add(data);
            document.add(new Paragraph(" ")); // Linha em branco

            // Adiciona seções com estilo
            Font sectionFont = new Font(Font.FontFamily.HELVETICA, 14, Font.BOLD);
            Font normalFont = new Font(Font.FontFamily.HELVETICA, 12, Font.NORMAL);

            // Saída de Tratamento
            Paragraph saidaTratamento = new Paragraph("Saída de Tratamento:", sectionFont);
            document.add(saidaTratamento);
            document.add(new Paragraph("Escolher Arquivo: __________________________", normalFont));
            document.add(new Paragraph("Nenhum arquivo escolhido", normalFont));
            document.add(new Paragraph("Valor: ______ mg/L", normalFont));
            document.add(new Paragraph(" ")); // Linha em branco

            // Cozinha
            Paragraph cozinha = new Paragraph("Cozinha:", sectionFont);
            document.add(cozinha);
            document.add(new Paragraph("Escolher Arquivo: __________________________", normalFont));
            document.add(new Paragraph("Nenhum arquivo escolhido", normalFont));
            document.add(new Paragraph("Valor: ______ mg/L", normalFont));
            document.add(new Paragraph(" ")); // Linha em branco

            // Produção
            Paragraph producao = new Paragraph("Produção:", sectionFont);
            document.add(producao);
            document.add(new Paragraph("Escolher Arquivo: __________________________", normalFont));
            document.add(new Paragraph("Nenhum arquivo escolhido", normalFont));
            document.add(new Paragraph("Valor: ______ mg/L", normalFont));
            document.add(new Paragraph(" ")); // Linha em branco

            // Administração
            Paragraph administracao = new Paragraph("Administração:", sectionFont);
            document.add(administracao);
            document.add(new Paragraph("Escolher Arquivo: __________________________", normalFont));
            document.add(new Paragraph("Nenhum arquivo escolhido", normalFont));
            document.add(new Paragraph("Valor: ______ mg/L", normalFont));
            document.add(new Paragraph(" ")); // Linha em branco

            // Recebimento
            Paragraph recebimento = new Paragraph("Recebimento:", sectionFont);
            document.add(recebimento);
            document.add(new Paragraph("Escolher Arquivo: __________________________", normalFont));
            document.add(new Paragraph("Nenhum arquivo escolhido", normalFont));
            document.add(new Paragraph("Valor: ______ mg/L", normalFont));

        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        } finally {
            if (document.isOpen()) {
                document.close();
            }
        }
    }
}

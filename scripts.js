package com.example.clorolivre;

import java.io.FileOutputStream;
import java.io.IOException;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

public class RelatorioControleCloroLivre {

    public static void main(String[] args) {
        // Criação do documento PDF
        Document document = new Document();

        try {
            // Criação do escritor PDF
            PdfWriter.getInstance(document, new FileOutputStream("Relatorio_Controle_Cloro_Livre.pdf"));

            // Abertura do documento
            document.open();

            // Adiciona o título do relatório
            document.add(new Paragraph("Relatório de Controle de Cloro Livre"));
            document.add(new Paragraph(" ")); // Linha em branco

            // Adiciona a data
            document.add(new Paragraph("Data: ______/______/______"));
            document.add(new Paragraph(" ")); // Linha em branco

            // Adiciona os campos para preenchimento
            document.add(new Paragraph("Saída de Tratamento:"));
            document.add(new Paragraph("Escolher Arquivo: __________________________"));
            document.add(new Paragraph("Nenhum arquivo escolhido"));
            document.add(new Paragraph("Valor: ______ mg/L"));
            document.add(new Paragraph(" ")); // Linha em branco

            document.add(new Paragraph("Cozinha:"));
            document.add(new Paragraph("Escolher Arquivo: __________________________"));
            document.add(new Paragraph("Nenhum arquivo escolhido"));
            document.add(new Paragraph("Valor: ______ mg/L"));
            document.add(new Paragraph(" ")); // Linha em branco

            document.add(new Paragraph("Produção:"));
            document.add(new Paragraph("Escolher Arquivo: __________________________"));
            document.add(new Paragraph("Nenhum arquivo escolhido"));
            document.add(new Paragraph("Valor: ______ mg/L"));
            document.add(new Paragraph(" ")); // Linha em branco

            document.add(new Paragraph("Administração:"));
            document.add(new Paragraph("Escolher Arquivo: __________________________"));
            document.add(new Paragraph("Nenhum arquivo escolhido"));
            document.add(new Paragraph("Valor: ______ mg/L"));
            document.add(new Paragraph(" ")); // Linha em branco

            document.add(new Paragraph("Recebimento:"));
            document.add(new Paragraph("Escolher Arquivo: __________________________"));
            document.add(new Paragraph("Nenhum arquivo escolhido"));
            document.add(new Paragraph("Valor: ______ mg/L"));

        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        } finally {
            // Fechar o documento
            if (document.isOpen()) {
                document.close();
            }
        }
    }
}

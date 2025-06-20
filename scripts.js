import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.StringReader;
import java.nio.charset.StandardCharsets;

public class HtmlToPdf {
    public static void main(String[] args) {
        String htmlContent = "<!DOCTYPE html>\n" +
                "<html lang='pt-BR'>\n" +
                "<head>\n" +
                "    <meta charset='UTF-8'>\n" +
                "    <title>Controle de Cloro Livre</title>\n" +
                "    <style>\n" +
                "        body { font-family: Arial, sans-serif; }\n" +
                "        .container { width: 100%; max-width: 800px; margin: auto; }\n" +
                "        header { text-align: center; color: #4CAF50; }\n" +
                "        .card { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class='container'>\n" +
                "        <header>\n" +
                "            <h1>Controle de Cloro Livre</h1>\n" +
                "        </header>\n" +
                "        <main>\n" +
                "            <div class='card'>\n" +
                "                <h2>Data</h2>\n" +
                "                <p>2023-10-01</p>\n" +
                "            </div>\n" +
                "        </main>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";

        try (OutputStream outputStream = new FileOutputStream("documento.pdf")) {
            ITextRenderer renderer = new ITextRenderer();
            renderer.setDocumentFromString(htmlContent);
            renderer.layout();
            renderer.createPDF(outputStream);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

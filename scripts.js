import java.util.ArrayList;
import java.util.List;

// Classe principal que representa o formulário
public class ControleCloroLivreForm {
    private String data;
    private List<LocalizacaoPonto> localizacoes;

    public ControleCloroLivreForm(String data) {
        this.data = data;
        this.localizacoes = new ArrayList<>();
    }

    public void adicionarLocalizacao(LocalizacaoPonto localizacao) {
        localizacoes.add(localizacao);
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public List<LocalizacaoPonto> getLocalizacoes() {
        return localizacoes;
    }

    public void gerarPDF() {
        // Lógica para gerar o PDF
        System.out.println("Gerando PDF...");
    }
}

// Classe que representa cada ponto de localização
class LocalizacaoPonto {
    private String nome;
    private String escolherArquivo;
    private String nenhumArquivoEscolhido;

    public LocalizacaoPonto(String nome, String escolherArquivo, String nenhumArquivoEscolhido) {
        this.nome = nome;
        this.escolherArquivo = escolherArquivo;
        this.nenhumArquivoEscolhido = nenhumArquivoEscolhido;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEscolherArquivo() {
        return escolherArquivo;
    }

    public void setEscolherArquivo(String escolherArquivo) {
        this.escolherArquivo = escolherArquivo;
    }

    public String getNenhumArquivoEscolhido() {
        return nenhumArquivoEscolhido;
    }

    public void setNenhumArquivoEscolhido(String nenhumArquivoEscolhido) {
        this.nenhumArquivoEscolhido = nenhumArquivoEscolhido;
    }
}

// Classe principal para testar o formulário
public class Main {
    public static void main(String[] args) {
        ControleCloroLivreForm form = new ControleCloroLivreForm("23/05/2025");

        LocalizacaoPonto saidaTratamento = new LocalizacaoPonto("Saída de Tratamento", "Escolher Arquivo", "Nenhum arquivo escolhido");
        LocalizacaoPonto cozinha = new LocalizacaoPonto("Cozinha", "Escolher Arquivo", "Nenhum arquivo escolhido");
        LocalizacaoPonto producao = new LocalizacaoPonto("Produção", "Escolher Arquivo", "Nenhum arquivo escolhido");
        LocalizacaoPonto administracao = new LocalizacaoPonto("Administração", "Escolher Arquivo", "Nenhum arquivo escolhido");
        LocalizacaoPonto recebimento = new LocalizacaoPonto("Recebimento", "Escolher Arquivo", "Nenhum arquivo escolhido");

        form.adicionarLocalizacao(saidaTratamento);
        form.adicionarLocalizacao(cozinha);
        form.adicionarLocalizacao(producao);
        form.adicionarLocalizacao(administracao);
        form.adicionarLocalizacao(recebimento);

        form.gerarPDF();
    }
}

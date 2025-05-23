import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;
import javafx.stage.Stage;
import javafx.geometry.Insets;

public class ControleCloroLivreUI extends Application {

    @Override
    public void start(Stage primaryStage) {
        // Cabeçalho
        Label header = new Label("Controle de Cloro Livre");
        header.setStyle("-fx-font-size: 20px; -fx-font-weight: bold; -fx-background-color: blue; -fx-text-fill: white; -fx-padding: 10px;");

        // Data
        Label dataLabel = new Label("Data:");

        // Localização dos Pontos
        GridPane gridPane = new GridPane();
        gridPane.setPadding(new Insets(10));
        gridPane.setHgap(10);
        gridPane.setVgap(10);

        String[] pontos = {"Saída de Tratamento", "Cozinha", "Produção", "Administração", "Recebimento"};
        int row = 0;
        int col = 0;
        for (String ponto : pontos) {
            VBox vbox = new VBox();
            vbox.setStyle("-fx-border-color: blue; -fx-border-width: 2px; -fx-padding: 10px; -fx-background-color: white;");
            vbox.getChildren().add(new Label(ponto));
            gridPane.add(vbox, col, row);
            col++;
            if (col > 2) {
                col = 0;
                row++;
            }
        }

        // Rodapé
        Label footer = new Label("Rodapé");
        footer.setStyle("-fx-background-color: blue; -fx-text-fill: white; -fx-padding: 10px;");

        // Layout principal
        VBox root = new VBox(10);
        root.setPadding(new Insets(10));
        root.getChildren().addAll(header, dataLabel, gridPane, footer);

        // Cena
        Scene scene = new Scene(root, 600, 500);
        primaryStage.setScene(scene);
        primaryStage.setTitle("Controle de Cloro Livre");
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}

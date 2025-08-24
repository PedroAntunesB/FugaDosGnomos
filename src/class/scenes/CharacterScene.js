import Phaser from "phaser";

export class CharacterSelect extends Phaser.Scene {
    constructor() {
        super("CharacterSelect");
        this.playersData = [
            { hatColor: null, name: "", type: null },
            { hatColor: null, name: "", type: null }
        ];
        this.currentPlayer = 0;

        this.optionTexts = { hatColor: [], type: [], name: null };
    }

    create() {
        this.add.text(200, 20, "Seleção de Personagem", { fontSize: "28px", fill: "#fff" });
        this.titleText = this.add.text(220, 70, "Jogador 1", { fontSize: "22px", fill: "#ff0" });
        this.add.text(100, 120, "Cor do Chapéu:", { fontSize: "20px", fill: "#fff" });
        let marrom = this.add.text(120, 160, "Marrom", { fontSize: "18px", fill: "#fff" })
            .setInteractive()
            .on("pointerdown", () => this.selectOption("hatColor", "marrom", marrom, this.optionTexts.hatColor));
        let branco = this.add.text(120, 200, "Branco", { fontSize: "18px", fill: "#fff" })
            .setInteractive()
            .on("pointerdown", () => this.selectOption("hatColor", "branco", branco, this.optionTexts.hatColor));
        this.optionTexts.hatColor.push(marrom, branco);
        this.add.text(100, 260, "Tipo de Gnomo:", { fontSize: "20px", fill: "#fff" });
        let veloz = this.add.text(120, 300, "Veloz", { fontSize: "18px", fill: "#fff" })
            .setInteractive()
            .on("pointerdown", () => this.selectOption("type", "Veloz", veloz, this.optionTexts.type));
        let azarado = this.add.text(120, 340, "Azarado", { fontSize: "18px", fill: "#fff" })
            .setInteractive()
            .on("pointerdown", () => this.selectOption("type", "Azarado", azarado, this.optionTexts.type));
        this.optionTexts.type.push(veloz, azarado);
        this.add.text(100, 400, "Nome:", { fontSize: "20px", fill: "#fff" });
        this.optionTexts.name = this.add.text(120, 440, "[Clique para digitar]", { fontSize: "18px", fill: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => {
                let nome = prompt("Digite o nome do jogador:");
                if (nome) {
                    this.playersData[this.currentPlayer].name = nome;
                    this.optionTexts.name.setText(nome).setStyle({ fill: "#ff0" });
                }
            });
        this.confirmBtn = this.add.text(200, 500, "Confirmar Jogador", { fontSize: "22px", fill: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => this.confirmPlayer());
    }

    selectOption(key, value, textObj, group) {
        this.playersData[this.currentPlayer][key] = value;
        group.forEach(opt => opt.setStyle({ fill: "#fff" }));
        textObj.setStyle({ fill: "#ff0" });
    }

    confirmPlayer() {
        const player = this.playersData[this.currentPlayer];
        if (!player.hatColor || !player.name || !player.type) {
            alert("Complete todas as escolhas antes de confirmar!");
            return;
        }

        if (this.currentPlayer === 0) {
            this.currentPlayer = 1;
            this.titleText.setText("Jogador 2");
            this.optionTexts.hatColor.forEach(opt => opt.setStyle({ fill: "#fff" }));
            this.optionTexts.type.forEach(opt => opt.setStyle({ fill: "#fff" }));
            this.optionTexts.name.setText("[Clique para digitar]").setStyle({ fill: "#0f0" });

        } else {
            this.scene.start("MainScene", { playersData: this.playersData });
        }
    }
}

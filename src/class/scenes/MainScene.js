import Phaser from "phaser";
import { Player } from "../Player";
import { GnomoVeloz } from "../gnomo/GnomoVeloz";
import { GnomoAzarado } from "../gnomo/GnomoAzarado";
import { Obstacle } from "../features/Obstacle";
import { FinishLine } from "../features/FinishLine";
export class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('fundo', '../public/img/mapa.jpg');
        this.load.image('marrom', '../public/img/gnomomarrom.png');
        this.load.image('branco', '../public/img/gnomobranco.png');
        this.load.image('bola', '../public/img/Bola.png');
        this.load.image('cachorro', '../public/img/cachorro.png');
        this.load.image('fantasma', '../public/img/gnomoMorto.png');
        this.load.image('chegada', '../public/img/chegada.png');
    }

    init(data) {
        this.playersData = data.playersData;
    }

    create() {
        const screenWidth = this.cameras.main.width
        const screenHeight = this.cameras.main.height
        this.add.image(screenWidth / 2, screenHeight / 2, 'fundo').setDisplaySize(screenWidth, screenHeight);

        const typeGnomePlayer1 = this.playersData[0].type;
        const typeGnomePlayer2 = this.playersData[1].type;
        this.player1 = new Player(this, 200, 500, 1, typeGnomePlayer1 == "Veloz" ? GnomoVeloz : GnomoAzarado, this.playersData[0].hatColor, this.playersData[0].name);
        this.player2 = new Player(this, 200, 600, 2, typeGnomePlayer2 == "Veloz" ? GnomoVeloz : GnomoAzarado, this.playersData[1].hatColor, this.playersData[1].name);
        this.linhaChegada = new FinishLine(this, 'chegada', 1980, 550)
        this.obs = new Obstacle(this, 'bola', 500, 700);
        this.obs3 = new Obstacle(this, 'cachorro', 1000, 200);
        this.obs2 = new Obstacle(this, 'bola', 1500, 10);

        this.physics.add.collider(this.player1.sprite, this.player2.sprite);
        this.physics.add.overlap(this.player1.sprite, this.obs.sprite, () => {
            this.player1.isAlive = false
            this.player1.sprite.setTexture('fantasma');
            this.player1.sprite.setScale(0.10);
        }, null, this);
        this.physics.add.overlap(this.player2.sprite, this.obs.sprite, () => {
            this.player2.isAlive = false
            this.player2.sprite.setTexture('fantasma');
            this.player2.sprite.setScale(0.10);
        }, null, this);
        this.physics.add.overlap(this.player2.sprite, this.obs2.sprite, () => {
            this.player2.isAlive = false
            this.player2.sprite.setTexture('fantasma');
            this.player2.sprite.setScale(0.10);
        }, null, this);
        this.physics.add.overlap(this.player1.sprite, this.obs3.sprite, () => {
            this.player1.isAlive = false
            this.player1.sprite.setTexture('fantasma');
            this.player1.sprite.setScale(0.10);
        }, null, this);
        this.physics.add.overlap(this.player1.sprite, this.obs2.sprite, () => {
            this.player1.isAlive = false
            this.player1.sprite.setTexture('fantasma');
            this.player1.sprite.setScale(0.10);
        }, null, this);
        this.physics.add.overlap(this.player2.sprite, this.obs3.sprite, () => {
            this.player2.isAlive = false
            this.player2.sprite.setTexture('fantasma');
            this.player2.sprite.setScale(0.10);
        }, null, this);
        this.physics.add.overlap(this.player1.sprite, this.linhaChegada.sprite, () => this.scene.start('VictoryScene'), null, this);
        this.physics.add.overlap(this.player2.sprite, this.linhaChegada.sprite, () => this.scene.start('VictoryScene'), null, this);
    }
    update() {
        this.player1.update();
        this.player2.update();
        this.obs.update();
        this.obs2.update();
        this.obs3.update();

    }
}
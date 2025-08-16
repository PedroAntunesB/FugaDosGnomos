import Phaser from "phaser";
import { Player } from "../Player";
import { GnomoVeloz } from "../gnomo/GnomoVeloz";
import { GnomoAzarado } from "../gnomo/GnomoAzarado";
export class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('fundo', '../public/img/mapa.jpg');
        this.load.image('marrom', '../public/img/gnomomarrom.png');
        this.load.image('branco', '../public/img/gnomobranco.png')
    }

    create() {
        const { width, height } = this.scale;
        const bg = this.add.image(width / 2, height / 2, 'fundo')
            .setOrigin(0.5, 0.5)
            .setScrollFactor(0)
            .setDepth(-1);
        bg.setDisplaySize(width, height);
        const corPlayer1 = 'branco';
        const corPlayer2 = 'marrom';
        this.player1 = new Player(this, corPlayer1, 200, 300, 1, GnomoVeloz, 'branco');
        this.player2 = new Player(this, corPlayer2, 200, 400, 2, GnomoAzarado, 'marrom');

        this.physics.add.collider(this.player1.sprite, this.player2.sprite);
    }
    update() {
        this.player1.update();
        this.player2.update();
    }
}
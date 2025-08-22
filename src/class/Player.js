import Phaser from "phaser";
import { Chapeu } from "./gnomo/Chapeu";
import { GnomoFactory } from "./gnomo/GnomoFactory";
export class Player {
    constructor(scene, texture, x, y, typePlayer, typeGnomo, chapeuCor) {
        this.typePlayer = typePlayer;
        this.scene = scene;
        this.sprite = this.scene.physics.add.sprite(x, y, texture);
        this.sprite.setCollideWorldBounds(true);
        this.sprite.setScale(0.25);
        if (typePlayer == 1) {
            this.cursors = this.scene.input.keyboard.createCursorKeys();
        } else {
            this.keys = this.scene.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
        }
        this.sprite.body.setSize(100, 150)

        const chapeu = new Chapeu(chapeuCor, Math.floor(Math.random() * 10) + 20);
        this.typeGnomo = new GnomoFactory(typeGnomo, 'Jorge', chapeu);
        this.speed = (this.typeGnomo.velocidade) * chapeu.modificadorSorte;

        this.isAlive = true;
    }


    movimentoPlayer1(speed) {
        if (this.cursors.left.isDown) {
            this.sprite.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.sprite.setVelocityX(speed);
        }

        if (this.cursors.up.isDown) {
            this.sprite.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            this.sprite.setVelocityY(speed);
        }
    }

    movimentoPlayer2(speed) {

        if (this.keys.left.isDown) {
            this.sprite.setVelocityX(-speed);
        } else if (this.keys.right.isDown) {
            this.sprite.setVelocityX(speed);
        }

        if (this.keys.up.isDown) {
            this.sprite.setVelocityY(-speed);
        } else if (this.keys.down.isDown) {
            this.sprite.setVelocityY(speed);
        }
    }


    update() {
        this.sprite.setVelocity(0);
        if (this.typePlayer == 1) {
            this.isAlive ? this.movimentoPlayer1(this.speed) : 0
        } else {
            this.isAlive ? this.movimentoPlayer2(this.speed) : 0
        }
    }
}
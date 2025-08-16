import { Game } from "./class/Game";
import { initGame } from "./functions/init.js"
// const config = {
//     type: Phaser.AUTO,
//     width: 1500,
//     height: 660,


//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 0 },
//             debug: false
//         }
//     },

//     scene: [MainScene]
// };
// function preload() {
//     this.load.image('fundo', '../public/img/mapa.jpg');
//     this.load.image('player', '../public/img/gnomo.png');
//     this.load.image('objetoBola', '../public/img/bola.jpeg')
// }

// function create() {
//     this.player1 = this.physics.add.sprite(200, 300, 'player');
//     this.player1.setScale(0.025);
//     this.player1.setCollideWorldBounds(true);

//     this.player2 = this.physics.add.sprite(200, 400, 'player');
//     this.player2.setScale(0.025);
//     this.player2.setCollideWorldBounds(true);

//     this.cursors = this.input.keyboard.createCursorKeys();

//     this.keys = this.input.keyboard.addKeys({
//         up: Phaser.Input.Keyboard.KeyCodes.W,
//         left: Phaser.Input.Keyboard.KeyCodes.A,
//         down: Phaser.Input.Keyboard.KeyCodes.S,
//         right: Phaser.Input.Keyboard.KeyCodes.D
//     });

//     this.bola = this.physics.add.sprite(700, 200, 'objetoBola')
//     this.bola.setCollideWorldBounds(true);
//     this.bola.setScale(0.5)
//     this.tweens.add({
//         targets: this.bola,
//         y: 400, // Vai até aqui
//         duration: 2000, // 2 segundos
//         ease: 'Linear',
//         yoyo: true, // Volta
//         repeat: -1  // Repete para sempre
//     });

//     this.physics.add.collider(this.player1, this.bola);
//     this.physics.add.collider(this.player2, this.bola);
//     this.physics.add.collider(this.player2, this.player1);

//     const { width, height } = this.scale;
//     const bg = this.add.image(width / 2, height / 2, 'fundo')
//         .setOrigin(0.5, 0.5)
//         .setScrollFactor(0)
//         .setDepth(-1);
//     bg.setDisplaySize(width, height);
// }

// function update() {
//     const speed = 200;
//     this.player1.setVelocity(0);
//     this.player2.setVelocity(0)

//     // Movimentar player1
//     if (this.cursors.left.isDown) {
//         this.player1.setVelocityX(-speed);
//     } else if (this.cursors.right.isDown) {
//         this.player1.setVelocityX(speed);
//     }

//     if (this.cursors.up.isDown) {
//         this.player1.setVelocityY(-speed);
//     } else if (this.cursors.down.isDown) {
//         this.player1.setVelocityY(speed);
//     }

//     // Movimentar o player2

//     if (this.keys.left.isDown) {
//         this.player2.setVelocityX(-speed);
//     } else if (this.keys.right.isDown) {
//         this.player2.setVelocityX(speed);
//     }

//     if (this.keys.up.isDown) {
//         this.player2.setVelocityY(-speed);
//     } else if (this.keys.down.isDown) {
//         this.player2.setVelocityY(speed);
//     }
// }

initGame();
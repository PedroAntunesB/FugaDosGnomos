export class InicialScene extends Phaser.Scene {


    constructor() {
        super('InicialScene');
    }

    preload() {
        this.load.image('background', '../public/img/telaInicio.png');
        this.load.image('titulo', '../public/img/titulo.png');
        this.load.image('playButton', '../public/img/btPlay.png');
        this.load.audio('bgMusic', '../public/audio/gnomoMusic.mp3');
    }

    create() {
        const screenWidth = this.cameras.main.width;
        const screenHeight = this.cameras.main.height;
        this.add.image(screenWidth / 2, screenHeight / 2, 'background').setDisplaySize(screenWidth, screenHeight);
        // Tive que desligar pq trava minha maquina
        this.music = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
        this.music.play();

        const playButton = this.add.image(screenWidth / 2, screenHeight * 0.8, 'playButton')
            .setInteractive()
            .setScale(0.20);


        this.add.image(screenWidth / 2, screenHeight * 0.3, 'titulo')
            .setOrigin(0.5)
            .setScale(1.0);

        playButton.on('pointerdown', () => {
            this.scene.start('CharacterSelect');
        });
    }
}

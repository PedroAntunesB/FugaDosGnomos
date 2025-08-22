export class VictoryScene extends Phaser.Scene {
    constructor() {
        super('VictoryScene');
    }


    create() {
        const largura = this.sys.game.config.width;
        const altura = this.sys.game.config.height;


        this.add.text(largura / 2, altura / 2 - 50, '🎉 Você venceu! 🎉', {
            fontSize: '40px',
            color: '#ffffff',
            fontFamily: 'Arial'
        }).setOrigin(0.5);


        this.add.text(largura / 2, altura / 2 + 20, 'Clique para voltar ao menu', {
            fontSize: '24px',
            color: '#cccccc',
            fontFamily: 'Arial'
        }).setOrigin(0.5);
        this.input.once('pointerdown', () => {
            this.scene.start('InicialScene');
        });
    }
}
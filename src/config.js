import { InicialScene } from "./class/scenes/InicialScene";
import { MainScene } from "./class/scenes/MainScene";
import { VictoryScene } from "./class/scenes/VictoryScene";
const config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: '#2c9af5',
    scene: [InicialScene, MainScene, VictoryScene]
};

export default config;
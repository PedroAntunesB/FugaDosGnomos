import { MainScene } from "./class/scenes/MainScene";
const config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 660,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scene: [MainScene]
};

export default config
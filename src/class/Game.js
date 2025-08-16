import Phaser from "phaser";
import config from "../config";
export class Game {
    constructor() {
        this.phaserGame = new Phaser.Game(config);
    }
}
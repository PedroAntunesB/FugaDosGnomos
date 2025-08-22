export class FinishLine {
    constructor(scene, texture, x, y) {
        this.scene = scene;
        this.sprite = this.scene.physics.add.sprite(x, y, texture);
        this.sprite.width = 100;
        this.sprite.height = 50;
        this.sprite.setScale(0.35);
        this.sprite.setRotation(Math.PI / 2);
    }
}
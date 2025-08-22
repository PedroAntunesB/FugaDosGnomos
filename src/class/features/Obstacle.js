export class Obstacle {
    constructor(scene, texture, x, y) {
        this.scene = scene;
        this.sprite = this.scene.physics.add.sprite(x, y, texture);
        this.speed = 500;
        this.sprite.setScale(0.5);
        this.sprite.setVelocityY(this.speed);
        this.sprite.setImmovable(true);
    }
    update() {
        if (this.sprite.y <= 80 && this.sprite.body.velocity.y < 0) {
            this.sprite.setVelocityY(this.speed);
        } else if (this.sprite.y >= 950 && this.sprite.body.velocity.y > 0) {
            this.sprite.setVelocityY(-this.speed);
        }
    }
}
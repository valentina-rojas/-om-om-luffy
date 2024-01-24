import Phaser from "phaser";

export default class Verduras extends Phaser.Physics.Arcade.Sprite {
body;

cursor;

constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setBounce(0.2);
    this.setGravityY(400);

    this.scene = scene;
}

}
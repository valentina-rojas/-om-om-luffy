import Phaser from "phaser";

export default class Jugador extends Phaser.Physics.Arcade.Sprite {
body;

cursor;

constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setBounce(0.2);
    this.setGravityY(1350);

    this.velocidad = 800;

    this.cursor = scene.input.keyboard.createCursorKeys();

    this.scene = scene;
  }

  movimiento() {
    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-this.velocidad);
   
    } else if (this.cursor.right.isDown) {
      this.body.setVelocityX(this.velocidad);
   
    } else {
      this.body.setVelocityX(0);

    }

    if (this.cursor.up.isDown && this.body.blocked.down) {
      this.body.setVelocityY(-1050);
    }
  }
}
export default class GameOver extends Phaser.Scene {
    constructor() {
      super("GameOver");
    }
  
    init() {}
  
    preload() {
      this.load.image("sky", "./assets/images/Cielo.png");
    }
  
    create() {
  
      this.add.image(960, 540, "perdiste")
      
  
      const button = this.add
        .image(
          1450,
          850,
          "reintentar",
        )
        .setOrigin(0.5)
        .setInteractive();


      button.on("pointerup", () => {
        this.scene.start("juego");
      });
    }
  
 
  }
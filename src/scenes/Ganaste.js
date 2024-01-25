export default class Ganaste extends Phaser.Scene {
    constructor() {
      super("ganaste");
    }
  
    init() {}
  
    preload() {
      this.load.image("sky", "./assets/images/Cielo.png");
    }
  
    create() {
  
      this.add.image(960, 540, "ganaste")
      
  
      const button = this.add
        .image(
          1450,
          850,
          "volver",
        )
        .setOrigin(0.5)
        .setInteractive();


      button.on("pointerup", () => {
        this.scene.start("menu");
      });
    }
  
 
  }
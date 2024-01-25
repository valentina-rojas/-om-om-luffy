export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }
  
    create() {
  
        this.add.image(960, 540, "menu")
  
      const button = this.add
        .image(
          450,
          800,
          "jugar",
        )
        .setOrigin(0.5)
        .setInteractive();
  
     
  
      button.on("pointerup", () => {
        this.scene.start("juego");
      });
    }
  
 
  }
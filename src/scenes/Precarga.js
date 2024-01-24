import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
    
    
    constructor() {
      super("precarga");
    }

    preload() {
        this.load.image("sky", "assets/skies/space3.png");
        this.load.image("logo", "assets/sprites/phaser3-logo.png");
        this.load.image("luffy", "assets/sprites/luffy.png");
        this.load.image("carne1", "assets/sprites/carne.png");
        this.load.image("carne2", "assets/sprites/bife.png");
        this.load.image("verdura1", "assets/sprites/lechuga.png");
        this.load.image("verdura2", "assets/sprites/tomate.png");

       
      }

      create(){
        this.scene.start("juego")
      }
     
}

import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
    
    
    constructor() {
      super("precarga");
    }

    preload() {
        this.load.image("sky", "assets/skies/space3.png");
        this.load.image("menu", "assets/skies/menu1.png");
        this.load.image("perdiste", "assets/skies/perdiste.png");
        this.load.image("ganaste", "assets/skies/ganaste.png");
        this.load.image("jugar", "assets/skies/jugar.png");
        this.load.image("volver", "assets/skies/volver.png");
        this.load.image("reintentar", "assets/skies/reintentar.png");


        this.load.image("logo", "assets/sprites/phaser3-logo.png");
        this.load.image("luffy", "assets/sprites/luffy.png");
        this.load.image("carne1", "assets/sprites/carne.png");
        this.load.image("carne2", "assets/sprites/bife.png");
        this.load.image("carne3", "assets/sprites/salchi.png");
        this.load.image("carne4", "assets/sprites/pata.png");

        this.load.image("verdura1", "assets/sprites/lechuga.png");
        this.load.image("verdura2", "assets/sprites/tomate.png");
        this.load.image("verdura3", "assets/sprites/zana.png");
        this.load.image("verdura4", "assets/sprites/beren.png");

       
        this.load.audio("comer", "audio/comiendo.mp3")
        this.load.audio("nomegusta", "audio/no.mp3")
        this.load.audio("musica", "audio/binks sake.mp3")


      }

      create(){
        this.scene.start("menu")
      }
     
}

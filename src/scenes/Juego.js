import Phaser from "phaser";
import events from "./EventCenter";
import Jugador from "../componentes/Jugador";
import {
  COMIDAS,
  CARNE1,
  CARNE2,
  VERDURA1,
  VERDURA2,
} from "../utils.js";

export default class Juego extends Phaser.Scene {
  constructor() {
    super("juego");
  }

  init() {
    this.comida = {
      carne1: { cuenta: 0, puntaje: 20 },
      carne2: { cuenta: 0, puntaje: 20 },
      carne3: { cuenta: 0, puntaje: 20 },
      carne4: { cuenta: 0, puntaje: 20 },

      verdura1: { cuenta: 0, puntaje: -100 },
      verdura2: { cuenta: 0, puntaje: -100 },
      verdura3: { cuenta: 0, puntaje: -100 },
      verdura4: { cuenta: 0, puntaje: -100 },
    };

    this.isWinner = false;
    this.isGameOver = false;

    this.puntaje = 0;


   this.shapeDelay = 2000; // Restar 100 al valor actual de SHAPE_DELAY
   this.comidaEvent = null;
 
  }

  create() {
    this.add.image(960, 540, "sky");

    this.scene.launch("ui");

    this.scene.launch("ui", {
      puntaje: this.puntaje,
    });

    this.jugador = new Jugador(this, 960, 1700, "luffy");

    //  const piso = this.add.rectangle(960, 1070, 1920, 20, 0x00ff00);
    // this.physics.add.existing(piso, true);

    //  this.physics.add.collider(this.jugador, piso)

    this.comidaGrupo = this.physics.add.group();

    this.time.addEvent({
      delay: this.shapeDelay,
      callback: this.agregarComida,
      callbackScope: this,
      loop: true,
    });

    this.time.addEvent({
      delay: 5000,
      callback: this.aumentarDelay,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.overlap(
      this.jugador,
      this.comidaGrupo,
      this.recolectarComida,
      null,
      this
    );
  }

  update() {
    this.jugador.movimiento();

    if (this.puntaje < 0) {
      this.scene.start("GameOver");
    }

    if (this.puntaje > 1500) {
      this.scene.start("ganaste");
    }
  }

  agregarComida() {
    const comidaRandom = Phaser.Math.RND.pick(COMIDAS);

    const randomX = Phaser.Math.Between(0, 1080);

    this.comidaGrupo
      .create(randomX, 0, comidaRandom)
      .setCircle(32, 0, 0)
      .setBounce(0.8);

    console.log("shape is added", randomX, comidaRandom);
  }

  aumentarDelay() {
   if (this.shapeDelay > 500) {
      this.shapeDelay -= 100;
      console.log(this.shapeDelay);

      // Cancelar el evento actual y recrearlo con el nuevo tiempo de delay
      if (this.comidaEvent) {
        this.comidaEvent.remove();
      }

      this.comidaEvent = this.time.addEvent({
        delay: this.shapeDelay,
        callback: this.agregarComida,
        callbackScope: this,
        loop: true,
      });
    }


  }

  

  recolectarComida(jugador, comida) {
    console.log("figura recolectada");
    comida.disableBody(true, true);

    const nombreComida = comida.texture.key;

    const puntajeActual = this.comida[nombreComida].puntaje;
    this.puntaje += puntajeActual;
    events.emit("actualizarPuntaje", this.puntaje);

    this.comida[nombreComida].count++;
  }
}

import Phaser from "phaser";
import events from "./EventCenter";

export default class UI extends Phaser.Scene {
  constructor() {
    super("ui");
  }

  init(data) {
    this.puntaje = data.puntaje || 0;
  }
  create() {
    this.text = this.add.text(10, 10, "Puntos: " + this.puntaje, {
      fontFamily: "roboto",
  fontSize: 50,
  color: "#000000", // 
    });

    events.on("actualizarPuntaje", this.actualizarPuntaje, this);
  }

  actualizarPuntaje(nuevoPuntaje) {
    this.puntaje = nuevoPuntaje;
    this.text.setText("Puntos: " + this.puntaje);
  }
}

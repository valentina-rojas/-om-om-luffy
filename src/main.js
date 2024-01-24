import Phaser from "phaser";

import HelloWorldScene from "./scenes/Juego";
import UI from "./scenes/UI";
import Precarga from "./scenes/Precarga";
import Juego from "./scenes/Juego";

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [Precarga, Juego , UI, ],
};

export default new Phaser.Game(config);

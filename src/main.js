import Phaser from "phaser";

import HelloWorldScene from "./scenes/Juego";
import UI from "./scenes/UI";
import Precarga from "./scenes/Precarga";
import Juego from "./scenes/Juego";
import GameOver from "./scenes/GameOver";
import Menu from "./scenes/Menu";
import Ganaste from "./scenes/Ganaste";

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [Precarga,Menu, Juego , UI, GameOver, Ganaste ],
};

export default new Phaser.Game(config);

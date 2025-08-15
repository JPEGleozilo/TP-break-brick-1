import Game from "./scenes/game.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 600,
      height: 400,
    },
    max: {
      width: 1200,
      height: 800,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Game],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);

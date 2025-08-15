export default class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image("whiteRectangle", "./public/assets/rectanguloWhite.png");
    this.load.image("blackRectangle", "./public/assets/rectangulo.png");
    this.load.image("outlineRectangle", "./public/assets/rectanguloOutline.png");
    this.load.image("ball", "./public/assets/ball.png");
  }

  create() {
    
    const background = this.add.image(300, 200, "whiteRectangle").setOrigin(0.5).setDisplaySize(600, 400).setDepth(-1);

    this.player = this.physics.add.image(300, 350, "blackRectangle").setOrigin(0.5).setImmovable(true).setDepth(2)
    .setDisplaySize(125, 20);
    
    this.player.body.setAllowGravity(false);
    this.player.setCollideWorldBounds(true);

    this.ball = this.physics.add.image(300, 275, "ball").setOrigin(0.5).setDepth(1).setBounce(1)
    .setDisplaySize(25, 25);

    this.ball.setCollideWorldBounds(true);

    const brick = this.physics.add.image(Phaser.Math.Between(50, 550), Phaser.Math.Between(75, 250), "outlineRectangle").setOrigin(0.5).setImmovable(true).setDepth(0)
    .setDisplaySize(100, 25);

    brick.body.setAllowGravity(false);

    this.physics.add.collider(this.ball, this.player, () => {
        const angle = Phaser.Math.Angle.Between(this.ball.x, this.ball.y, this.player.x, this.player.y);
        const speed = 325;
        this.ball.setVelocity(-speed * Math.cos(angle), -speed);
    });
    this.physics.add.collider(this.ball, brick, () => {
      brick.destroy();
    })

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-350);
    }
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(350);
    }
    if (this.cursors.left.isUp && this.cursors.right.isUp) {
      this.player.setVelocityX(0);
    }
  }
}
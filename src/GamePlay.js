export default new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay() {
        Phaser.Scene.call(this, { key: 'GamePlay' })
    },

    create: function() {
        // Move the camera center to (0, 0)
        // so we can easily scale the game to any size
        // without change positions of game objects
        this.cameras.main.setScroll(-this.game.config.width / 2, -this.game.config.height / 2)

        this.add.image(0, 0, 'tex', 'logo')
    },
})

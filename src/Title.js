export default new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Title() {
        Phaser.Scene.call(this, { key: 'Title' })
    },

    create: function() {
        this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'logo')

        this.cameras.main.fadeIn(200)
    },
})

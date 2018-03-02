export default new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Title() {
        Phaser.Scene.call(this, { key: 'title' });
    },

    preload: function() {
        this.load.image('logo', 'media/logo.png');
    },

    create: function() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'logo');
    },
});

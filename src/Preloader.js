var BAR_HEIGHT = 20;

export default new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Preloader() {
        Phaser.Scene.call(this, { key: 'Preloader' });

        this.bar;
    },

    preload: function() {
        // Load assets
        this.load.image('logo', 'media/logo.png');

        // Display loading progress
        var gameConfig = this.sys.game.config;
        var width = gameConfig.width;
        this.bar = this.add.graphics({ x: gameConfig.width / 2 - width / 2, y: gameConfig.height / 2 })
        this.bar.fillStyle(0xAEAEAE, 1)
            .fillRect(0, -(BAR_HEIGHT / 2), width, BAR_HEIGHT)

        this.load.on('progress', this.updateProgressDisplay, this);
    },

    create: function() {
        this.load.off('progress', this.updateProgressDisplay, this);

        this.tweens.add({
            targets: this.bar,
            scaleY: 0,
            duration: 200,
            ease: 'EaseQuadOut',
            onComplete: function() {
                this.scene.switch('Title');
            },
            callbackScope: this,
        })
    },

    updateProgressDisplay: function(pct) {
        this.bar.clear()
            .fillStyle(0x50576B, 1)
            .fillRect(0, -(BAR_HEIGHT / 2), this.sys.game.config.width, BAR_HEIGHT)
            .fillStyle(0xFFFFFF, 1)
            .fillRect(0, -(BAR_HEIGHT / 2), Math.round(this.sys.game.config.width * pct), BAR_HEIGHT)
    },
});

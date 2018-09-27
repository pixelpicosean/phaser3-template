import 'phaser'
import Preloader from './Preloader'
import Title from './Title'

var game

function resize() {
    var canvas = document.getElementById('game')
    var window_width = window.innerWidth
    var window_height = window.innerHeight
    var window_ratio = window_width / window_height
    var game_ratio = game.config.width / game.config.height
    if (window_ratio < game_ratio){
        canvas.style.width = window_width + 'px'
        canvas.style.height = Math.floor(window_width / game_ratio) + 'px'
    } else {
        canvas.style.width = Math.floor(window_height * game_ratio) + 'px'
        canvas.style.height = window_height + 'px'
    }
}

var Boot = {
    create: function() {
        // Initialize things here

        // Loading screen
        this.scene.switch('Preloader')
    },
}

window.onload = function() {
    game = new Phaser.Game({
        type: Phaser.AUTO,
        canvas: document.getElementById('game'),
        width: 400,
        height: 640,
        scene: [
            Boot,
            Preloader,
            Title,
        ],
    })

    resize()
    window.addEventListener('resize', resize, false)
}

import 'phaser';
import Title from './Title';

var game;

function resize() {
    var canvas = document.getElementById('game');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio){
        canvas.style.width = windowWidth + 'px';
        canvas.style.height = (windowWidth / gameRatio) + 'px';
    } else {
        canvas.style.width = (windowHeight * gameRatio) + 'px';
        canvas.style.height = windowHeight + 'px';
    }
}

window.onload = function() {
    game = new Phaser.Game({
        type: Phaser.AUTO,
        canvas: document.getElementById('game'),
        width: 480,
        height: 640,
        scene: [
            Title,
        ],
    });

    resize();
    window.addEventListener('resize', resize, false);
}

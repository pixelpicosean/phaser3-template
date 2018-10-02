export function show_all(game) {
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

export function resize(game) {
    game.resize(window.innerWidth, window.innerHeight)
}

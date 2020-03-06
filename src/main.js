import { init } from './init.js';
import { Scene1 } from './scene1.js';
import { Scene2 } from './scene2.js';
import { gui } from './gui.js';

if (window.innerWidth > window.innerHeight) {
    var h = (window.innerHeight - (window.innerHeight % 3));
    var w = (h * (4/3));
} else {
    var w = (window.innerWidth - (window.innerWidth % 4));
    var h = (w * (3/4))
}

window.addEventListener('resize', () => {
    if (window.innerWidth > window.innerHeight) {
        var h = (window.innerHeight - (window.innerHeight % 3));
        var w = (h * (4/3));
    } else {
        var w = (window.innerWidth - (window.innerWidth % 4));
        var h = (w * (3/4))
    }
    game.scale.resize(w, h);
});

var config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [init,Scene1,Scene2,gui]
    
};

var game = new Phaser.Game(config);
game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;


import { init } from './init.js';
import { Scene1 } from './scene1.js';
import { Scene2 } from './scene2.js';
import { Scene3 } from './scene3.js';
import { gui } from './gui.js';
import { pause } from './pause.js';

if ((window.innerWidth/4) > (window.innerHeight/3)) {
    var h = (window.innerHeight - (window.innerHeight % 3));
    var w = (h * (4/3));
} else {
    var w = (window.innerWidth - (window.innerWidth % 4));
    var h = (w * (3/4))
}

window.addEventListener('resize', () => {
    if ((window.innerWidth/4) > (window.innerHeight/3)) {
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
    input: {
        gamepad: true
    },
    physics: {
        default: 'impact',
        arcade: {
            gravity: { y: 0 }
        }, 
        impact: {
            bounciness: 0
        } 
    },
    scene: [init,Scene1,Scene2,Scene3,gui,pause]
    
};

var game = new Phaser.Game(config);
game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;


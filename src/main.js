import { init } from './init.js';
import { Scene1 } from './scene1.js';
import { Scene2 } from './scene2.js';
import { gui } from './gui.js';


var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
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





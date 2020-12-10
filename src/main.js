import { init } from './init.js';
import { Scene1 } from './scenes/scene1.js';
import { Scene2 } from './scenes/scene2.js';
import { Scene3 } from './scenes/scene3.js';
import { Scene4 } from './scenes/scene4.js';
import { Scene5 } from './scenes/scene5.js';
import { gui } from './gui.js';
import { pause } from './pause.js';

var config = {
    type: Phaser.AUTO,
    backgroundColor: '#2d2d2d',
    pixelArt: true,
    scale: {
       parent: 'gameDiv',
       mode: Phaser.Scale.FIT,
       width: 800,
       height: 600
    },
    input: {
        gamepad: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        },
        impact: {
            bounciness: 0
        }
    },
    scene: [init,Scene1,Scene2,Scene3,Scene4,Scene5,gui,pause]

};

var game = new Phaser.Game(config);

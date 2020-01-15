import { makeTile } from './tileLoader.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.setBaseURL('');
    this.load.spritesheet('grass', 'assets/grass_tiles.png', { frameWidth: 32, frameHeight: 32 });
}

function create ()
{
    
    var logo;
    var tile = this.physics.add.staticGroup();
    

    var matrixIn = [["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],]
    makeTile(tile,matrixIn,"grass",24);


}
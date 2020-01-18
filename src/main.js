import { makeTile } from './tileLoader.js';
import { playerAndCameraCreate, playerMove } from './movement.js';

var config = {
    type: Phaser.CANVAS,
    width: 400,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        //render:render
    }
};

var player;
var graphics;
var cursors;
var moveCam = false;


var game = new Phaser.Game(config);

function preload () {
    this.load.setBaseURL('');
    this.load.spritesheet('grass', 'assets/grass_tiles.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('playerImages', 'assets/dude1.png', { frameWidth: 32, frameHeight: 64 });
}

var cursors;

function create () {
    
    var logo;
    var tile = this.physics.add.staticGroup();
    
    var matrixIn = [["TR100 24"],["TR100 24"],["DR100"]];
    makeTile(tile,matrixIn,"grass",24,1);
    

    var matrixIn = [["DR8",1,2,3,"DR 89"],["DR8",17,18,19,"DR89"],["TR100 2"],["CD",24,32,40],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"],["DR50"]];
    
    makeTile(tile,matrixIn,"grass",0,1);
    
    player = playerAndCameraCreate ('playerImages',this)

}

function update() { 
    
    var cam = this.cameras.main;
    cursors = this.input.keyboard.createCursorKeys();

    playerMove(player,cursors);
    
    
    
}
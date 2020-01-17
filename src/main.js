import { makeTile } from './tileLoader.js';

var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
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
    
    var matrixIn = [["TR14 48"],["TR14 48"]];
    makeTile(tile,matrixIn,"grass",0,1);
    

    var matrixIn = [["DR8",1,2,3,"DR 3"],["DR8",17,18,19,"DR3"],["CD",24,32,40],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"],["DR14"]];
    makeTile(tile,matrixIn,"grass",0,1);


}
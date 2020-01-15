import { DR } from './makeTileHelpers.js';

export function makeTile (tile,matrixIn,spritesheet,startPlace = 0) {
    /**
    makeTile function takes in a phaser StaticGroup object, a matrix of numbers, and a phaser spritesheet object
    Also takes in optional startPlace number
    
    For every number a list in the matrix, it makes a tile of the corresponding tile on the spritesheet
    At the end of every list in the matrix, it starts a new row
    The startPlace number gets added to every number in the matrix, unless otherwise specified
    For example, if startPlace is 8 and the number 18 is passed in, 18 will be changed to 24 before being made a tile
    
    There are also escape charactures one can pass in to do specific things
    
    
    "DR [numTiles]"            Default Run - makes a run of randomized  default tiles # tiles long
    "DR 16"                    Default tiles default to 0, 8, and 16
                      
    "TR [numTiles] [tileNum]"  Tile Run - makes a run numTiles long of the tile tileNum
    "TR 16 5"
    
    ["CD",#]                   Change Default - Changes the default tiles
    ["CD",0,6,8,10,16]         Pass in as a list in the matrix, not a list in a list
                               Pass in numbers of which tiles will be default. Will override all other set tiles as default
                               Can be any number of number values
    
    **/
    
    
    
    tile.width = 64;
    var i1,i2,list2,param,runLength;
    var x = 0, y = 30;
    var defaultTiles = [0,8,16];
    
    for (i1 = 0; i1 < matrixIn.length; i1++) {
        list2 = matrixIn[i1];
        
        for (i2 = 0; i2 < list2.length; i2++) {
            param = list2[i2];
            if (isNaN(param)) {
                if(param.substring(0,2) == "DR") {
                    runLength = parseInt(param.substring(2,(param.length)),10);
                    DR(tile,defaultTiles,spritesheet,startPlace,runLength,x,y);
                }
                   
            } else {
                tile.create(x,y,spritesheet,(param));
                x += 64;
            };
        }
        
        y += 64;
        x = 0;
    }
    
    tile.children.iterate(function (child) {
    child.setScale(2);
    });

};

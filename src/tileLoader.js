import { TR,CD,DR } from './makeTileHelpers.js';

export function makeTile (tile,matrixIn,spritesheet,startPlace = 0,scale=2,x=0,y=30) {
    /**
    makeTile function takes in a phaser StaticGroup object, a matrix of numbers, and a phaser spritesheet object
    Also takes in optional startPlace number as an optional scale factor and x and y starting place
    
    For every number a list in the matrix, it makes a tile of the corresponding tile on the spritesheet
    At the end of every list in the matrix, it starts a new row
    The startPlace number gets added to every number in the matrix, unless otherwise specified
    For example, if startPlace is 8 and the number 18 is passed in, 18 will be changed to 24 before being made a tile
    
    The scale factor scales all tiles up by that amount. Default currently is 2.
    The x and y starting places determan how far down the tiles should start being made. 
    
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
    var defaultTiles = [0,8,16];
    
    for (i1 = 0; i1 < matrixIn.length; i1++) {
        list2 = matrixIn[i1];
        
        for (i2 = 0; i2 < list2.length; i2++) {
            param = list2[i2];
            if (isNaN(param)) {                                                   //checks if there's an escape string
                
                if(param.substring(0,2) == "DR") {     
                    x = DR(tile,defaultTiles,spritesheet,startPlace,param,scale,x,y);   //Run the DR function from makeTileHelpers
                
                } else if (param.substring(0,2) == "CD") {                        //If they put in "CD"
                    defaultTiles = CD(list2,param);                               //Run the CD function from make Tile Helpers
                    y -= 32 * scale;
                    break;                                                        //C dawg be mad
                    
                } else if (param.substring(0,2) == "TR") {                        //If they put in "TR" etc.
                    x = TR(tile,param,spritesheet,startPlace,scale,x,y);
                };
                   
            } else {
                tile.create(x,y,spritesheet,(param+startPlace));
                x += 32*scale;
            };
            
        }
        
        y += 32*scale;
        x = 0;
    }
    
    tile.children.iterate(function (child) {
    child.setScale(scale);
    });
    
    return y;
};

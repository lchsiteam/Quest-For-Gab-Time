export function DR(tile,defaultTiles,spritesheet,startPlace,param,scale,x,y) {
    
    var runLength = parseInt(param.substring(2,(param.length)),10);
    var i;
    for (i = 0; i < runLength; i++) {
        var tilePos = Phaser.Math.Between(0, (defaultTiles.length - 1));
        var tileNum = defaultTiles[tilePos]
        tile.create(x,y,spritesheet,tileNum+startPlace);
        x += 32 * scale;
    }
    return x;
};


export function CD(listIn,param) {
    var i,defaultOut = [];
    for (i = 1; i < listIn.length; i++) {
        defaultOut.push(listIn[i]);
    }
    return(defaultOut);
}


export function TR(tile,param,spritesheet,startPlace,scale,x,y) {
    var i, whereNum,NumLength;
    
    var runLength = parseInt(param.substring(2,(param.length)),10);
    
    whereNum = param.indexOf(runLength);
    NumLength = (whereNum.toString()).length;
    
    
    var tileNum = parseInt(param.substring(whereNum+NumLength+1,param.length),10)
    
    for (i = 0; i < runLength; i++) {
        tile.create(x,y,spritesheet,tileNum+startPlace);
        x += 32 * scale;
    }
    return x;
};
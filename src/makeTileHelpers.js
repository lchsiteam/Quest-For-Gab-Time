export function DR(tile,defaultTiles,spritesheet,startPlace,runLength,x,y) {
    var i;
    for (i = 0; i < runLength; i++) {
        var tilePos = Phaser.Math.Between(0, (defaultTiles.length - 1));
        var tileNum = defaultTiles[tilePos]
        tile.create(x,y,spritesheet,tileNum);
        x += 64;
    }
};
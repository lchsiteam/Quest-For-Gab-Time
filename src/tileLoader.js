export function makeTile (listIn,tile) {
    tile.width = 64;
    var i1,i2,list2;
    var x = 0, y = 30;
    for (i1 = 0; i1 < listIn.length; i1++) {
        list2 = listIn[i1];
        for (i2 = 0; i2 < list2.length; i2++) {
            tile.create(x,y,"grass",(list2[i2]))
            x += 64;
        }
        y += 64;
        x = 0;
    }
    tile.children.iterate(function (child) {
        child.setScale(2);

    });

};
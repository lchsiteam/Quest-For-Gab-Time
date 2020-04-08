export function makeDoor(that, doorPosX, doorPosY, exitScene, exitPosX, exitPosY, spritesheetValue) {
    
   var changeRooms = function (player, door)
    {
        this.PASSING_OBJ.playerData.x = exitPosX * 32;
        this.PASSING_OBJ.playerData.y = exitPosY * 32;
        this.scene.start(exitScene, that.PASSING_OBJ)
    }
    
    var door = that.physics.add.sprite(doorPosX*32, doorPosY*32, 'doors',spritesheetValue);
    door.setSize(32, 1);
    
    that.physics.add.collider(that.player,door, changeRooms, null, that);
    
}
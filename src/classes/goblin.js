export function goblin(that,x,y) {
    
    this.getAPack = function (player, pack) {
        that.PASSING_OBJ.playerData.healthPacks += 1;
        //pack.destroy();
    }
    
    that.load.image('healthCrate', '/assets/Images/HealthCrateV1.png');
    
    this.crate = that.physics.add.sprite(x, y, 'healthCrate',0);
    that.physics.add.collider(that.player, this.crate, this.getAPack, null, that);
    
  
    
    
}
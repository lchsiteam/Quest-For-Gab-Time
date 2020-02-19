export class Health extends Phaser.Scene {
    
    constructor ()
    {
        super('Health');
    }
    

preload ()
{
    this.load.image('healthBar', 'assets/images/HealthBar.png');
}

init (data)
    {
     
        'use strict';

        this.PASSING_OBJ = data;
    }

create ()
{
    

    
    this.add.image(208, 560, 'healthBar');
    
    
    
    
}
update ()  {
        var graphics;
    var size = 300;

    graphics = this.add.graphics();
    graphics.fillStyle(0xFF0000, 1);

    //  32px radius on the corners
    graphics.fillRect(82, 535, 300, 50);
        if (this.PASSING_OBJ.playerData.health < 0) {
            this.PASSING_OBJ.playerData.health = 0; 
        } else if (this.PASSING_OBJ.playerData.health > this.PASSING_OBJ.playerData.maxHealth) {
                this.PASSING_OBJ.playerData.health = this.PASSING_OBJ.playerData.maxHealth;
        }
        
       size = (this.PASSING_OBJ.playerData.health/this.PASSING_OBJ.playerData.maxHealth) * 300
       this.PASSING_OBJ.playerData.health -= 1

        graphics.fillStyle(0x00000, 1);
        graphics.fillRect(82, 535, 300, 50);

            graphics.fillStyle(0xFF0000, 1);
            graphics.fillRect(82, 535, size, 50);
    
    
    //console.log(size)
 
        
}
    
}
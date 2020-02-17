export class Health extends Phaser.Scene {
    
    constructor ()
    {
        super('Health');
    }
    

preload ()
{
    
}

init (data)
    {
     
        'use strict';

        this.PASSING_OBJ = data;
    }

create ()
{
    var graphics;
    var size = 300;

    graphics = this.add.graphics();
    graphics.fillStyle(0xFF0000, 1);

    //  32px radius on the corners
    graphics.fillRect(32, 535, 300, 50);

    
    setInterval( () => {
        
        
        size = (this.PASSING_OBJ.playerData.health/this.PASSING_OBJ.playerData.maxHealth) * 300

        graphics.fillStyle(0x00000, 1);
        graphics.fillRect(32, 535, 300, 50);
        if (size >= 0)
        {
            graphics.fillStyle(0xFF0000, 1);
            graphics.fillRect(32, 535, size, 50);
        }
 

        


    }, 1000/this.PASSING_OBJ.fps) // THIS FUNCTION WILL CHECK EVERY FRAME TO UPDATE THE HEALTH BAR
    var timeout = false
    setInterval( () => {
        if (timeout == false){
            this.PASSING_OBJ.playerData.health -= 10}

    },1000) //THIS FUNCTION DEMONSTRATES LOSING HEALTH

    /*
    setTimeout( () => {
        timeout = true
        setInterval( () => {
            if (this.PASSING_OBJ.playerData.health < this.PASSING_OBJ.playerData.maxHealth){
                this.PASSING_OBJ.playerData.health += 10}
        },1000)

    },10000) //THIS FUNCTION DEMONSTRATES Gaining HEALTH
    */

    
}
    update ()  {
        
    
        
}
    
}
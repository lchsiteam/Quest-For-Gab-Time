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
    var a;
    graphics = this.add.graphics();

    graphics.fillStyle(0xFF0000, 1);

    //  32px radius on the corners
    graphics.fillRect(32, 535, 300, 50);
    
    
    
    setInterval( () => {

       

            graphics.fillStyle(0x00000, 1);
            graphics.fillRect(32, 535, 300, 50);
            if (this.PASSING_OBJ.health >= 10){
            graphics.fillStyle(0xFF0000, 1);
            graphics.fillRect(32, 535, this.PASSING_OBJ.health, 50);
            }
            else{
                graphics.visible = false
            }

        this.PASSING_OBJ.health -= 10


    }, 1000)

    //  Using an object to define a different radius per corner
    
}
 update ()  {
     
    
     
}

    
}
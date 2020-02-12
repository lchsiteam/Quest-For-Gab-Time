export class Health extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('Health');
    }
    

preload ()
{
    
}



create ()
{
    var graphics;
    graphics = this.add.graphics();

    graphics.fillStyle(0xFF0000, 1);

    //  32px radius on the corners
    graphics.fillRect(32, 535, 300, 50);

    
    
    var size = 300
    setInterval( () => {

       

            graphics.fillStyle(0x00000, 1);
            graphics.fillRect(32, 535, 300, 50);
            if (size >= 10){
            graphics.fillStyle(0xFF0000, 1);
            graphics.fillRect(32, 535, size, 50);
            }
            else{
                graphics.visible = false
            }

        size -= 10


    }, 1000)

    //  Using an object to define a different radius per corner
    
}
 update ()  {
     
    
     
}

    
}
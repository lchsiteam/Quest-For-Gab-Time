export class pause extends Phaser.Scene {
    
constructor ()
{
    super('pause');
}

init (data)
    {
     
        'use strict';

        this.goingScene = data;

    }

create ()
{
    this.graphics = this.add.graphics();
    //this.graphics.defaultStrokeWidth = 100;
    
    this.input.keyboard.on('keyup', keyWasPressed, this);
    
    function keyWasPressed (event) {
    
        var code = event.keyCode;


        if (code === Phaser.Input.Keyboard.KeyCodes.ESC) {
            this.scene.resume(this.goingScene);
            this.scene.stop();
        } 
    }
}
    
update ()  {

    this.graphics.clear();

    this.graphics.fillStyle(0x000000, 0.6);
    var background = this.graphics.fillRect(0,0, 800, 600);
    background.setPosition(0,0,100)

    }
}   



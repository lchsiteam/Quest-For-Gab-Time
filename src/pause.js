export class pause extends Phaser.Scene {
    
constructor ()
{
    super('pause');
}

init (data)
    {
        
        if ((window.innerWidth/4) > (window.innerHeight/3)) {
            var h = (window.innerHeight - (window.innerHeight % 3));
            var w = (h * (4/3));
        } else {
            var w = (window.innerWidth - (window.innerWidth % 4));
            var h = (w * (3/4))
        }

     
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
    if ((window.innerWidth/4) > (window.innerHeight/3)) {
        var h = (window.innerHeight - (window.innerHeight % 3));
        var w = (h * (4/3));
    } else {
        var w = (window.innerWidth - (window.innerWidth % 4));
        var h = (w * (3/4))
    }

    this.graphics.clear();

    this.graphics.fillStyle(0x000000, 0.6);
    var background = this.graphics.fillRect(0,0, w, h);
    background.setPosition(0,0,100)

    }
}   



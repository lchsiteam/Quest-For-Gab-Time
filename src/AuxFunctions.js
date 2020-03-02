export function makeFunctions(that) {

    that.Keystrokes.keyA = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    that.Keystrokes.keyD = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    that.Keystrokes.keyW = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    that.Keystrokes.keyS = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
     
     that.running = function () {

         that.player.body.setVelocity(0);

         // Horizontal movement
         if (that.cursors.left.isDown || that.Keystrokes.keyA.isDown)
         {
             that.player.body.setVelocityX(-this.PASSING_OBJ.playerData.velocity);
         }
         else if (that.cursors.right.isDown || that.Keystrokes.keyD.isDown)
         {
             that.player.body.setVelocityX(this.PASSING_OBJ.playerData.velocity);
         }

         // Vertical movement
         if (that.cursors.up.isDown || that.Keystrokes.keyW.isDown)
         {
             that.player.body.setVelocityY(-this.PASSING_OBJ.playerData.velocity);
         }
         else if (that.cursors.down.isDown || that.Keystrokes.keyS.isDown)
         {
             that.player.body.setVelocityY(this.PASSING_OBJ.playerData.velocity);
         }

         
         
         // Update the animation last and give left/right animations precedence over up/down animations
         if (that.cursors.left.isDown || that.Keystrokes.keyA.isDown)
         {
             that.player.anims.play('left', true);
         }
         else if (that.cursors.right.isDown || that.Keystrokes.keyD.isDown)
         {
             that.player.anims.play('right', true);
         }
         else if (that.cursors.up.isDown || that.Keystrokes.keyW.isDown)
         {
             that.player.anims.play('up', true);
         }
         else if (that.cursors.down.isDown || that.Keystrokes.keyS.isDown)
         {
             that.player.anims.play('down', true);
         }
         else
         {
             that.player.anims.stop();
         }
     }
     
     that.input.keyboard.on('keyup', keyWasPressed, that);
     that.input.keyboard.on('keydown', keyIsBeingPressed, that);
     
    that.getAPack = function (player, pack) {
        that.PASSING_OBJ.playerData.healthPacks += 1;
        this.healthPack.destroy();
    }
}

function keyIsBeingPressed (event) {
    
    var code = event.keyCode;
    
    if (code === Phaser.Input.Keyboard.KeyCodes.Z) {
        
        this.PASSING_OBJ.playerData.velocity = 200;
    }
}

function keyWasPressed (event) {
    
    var code = event.keyCode;
    
    if (code === Phaser.Input.Keyboard.KeyCodes.T) {
        if (this.PASSING_OBJ.playerData.healthPacks > 0 && this.PASSING_OBJ.playerData.health < this.PASSING_OBJ.playerData.maxHealth) {
            this.PASSING_OBJ.playerData.health += 60;
            this.PASSING_OBJ.playerData.healthPacks -= 1;
        }
    } else if (code === Phaser.Input.Keyboard.KeyCodes.Z) {
        
        this.PASSING_OBJ.playerData.velocity = 100;
    } else if (code === Phaser.Input.Keyboard.KeyCodes.M) {
    
        if (this.PASSING_OBJ.playerData.manaEnabled === false) {
            this.PASSING_OBJ.playerData.manaEnabled = true;
            this.PASSING_OBJ.playerData.mana = 100;
        } else {
            this.PASSING_OBJ.playerData.manaEnabled = false;
        }
    } else if (code === Phaser.Input.Keyboard.KeyCodes.O) {
        
        //cookie  =  this.PASSING_OBJ
        
        //put all of your code for input here
        //Pass through this.PASSING_OBJ
        
    } else if (code === Phaser.Input.Keyboard.KeyCodes.I) {
    
        //put all of your code for input here
        
        //this.PASSING_OBJ = cookie
        
    }
}

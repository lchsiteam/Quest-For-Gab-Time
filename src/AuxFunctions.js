 export function makeRunning(that) {
     
     
    that.Keystrokes.keyZ = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    that.Keystrokes.keyA = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    that.Keystrokes.keyD = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    that.Keystrokes.keyW = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    that.Keystrokes.keyS = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
     
     that.running = function (speedMult = 1) {
         var velocity;

         if (that.Keystrokes.keyZ.isDown)
         {
             velocity = 200 * speedMult;
         } else {
             velocity = 100 * speedMult;
         }

         that.player.body.setVelocity(0);

         // Horizontal movement
         if (that.cursors.left.isDown || that.Keystrokes.keyA.isDown)
         {
             that.player.body.setVelocityX(-velocity);
         }
         else if (that.cursors.right.isDown || that.Keystrokes.keyD.isDown)
         {
             that.player.body.setVelocityX(velocity);
         }

         // Vertical movement
         if (that.cursors.up.isDown || that.Keystrokes.keyW.isDown)
         {
             that.player.body.setVelocityY(-velocity);
         }
         else if (that.cursors.down.isDown || that.Keystrokes.keyS.isDown)
         {
             that.player.body.setVelocityY(velocity);
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
     
 }
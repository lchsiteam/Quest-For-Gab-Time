import { fireball } from '/src/classes/Fireball.js';
import { tripleFireball } from '/src/classes/TripleFireball.js'; 
import { bigFireball } from '/src/classes/big_fireball.js'; 


export function makeFunctions(that) {

    that.Keystrokes.keyA = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    that.Keystrokes.keyD = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    that.Keystrokes.keyW = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    that.Keystrokes.keyS = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
     
     that.running = function () {
        if (!that.PASSING_OBJ.playerData.dead) {
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
     }
    
    that.otherChecks = function () {
        if (that.PASSING_OBJ.playerData.health <= 0 && !that.PASSING_OBJ.dead) {
            Death(that);
        }else if (that.PASSING_OBJ.playerData.health <= 0) {
            
        }
        
        if (that.PASSING_OBJ.playerData.mana < that.PASSING_OBJ.playerData.maxMana) {
            that.PASSING_OBJ.playerData.mana += that.PASSING_OBJ.playerData.manaRegenRate;
        }
    }
     
     that.input.keyboard.on('keyup', keypressEnd, that);
     that.input.keyboard.on('keydown', keypressLoop, that);
     
    that.getAPack = function (player, pack) {
        that.PASSING_OBJ.playerData.healthPacks += 1;
        this.healthPack.destroy();
    }
}

export function Death (that) {
    that.player.setTint(0x444444);
    var checkpoint = that.PASSING_OBJ.playerData.checkpoint;
    that.player.body.setVelocity(0);
    that.PASSING_OBJ.playerData.dead = true;
    that.player.anims.stop();
    setTimeout( () => {
        that.PASSING_OBJ.playerData.maxHealth = checkpoint.maxHealth;
        that.PASSING_OBJ.playerData.healthPacks = checkpoint.healthPacks;
        that.PASSING_OBJ.playerData.velocity = checkpoint.velocity;
        that.PASSING_OBJ.playerData.manaEnabled = checkpoint.manaEnabled;
        that.PASSING_OBJ.playerData.maxMana = checkpoint.maxMana;
        that.PASSING_OBJ.playerData.mana = checkpoint.maxMana;
        that.PASSING_OBJ.playerData.health = checkpoint.maxHealth;
        that.scene.start(checkpoint.scene, that.PASSING_OBJ);
        that.PASSING_OBJ.playerData.dead = false;
        that.player.clearTint();
    }, 2000) 
}

function throwFireball (that) {
    if (that.PASSING_OBJ.playerData.mana >= 10 & that.fireballEnabled) {
        that.PASSING_OBJ.playerData.mana -= 10
        new fireball(that,that.player.x,that.player.y,2);
        that.fireballEnabled = false;
        setTimeout( () => {
            that.fireballEnabled = true;
        }, 50) 
    }
}

function throwTripleFireball (that) {
    if (that.PASSING_OBJ.playerData.mana >= 35 & that.fireballEnabled) {
        that.PASSING_OBJ.playerData.mana -= 35
        new tripleFireball(that,that.player.x,that.player.y,2);
        that.fireballEnabled = false;
        setTimeout( () => {
            that.fireballEnabled = true;
        }, 50) 
    }
} 

function throwBigFireball (that) {
    if (that.PASSING_OBJ.playerData.mana >= 50 & that.fireballEnabled) {
        that.PASSING_OBJ.playerData.mana -= 50
        new bigFireball(that,that.player.x,that.player.y,5);
        that.fireballEnabled = false;
        setTimeout( () => {
            that.fireballEnabled = true;
        }, 50) 
    }
}

let zStartTime = 0; 
let zReleased = true; 

function keypressLoop (event) {
    
    var code = event.keyCode;
    
    if (code === Phaser.Input.Keyboard.KeyCodes.SHIFT) {
        //console.log('e'); 
        
        this.PASSING_OBJ.playerData.velocity = 200;
    } else if (code === Phaser.Input.Keyboard.KeyCodes.Z) {
        if (zReleased) {
            zReleased = false; 
            
            zStartTime = Date.now(); 
            
            console.log('e'); 
        } 
    } 
}

function keypressEnd (event) {
    
    var code = event.keyCode;
    
    if (code === Phaser.Input.Keyboard.KeyCodes.T) {
        if (this.PASSING_OBJ.playerData.healthPacks > 0 && this.PASSING_OBJ.playerData.health < this.PASSING_OBJ.playerData.maxHealth) {
            this.PASSING_OBJ.playerData.health += 60;
            this.PASSING_OBJ.playerData.healthPacks -= 1;
        }
    } else if (code === Phaser.Input.Keyboard.KeyCodes.SHIFT) {
        
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
        
    } else if (code === Phaser.Input.Keyboard.KeyCodes.Z) {
        zReleased = true; 
        
        let timeDiff = Date.now() - zStartTime; 
        let chargeSecs = timeDiff / 1000; 
        
        console.log(chargeSecs); 
        
        if (chargeSecs >= 1) {
            throwBigFireball(this); 
        } else {
            throwFireball(this); 
        } 
        
    } else if (code === Phaser.Input.Keyboard.KeyCodes.X) {
        throwTripleFireball(this);
    }
}

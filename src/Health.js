export class Health extends Phaser.Scene {
    
    constructor ()
    {
        super('Health');
    }
    

preload ()
{
    this.load.image('healthAndManaBar', 'assets/Images/HealthBarV3.png');
    this.load.image('healthBar', 'assets/Images/HealthBar.png');
    
}

init (data)
    {
     
        'use strict';

        this.PASSING_OBJ = data;
        var mana = 100
    }

create ()
{
    

    
    //this.add.sprite(208, 560,  'healthBar');
    
    
    
    
    
}
update ()  {
    var graphics;
    var healthSize = 300;
    var manaSize = 300;

    var maxMana = 100 //Make Global Vars
    var mana; // Make Global Vars

    var manaEnabled = true //make global as well

  



    graphics = this.add.graphics();
    graphics.fillStyle(0xFF0000, 1);


        if (this.PASSING_OBJ.playerData.health < 0) {
            this.PASSING_OBJ.playerData.health = 0; 
        } else if (this.PASSING_OBJ.playerData.health > this.PASSING_OBJ.playerData.maxHealth) {
                this.PASSING_OBJ.playerData.health = this.PASSING_OBJ.playerData.maxHealth;
        }


       
        

       healthSize = (this.PASSING_OBJ.playerData.health/this.PASSING_OBJ.playerData.maxHealth) * 300
       //this.PASSING_OBJ.playerData.health -= 1

        console.log(this.PASSING_OBJ.playerData.health )
       
       mana = this.PASSING_OBJ.playerData.health  - 200
      
       
       if (mana < 0) {
        mana = 0; 
    } else if (mana > maxMana) {
        mana = maxMana;
    }

    manaSize = (mana/maxMana) * 300
       console.log(manaSize)
       console.log(maxMana)
       console.log(mana)
      


       if (manaEnabled){
        graphics.fillStyle(0x00000, 1);
        graphics.fillRect(82, 534, 300, 26);

        graphics.fillStyle(0xFF0000, 1);
        graphics.fillRect(82, 534, healthSize, 26);

        graphics.fillStyle(0x00000, 1);
        graphics.fillRect(82, 560, 300, 26);

        graphics.fillStyle(0x0000FF, 1);
        graphics.fillRect(82, 560, manaSize, 26);

       }

       else 
       {
        graphics.fillStyle(0x00000, 1);
        graphics.fillRect(82, 534, 300, 52);

        graphics.fillStyle(0xFF0000, 1);
        graphics.fillRect(82, 534, healthSize, 52);
       }

    
    

 /*setTimeout(() => {




 })*/

    if (manaEnabled)
    {
        this.add.image(208, 560,  'healthAndManaBar');
    }
    else
    {
        this.add.image(208, 560,  'healthBar');
    }
}
    
}
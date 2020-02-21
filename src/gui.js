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

    }

create ()
{
    

    

    
    
    
    
    
}
update ()  {
    var graphics;
    var healthSize = 300;
    var manaSize = 300;

    var maxMana = 100 //Make Global Vars
    var mana = 100 // Make Global Vars

    var manaEnabled = true //make global as well

  



    graphics = this.add.graphics();


        if (this.PASSING_OBJ.playerData.health < 0) {
            this.PASSING_OBJ.playerData.health = 0; 
        } else if (this.PASSING_OBJ.playerData.health > this.PASSING_OBJ.playerData.maxHealth) {
                this.PASSING_OBJ.playerData.health = this.PASSING_OBJ.playerData.maxHealth;
        }

        if (mana < 0) {
            mana = 0; 
        } else if (mana > maxMana) {
            mana = maxMana;
        }


       
        

       healthSize = (this.PASSING_OBJ.playerData.health/this.PASSING_OBJ.playerData.maxHealth) * 300
       manaSize = (mana/maxMana) * 300
       //this.PASSING_OBJ.playerData.health -= 1

        console.log(this.PASSING_OBJ.playerData.health )
       
       
      

       if (manaEnabled){
            graphics.fillStyle(0x00000, 1);
            graphics.fillRect(82, 534, 300, 52); //Black background bar

            graphics.fillStyle(0xFF0000, 1);
            graphics.fillRect(82, 534, healthSize, 26); //Health bar

            graphics.fillStyle(0x0390fc, 1);
            graphics.fillRect(82, 560, manaSize, 26); //Mana bar

            this.add.image(208, 560,  'healthAndManaBar');

       }

       else 
       {
            graphics.fillStyle(0x00000, 1);
            graphics.fillRect(82, 534, 300, 52); //Black background bar

            graphics.fillStyle(0xFF0000, 1);
            graphics.fillRect(82, 534, healthSize, 52); //health bar

            this.add.image(208, 560,  'healthBar');
       }

}
    
}
export class gui extends Phaser.Scene {
    
constructor ()
{
    super('gui');
}
    

preload ()
{
    this.load.image('healthAndManaBar', 'assets/Images/HealthBarV3.png');
    this.load.image('healthBar', 'assets/Images/HealthBar.png');
    this.load.image("healthPack","assets/Images/HealthIcon.png")
}

init (data)
    {
     
        'use strict';

        this.PASSING_OBJ = data;

    }

create ()
{
    this.bar = this.add.image(208, 560,  'healthBar');
    this.graphics = this.add.graphics();
    this.graphics.defaultStrokeWidth = 100;
    this.healthPack = this.add.image(765,563,'healthPack');
    this.healthPack.scale = 2.4;
    
    this.text = this.add.text(775, 565, this.PASSING_OBJ.playerData.healthPacks, { fontFamily: 'Verdana, "Comic Sans MS", Tahoma, serif' });
}
    
update ()  {
    var healthSize = 300;
    var manaSize = 300;

    this.graphics.clear();
    this.bar.setDepth(2);
    
    this.text.setText(this.PASSING_OBJ.playerData.healthPacks);


    if (this.PASSING_OBJ.playerData.health < 0) {  //Checks to see if health is above or below what it can be
        this.PASSING_OBJ.playerData.health = 0; 
    } else if (this.PASSING_OBJ.playerData.health > this.PASSING_OBJ.playerData.maxHealth) {
        this.PASSING_OBJ.playerData.health = this.PASSING_OBJ.playerData.maxHealth;
    }

    if (this.PASSING_OBJ.playerData.mana < 0) {  //Checks to see if mana is above or below what it can be
        this.PASSING_OBJ.playerData.mana = 0; 
    } else if (this.PASSING_OBJ.playerData.mana > this.PASSING_OBJ.playerData.maxMana) {
        this.PASSING_OBJ.playerData.mana = this.PASSING_OBJ.playerData.maxMana;
    }

    healthSize = (this.PASSING_OBJ.playerData.health/this.PASSING_OBJ.playerData.maxHealth) * 300
    manaSize = (this.PASSING_OBJ.playerData.mana/this.PASSING_OBJ.playerData.maxMana) * 300
    //this.PASSING_OBJ.playerData.health -= 1


    if (this.PASSING_OBJ.playerData.manaEnabled){ //Differentiates between the mana and health bar and the just health bar.
        this.graphics.fillStyle(0x00000, 1);
        this.graphics.fillRect(82, 534, 300, 52); //Black background bar

        this.graphics.fillStyle(0xFF0000, 1);
        this.graphics.fillRect(82, 534, healthSize, 26); //Health bar

        this.graphics.fillStyle(0x0390fc, 1);
        this.graphics.fillRect(82, 560, manaSize, 26); //Mana bar

        this.bar.setTexture('healthAndManaBar');

    } else {
        this.graphics.fillStyle(0x00000, 1);
        this.graphics.fillRect(82, 534, 300, 52); //Black background bar

        this.graphics.fillStyle(0xFF0000, 1);
        this.graphics.fillRect(82, 534, healthSize, 52); //health bar

        this.bar.setTexture('healthBar');

    }
}   
}
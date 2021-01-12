export class gui extends Phaser.Scene {

constructor ()
{
    super('gui');
}


preload ()
{
    this.load.image('healthAndManaBar', 'assets/Images/HealthBarV3.png');
    this.load.image('healthBar', 'assets/Images/HealthBar.png');

    for (var i = 0; i <= 10; i++)
    {
        this.load.image("healthPack"+String(i),"assets/Images/"+String(i)+".png")
    }
    this.load.image("hotbar", 'assets/Images/InventoryV3.png')
}

init (data)
    {

        'use strict';

        this.PASSING_OBJ = data;
        this.p = data.playerData;
    }

create ()
{

    this.bar = this.add.image(208, 558,  'healthBar');
    this.hotbar = this.add.image(730,555,'hotbar')
    this.hotbar.scale = 1.5
    this.graphics = this.add.graphics();
    this.graphics.defaultStrokeWidth = 100;
    this.healthPack = this.add.image(765,480,'healthPack0');
    this.healthPack.scale = 0.2;

    // this.text = this.add.text(775, 565, this.PASSING_OBJ.playerData.healthPacks, { fontFamily: 'Verdana, "Comic Sans MS", Tahoma, serif' });

}

update ()  {
    var healthSize = 300;
    var manaSize = 300;

    this.graphics.clear();
    this.bar.setDepth(2);
    this.bar.x = 208
    this.bar.y = 558

    this.healthPack.x = 765
    this.healthPack.y = 480

    this.hotbar.x = 730
    this.hotbar.y = 555



    //this.text.x = 775
    //this.text.y = 565


    //this.text.setText(this.PASSING_OBJ.playerData.healthPacks);

    
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

    //top left coordinates of the black background bar for health and mana
    const refX = 82;
    const refY = 532;

    //sprint stuff
    const sprintBGWidth = 300;
    const sprintBGHeight = 26;

    const sprintBarOffset = sprintBGHeight + 15;
    const sprintBarBorder = 4;

    const sprintBGX = refX;
    const sprintBGY = refY - sprintBarOffset;

    const sprintFillWidth = this.p.sprint * (sprintBGWidth - sprintBarBorder * 2) / this.p.maxSprint;
    const sprintFillHeight = sprintBGHeight - sprintBarBorder * 2;

    const sprintFillX = sprintBGX + sprintBarBorder;
    const sprintFillY = sprintBGY + sprintBarBorder;

    //black background bar for sprint gauge
    this.graphics.fillStyle(0x00000, 1);

    this.graphics.fillRect(sprintBGX, sprintBGY, sprintBGWidth, sprintBGHeight);

    //white fill bar for sprint gauge
    this.graphics.fillStyle(0xffffff);

    this.graphics.fillRect(sprintFillX, sprintFillY, sprintFillWidth, sprintFillHeight);

    //health and mana stuff
    healthSize = (this.PASSING_OBJ.playerData.health/this.PASSING_OBJ.playerData.maxHealth) * 300;
    manaSize = (this.PASSING_OBJ.playerData.mana/this.PASSING_OBJ.playerData.maxMana) * 300;
    //this.PASSING_OBJ.playerData.health -= 1

    if (this.PASSING_OBJ.playerData.manaEnabled){ //Differentiates between the mana and health bar and the just health bar.
        this.graphics.fillStyle(0x00000, 1);
        this.graphics.fillRect(refX, refY, 300, 52); //Black background bar

        this.graphics.fillStyle(0xFF0000, 1);
        this.graphics.fillRect(refX, refY, healthSize, 26); //Health bar

        this.graphics.fillStyle(0x0390fc, 1);
        this.graphics.fillRect(refX, refY + 26, manaSize, 26); //Mana bar

        this.bar.setTexture('healthAndManaBar');

    } else {
        this.graphics.fillStyle(0x00000, 1);
        this.graphics.fillRect(refX, refY, 300, 52); //Black background bar

        this.graphics.fillStyle(0xFF0000, 1);
        this.graphics.fillRect(refX, refY, healthSize, 52); //health bar

        this.bar.setTexture('healthBar');

    }

    var p = this.p; //shortcut

    const zChargeCap = p.zChargeMax; //max of 1,000 ms charge
    var zChargeTime;

    if (p.zStartTime) {
        zChargeTime = Date.now() - p.zStartTime;
        zChargeTime = Math.min(zChargeTime, zChargeCap);
    } else {
        zChargeTime = 0;
    }

    const zBGWidth = 15;
    const zBGHeight = 52;

    const zBarOffset = 330;
    const zBarBorder = 2;

    const zBGX = refX + zBarOffset;
    const zBGY = refY;

    const zFillWidth = zBGWidth - zBarBorder * 2;
    const zFillHeight = zChargeTime * (zBGHeight - zBarBorder * 2) / zChargeCap;

    const zFillX = zBGX + zBarBorder;
    const zFillY = zBGY - zBarBorder + zBGHeight - zFillHeight;

    //black background bar for Z-charge gauge
    this.graphics.fillStyle(0x00000, 1);

    this.graphics.fillRect(zBGX, zBGY, zBGWidth, zBGHeight);

    if (zChargeTime == zChargeCap) {
        this.graphics.fillStyle(0xff8800, 1); //fully charged bar is orange
    } else {
        this.graphics.fillStyle(0xffff00, 1); //not fully charged bar is yellow
    }

    //charge bar (for the z-button attack)
    this.graphics.fillRect(zFillX, zFillY, zFillWidth, zFillHeight);

    if (this.PASSING_OBJ.playerData.healthPacks > 10)
    {
        this.PASSING_OBJ.playerData.healthPacks = 10
    }

    this.healthPack.setTexture('healthPack'+String(this.PASSING_OBJ.playerData.healthPacks));
}
}

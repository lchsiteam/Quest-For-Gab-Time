import { makeFunctions } from '/src/AuxFunctions.js';
import { healthCrate } from '/src/classes/healthCrate.js';
import { bookEnemy } from '/src/classes/bookEntity.js';

export class Scene2 extends Phaser.Scene {




    constructor ()
    {
        super('Scene2');
    }


     preload ()
{
    this.load.image('tiles', 'assets/TileSheets/Tiles_V6.png');
    this.load.tilemapCSV('layer1', 'assets/MapCSVs/Maps3_BottomGrass.csv');
    this.load.tilemapCSV('layer2', 'assets/MapCSVs/Maps3_Grass.csv');
    this.load.tilemapCSV('layer3', 'assets/MapCSVs/Maps3_TileLayer4.csv');
    this.load.tilemapCSV('layer4', 'assets/MapCSVs/Maps3_ExtraBuilding.csv');
    this.load.spritesheet('player', 'assets/Entities/player.png', { frameWidth: 32, frameHeight: 32 });

    this.load.image('healthCrate', '/assets/Images/HealthCrateV1.png');
    this.load.spritesheet('book', '/assets/Entities/FlyingBook.png',{ frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('fireBall', '/assets/Entities/FireBall.png',{ frameWidth: 32, frameHeight: 32 });
}

init (data)
    {

        'use strict';

        this.PASSING_OBJ = data;
        this.p = data.playerData;
    }

 create ()
{
    this.startScene2 = function (player, star)
    {
        this.scene.start('Scene2', this.PASSING_OBJ)
    }

    var layer1map;
    var layer2map;
    var layer3map;
    var layer4map;
    this.Keystrokes = [];
    this.fireballEnabled = true

    layer1map = this.make.tilemap({ key: 'layer1', tileWidth: 32, tileHeight: 32 });  //dark grass
    var tileset1 = layer1map.addTilesetImage('tiles');
    var layer1 = layer1map.createStaticLayer(0, tileset1, 0, 0);
    //layer1map.setCollisionBetween(5, 6);

    layer2map = this.make.tilemap({ key: 'layer2', tileWidth: 32, tileHeight: 32 });  //concrete
    var tileset2 = layer2map.addTilesetImage('tiles');
    var layer2 = layer2map.createStaticLayer(0, tileset2, 0, 0);
    //layer1map.setCollisionBetween(5, 6);

    layer3map = this.make.tilemap({ key: 'layer3', tileWidth: 32, tileHeight: 32 });   //grass
    var tileset3 = layer3map.addTilesetImage('tiles');
    this.layer3 = layer3map.createStaticLayer(0, tileset3, 0, 0);
    layer3map.setCollisionBetween(70, 70);
    layer3map.setCollisionBetween(-1, -1);

    layer4map = this.make.tilemap({ key: 'layer4', tileWidth: 32, tileHeight: 32 });  //doors
    var tileset4 = layer4map.addTilesetImage('tiles');
    var layer4 = layer4map.createStaticLayer(0, tileset4, 0, 0);
    layer4map.setCollisionBetween(7, 10);

    this.player = this.physics.add.sprite(495, 92, 'player', 1);
    this.player.setDepth(1);

    this.player.anims.play('down', true);
    this.player.anims.stop();

    this.physics.add.collider(this.player, this.layer3);
    this.physics.add.collider(this.player, layer, this.startScene2, null, this);

    this.cameras.main.setBounds(0, 0, layer2map.widthInPixels, layer2map.heightInPixels);
    this.cameras.main.startFollow(this.player);


    this.cursors = this.input.keyboard.createCursorKeys();
    makeFunctions(this);

    this.entities = [];

    this.entities.push(new healthCrate(this,400,400));
    this.entities.push(new bookEnemy(this,800,400,2));  //Pass in this object, x and y
    this.entities.push(new bookEnemy(this,800,500,2));
    this.entities.push(new bookEnemy(this,800,600,2));
    this.entities.push(new bookEnemy(this,800,700,2));
    this.entities.push(new bookEnemy(this,800,800,2));
    this.entities.push(new bookEnemy(this,800,900,2));
    this.entities.push(new bookEnemy(this,800,1000,2));
    this.entities.push(new bookEnemy(this,800,1100,2));
    this.entities.push(new bookEnemy(this,800,1200,2));
    this.entities.push(new bookEnemy(this,800,1300,2));

    console.log(this.PASSING_OBJ);


}

 update ()  {
     this.running();
     this.otherChecks();
}


}

import { makeFunctions } from './AuxFunctions.js';
import { controller } from './AuxFunctions.js';
import { healthCrate } from '/src/classes/healthCrate.js';
import { bookEnemy } from '/src/classes/bookEntity.js';

export class Scene3 extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('Scene3');
    }
    

     preload ()
{
    this.load.image('tiles', 'assets/TileSheets/grass_tiles.png');
    this.load.tilemapCSV('layer3', 'assets/MapCSVs/Maps3_TileLayer4.csv');
    this.load.tilemapCSV('layer1', 'assets/MapCSVs/Maps3_BottomGrass.csv');
    this.load.tilemapCSV('layer2', 'assets/MapCSVs/Maps3_Grass.csv');
    this.load.tilemapCSV('layer4', 'assets/MapCSVs/Maps3_ExtraBuilding.csv');
    this.load.spritesheet('player', 'assets/Entities/player.png', { frameWidth: 32, frameHeight: 32 });
    
    this.load.image('healthCrate', '/assets/Images/HealthCrateV1.png');
    this.load.spritesheet('book', '/assets/Entities/FlyingBook.png',{ frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('fireBall', '/assets/Entities/FireBallV2.png',{ frameWidth: 32, frameHeight: 32 });
}

init (data)
    {
     
        'use strict';

        this.PASSING_OBJ = data;
    }

 create ()
{
    this.startScene2 = function (player, star)
    {
        this.scene.start('Scene1', this.PASSING_OBJ)
    } 
    
    var layer1map;
    var layer2map;
    var map;
    var doorsLayerMap;
    var spikeLayerMap
    this.Keystrokes = [];
    this.fireballEnabled = true
    
    layer1map = this.make.tilemap({ key: 'layer1', tileWidth: 32, tileHeight: 32 });  //dark grass
    var tileset1 = layer1map.addTilesetImage('tiles');
    var layer1 = layer1map.createStaticLayer(0, tileset1, 0, 0);
    //layer1map.setCollisionBetween(5, 6);
    
    layer2map = this.make.tilemap({ key: 'layer2', tileWidth: 32, tileHeight: 32 });  //concrete
    var tileset2 = layer2map.addTilesetImage('tiles');
    var layer2 = layer2map.createStaticLayer(0, tileset2, 0, 0);
    layer2map.setCollisionBetween(-1, -1);

    map = this.make.tilemap({ key: 'layer3', tileWidth: 32, tileHeight: 32 });   //grass
    var tileset = map.addTilesetImage('tiles');
    this.layer = map.createStaticLayer(0, tileset, 0, 0);
   
    
    doorsLayerMap = this.make.tilemap({ key: 'layer4', tileWidth: 32, tileHeight: 32 });  //doors
    var doorMap = doorsLayerMap.addTilesetImage('tiles');
    var doorLayer = doorsLayerMap.createStaticLayer(0, doorMap, 0, 0);
    

    this.player = this.physics.add.sprite(495, 92, 'player', 1);
    this.player.setDepth(1);
    this.player.setSize(11, 30); 
    this.player.setScale(1.5);
    
    this.player.anims.play('down', true);
    this.player.anims.stop();
    
    this.physics.add.collider(this.player, layer2);
    this.physics.add.collider(this.player, doorLayer, this.startScene2, null, this);

    this.cameras.main.setBounds(0, 0, layer1map.widthInPixels, layer1map.heightInPixels);
    this.cameras.main.startFollow(this.player);


    this.cursors = this.input.keyboard.createCursorKeys();    
    makeFunctions(this);
    
    this.entities = [];
    
    this.entities.push(new healthCrate(this,400,400));
    this.entities.push(new bookEnemy(this,800,400,60)); 
    
    console.log(this.PASSING_OBJ);
    
    this.entities.push(new healthCrate(this,400,400));
    this.entities.push(new bookEnemy(this,800,400));  //Pass in this object, x and y
    this.entities.push(new bookEnemy(this,800,500));
    this.entities.push(new bookEnemy(this,800,600));
    this.entities.push(new bookEnemy(this,800,700));
    this.entities.push(new bookEnemy(this,800,800));
    this.entities.push(new bookEnemy(this,800,900));
    this.entities.push(new bookEnemy(this,800,1000));
    this.entities.push(new bookEnemy(this,800,1100));
    this.entities.push(new bookEnemy(this,800,1200));
    this.entities.push(new bookEnemy(this,800,1300));
    
}

 update ()  {
     this.otherChecks();
     if (this.PASSING_OBJ.controller === false) {
        this.running();
     } else {
        controller(this);
     }
}
    
    
}
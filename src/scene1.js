import { makeKeyPresses } from './AuxFunctions.js';

export class Scene1 extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('Scene1');
    }
    

     preload ()
{
    this.load.image('tiles', 'assets/TileSheets/grass_tiles.png');
    this.load.image('concrete', 'assets/TileSheets/concrete_tiles.png');
    this.load.image('doors', 'assets/TileSheets/doors.png');
    this.load.image('spike', 'assets/TileSheets/Spikes.png');
    this.load.tilemapCSV('map', 'assets/MapCSVs/level1layer2.csv');
    this.load.tilemapCSV('layer1', 'assets/MapCSVs/level1layer1.csv');
    this.load.tilemapCSV('layer15', 'assets/MapCSVs/level1layer15.csv');
    this.load.tilemapCSV('doorCSV', 'assets/MapCSVs/Level1Doors.csv');
    this.load.tilemapCSV('spikeCSV', 'assets/MapCSVs/spike.csv');
    this.load.spritesheet('player', 'assets/Entities/player.png', { frameWidth: 32, frameHeight: 32 });
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
        this.scene.start('Scene2', this.PASSING_OBJ);
    }  
    
    var layer1map;
    var layer15map;
    var map;
    var doorsLayerMap;
    var spikeLayerMap
    this.Keystrokes = [];
    
    layer1map = this.make.tilemap({ key: 'layer1', tileWidth: 32, tileHeight: 32 });  //dark grass
    var tileset1 = layer1map.addTilesetImage('tiles');
    var layer1 = layer1map.createStaticLayer(0, tileset1, 0, 0);
    //layer1map.setCollisionBetween(5, 6);
    
    layer15map = this.make.tilemap({ key: 'layer15', tileWidth: 32, tileHeight: 32 });  //concrete
    var tileset15 = layer15map.addTilesetImage('concrete');
    var layer15 = layer15map.createStaticLayer(0, tileset15, 0, 0);
    //layer1map.setCollisionBetween(5, 6);

    map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });   //grass
    var tileset = map.addTilesetImage('tiles');
    var layer = map.createStaticLayer(0, tileset, 0, 0);
    map.setCollisionBetween(70, 70);
    map.setCollisionBetween(-1, -1);
    
    doorsLayerMap = this.make.tilemap({ key: 'doorCSV', tileWidth: 32, tileHeight: 32 });  //doors
    var doorMap = doorsLayerMap.addTilesetImage('doors');
    var doorLayer = doorsLayerMap.createStaticLayer(0, doorMap, 0, 0);
    doorsLayerMap.setCollisionBetween(7, 10);
    
    spikeLayerMap = this.make.tilemap({ key: 'spikeCSV', tileWidth: 32, tileHeight: 32 });  //doors
    var spikeMap = spikeLayerMap.addTilesetImage('spike');
    var spikeLayer = spikeLayerMap.createStaticLayer(0, spikeMap, 0, 0);
    spikeLayerMap.setCollisionBetween(7, 10);
    

    this.player = this.physics.add.sprite(495, 92, 'player', 1);

    
    this.physics.add.collider(this.player, layer);
    this.physics.add.collider(this.player, doorLayer, this.startScene2, null, this);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);


    this.cursors = this.input.keyboard.createCursorKeys();
    
    makeKeyPresses(this);
    
}

 update ()  {
     this.running();
     
     
}
    
    
}
export class Scene2 extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('Scene2');
    }
    

     preload ()
{
    
    this.load.image('tilesScene2', 'assets/grass_tiles.png');
    this.load.image('doorsScene2', 'assets/doors.png');-
    this.load.tilemapCSV('mapScene2', 'assets/Level2layer2.csv');
    this.load.tilemapCSV('layer1Scene2', 'assets/level2layer1.csv');
    this.load.tilemapCSV('doorCSVScene2', 'assets/Level2Doors.csv');
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 32 });
}

 create ()
{
    this.startScene1 = function (player, star)
    {
        this.scene.start('Scene1');
    }

    var layer1map;
    var map;
    var doorsLayerMap;
    this.Keystrokes = [];
    
    layer1map = this.make.tilemap({ key: 'layer1Scene2', tileWidth: 32, tileHeight: 32 });
    var tileset1 = layer1map.addTilesetImage('tilesScene2');
    var layer1 = layer1map.createStaticLayer(0, tileset1, 0, 0);

    map = this.make.tilemap({ key: 'mapScene2', tileWidth: 32, tileHeight: 32 });
    var tileset = map.addTilesetImage('tilesScene2');
    var layer = map.createStaticLayer(0, tileset, 0, 0);
    //map.setCollisionBetween(5, 5);
    
    doorsLayerMap = this.make.tilemap({ key: 'doorCSVScene2', tileWidth: 32, tileHeight: 32 });
    var doorMap = doorsLayerMap.addTilesetImage('doorsScene2');
    var doorLayer = doorsLayerMap.createStaticLayer(0, doorMap, 0, 0);
    doorsLayerMap.setCollisionBetween(11,20);
    
    
    this.Keystrokes.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    this.player = this.physics.add.sprite(463, 170, 'player', 1);

    
    this.physics.add.collider(this.player, layer);
    this.physics.add.collider(this.player, doorLayer, this.startScene1, null, this);

    //this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);


    this.cursors = this.input.keyboard.createCursorKeys();
}

 update ()  {
     
     var velocity;
     
     if (this.Keystrokes.keyZ.isDown)
    {
        velocity = 200;
    } else {
        velocity = 100;
    }
     
    this.player.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown)
    {
        this.player.body.setVelocityX(-velocity);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.setVelocityX(velocity);
    }

    // Vertical movement
    if (this.cursors.up.isDown)
    {
        this.player.body.setVelocityY(-velocity);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.body.setVelocityY(velocity);
    }

    // Update the animation last and give left/right animations precedence over up/down animations
    if (this.cursors.left.isDown)
    {
        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.anims.play('right', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.anims.play('up', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.anims.play('down', true);
    }
    else
    {
        this.player.anims.stop();
    }
}
    
    
}
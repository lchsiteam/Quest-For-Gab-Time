export class Scene1 extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('Scene1');
    }
    

     preload ()
{
    this.load.image('tiles', 'assets/grass_tiles.png');
    this.load.tilemapCSV('map', 'assets/Level1.csv');
    this.load.tilemapCSV('layer2', 'assets/level1layer2.csv');
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 32 });
}

 create ()
{
    var layer2map;
    var map;
    
    this.Keystrokes = [];
    
    layer2map = this.make.tilemap({ key: 'layer2', tileWidth: 32, tileHeight: 32 });
    map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
    
    var tileset = map.addTilesetImage('tiles');
    var tileset2 = layer2map.addTilesetImage('tiles');
    var layer2 = layer2map.createStaticLayer(0, tileset2, 0, 0);
    var layer = map.createStaticLayer(0, tileset, 0, 0);
    
    this.Keystrokes.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    //  This isn't totally accurate, but it'll do for now
    map.setCollisionBetween(54, 83);

    this.player = this.physics.add.sprite(50, 100, 'player', 1);

    // Set up the player to collide with the tilemap layer. Alternatively, you can manually run
    // collisions in update via: this.physics.world.collide(player, layer).
    this.physics.add.collider(this.player, layer);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
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
     
     this.input.on('pointerup', function (pointer) {

            this.scene.start('Scene2');

        }, this);
}
    
    
}
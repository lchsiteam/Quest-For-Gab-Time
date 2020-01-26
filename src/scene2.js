export class Scene2 extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('Scene2');
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
    var map
    
    layer2map = this.make.tilemap({ key: 'layer2', tileWidth: 32, tileHeight: 32 });
    map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
    
    var tileset = map.addTilesetImage('tiles');
    var tileset2 = layer2map.addTilesetImage('tiles');
    var layer2 = layer2map.createStaticLayer(0, tileset2, 0, 0);
    var layer = map.createStaticLayer(0, tileset, 0, 0);

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
    this.player.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown)
    {
        this.player.body.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.setVelocityX(100);
    }

    // Vertical movement
    if (this.cursors.up.isDown)
    {
        this.player.body.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.body.setVelocityY(100);
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
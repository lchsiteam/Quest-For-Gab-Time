var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var map;
var layer2map;
var cursors;
var debugGraphics;
var helpText;
var player;
var showDebug = false;

function preload ()
{
    this.load.image('tiles', 'assets/grass_tiles.png');
    this.load.tilemapCSV('map', 'assets/Level1.csv');
    this.load.tilemapCSV('layer2', 'assets/level1layer2.csv');
    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 32 });
}

function create ()
{
    layer2map = this.make.tilemap({ key: 'layer2', tileWidth: 32, tileHeight: 32 });
    map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
    
    var tileset = map.addTilesetImage('tiles');
    var tileset2 = layer2map.addTilesetImage('tiles');
    var layer2 = layer2map.createStaticLayer(0, tileset2, 0, 0);
    var layer = map.createStaticLayer(0, tileset, 0, 0);

    //  This isn't totally accurate, but it'll do for now
    map.setCollisionBetween(54, 83);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    player = this.physics.add.sprite(50, 100, 'player', 1);

    // Set up the player to collide with the tilemap layer. Alternatively, you can manually run
    // collisions in update via: this.physics.world.collide(player, layer).
    this.physics.add.collider(player, layer);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(player);


    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    player.body.setVelocity(0);

    // Horizontal movement
    if (cursors.left.isDown)
    {
        player.body.setVelocityX(-100);
    }
    else if (cursors.right.isDown)
    {
        player.body.setVelocityX(100);
    }

    // Vertical movement
    if (cursors.up.isDown)
    {
        player.body.setVelocityY(-100);
    }
    else if (cursors.down.isDown)
    {
        player.body.setVelocityY(100);
    }

    // Update the animation last and give left/right animations precedence over up/down animations
    if (cursors.left.isDown)
    {
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.anims.play('right', true);
    }
    else if (cursors.up.isDown)
    {
        player.anims.play('up', true);
    }
    else if (cursors.down.isDown)
    {
        player.anims.play('down', true);
    }
    else
    {
        player.anims.stop();
    }
}


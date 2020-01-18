export function playerAndCameraCreate (spriteSheet,that) {
    
    /*Pass in this for that
      Returns a player object that you should set to a variable.
      Initialises an animation with frame numbers from a passed in sprite sheet
      uses the first 4 images in the spritesheet as left walking, the next 4 for right, then up, then down.
      names the animations 'left' 'right' 'up' and 'down' respectively
    */
    var player;
    that.cameras.main.setBounds(0, 0, 1024, 1024);
    that.physics.world.setBounds(0, 0, 1024, 1024);
    
    that.anims.create({
        key: 'left',
        frames: that.anims.generateFrameNumbers('playerImages', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1
    });
    
    that.anims.create({
        key: 'right',
        frames: that.anims.generateFrameNumbers('playerImages', { start: 4, end: 7 }),
        frameRate: 5,
        repeat: -1
    });
    
    that.anims.create({
        key: 'up',
        frames: that.anims.generateFrameNumbers('playerImages', { start: 8, end: 11 }),
        frameRate: 5,
        repeat: -1
    });
    
    that.anims.create({
        key: 'down',
        frames: that.anims.generateFrameNumbers('playerImages', { start: 12, end: 15 }),
        frameRate: 5,
        repeat: -1
    });
    
    
    player = that.physics.add.sprite(100, 450, 'dude')
    player.setCollideWorldBounds(true);
    that.cameras.main.startFollow(player, true);
    
    if (that.cameras.main.deadzone)
    {
        graphics = this.add.graphics().setScrollFactor(0);
        graphics.lineStyle(2, 0x00ff00, 1);
        graphics.strokeRect(200, 200, this.cameras.main.deadzone.width, this.cameras.main.deadzone.height);
    }
    player.anims.play('left',true);
    player.anims.play('nothingAtAll',true);
    
    return player
}



export function playerMove(player,cursors,playerSpeeds = 100) {
    
    player.setVelocity(0);

    if (cursors.left.isDown)
    {
        
        player.setVelocityX(-playerSpeeds);
        player.anims.play('left',true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(playerSpeeds);
        player.anims.play('right',true);
    }
    else if (cursors.up.isDown)
    {
        player.anims.play('up',true);
    
        
    }else if (cursors.down.isDown) {
        player.anims.play('down',true);
    
        
    }else {
        player.anims.play('nothingAtAll',true); //Doing this to pause the animation. 
                                                //The animation defaults to pausing it if there isn't an animation represented with it.
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-playerSpeeds);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(playerSpeeds);
    } 
}
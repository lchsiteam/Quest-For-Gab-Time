export class init extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('init');
    }
    

     preload ()
    {
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 32, frameHeight: 32 });
    }

     create ()
    {

        

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
        this.scene.start('Scene1');
    }  
    
}
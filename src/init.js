export class init extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('init');
    }
    

     preload ()
    {
        this.load.spritesheet('player', 'assets/Entities/player.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('book', '/assets/Entities/FlyingBook.png',{ frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('fireBall', '/assets/Entities/FireBall.png',{ frameWidth: 32, frameHeight: 32 });
    }
    
    init ()
    {
        'use strict';
            this.PASSING_OBJ = {
                fps : 60,
                playerData : {
                    maxHealth : 300,
                    healthPacks : 0,
                    velocity : 100,
                    manaEnabled : false,
                    maxMana : 100,
                    mana : 0,
                    health : 300,
                    invinsFrames: false
                }
            };
        
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
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('book', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'FireThrow',
            frames: this.anims.generateFrameNumbers('fireBall', { start: 0, end: 19 }),
            frameRate: 20,
            flipX: true,
            killOnComplete: true
        });
        
        // Global vars as properties of my object that
        // gets passed between all scenes
        

        // Pass it to every scene
      
        'use strict';

        this.scene.start('gui', this.PASSING_OBJ);
        this.scene.start('Scene1', this.PASSING_OBJ);
        

        
    }  
    
}
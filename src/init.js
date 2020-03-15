export class init extends Phaser.Scene {
    
    
    
    
    constructor ()
    {
        super('init');
    }
    

     preload ()
    {
        this.load.spritesheet('player', 'assets/Entities/player.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('book', '/assets/Entities/FlyingBook.png',{ frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('fireBall', '/assets/Entities/FireBallV2.png',{ frameWidth: 32, frameHeight: 32 });
    }
    
    init ()
    {
        'use strict';
            this.PASSING_OBJ = {
                fps : 60,
                controller : false,
                playerData : {
                    maxHealth : 300,
                    healthPacks : 0,
                    velocity : 100,
                    velMultip: 1, 
                    manaEnabled : true,
                    maxMana : 100,
                    mana : 100,
                    health : 300,
                    invinsFrames: false,
                    dead : false,
                    manaRegenRate : 0.2, 
                    zStartTime: null, 
                    checkpoint : {
                        scene: 'Scene1',
                        maxHealth : 300,
                        healthPacks : 0,
                        manaEnabled : true,
                        maxMana : 100,
                        velocity: 100
                    }
                }
            };
        
    }

     create ()
    {
        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 11, end: 19 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 21, end: 29 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 31, end: 39 }),
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
            key: 'FireThrowRight',
            frames: this.anims.generateFrameNumbers('fireBall', { start: 0, end: 4 }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'FireThrowUp',
            frames: this.anims.generateFrameNumbers('fireBall', { start: 5, end: 9 }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'FireThrowLeft',
            frames: this.anims.generateFrameNumbers('fireBall', { start: 10, end: 14 }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'FireThrowDown',
            frames: this.anims.generateFrameNumbers('fireBall', { start: 15, end: 19 }),
            frameRate: 20,
            repeat: -1
        });
        
        // Global vars as properties of my object that
        // gets passed between all scenes
        

        // Pass it to every scene
      
        'use strict';

        this.scene.start('gui', this.PASSING_OBJ);
        this.scene.start('Scene1', this.PASSING_OBJ);
        

        
    }  
    
}
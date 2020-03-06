export function fireBall(that,playerX,playerY,scale = 0.5) {  //passes in the this object from phaser as that
    
    this.animComplete = function (animation) {
        this.book.destroy();
    }
    
    this.death = function (entity,book) {
        entity.setTint(0xff0000);
        entity.health -= 20;
        book.destroy();
        setTimeout( () => {
            entity.clearTint();
            if (entity.health <= 0) {
                entity.destroy();
            }
        }, 200) 
        
        
        
    }
    
    var x = playerX;
    var y = playerY;
    var velX = 0;
    var velY = 0;
    var anim;
    
    var direction = that.player.anims.currentAnim.key;
    var speed = 300;
    if (direction === 'up') {
        velY = -speed;
        anim = 'FireThrowUp',true;                            //plays the 'fly' animation declared in init.js
        var y = playerY - 20;
        
    } else if (direction === 'down') {
        velY = speed;
        anim = 'FireThrowDown';                             //plays the 'fly' animation declared in init.js
        var y = playerY + 20;
        
    } else if (direction === 'right') {
        velX = speed;
        anim = 'FireThrowRight';                            //plays the 'fly' animation declared in init.js
        var x = playerX + 20;
        
    } else {
        velX = -speed;
        anim = 'FireThrowLeft';                            //plays the 'fly' animation declared in init.js
        var x = playerX - 20;
        
    } 
    
    
    
    this.book = that.physics.add.sprite(x, y, 'fireBall',0);   //Declares a new sprite object and assigns it to book. 
                                                          //Also uses the 'book' spritesheet declared in scene 1 preload
    
    this.book.anims.play(anim,true);
    this.book.setVelocityX(velX);
    this.book.setVelocityY(velY);
                                                                       //It gives access to the "that" object, too
    that.physics.add.collider(that.layer,this.book);             //makes it so book can't go through that.layer (the world boarder)
    that.physics.add.collider(that.entities, this.book, this.death, null, this);
    
    
    
    this.book.setSize(17, 16);                               //Sets the size of the hitbox to 17px by 16px. Scales with setScale();
    this.book.setScale(scale);                                   //makes it twice as big
    
    
    
    
    setTimeout( () => {
            this.book.setScale(scale*0.875)
            setTimeout( () => {
                this.book.setScale(scale*0.75)
                setTimeout( () => {
                    this.book.setScale(scale*0.625) 
                        setTimeout( () => {
                            this.book.setScale(scale*0.5)
                            setTimeout( () => {
                                this.book.setScale(scale*0.375)
                                setTimeout( () => {
                                    this.book.setScale(scale*0.25) 
                                    setTimeout( () => {
                                        this.book.setScale(scale*0.125) 
                                        setTimeout( () => {
                                            this.book.destroy();
                                            
                                        
                                    }, 50) 
                                }, 50) 
                            }, 50) 
                        }, 50)
                    }, 50) 
                }, 50) 
            }, 50)
        }, 400) 
    
    
    
    
    return this.book        //Returns the book object incase we want to use it. Probably won't declare it to a variable most of the time
    
}
export function fireball(that,playerX,playerY,scale = 0.5) {  //passes in the this object from phaser as that
    
    this.animComplete = function (animation) {
        this.fireball.destroy();
    }
    
    this.death = function (entity,book) {
        entity.setTint(0xff0000);
        entity.health -= 20;
        book.destroy();
        setTimeout( () => {
            entity.clearTint();
            if (entity.health <= 0) {
                entity.death();
            }
        }, 200) 
    }
    this.KMS = function (book) {
        book.destroy();
    }
    
    
    
    var x = playerX;
    var y = playerY;
    var velX = 0;
    var velY = 0;
    var anim; 
    
    this.relScale = 1; 
    this.shrink = 0.125; 
    
    var direction = that.player.anims.currentAnim.key;
    var speed = 300;
    if (direction === 'up') {
        velY = -speed;
        anim = 'FireThrowUp',true;                            //plays the 'fly' animation declared in init.js
        var y = playerY - 10;
        
    } else if (direction === 'down') {
        velY = speed;
        anim = 'FireThrowDown';                             //plays the 'fly' animation declared in init.js
        var y = playerY + 10;
        
    } else if (direction === 'right') {
        velX = speed;
        anim = 'FireThrowRight';                            //plays the 'fly' animation declared in init.js
        var x = playerX + 10;
        
    } else {
        velX = -speed;
        anim = 'FireThrowLeft';                            //plays the 'fly' animation declared in init.js
        var x = playerX - 10;
        
    } 
    
    
    
    this.fireball = that.physics.add.sprite(x, y, 'fireBall',0);   //Declares a new sprite object and assigns it to book. 
                                                          //Also uses the 'book' spritesheet declared in scene 1 preload
    
    this.fireball.anims.play(anim,true);
    this.fireball.setVelocityX(velX);
    this.fireball.setVelocityY(velY);
                                                                       //It gives access to the "that" object, too
    
    that.physics.add.collider(that.entities, this.fireball, this.death, null, this);
    that.physics.add.collider(that.layer,this.fireball, this.KMS, null, this); //makes it so book disappears when hitting that.layer (the world boarder)
    
    
    
    this.fireball.setSize(17, 16);                               //Sets the size of the hitbox to 17px by 16px. Scales with setScale();
    this.fireball.setScale(scale);                                   //makes it twice as big
    
    this.timerId = 0; 
    
    this.shrinkOnce = function() {
        this.relScale -= this.shrink; 
        
        if (this.relScale > 0) {
            this.fireball.setScale(scale * this.relScale); 
        } else {
            this.fireball.destroy(); 
            clearInterval(this.timerId); 
        } 
    } 
    
    setTimeout(() => {
        this.timerId = setInterval(() => this.shrinkOnce(), 50); 
    }, 300);
    
    return this.fireball        //Returns the book object incase we want to use it. Probably won't declare it to a variable most of the time
    
}

export function fireBall(that,x,y,scale = 1) {  //passes in the this object from phaser as that
    
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
    
    this.book = that.physics.add.sprite(x, y, 'fireBall',0);   //Declares a new sprite object and assigns it to book. 
                                                          //Also uses the 'book' spritesheet declared in scene 1 preload
    
                                                                       //It gives access to the "that" object, too
    that.physics.add.collider(that.layer,this.book);             //makes it so book can't go through that.layer (the world boarder)
    that.physics.add.collider(that.entities, this.book, this.death, null, this);
    
    this.book.anims.play('FireThrow',true);                            //plays the 'fly' animation declared in init.js
    
    this.book.setSize(17, 16);                               //Sets the size of the hitbox to 17px by 16px. Scales with setScale();
    this.book.setScale(scale);                                   //makes it twice as big
    
    this.book.setVelocityX(200);
    this.book.on('animationcomplete', this.animComplete, this);
    
    return this.book        //Returns the book object incase we want to use it. Probably won't declare it to a variable most of the time
    
}
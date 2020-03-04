export function bookEnemy(that,x,y,scale = 1) {  //passes in the this object from phaser as that
    
    this.attack = function (player, this.book) {    //declares a function that passes in the player object and the book object.
        that.PASSING_OBJ.playerData.health -= 10;  //subtracts 10 from health every tick
        //book.destroy();                         //Distroys the book object
        
    }
    
    this.monsterPathfind(that) {
        return [(this.book.speed*((that.player.x - this.book.x)/(that.player.y - this.book.y))),(this.book.speed*((that.player.y - this.book.y)/(that.player.x - this.book.x)))]
    }
    
    this.book = that.physics.add.sprite(x, y, 'book',0);   //Declares a new sprite object and assigns it to book. 
                                                          //Also uses the 'book' spritesheet declared in scene 1 preload
    this.book.speed = 1
    
    that.physics.add.collider(that.player, this.book, this.attack, null, that);  //adds a collider so it playes function "attack" when that.player and book collide. 
                                                                       //It gives access to the "that" object, too
    that.physics.add.collider(that.layer,this.book);             //makes it so book can't go through that.layer (the world boarder)
    
    this.book.anims.play('fly',true);                            //plays the 'fly' animation declared in init.js
    
    this.book.setSize(17, 16);                               //Sets the size of the hitbox to 17px by 16px. Scales with setScale();
    
    this.book.setDrag(100);                                  //Makes it slow down after being pushed
    this.book.setScale(scale);                                   //makes it twice as big
    
    setInteval( => {
               
               var tmp = this.monsterPathfind(that);
    
               this.book.setVelocityX(tmp[0]);
               this.book.setVelocityY(tmp[1]);
               
               }, 1000)
               
}

export function bookEnemy(that,x,y,speed = -1) {  //passes in the this object from phaser as that
    
    var attack = function (player, book) {    //declares a function that passes in the player object and the book object.
        if (!that.PASSING_OBJ.playerData.invinsFrames) {
            that.PASSING_OBJ.playerData.invinsFrames = true;
            that.PASSING_OBJ.playerData.health -= 40;  //subtracts 40 from health
            player.setTint(0xff0000);
            //book.destroy();                         //Distroys the book object
            setTimeout( () => {
                player.clearTint();
            }, 400) 
            
            setTimeout( () => {
                that.PASSING_OBJ.playerData.invinsFrames = false;
            }, 200) 
            
        }
        
    }
    
    var bounce = function (entity, book) {
        book.setVelocityX((Math.random() * 2000)-1000);
        book.setVelocityY((Math.random() * 2000)-1000);
    }
    
    var book = that.physics.add.sprite(x, y, 'book',0);   //Declares a new sprite object and assigns it to book. 
                                                          //Also uses the 'book' spritesheet declared in scene 1 preload
    book.death = function() {
        //this is where you put custom death things
        var index = that.entities.indexOf(book);
        if (index > -1) {
          that.entities.splice(index, 1);
        }
        book.destroy();
    }
    

    book.health = 50;
    if (speed < 0) {
        book.speed = Math.floor((Math.random() * 200)+50);
    } else {
        book.speed = speed;
    }
    
    that.physics.add.collider(that.player, book, attack, null, that);  //adds a collider so it playes function "attack" when that.player and book collide. 
                                                                       //It gives access to the "that" object, too
    that.physics.add.collider(that.layer,book);             //makes it so book can't go through that.layer (the world boarder)
    that.physics.add.collider(that.entities,book, bounce, null, that);
    
    book.anims.play('fly',true);                            //plays the 'fly' animation declared in init.js
    
    book.setSize(17, 16);                               //Sets the size of the hitbox to 17px by 16px. Scales with setScale();
    
    book.setDrag(100);                                  //Makes it slow down after being pushed
    book.setScale(2);                                   //makes it twice as big
    console.log(that)
    book.interval = setInterval(() => {
               
        var tmp = that.PASSING_OBJ.PATHFINDING.wallRideDefault(that,book);
        try {
            book.setVelocityX(tmp[0]);
            book.setVelocityY(tmp[1]);
        } catch(err) {
            clearInterval(book.interval);         //If it's dead
        }

    }, 100)
    
    return book        //Returns the book object incase we want to use it. Probably won't declare it to a variable most of the time
    
}

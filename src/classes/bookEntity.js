export function bookEnemy(that,x,y,scale = 1) {  //passes in the this object from phaser as that
    
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
    
    var monsterPathfind = function (that) {
        var x = that.player.x - book.x; //x distance from player
        var y = that.player.y - book.y; //y distance from player
        
        var distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));  //gets the direct distance to the player 
        var ratio = book.speed/distance;  //ratio of how fast the book is to the distance of the player
        
        return[(x*ratio),(y*ratio)]; //multiplies the x and y distances to get a similar triangle at the book's speed
    }
    
    var book = that.physics.add.sprite(x, y, 'book',0);   //Declares a new sprite object and assigns it to book. 
                                                          //Also uses the 'book' spritesheet declared in scene 1 preload
    book.health = 50;
    book.speed = 200;
    
    that.physics.add.collider(that.player, book, attack, null, that);  //adds a collider so it playes function "attack" when that.player and book collide. 
                                                                       //It gives access to the "that" object, too
    that.physics.add.collider(that.layer,book);             //makes it so book can't go through that.layer (the world boarder)
    
    book.anims.play('fly',true);                            //plays the 'fly' animation declared in init.js
    
    book.setSize(17, 16);                               //Sets the size of the hitbox to 17px by 16px. Scales with setScale();
    
    book.setDrag(100);                                  //Makes it slow down after being pushed
    book.setScale(scale);                                   //makes it twice as big
    
        setInterval(() => {
               
        var tmp = monsterPathfind(that);
        console.log(tmp);
        book.setVelocityX(tmp[0]);
        book.setVelocityY(tmp[1]);

    }, 1000)
    
    return book        //Returns the book object incase we want to use it. Probably won't declare it to a variable most of the time
    
}

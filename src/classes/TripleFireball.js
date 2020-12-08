export function tripleFireball(that,playerX,playerY,scale = 0.5) {  //passes in the this object from phaser as that
    
    
    this.death = function (entity,book) {
        entity.setTint(0xff0000);
        entity.health -= 20;
        book.destroy();
        if (entity.health <= 0) {
            entity.death();
        } else {
            setTimeout( () => {
                entity.clearTint();
            }, 200) 
        }
    }
    
    this.KMS = function (entitiy,book) {
        book.destroy();
        entitiy.destroy();
    }
    
    
    
    
    
    
    this.findDirect = function () {
        var direction = that.player.anims.currentAnim.key;

        if (direction === 'up') {
            this.vel = -this.speed;
            this.way = 'vertical';
            this.anim = 'FireThrowUp',true;                            //plays the 'fly' animation declared in init.js
            this.y = playerY - 20;

        } else if (direction === 'down') {
            this.vel = this.speed;
            this.way = 'vertical';
            this.anim = 'FireThrowDown';                             //plays the 'fly' animation declared in init.js
            this.y = playerY + 20;

        } else if (direction === 'right') {
            this.vel = this.speed;
            this.anim = 'FireThrowRight';                            //plays the 'fly' animation declared in init.js
            this.x = playerX + 20;

        } else {
            this.vel = -this.speed;
            this.anim = 'FireThrowLeft';                            //plays the 'fly' animation declared in init.js
            this.x = playerX - 20;

        } 
    }
    
    this.makeAndGo = function () {
        
        this.fireballs = [];
        
        this.fireball1 = that.physics.add.sprite(playerX, playerY, 'fireBall',0);
        this.fireball2 = that.physics.add.sprite(playerX, playerY, 'fireBall',0);
        this.fireball3 = that.physics.add.sprite(playerX, playerY, 'fireBall',0);
        
        this.fireballs.push(this.fireball1);
        this.fireballs.push(this.fireball2);
        this.fireballs.push(this.fireball3);
        
        for (var i = 0; i < this.fireballs.length; i++) {
            var fireball = this.fireballs[i];
            fireball.setScale(scale);
            fireball.anims.play(this.anim,true);
            fireball.setSize(17,16);
            that.physics.add.collider(that.entities, fireball, this.death, null, this);
            that.physics.add.collider(that.layer, fireball, this.KMS, null, this); //makes it so book disappears when hitting that.layer (the world boarder)
            
        }
        
        if (this.way === 'horizontal') {
            this.fireball1.setVelocityX(this.vel);
            this.fireball2.setVelocityX(this.vel);
            this.fireball3.setVelocityX(this.vel);
            
            this.fireball2.setVelocityY(this.sideVel);
            this.fireball3.setVelocityY(-this.sideVel);
        } else if (this.way === 'vertical') {
            this.fireball1.setVelocityY(this.vel);
            this.fireball2.setVelocityY(this.vel);
            this.fireball3.setVelocityY(this.vel);
            
            this.fireball2.setVelocityX(this.sideVel);
            this.fireball3.setVelocityX(-this.sideVel);
        }
        
    }
    
    this.vel = 0;
    this.sideVel = 100;
    this.way = 'horizontal';
    this.anim; 
    this.speed = 300;
    this.relScale = 1; 
    this.shrink = 0.125; 
    
    this.findDirect();
    this.makeAndGo();
    
                                                                       //It gives access to the "that" object, too
    
    
    
    this.timerId = 0; 
    
    this.shrinkOnce = function() {
        this.relScale -= this.shrink; 
        
        if (this.relScale > 0) {
            this.fireball1.setScale(scale * this.relScale); 
            this.fireball2.setScale(scale * this.relScale); 
            this.fireball3.setScale(scale * this.relScale);  
        } else {
            this.fireball1.destroy(); 
            this.fireball2.destroy(); 
            this.fireball3.destroy(); 
            clearInterval(this.timerId); 
        } 
    } 
    
    setTimeout(() => {
        this.timerId = setInterval(() => this.shrinkOnce(), 50); 
    }, 300);
    
    
}

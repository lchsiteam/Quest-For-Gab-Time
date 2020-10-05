

export function initPathfinding(that) {
    
    that.PASSING_OBJ.PATHFINDING = {

        monsterPathfindDefault : function (that,monster) {
            var x = that.player.x - monster.x; //x distance from player
            var y = that.player.y - monster.y; //y distance from player
            
            var distance = Math.sqrt(((x)**2)+((y)**2));  //gets the direct distance to the player 
            var ratio = monster.speed/distance;  //ratio of how fast the book is to the distance of the player

            return[(x*ratio),(y*ratio)]; //multiplies the x and y distances to get a similar triangle at the book's speed
        },
        
        wallRideDefault : function (that,monster) {
            /*inputs: current x position, previous x position, current y postition, previous y position, player x, player y */
            var currentX = monster.x;
            var currentY = monster.y;
            var xVelocity = 0;
            var yVelocity = 0;
            var corner = false;
            var verticalWall = false;
            var horizontalWall = false

            if(monster.previousX == undefined) {
                console.log('plz no crash')
                monster.previousX = currentX;
                monster.previousY = currentY;

                xVelocity = 0;
                yVelocity = 0;
                
            } else {
                var previousX = monster.previousX;
                var previousY = monster.previousX;
                
                console.log([currentX,previousX])

                if (currentX == previousX) {
                    verticalWall = true;
                    console.log('uwu')
                }

                if(currentY == previousY) {
                    horizontalWall = true;
                }

                if(currentX == previousX && currentY == previousY) {
                    corner = true;
                }
                
                if (monster.cornerSeconds == undefined) {
                    monster.cornerSeconds = 0
                }

                if (corner) {
                    yVelocity = -monster.speed; //going directly down
                    xVelocity = -monster.speed; //going directly right
                    monster.cornerSeconds = 20 //basically, if it hits a corner, it moves in a downward diagonal for 2 seconds away from the wall
                }

                if (monster.cornerSeconds > 0) {
                    yVelocity = -monster.speed; //going directly down
                    xVelocity = -monster.speed; //going directly right
                    monster.cornerSeconds --;
                    
                }

                if (verticalWall) {
                    xVelocity = -10;
                    yVelocity = -monster.speed; //or whatever directly up is

                    console.log('doing stuff')
                        
                        //x velocity unchanged

                }
                if (horizontalWall) {
                    xVelocity = -monster.speed; //directly left
                    yVelocity = 10;
                    //y velocity doesn't change
                }
                
                if (!horizontalWall && !verticalWall && !corner && monster.cornerSeconds == 0) {
                    var x = that.player.x - currentX; //x distance from player
                    var y = that.player.y - currentY; //y distance from player

                    //do standard velocity code
                    var distance = Math.sqrt(((x)**2)+((y)**2));  //gets the direct distance to the player 
                    var ratio = monster.speed/distance;  //ratio of how fast the book is to the distance of the player

                    xVelocity = x*ratio;
                    yVelocity = y*ratio;

                }
                monster.previousX = currentX;
                monster.previousY = currentY;
                
            }

            return [xVelocity,yVelocity]
        }
    }
}

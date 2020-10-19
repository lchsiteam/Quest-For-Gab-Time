

export function initPathfinding(that) {

    that.PASSING_OBJ.PATHFINDING = {

        monsterLeadingFunction : function (that,monster) {
          if (monster.speed > that.player.speed)
          {
              var timeTilCollision = (Math.sqrt(Math.pow(that.player.speed, 2) * Math.pow((-2 * that.player.x * that.player.directionX + 2 * monster.x * that.player.directionX - 2 * that.player.y * that.player.directionY + 2 * monster.y * that.player.directionY), 2) - 4 * (-1 * Math.pow(that.player.speed, 2) * Math.pow(that.player.directionX, 2) - Math.pow(that.player.speed, 2) * Math.pow(that.player.directionY, 2) + Math.pow(monster.speed, 2)) * (-1 * Math.pow(that.player.x, 2) + 2 * that.player.x * monster.x - Math.pow(monster.x, 2) - Math.pow(that.player.y, 2) + 2 * that.player.y * monster.y - Math.pow(monster.y, 2))) - that.player.speed * (-2 * that.player.x * that.player.directionX + 2 * monster.x * that.player.directionX - 2 * that.player.y * that.player.directionY + 2 * monster.y * that.player.directionY))/(2 * (-1 * Math.pow(that.player.speed, 2) * Math.pow(that.player.directionX, 2) - Math.pow(that.player.speed, 2) * Math.pow(that.player.directionY, 2) + Math.pow(monster.speed, 2))) //https://www.youtube.com/watch?v=vVPT0JT1dOw



              return [ (that.player.speed * that.player.directionX * timeTilCollision) + that.player.x , (that.player.speed * that.player.directionY * timeTilCollision + that.player.y) ]
          }
          else
          {
              return [that.player.x, that.player.y]
          }
        },

        aStarPathfinding : function (that,csv,monster,target) {
          var startx = Math.floor(monster.x/32)
          var starty = Math.floor(monster.y/32)

          var targetx = Math.floor(target[0]/32)
          var targety = Math.floor(target[1]/32)

          var firstEntry = [[startx, starty],((targetx-startx)**2+(targety-starty)**2)**0.5,undefined]

          var queue = [firstEntry]

          var completedQueueEntries = []

          while (queue[0][0] != [targetx, targety]) {
            if (csv[(queue[0][0][0] + 1)][queue[0][0][1]] == 1) {
              var positionx = (queue[0][0][0] + 1)
              var positiony = queue[0][0][1]
              var queueEntry = [[positionx, positiony],((targetx-positionx)**2+(targety-positiony)**2)**0.5,[queue[0][0][0],queue[0][0][1]]]
              var queuePos = 0
              var newQueue = []
              while (queue[queuePos][2] > queueEntry[2]) {
                  newQueue.push(queue[queuePos]);
                  queuePos++;
              }
              newQueue.push(queueEntry);
              for (queuePos < queue.length; queuePos++) {
                newQueue.push(queue[queuePos]);
              }
              queue = newQueue
            }
            if (csv[(queue[0][0][0] - 1)][queue[0][0][1]] == 1) {
              var positionx = (queue[0][0][0] - 1)
              var positiony = queue[0][0][1]
              var queueEntry = [[positionx, positiony],((targetx-positionx)**2+(targety-positiony)**2)**0.5,[queue[0][0][0],queue[0][0][1]]]
              var queuePos = 0
              var newQueue = []
              while (queue[queuePos][2] > queueEntry[2]) {
                  newQueue.push(queue[queuePos]);
                  queuePos++;
              }
              newQueue.push(queueEntry);
              for (queuePos < queue.length; queuePos++) {
                newQueue.push(queue[queuePos]);
              }
              queue = newQueue
            }
            if (csv[queue[0][0][0]][(queue[0][0][1] + 1)] == 1) {
              var positionx = queue[0][0][0]
              var positiony = (queue[0][0][1] + 1)
              var queueEntry = [[positionx, positiony],((targetx-positionx)**2+(targety-positiony)**2)**0.5,[queue[0][0][0],queue[0][0][1]]]
              var queuePos = 0
              var newQueue = []
              while (queue[queuePos][2] > queueEntry[2]) {
                  newQueue.push(queue[queuePos]);
                  queuePos++;
              }
              newQueue.push(queueEntry);
              for (queuePos < queue.length; queuePos++) {
                newQueue.push(queue[queuePos]);
              }
              queue = newQueue
            }
            if (csv[queue[0][0][0]][(queue[0][0][1] - 1)] == 1) {
              var positionx = queue[0][0][0]
              var positiony = (queue[0][0][1] - 1)
              var queueEntry = [[positionx, positiony],((targetx-positionx)**2+(targety-positiony)**2)**0.5,[queue[0][0][0],queue[0][0][1]]]
              var queuePos = 0
              var newQueue = []
              while (queue[queuePos][2] > queueEntry[2]) {
                  newQueue.push(queue[queuePos]);
                  queuePos++;
              }
              newQueue.push(queueEntry);
              for (queuePos < queue.length; queuePos++) {
                newQueue.push(queue[queuePos]);
              }
              queue = newQueue
            }
            completedQueueEntries.push(queue[0]);
            queue.shift();
          }

          reversedSolution = [queue[0]]

          while (reversedSolution[(reversedSolution.length - 1)] != firstEntry) {
            var counter = 0
            while (reversedSolution[(reversedSolution.length - 1)][2] != completedQueueEntries[counter][0]) {
              counter++;
            }
            reversedSolution.push(completedQueueEntries[counter]);
          }

          var solution = []

          var counter = 0
          for (counter < reversedSolution.length; counter++) {
            solution.push(reversedSolution[counter][0]);
          }

          return solution
        }

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

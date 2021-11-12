class Player {
    constructor(x, y, w, h, c, xspeed, yspeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }



    playerDraw() { //playerDraw Function draws player
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);

    }//end of func

    playerMove() { //If spacekey is pressed increase ySpeed, gives the feeling of falling and gravity 
        this.x = canvas.width / 6;

        if (spaceKeyPressed) {
            this.yspeed = -9;
        }
        if (this.y < 0 || this.y + this.h > canvas.height) {
            this.yspeed = 5;
        }
        if (this.y + this.h > canvas.height) {
            gameRun = false;
        }
        this.yspeed += 0.5;
        this.y += this.yspeed;
        this.yspeed *= 0.98;

    }//end of func
    pipehit() {
        if (pxPos + PLAYER_WIDTH == xPos) {
            gameover = true;
        }
    }//end of func

    pipeHit(item) {
        return (this.x <= (item.x + item.w) &&
                (this.x + this.w) >= item.x) &&
            (this.y <= (item.y + item.h) &&
                (this.y + this.h) >= item.y);
    }//end of func
    hasPipeHit(pipe) {
        return this.pipeHit(pipe);
    }//end of func
    hasCollided() { //Collison function
        var self = this;
        var collided = false;

        pipes.forEach(function (pipe, i) {
            if (self.hasPipeHit(pipe)) {

                if (self.y + self.h > pipe.y && self.y < pipe.y + pipe.h && self.x + self.w > pipe.x && self.w < pipe.x + pipe.w) { // If Players x or y pos overlaps with pipes x or y pos register collsion and set gameRun to false
                    gameRun = false;
                }
                collided = true;
            }
        });
    }//end of func
}

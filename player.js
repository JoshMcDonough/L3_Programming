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



    playerDraw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);

    }

    playerMove() {
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

    }
    pipehit() {
        if (pxPos + PLAYER_WIDTH == xPos) {
            gameover = true;
        }
    }

    pipeHit(item) {
        return (this.x <= (item.x + item.w) &&
                (this.x + this.w) >= item.x) &&
            (this.y <= (item.y + item.h) &&
                (this.y + this.h) >= item.y);
    }
    hasPipeHit(pipe) {
        return this.pipeHit(pipe);
    }
    hasCollided() {
        var self = this;
        var collided = false;

        pipes.forEach(function (pipe, i) {
            if (self.hasPipeHit(pipe)) {

                if (self.y + self.h > pipe.y && self.y < pipe.y + pipe.h && self.x + self.w > pipe.x && self.w < pipe.x + pipe.w) {
                    gameRun = false;
                }
                collided = true;
            }
        });
    }
}

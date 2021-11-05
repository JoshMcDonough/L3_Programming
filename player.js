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

    playerMove (){ // Player movement through the press of space bar
       this.x = canvas.width / 6;

        if(spaceKeyPressed){ 
           this.yspeed = -9;
//            console.log("jumping");
           }
        this.yspeed += 0.5;
        this.y += this.yspeed;
        this.yspeed *= 0.98;
//        if(this.y < 0 || this.y + this.h > canvas.height) {
//            gameRun = false;
//            console.log("Hit top");
//        }
    }
    }



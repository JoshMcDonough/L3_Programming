class Pipe { 
    constructor(x, y, w, h, c, xspeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xspeed = xspeed;
    }
    pipeDraw() {  
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
    pipeMove() { 
        this.x -= this.xspeed;
    }
}

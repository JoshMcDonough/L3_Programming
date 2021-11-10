class Pipe { //Main class for the pipes
    constructor(x,y,w,h,c,xspeed){
        this.x= x;
        this.y =y;
        this.w= w;
        this.h =h;
        this.c= c;
        this.xspeed =xspeed;
    }
     pipeDraw(){ //Function that draws the pipes on the canvas 
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x,this.y,this.w,this.h);
    }//end of func
     pipeMove(){ //Makes the pipes move from the right side of the screen to the left 
        this.x -= this.xspeed;
    }//end of func
    score() {
           if (this.x < 0) {
            Score ++;
          }
        }//end of func
    
}

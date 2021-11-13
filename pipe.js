class Pipe { //Main class for the pipes
    constructor(src,x,y,w,h,c,xspeed){
        this.src = src;
        this.x= x;
        this.y =y;
        this.w= w;
        this.h =h;
        this.xspeed =xspeed;
    }
     pipeDraw(){ //Function that draws the pipes on the canvas 
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h)   
    }//end of func
     pipeMove(){ //Makes the pipes move from the right side of the screen to the left 
        this.x -= this.xspeed;
    }//end of func    
}

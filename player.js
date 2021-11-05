class Player{ 
    constructor(x,y,w,h,c,xspeed,yspeed){
        this.x= x;
        this.y =y;
        this.w= w;
        this.h =h;
        this.c= c;
        this.xspeed =xspeed;
        this.yspeed= yspeed;
    }

        

    playerDraw(){ 
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x,this.y,this.w,this.h);

    }
}
class player {
    constructor(x,y) {
        this.x=x;
        this.y=y;
this.w=50;
this.h=50;
this.sprite=createSprite(x,y,50,50);
 this.img = loadImage("/images/captin.png");
   this.img.scale=2;   
      }
      display(){
       
       imageMode(CENTER);
       image(this.img,this.x,this.y,this.w,this.h);
       //this.sprite.addImage(this.image);
      }
    movement(){
        if(touches.length >0||keyDown(UP_ARROW)){
            this.sprite.y=this.sprite.y-3;
            touches=[];
          }
          if(touches.length >0||keyDown(DOWN_ARROW)){
            this.sprite.y=this.sprite.y+3;
            touches=[];
          } 
          if(touches.length >0||keyDown(LEFT_ARROW)){
            this.sprite.x=this.sprite.x-3;
            touches=[];
          }
          if(touches.length >0||keyDown(RIGHT_ARROW)){
            this.sprite.x=this.sprite.x+3;
            touches=[];
          }     
    }
    };
    
class Cannon{

consructor (x,y,width,height,angle) {

this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.angle=angle;
}

display(){

fill("676e6a");
rect(-10,-20,this.width,this.height);
arc(this.x-40,this.y+18,180,230,PI,TWO_PI);
noFill();

}

}
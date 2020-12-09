class Polygon{
    coonstructor(x,y,width,height){
        var options={
           isStatic:false 
        }
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        this.polygon=Bodies.rectangle(x,y,width,height,options);
        this.pic=loadImage("polygon.png");
        World.add(world,this.polygon);
    }
    display(){
       // var pos=this.body.position;
        image(this.pic,this.x,this.y,this.width,this.height);
        rectMode(CENTER);
    }
    
}
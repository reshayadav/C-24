class Ground{

    constructor(x,y,w,h){
        var ground_options = {
            isStatic : true
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,ground_options);
        World.add(myWorld,this.body);
        this.width = w;
        this.height = h;
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill ("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}
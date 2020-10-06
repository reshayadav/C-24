class Box{
    //Automatically called when any object is created using this class. WE use this to set any class property or
    // to create the physics body. this keyword refers to any object that is created.
    constructor(x,y,w,h){
        var box_options = {
            restitution : 0.6,
            friction : 1.0
        }

        this.body = Bodies.rectangle(x,y,w,h,box_options);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("white");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}
class Log{
    constructor(x,y,h,a){
var log_options ={
    restitution : 0.6,
    friction : 1.0
      }

      this.body = Bodies.rectangle(x,y,20,h,log_options);
      Matter .Body.setAngle(this.body,a);
      this.width = 20;
      this.height = h;
      World .add(myWorld,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle= this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill ("white");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop ();
    }
}
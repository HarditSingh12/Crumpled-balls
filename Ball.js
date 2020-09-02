class Ball {
    constructor(x,y,radius){
        var options = {
            restitution:0.8,
            isStatic:false
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.body.radius = radius;
    }
    display(){

        var pos = this.body.position;

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}
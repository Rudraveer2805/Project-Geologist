class Rubber {
    constructor(x,y,radius){
        var options = {
            'restitution':1.1,
            'friction':0.6,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
       
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(135,206,250);
        ellipse(0, 0, this.radius);
        pop();
    }
}
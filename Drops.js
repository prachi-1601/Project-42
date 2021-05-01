class Drops{
    constructor(x,y){
        var options ={
            'restitution' :0.1,
            'friction' :0.01
        }

        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.body.setPosition(this.rain, {x : random(0,400), y: random(0,400)});
        }
    }

    display(){
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }
   
}
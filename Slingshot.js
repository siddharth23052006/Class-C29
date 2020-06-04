class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    image(this.sling1,200,20);
    image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            imageMode(CENTER);

            if(pointA.x > 220){
                strokeWeight(2);
                line(pointA.x+22, pointA.y+5, pointB.x-16, pointB.y);
                line(pointA.x+22, pointA.y+5, pointB.x+20, pointB.y-2);
                image(this.sling3, pointA.x+28, pointA.y+10,10,30);
            }
            else{
                strokeWeight(4);
                line(pointA.x-16, pointA.y+5, pointB.x-16, pointB.y);
                line(pointA.x-16, pointA.y+5, pointB.x+20, pointB.y-2);
                image(this.sling3, pointA.x-18, pointA.y+5,10,30);
            }
            pop();
        }
    }
    
}
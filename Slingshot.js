class Slingshot{

    constructor(A, B){

        var options = {
            bodyA: A,
            pointB: B,
            length: 10,
            stiffness: 0.04
        }
    
       this.Sling = Constraint.create(options);
       World.add(world, this.Sling);
    }
    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    fly() {
     this.Sling.bodyA=null
}

}
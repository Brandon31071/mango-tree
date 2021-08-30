class Launcher{
    constructor(body,pointB){
        var options={
            bodyA:body,
            pointB:pointB,
            stiffness:0.004,
            lenght:1
        }
        this.bodyA=body
        this.pointB=pointB 
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);

    }

    attach(body){
        this.launcher.bodyA=body;
    }
    flight(){
        this.launcher.bodyA=null
    }

    display(){
        if(this.launcher.bodyA){
            strokeWeight(3);
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }

    }
}
class Chain{
    constructor(bodyA,bodyB){
var options = {
    bodyA : bodyA,
    bodyB : bodyB,
    stiffness : 1,
    length : 10
      }
      this.chain = Constraint.create(options)
      World.add(world,this.chain)
   }
   display(){
       strokeWeight(3)
   line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y)
   }
}
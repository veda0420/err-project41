class Drop{
    constructor(x,y){
        var options={friction:0.001, restituition:0.1}
        this.drop=Bodies.circle(x,y,5,options)
        World.add(world,this.drop)
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.drop.position.x,this.drop.position.y,5,5)
    
    }
    updatey(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
            
        }
    }
}
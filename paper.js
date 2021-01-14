class Paper{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        density:1.2,
        friction:0.5
    }
    this.body=Bodies.circle(x,y,r/2,options);
    this.r=r/2;
    World.add(world,this.body);
}
display(){
    var POS=this.body.position;
    push();
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(POS.x,POS.y,this.r,this.r);
    pop();
}
}
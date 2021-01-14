class Box{
    constructor(x,y,width,height){
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
display(){
    var POS= this.body.position;
    fill("red");
    rectMode(CENTER);
    rect(POS.x,POS.y,this.width,this.height);
}
}
class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    
    this.opaque=255
  }
display(){
  if (this.body.speed<3){
     super.display()
  }else{
    this.opaque=this.opaque-10
    push()
    tint(255,this.opaque)
    image (this.image,this.body.position.x,this.body.position.y,50,50)
    pop ()
    World.remove(world,this.body);
  }
}
score(){
  if (this.opaque<0 && this.opaque>-1005){
    score++
  }
}
}
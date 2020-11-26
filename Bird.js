class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
    this.image2=loadImage("sprites/smoke.png")
    this.array1=[]
   // this.invisible=255
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var array2=[this.body.position.x,this.body.position.y]
      this.array1.push(array2)
    }
    for(var i=0;i<this.array1.length;i++){
     // push()
     // this.invisible-=1
     // tint (255,this.invisible)
      image(this.image2,this.array1[i][0],this.array1[i][1])
     // pop ()
    }
  }
}

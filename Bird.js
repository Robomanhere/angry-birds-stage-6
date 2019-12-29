class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectotry=[];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position= [this.body.position.x,this.body.position.y];
    this.trajectotry.push (position);
    for (var i=0;i<this.trajectotry.length;i++) {
      image (this.smokeimage,this.trajectotry[i][0],this.trajectotry [i][1]);

    }
  }
}

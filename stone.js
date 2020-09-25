class Stone{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.stoneImg=loadImage("images/stone.png");
        this.body=Bodies.circle(this.x, this.y,this.r/2, options)
		World.add(world, this.body);
    }
    display(){

var stonepos=this.body.position;		
push()
translate(stonepos.x, stonepos.y);
ellipseMode(CENTER)
imageMode(CENTER);
image(this.stoneImg,0,0,this.r*2,this.r*2)
pop()		
	}
}
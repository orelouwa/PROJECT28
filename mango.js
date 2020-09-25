class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.mangoImg=loadImage("images/mango.png");
        this.body=Bodies.circle(this.x, this.y,this.r, options)
		World.add(world, this.body);
    }
    display(){
        var mangopos=this.body.position;		
push()
translate(mangopos.x, mangopos.y);
ellipseMode(CENTER)
imageMode(CENTER);
image(this.mangoImg,0,0,this.r,this.r)
pop()		
    }
}
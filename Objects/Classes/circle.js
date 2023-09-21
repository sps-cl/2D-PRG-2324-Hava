class Circle extends Shape{
    constructor(x, y, r, color){
        super(x, y, color);
        this.r = r;
        this.color = color;
    }

    Draw(){
        ctx.beginPath();
        ctx.arc(this.x + this.r, this.y + this.r, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
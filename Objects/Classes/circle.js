class Circle extends Shape{
    constructor(x, y, r, color){
        super(x, y, color);
        this.r = r;
        this.color = color;

        this.w = r*2;
        this.h = r*2;
    }

    Draw(){
        ctx.beginPath();
        ctx.arc(this.x + this.r, this.y + this.r, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    get touchingXBorder(){
        return this.x < 0 || this.x + 2*this.r > c.width;
    }
    get touchingYBorder(){
        return this.y < 0 || this.y + 2*this.r > c.height;
    }
}
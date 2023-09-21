class Rectangle extends Shape{
    constructor(x, y, w, h, color){
        super(x, y, color);
        this.w = w;
        this.h = h;
    }

    Draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
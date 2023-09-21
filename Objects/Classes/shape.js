class Shape{
    constructor(x,y,color){
        this.x = x;
        this.y = y
        this.color = color;
    }

    Move(xDirection, yDirection){
        this.x += xDirection;
        this.y += yDirection;
    }
}
class Shape{
    constructor(x,y,color){
        this.x = x;
        this.y = y
        this.color = color;

        this.xDirection = 1;
        this.yDirection = 1;
    }

    Move(xSpeed = 1, ySpeed = 1){
        this.x += this.xDirection * xSpeed;
        this.y += this.yDirection * ySpeed;
    }
}
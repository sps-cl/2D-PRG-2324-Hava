var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var shapes = [
    new Circle(0,0,50,"Cyan"),
    new Rectangle(25,25,50,50,"Red")
]


Loop();
function Loop(){
    ctx.clearRect(0, 0, c.width, c.height);
    for(i = 0; i < shapes.length; i++){
        shapes[i].Move(1, 1);
        shapes[i].Draw();
    }
    requestAnimationFrame(Loop)
}
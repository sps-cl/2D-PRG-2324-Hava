let c = document.getElementById("canvas");
let _c = create_canvas_copy();
let ctx = c.getContext("2d");
ctx.lineCap = "round";

let undo = new DoubleEndedQueue(128).pushFront(create_canvas_copy());
let redo = new DoubleEndedQueue(128);

//#region Buttons logic
let shape = "line";
function draw_rectangle() {
    shape = "rect";
}
function draw_circle() {
    shape = "circle";
}
function draw_line() {
    shape = "line";
}
function set_stroke_color(color) {
    ctx.strokeStyle = color;
}
function set_fill_color(color) {
    ctx.fillStyle = color;
}
function set_stroke_width(width) {
    ctx.lineWidth = width;
}
//#endregion
//#region Utility functions
function create_canvas_copy() {
    let _c = document.createElement("canvas");
    _c.width = c.width;
    _c.height = c.height;
    _ctx = _c.getContext("2d");
    _ctx.drawImage(c, 0, 0);
    return _c;
}
//#endregion
//#region Event listeners
let keys_down = [];
document.addEventListener("keydown", key => {
    keys_down[key.key] = true;
    if(keys_down["Control"] && keys_down["z"] && undo.count > 1) { //UNDO logic
        if(redo.full) redo.popBack();
        redo.pushFront(undo.popFront());

        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(undo.front, 0, 0);
    }
    if(keys_down["Control"] && keys_down["y"] && !redo.empty) { //REDO logic aka BACK TO THE FUTURE
        undo.pushFront(redo.popFront());

        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(undo.front, 0, 0);
    }
});
document.addEventListener("keyup", key => {
    keys_down[key.key] = false;
});

let drawing = false;
let X, Y;
document.addEventListener("mousedown", m => {
    drawing = true;
    X = m.offsetX;
    Y = m.offsetY;
    redo.clear();
});
document.addEventListener("mousemove", m => {
    if(drawing) {
        const x = m.offsetX;
        const y = m.offsetY;
        
        ctx.beginPath();
        if(shape === "rect") {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(undo.front, 0, 0);

            ctx.rect(X, Y, x-X, y-Y);
            ctx.stroke();
            ctx.fill();
        }
        if(shape === "circle") {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(undo.front, 0, 0);

            ctx.arc(X, Y, Math.sqrt((x-X)*(x-X), (y-Y)*(y-Y)), 0, Math.PI*2);
            ctx.stroke();
            ctx.fill();
        }
        if(shape === "line") {
            ctx.moveTo(X, Y);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.fill();

            X = x;
            Y = y;
        }
        ctx.closePath();    
    } 
});
document.addEventListener("mouseup", m => {
    drawing = false;
    if(undo.full) undo.popBack();
    undo.pushFront(create_canvas_copy());
});
//#endregion

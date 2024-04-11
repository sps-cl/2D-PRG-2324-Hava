class PathMap {
    constructor(w , h, cellSize) {
        this.w = w; //Cells count in x axis
        this.h = h; //Cells count in y axis
        this.cellSize = cellSize; //Width & height of a cell

        this.c = document.createElement("canvas");
        this.c.width = w * cellSize;
        this.c.height = h * cellSize;

        this.ctx = this.c.getContext("2d");
        this.ctx.lineWidth = 1;

        document.body.appendChild(this.c);
        //Ahoj 
        this.#DrawGrid();
    }

    #DrawGrid() {
        this.ctx.beginPath();
        //Draw vertical line 
        for(let i = 0; i <= this.c.width; i+=this.cellSize) {
            this.ctx.moveTo(i, 0);
            this.ctx.lineTo(i, this.c.height);
        }
        for(let i = 0; i <= this.c.width; i+=this.cellSize) {
            this.ctx.moveTo(0, i);
            this.ctx.lineTo(this.c.width, i);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }
    #drawCell(cell, fillColour) {
        this.ctx.fillStyle = fillColour;
        this.getContext.fillRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
        this.getContext.strokeRect(cell.x * this.cellSize, cell.y * this.cellSize, this.cellSize, this.cellSize);
    }
}
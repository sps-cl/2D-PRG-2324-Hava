class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isWall = false;
        this.startDistance = 0;
        this.endDistance = 0;
        this.nextCell = null;
        
        this.heapIndex;
    }

    get distance() {
        return this.startDistance + this.endDistance;
    }

    CompareTo(other) { //other is another instance of class Cell
        if(this.distance < other.distance) return -1;
        else if(this.distance > other.distance) return 1;
        //Prioritize cells near to the start:
        else if(this.startDistance < other.startDistance) return -1;
        else if(this.startDistance > other.startDistance) return 1;
        else return 0;
    }
}
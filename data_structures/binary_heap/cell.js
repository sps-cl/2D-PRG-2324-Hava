class Cell {
    constructor(data) {
        this.data = data;
        this.heapIndex = 0;
    }

    CompareTo(other) {
        if(this.data < other.data) return -1;
        else if(this.data > other.data) return 1;
        else return 0;
    }
}
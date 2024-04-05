class BinaryHeap {
    constructor(size) {
        if(size instanceof Array) {
            for(let i = 0; i < size.length; i++) {
                if(!(size[i] instanceof Cell)) size[i] = new Cell(size[i]);
                size[i].heapIndex = i;
            }
            this.items = size;
            this.count = this.items.length;
            this.Heapify();
        }
        else {
            this.items = new Array(size);
            this.count = 0;
        }
    }

    SiftDown(index) {
        while(index < this.count) {
            let firstChildIndex = index * 2 + 1;
            let secondChildIndex = index * 2 + 2;
            if(firstChildIndex >= this.count) return;
            if(secondChildIndex < this.count && this.items[firstChildIndex].CompareTo(this.items[secondChildIndex]) > 0) firstChildIndex = secondChildIndex;
            if(this.items[index].CompareTo(this.items[firstChildIndex]) > 0) {
                this.Swap(this.items[index], this.items[firstChildIndex]);
                index = firstChildIndex;
            }
            else return;
        }
    }
    SiftUp(index) {
        while(index > 0) {
            let parentIndex = (index - 1) >> 1; //Math.Round(index/2)
            if(this.items[parentIndex].CompareTo(this.items[index]) > 0) {
                this.Swap(this.items[parentIndex], this.items[index]);
                index = parentIndex;
            }
            else return;
        }
    }

    Push(item) {
        if(this.count >= this.items.length) throw new Error("Heap full");
        if(this.Contains(item)) { //Checks if the the item is already in the array
            this.SiftUp(item.heapIndex);
            this.SiftDown(item.heapIndex);
            return;
        }
        this.items[this.count] = item;
        item.heapIndex = this.count;
        this.SiftUp(this.count);
        this.count++;
    }
    Pop() { //Gets the smallest item in the heap
        if(this.count <= 0) return;
        let item = this.items[0];
        this.items[0] = this.items[--this.count]
        this.items[0].heapIndex = 0;
        this.SiftDown(0);
        return item;
    }

    Heapify() { //Arange the items in the heap
        for(let i = (this.count >> 1) - 1; i >= 0; i--) this.SiftDown(i);
    }
    Verify() { //Verify heap's integrity
        for(let i = 0; i <= this.count >> 1; i++) {
            if(this.items[i] > this.items[i*2+1] || this.items[i] > this.items[i*2+2]) return false;
        }
        return true;
    }

    Contains(item) {
        return this.items[item.heapIndex] == item;
    }

    Swap(item1, item2) {
        let tmp = item1.heapIndex;
        item1.heapIndex = item2.heapIndex;
        item2.heapIndex = tmp;
        this.items[item1.heapIndex] = item1;
        this.items[item2.heapIndex] = item2;
    }
}
class QuickSort extends AnimatedSorting {
    async Sort (order = "ASC", delay, partitioning = "Lomuto") {
        await this.SortRecursive(0, this.arr.length-1, order, delay, partitioning);
        this.SetDivColor("#00FF00", this.arrOfColumns);
    }
    async SortRecursive(low, high, order = "ASC", delay, partitioning) {
        if (low < high) {
            if(partitioning.toLocaleUpperCase() == "LOMUTO") {
                var pi = await this.PartitionLomuto(low, high, delay, order);
            }
            else if(partitioning.toLocaleUpperCase() == "HOARE") {
                var pi = await this.PartitionHoare(low, high, delay, order);
            }
            await this.SortRecursive(low, pi - 1, order, delay, partitioning);
            await this.SortRecursive(pi + 1, high, order, delay, partitioning);
        }
    }
    async PartitionLomuto(low, high, delay, order) {
        let pivot = this.arr[high];
        this.SetDivColor("#0000FF", this.arrOfColumns[high]);
        let pi = low-1;
        for (let i = low; i < high; i++) {
            this.SetDivColor("#FFFF00", this.arrOfColumns[i]);
            if ((this.arr[i] < pivot && order.toLocaleUpperCase() == "ASC") || (this.arr[i] > pivot && order.toLocaleUpperCase() == "DESC")) {
                pi++;
                this.Swap(i, pi);
                await this.Sleep(delay);
            }
        }
        this.SetDivColor("#FFFFFF", this.arrOfColumns);
        pi++;
        this.Swap(high, pi);
        return pi;
    }
    async PartitionHoare(low, high, delay, order){
        let pivot = this.arr[high];
        let l = low - 1;
        let h = high;
        while(l < h) {
            do {
                l++;
                this.SetDivColor("#FFFF00", this.arrOfColumns[l]);
                await this.Sleep(delay);
            } while((this.arr[l] < pivot && order.toLocaleUpperCase() == "ASC") || (this.arr[l] > pivot && order.toLocaleUpperCase() == "DESC"));
            do {
                h--;
                this.SetDivColor("#FFFF00", this.arrOfColumns[h]);
                await this.Sleep(delay);
            } while((this.arr[h] > pivot && h > l && order.toLocaleUpperCase() == "ASC") || (this.arr[h] < pivot && h > l && order.toLocaleUpperCase() == "DESC"));
            if (l < h) {
                this.Swap(l, h);
                await this.Sleep(delay);
            }
        }
        this.Swap(l, high);
        return l;
    }
}
class MergeSort extends AnimatedSorting {
    async Sort(order = "ASC", delay) { //TODO: Implement ASC and DESC
        let arr0 = this.arr;
        let arr1 = new Array(this.arr.length);
        for(let s = 1; s < this.arr.length; s *= 2) {
            for(let l = 0; l < this.arr.length; l += s*2) {
                let m = s + l;
                if(m >= this.arr.length) m = this.arr.length - 1;
                let h = l + s*2;
                if(h > this.arr.length) h = this.arr.length;
                
                let i = l, j = m, k = l;
                while(i < m && j < h) {
                    if((arr0[i] < arr0[j] && order.toLocaleUpperCase() == "ASC") || (arr0[i] > arr0[j] && order.toLocaleUpperCase() == "DESC")) {
                        this.SetDivValue(this.arrOfColumns[k], arr0[i]);
                        this.SetDivColor("#FFFF00", this.arrOfColumns[k]);
                        arr1[k] = arr0[i++];
                        await this.Sleep(delay);
                    }
                    else {
                        this.SetDivValue(this.arrOfColumns[k], arr0[j]);
                        this.SetDivColor("#FFFF00", this.arrOfColumns[k]);
                        arr1[k] = arr0[j++];
                        await this.Sleep(delay);
                    }
                    k++;
                }
                while(i < m) {
                    this.SetDivValue(this.arrOfColumns[k], arr0[i]);
                    this.SetDivColor("#FFFF00", this.arrOfColumns[k]);
                    arr1[k++] = arr0[i++];
                    await this.Sleep(delay);
                }
                while(j < h) {
                    this.SetDivValue(this.arrOfColumns[k], arr0[j]);
                    this.SetDivColor("#FFFF00", this.arrOfColumns[k]);
                    arr1[k++] = arr0[j++];
                    await this.Sleep(delay);
                }
                this.SetDivColor("#FFFFFF", this.arrOfColumns);
            }
            [arr0, arr1] = [arr1, arr0]; //Just swaps the pointers
        }
        if(arr0 != this.arr) { //Checks if the sorted array if in the original array pointer
            for(let i = 0; i < this.arr.length; i++) {
                this.arr[i] = arr0[i];
            }
        }
        this.SetDivColor("#00FF00", this.arrOfColumns);
    }
}
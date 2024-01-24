class CountingSort extends AnimatedSorting {
    async Sort(order = "ASC", delay) {
        let counts = new Array(this.GetMax(this.arr) + 1).fill(0);
        //Counts the occurrence of numbers in the array 
        for(let i = 0; i < this.arr.length; i++) {
            counts[this.arr[i]]++;
            this.SetDivColor("#FFFF00", this.arrOfColumns[i]);
            await this.Sleep(delay);
        }
        //Rebuilds the array
        let array_element = 0;
        if(order.toLocaleUpperCase() == "ASC") {
            for(let i = 0;i < counts.length; i++) {
                for(let j = 0; j < counts[i]; j++) {
                    this.SetDivValue(this.arrOfColumns[array_element], i);
                    this.SetDivColor("#00FF00", this.arrOfColumns[array_element++]);
                    await this.Sleep(1);
                }
            }
        }
        else if(order.toLocaleUpperCase() == "DESC") {
            for(let i = counts.length-1;i >= 0; i--) {
                for(let j = 0; j < counts[i]; j++) {
                    this.SetDivValue(this.arrOfColumns[array_element], i);
                    this.SetDivColor("#00FF00", this.arrOfColumns[array_element++]);
                    await this.Sleep(delay);
                }
            }
        }
        else console.error("Unknown order: " + order);
    }
    GetMax(arr) {
        let max = arr[0];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}
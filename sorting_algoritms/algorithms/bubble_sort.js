class BubbleSort extends AnimatedSorting{
    async Sort(order = "ASC", delay){
        this.SetDivColor("#FFFF00 ", this.arrOfColumns[0]);
        for(let i = 0; i < this.arr.length; i++){
            let swapOccurred = false;
            for(var j = 1; j < arr.length-i; j++){
                this.SetDivColor("#0000FF", this.arrOfColumns[j]);
                await this.Sleep(delay);
                this.SetDivColor("#FFFF00", this.arrOfColumns[j]);
                if((order.toLocaleUpperCase() == "ASC" && this.arr[j-1] > this.arr[j]) || (order.toUpperCase() == "DESC" &&  this.arr[j-1] < this.arr[j])){
                    swapOccurred = true;
                    this.Swap(j-1, j);
                }
                this.SetDivColor("#FFFFFF",  this.arrOfColumns[j-1]);
            }
            if(!swapOccurred){
                break;
            }
            this.SetDivColor("#00FF00", this.arrOfColumns[j-1]);
        }
        this.SetDivColor("#00FF00", this.arrOfColumns);
    }
}
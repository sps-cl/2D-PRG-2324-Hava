class ShellSort extends AnimatedSorting{
    async Sort(order = "ASC", delay){
        for(let g = this.arr.length>>1; g > 0; g>>=1){
            for(let i = 0; i+g < this.arr.length; i++){
                this.SetDivColor("#0000FF", this.arrOfColumns[i]);
                this.SetDivColor("#FFFF00", this.arrOfColumns[i+g]);
                await this.Sleep(delay);
                if((order.toLocaleUpperCase() == "ASC" && this.arr[i] > this.arr[i+g]) || (order.toUpperCase() == "DESC" &&  this.arr[i] < this.arr[i+g])){
                    let j = i;
                    while(j  >= 0 && (order.toUpperCase() == "ASC" && this.arr[j] > this.arr[j+g]) || (order.toUpperCase() == "DESC" &&  this.arr[j] < this.arr[j+g])){
                        this.Swap(j, j+g);
                        j -= g;
                    }
                }
                this.SetDivColor("#FFFFFF", this.arrOfColumns);
            }
        }
        this.SetDivColor("#00FF00", this.arrOfColumns);
    }
} 
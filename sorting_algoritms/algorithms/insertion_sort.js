class InsertionSort extends AnimatedSorting{
    async Sort(order = "ASC", delay){
        this.SetDivColor("#FFFF00", this.arrOfColumns[0]);
        for(let i = 1; i < this.arr.length; i++){
            let movingPiece = this.arrOfColumns[i];
            this.SetDivColor("#0000FF", this.arrOfColumns[i]);
            for(let j = i-1; j >= 0 ; j--){
                if((this.arr[j] > this.arr[j+1] && order.toLocaleUpperCase()  == "ASC") || (this.arr[j] < this.arr[j+1] && order.toLocaleUpperCase()  == "DESC")){
                    await this.Sleep(delay);
                    this.Swap(j,j+1);
                }
                else break
            }
            await this.Sleep(delay)
            this.SetDivColor("#FFFF00", movingPiece);
        }
        this.SetDivColor("#00FF00", this.arrOfColumns);
    }
}
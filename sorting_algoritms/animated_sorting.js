class AnimatedSorting{
    constructor(container, arr){
        this.container = container;
        this.arr = new Array(arr.length);
        arr.forEach((value, i) => { //Clone arr to the object
            this.arr[i] = value;
        });
        this.arrOfColumns = new Array(arr.length);
        arr.forEach((value, i) => { //Clone arrOfColumns to the object
            let column = document.createElement("div");
                column.style.setProperty("--x", i);
                column.style.setProperty("--value", value);
                column.className = "item";
            this.container.appendChild(column);

            this.arrOfColumns[i] = column;
        });
    }

    Swap(i, j){
        [[this.arr[i], this.arr[j]]] = [[this.arr[j], this.arr[i]]];
        [[this.arrOfColumns[i], this.arrOfColumns[j]] = [this.arrOfColumns[j], this.arrOfColumns[i]]];
        this.arrOfColumns[j].style.setProperty("--x", j);
        this.arrOfColumns[i].style.setProperty("--x", i);
    }

    async Sleep(delay){
        let promise = new Promise(
            (resoleve) => {
                setTimeout(() => {
                    resoleve();
                }, delay);
            }
        )
        return promise;
    }

    SetDivColor(color, ...divs) {
        divs.forEach((div) => {
            if(!Array.isArray(div)){
                div.style.backgroundColor = color;
            }else{
                div.forEach((_div) => {
                    _div.style.backgroundColor = color;
                });
            } 
        });
    }

    SetDivValue(div, size) {
        div.style.setProperty("--value", size);
    }
}
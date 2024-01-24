let arr = new Array(100);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * 255);
}

new BubbleSort(document.getElementById("bubbleSortDiv"), arr).Sort("ASC", 1);
new InsertionSort(document.getElementById("insertionSortDiv"), arr).Sort("ASC", 1);
new ShellSort(document.getElementById("shellSortDiv"), arr).Sort("ASC", 1);
new QuickSort(document.getElementById("quickSortDiv"), arr).Sort("ASC", 1, "Hoare");
new MergeSort(document.getElementById("mergeSortDiv"), arr).Sort("ASC", 1);
new CountingSort(document.getElementById("countingSortDiv"), arr).Sort("ASC", 1);
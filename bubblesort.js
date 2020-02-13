const bubbleSort = (items) => {
    // number of passes
    for (let i = 0; i < items.length; i++) {
        // j < (length - i)
        for (let j = 0; j < items.length; j++) {
            //compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //swap the numbers
                let temp = items[j]; //temp variable to hold the current number
                items[j] = items[j + 1]; //replaces current number with adjacent
                items[j + 1] = temp; //replace adjacent number with current number
            }
        }
    }
    return items;
}

console.log(bubbleSort([3, 5, 7, 2, 1, 9, 6, 8, 10]));



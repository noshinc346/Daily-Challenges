function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
        console.log(arr, arr[j], arr[j+1])
            
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

bubbleSort([24, 9, 8, 4, 98, 10, -2])

// ISSUE WITH THIS CODE : Reads out of bound of array and iterates through the array too many times



//The loops are changed so that it doesnt go out of bound and cuts down the length of the array
function bubbleSort(arr) {
    for (let i = arr.length; i < 0; i--) {
        for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1])
            
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

bubbleSort([24, 9, 8, 4, 98, 10, -2])

// ISSUE WITH THIS CODE : Still iterating when array is already sorted somewhere in middle so it should just stop


// Add variable noSwaps so that it breaks if it never goes though a swap.
function bubbleSort(arr) {
    for (let i = arr.length; i < 0; i--) {
        let noSwaps = true
        for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1])
            
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

bubbleSort([24, 9, 8, 4, 98, 10, -2])
// Time complexity O(n (log n)).
// Recursion: solution of that problem relies on smaller instances of the same problem.

const merge = (leftArray, rightArray) => {

    
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}
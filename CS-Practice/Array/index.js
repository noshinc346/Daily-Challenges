//leetcode 283 
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.


function moveZeroes(nums) {
    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    let nonZeroIndex = 0;
    let currentIndex = 0;

    while (currentIndex < nums.length) {
        if (nums[currentIndex] !== 0) {
            swap(nums, nonZeroIndex, currentIndex);
            nonZeroIndex++;
        }
        currentIndex++;
    }

    return nums;
}


// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


// Leetcode 268
//Given an array nums containing n distinct numbers 
// in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {

    let n = nums.length
    
    const total = ( (n * (n + 1) / 2))
    
    const init = 0; 
    let arrSum = nums.reduce( (a,b) => a + b );
    
    return total - arrSum;
    };
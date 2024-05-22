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

// Leetcode 136. Single Number
//Given a non-empty array of integers nums, every element appears 
// twice except for one. Find that single one.

var singleNumber = function(nums) {
    if (nums.length === 0) {
        return nums[0];
    }
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};

//Leetcode 704. Binary Search 
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to 
// search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};
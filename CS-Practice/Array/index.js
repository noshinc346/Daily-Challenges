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

//Leetcode 153 Finding minimum in a rotated sorted array

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Compare middle element with the rightmost element
        if (nums[mid] > nums[right]) {
            // The minimum element must be in the right part
            left = mid + 1;
        } else {
            // The minimum element is in the left part (including mid)
            right = mid;
        }
    }

    // When left == right, we have found the minimum element
    return nums[left];
}

// Example usage:
let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums)); // Output: 0


//26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Edge case: empty array
   
   let k = 1; // Pointer to track unique elements
   
   for (let i = 1; i < nums.length; i++) {
       if (nums[i] !== nums[k - 1]) {
           nums[k] = nums[i]; // Place unique element at index k
           k++; // Increment k to next unique element position
       }
   }
   
   return k; // k now represents the number of unique elements
};

//Leetcode 121. Best Time to Buy and Sell Stock

    var maxProfit = function(prices) {
        let buyPrice = prices[0];
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            if (buyPrice > prices[i]) {
                buyPrice = prices[i];
            }

            profit = Math.max(profit, prices[i] - buyPrice);
        }

        return profit;    
    };

// Leetcode 238. 

var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;    
};

//Leetcode 53. 

var maxSubArray = function(nums) {
    let res = nums[0];
    let total = 0;

    for (let n of nums) {
        if (total < 0) {
            total = 0;
        }

        total += n;
        res = Math.max(res, total);
    }
    
    return res;    
};

// Leetcode 53. Maximum Subarray
var maxSubArray = function(nums) {
    let res = nums[0];
    let total = 0;

    for (let n of nums) {
        if (total < 0) {
            total = 0;
        }

        total += n;
        res = Math.max(res, total);
    }
    
    return res;    
};

//Leetcode 152. Maximum Product Subarray
var maxSubArray = function(nums) {
    let res = nums[0];  // Initialize the result (max sum) with the first element
    let total = 0;      // Initialize the current sum to 0

    for (let n of nums) {  // Loop through each element in the array
        if (total < 0) {   // If the current sum is negative, reset it to 0
            total = 0;
        }

        total += n;        // Add the current number to the current sum
        res = Math.max(res, total); // Update the result if the current sum is greater
    }
    
    return res;  // Return the maximum sum found
};

//Leetcode 153. Find Minimum in Rotated Sorted Array 
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum must be to the right of mid
            left = mid + 1;
        } else {
            // Minimum is at mid or to the left of mid
            right = mid;
        }
    }

    return nums[left]; // or nums[right], since left == right
}

//Leetcode 162. Two Sum II 
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            // Return 1-based indices
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // Move right to increase the sum
        } else {
            right--; // Move left to decrease the sum
        }
    }

    // Since the problem guarantees a solution, we won't hit this
    return [];
}

//Leetcode 15. 3Sum
function threeSum(nums) {
    nums.sort((a, b) => a - b);  // Step 1: Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Step 2: Skip duplicates for the fixed number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Step 3: Skip duplicates for left and right
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            } else if (sum < 0) {
                left++;  // Need a larger number
            } else {
                right--; // Need a smaller number
            }
        }
    }

    return result;
}

//Leetcode 953. Verifying an Alien Dictionary 
var isAlienSorted = function(words, order) {
  // 1) Build the rank map
  const rank = {};
  for (let i = 0; i < order.length; i++) {
    rank[order[i]] = i;
  }

  // 2) Compare each adjacent pair
  for (let i = 0; i < words.length - 1; i++) {
    if (!inCorrectOrder(words[i], words[i + 1], rank)) {
      return false;
    }
  }

  // 3) All good!
  return true;
};

/**
 * Returns true if w1 ≤ w2 in the alien lex order defined by rank.
 */
function inCorrectOrder(w1, w2, rank) {
  const minLen = Math.min(w1.length, w2.length);

  for (let i = 0; i < minLen; i++) {
    const c1 = w1[i], c2 = w2[i];
    if (c1 !== c2) {
      // As soon as they differ, decide by their rank
      return rank[c1] < rank[c2];
    }
  }

  // All chars same up to minLen: shorter word must come first
  return w1.length <= w2.length;
}

// ---- Test with the examples ----
console.log(isAlienSorted(
  ["hello","leetcode"],
  "hlabcdefgijkmnopqrstuvwxyz"
)); // true

console.log(isAlienSorted(
  ["word","world","row"],
  "worldabcefghijkmnpqstuvxyz"
)); // false

console.log(isAlienSorted(
  ["apple","app"],
  "abcdefghijklmnopqrstuvwxyz"
)); // false

//Leetcode 31. Next Permutation 
var nextPermutation = function(nums) {
  const n = nums.length;
  // 1) Find the first index 'i' from the right where nums[i] < nums[i+1]
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  
  // 2) If such an index exists, find the smallest element > nums[i] in the suffix
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    // 3) Swap pivot nums[i] with this successor nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  
  // 4) Reverse the suffix nums[i+1...end] to get the lowest order
  reverse(nums, i + 1, n - 1);
};

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

// --- Tests ---
let a1 = [1,2,3];
nextPermutation(a1);
console.log(a1); // [1,3,2]

let a2 = [3,2,1];
nextPermutation(a2);
console.log(a2); // [1,2,3]

let a3 = [1,1,5];
nextPermutation(a3);
console.log(a3); // [1,5,1]

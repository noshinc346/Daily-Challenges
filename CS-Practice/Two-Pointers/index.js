//Leetcode 11. Container With Most Water
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;
        maxWater = Math.max(maxWater, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

//Leetcode 953. Verifying an Alien Dictionary 
function isAlienSorted(words, order) {
    const orderMap = {};

    // Step 1: Build a mapping of character to its position in the alien order
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }

    // Step 2: Compare adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        let foundDifference = false;

        for (let j = 0; j < Math.max(word1.length, word2.length); j++) {
            const char1 = word1[j];
            const char2 = word2[j];

            if (char1 !== char2) {
                const pos1 = orderMap[char1] ?? -1;
                const pos2 = orderMap[char2] ?? -1;

                if (pos1 > pos2) return false;
                foundDifference = true;
                break;
            }
        }

        // If no difference was found and word1 is longer, it's not sorted
        if (!foundDifference && word1.length > word2.length) {
            return false;
        }
    }

    return true;
}

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

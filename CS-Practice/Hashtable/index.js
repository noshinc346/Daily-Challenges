//Leetcode 242. Valid Anagram 
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or 
// phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    if((s.length) != (t.length)) {
        return false;
    }

    let charCount = {};
    for(let char of s) {
        if(charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    for(let char of t) {
        if(charCount[char] === undefined) {
            return false;
        } else {
            charCount[char]--;
            if(charCount[char] < 0) {
                return false;
            }
        }
    }
    for(let char in charCount) {
        if(charCount[char] != 0) {
            return false;
        }
    }

    return true;
}

//LeetCode 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }    
};

// Leetcode 219 : Contains Dup II

const containsNearbyDuplicate = (nums, k) => {

    const index_map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
  
      // If the number already exists in the map, check the difference
      if (index_map.has(nums[i])) {
        // should use Math.abs() to ensure the difference is non-negative.
        let diff = Math.abs(index_map.get(nums[i]) - i);
        if (diff <= k) {
          return true
        }
      }
      // Add it to the map with the current index of the number
      index_map.set(nums[i], i);
    }
  
    return false;
  };

  
// Leetcode 219. Contains Duplicate II
function containsNearbyDuplicate(nums, k) {
    let numIndexObj = {}; // Using an object instead of Map
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (num in numIndexObj && Math.abs(i - numIndexObj[num]) <= k) {
            return true;
        } 
        numIndexObj[num] = i;
    }    
    return false;
}

// Leetcode 217. Contains Duplicate

var containsDuplicate = function(nums) {
    const numSet = new Set();

    for (const n of nums) {
        if (numSet.has(n)) {
            return true;
        }
        numSet.add(n);
    }
    
    return false;
};
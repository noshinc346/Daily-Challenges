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
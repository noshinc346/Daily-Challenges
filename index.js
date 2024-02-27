// 2/26 Challenge 
    // In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
    // - Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
    // - The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
    // - If the strings are not of the same length, the function should return NaN.
    // Examples:
    // hammingDistance('abc', 'abc'); //=> 0
    // hammingDistance('a1c', 'a2c'); //=> 1
    // hammingDistance('!!!!', '****'); //=> 4
    // hammingDistance('abc', 'ab'); //=> NaN

    function hammingDistance(str1, str2) {
        let count = 0;
        if (str1.length !== str2.length) {
          console.log("NaN");
        } else {
          for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
              count++;
            }
          }
          return count;
        }
      }

// 2/27 Challenge: 13-mumble
    // Prompt:
    // - Write a function called mumble that accepts a single string argument.
    // - The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
    // - Examples describe it best..
    // Examples:
    // mumble('X'); //=> 'X'
    // mumble('abc'); //=> 'a-bb-ccc'
    // mumble('121'); //=> '1-22-111'
    // mumble('!A 2'); //=> '!-AA-   -2222'


    function mumble(str) {
        let arrStr = str.split('')
        let newArr = []
        for (let i = 0; i < arrStr.length; i++) {
          newArr.push(arrStr[i].repeat(i+1))
        }
          return newArr.join('-')
      }
      
      console.log(mumble("abc"))
      console.log(mumble("!A 2"))
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

// 2/29 Challenge 
// Prompt:
// - Write a function named fromPairs that creates an object from an array containing nested arrays.
// - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
// - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
// Examples:
// fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
// fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }

    function fromPairs(arr) {
      let obj = {};
      arr.forEach(function(nestArr) {
        obj[nestArr[0]] = nestArr[1];
      })
      return obj
    }

// 3/1 Challenge 
// Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
// - If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
// Examples:
// mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44} 

    function mergeObjects(target, ...objects) {
      objects.forEach(function(obj) {
        // using ES2015's 'for in' loop
        for(let key in obj) {
          target[key] = obj[key];
        }
      });
      return target;
    }


// 3/4 Challenge 
  // Write a function named findHighestPriced that accepts a single array of objects.
  // - The objects contained in the array are guaranteed to have a price property holding a numeric value.
  // - The function should return the object in the array that has the largest value held in the price property.
  // - If there's a tie between two or more objects, return the first of those objects in the array.
  // - Return the original object, not a copy.
  // - DO NOT mutate the array, i.e., do not sort it
  // Examples:
  // findHighestPriced([
  //   { sku: 'a1', price: 25 },
  //   { sku: 'b2', price: 5 },
  //   { sku: 'c3', price: 50 },
  //   { sku: 'd4', price: 10 }
  // ]);

    //Not working
    function findHighestPriced(items) {
      let highNumber = 0;
      let answerObj;
      items.forEach(function (item) {
        if (items.price > highNumber) {
          items.price = highNumber;
          answerObj = item;
        }
        return answerObj;
      });
    }

// 3/14 Challenge 
  // The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.
  // - Write a function named mapArray that accepts two arguments: a single array and a callback function.
  // - The mapArray function should return a new array of the same length as the array argument.
  // - The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.
  // Examples:
  // mapArray( [1, 2, 3], function(n) {
  //   return n * 2;
  // } );
  // //=> [2, 4, 6]  (a new array)
  // mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  //   return `${i + 1} - ${f}`;
  // } );
  // //=> ["1 - rose", "2 - tulip", "3 - daisy"]

  let newArr = []
  function mapArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]))
    }
  return newArr
  }

// 3/15 Challenge
  //   The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.
  // - Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
  // - The reduceArray function should return whatever is returned by the callback function on the last iteration.
  // - The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
  // - On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.
  // Examples:
  // reduceArray( [1, 2, 3], function(acc, n) {return acc + n;}, 0); //=> 6
  // reduceArray( [1, 2, 3], function(acc, n, i) {return acc + n + i;}, 0); //=> 9
  // reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {acc[v] = acc[v] ? acc[v] + 1 : 1; return acc;}, {} );
  //=> {"Yes": 2, "No": 1, "Maybe": 1}

  // 4/01 
    // Difficulty: Intermediate
    // Prompt:
    // - Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
    // - The function should return a new array containing all elements in common, including repeating element values.
    // - The ordering of the elements in the returned array is not important.
    // - If there are no elements in the arrays in common,  the intersection function should return an empty array.
    // - The function should not mutate (change) either argument.
    // Examples:
    // intersection(['a', 1], []) //=> []
    // intersection(['a', 1], [true, 'a', 15]) //=> ['a']
    // intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]

    function intersection(arr1, arr2) {
      common = [];
      for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
          if(arr1[i] === arr2[j]) {
            common.push(arr1[i])
          }
        }
        return common
      }
    }

// 4/02 
    // Difficulty:  Intermediate
    // Prompt:
    // - Write a function called balancedBrackets that accepts a single string as argument.
    // - The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
    // - The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
    // - The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
    // Examples:
    // balancedBrackets( '()' ) // => true
    // balancedBrackets( '(]' ) // => false
    // balancedBrackets( '[{}]' ) // => true
    // balancedBrackets( '[(])' ) // => false
    // balancedBrackets( '[({}[])]' ) // => true

    function balancedBrackets(str) {
      const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
      }
      const stack = []
      for (let i = 0; i < str.length; i++) {
        if (brackets[str[i]]) {
          stack.push(str[i])
        } else {
          const last = stack.pop()
          if (str[i] !== brackets[last]) {
            return false
          }
        }
      }
      return stack.length === 0
    }

    //4/04
      // Difficulty:  Intermediate
      // Prompt:
      // - Write a function called getNumForIP that accepts a single string as argument.
      // - The input string is formatted as an IP address, such as '192.156.99.15'.  IP addresses
      //   are used in networking and are actually 32-bit integers.  However, those that work
      //   with networks find it more convenient to work with these numbers as four 8-bit integers,
      //   separated by a 'dot' character.
      // - The getNumForIP function should return the numeric value of the string IP address
      //   being passed in as an argument.
      // Hints:
      // - Each 8-bit number can hold a value between 0 and 256.
      // - An IP's right most 8-bit number represents how many of 256 raised to the power of 0 (equals 1)
      //   there are.  The next 8-bit number represents how many of 256 raised to the power of 1 (256) 
      //   there are, etc.  For example, if you took the right-most two 8-bit numbers of the 
      //   IP address 192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 * (256**1),
      //   which equals 25344.
      // - To compute the numeric value for an IP address, you first compute the value for each of the
      //   four 8-bit chunks (as described in the above hint), and add them together!


    // 20. Valid Parentheses 
    var isValid = function(s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      if (!stack.length || stack.pop() !== mapping[c]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 13. Roman to integer 
var romanToInt = function(s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]];
        } else {
            res += roman[s[i]];
        }
    }

    return res + roman[s[s.length - 1]];    
};

// 1757. Recyclable and Low Fat Products MYSQL
// SELECT
//     product_id
// FROM
//     Products
// WHERE
//     low_fats = 'Y' AND recyclable = 'Y'
    
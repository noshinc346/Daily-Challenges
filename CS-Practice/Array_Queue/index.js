//LeetCode Flood Fill 
// An image is represented by an m x n integer grid image where image[i][j] 
// represents the pixel value of the image.You are also given three integers sr, sc, and color. 
// You should perform a flood fill on the image starting from the pixel image[sr][sc].

function floodFill(image,sr,sc,color) {
    const oldColor = image[sr][sc];
    if(oldColor === color) return image;

    const queue = [[sr,sc]];
    while(queue.length > 0) {
        const [r,c] = queue.shift();
        if(image[r][c] === oldColor) {
            image[r][c] = color;
            if (r - 1 >= 0) queue.push([r - 1, c]); // up
            if (r + 1 < image.length) queue.push([r + 1, c]); // down
            if (c - 1 >= 0) queue.push([r, c - 1]); // left
            if (c + 1 < image[0].length) queue.push([r, c + 1]); // right
        }
    } 
    return image
}



var sortedSquares = function(nums) {
    let res = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1; 

    if(nums.length === null) {
        return [];
    }

    if(nums.length === 1) {
        return nums = nums[0] ** 2;
    }

    for(let i = nums.length -1;i >= 0; i--){
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[i] = nums[left] ** 2;
            left++;
        }
        else {
            res[i] = nums[right] ** 2;
            right--;
        }
    }
    return res;

};
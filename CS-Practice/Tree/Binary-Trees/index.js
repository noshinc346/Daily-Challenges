class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor(){
        this.root = null
    }

    insert() {
        const newNode = new Node(val)
        if(!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root

            while(true) {
                if (val === current.val) return undefined
                
                if (val < current.val) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.right
                    }
                } else if (val > current.val) {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find() {

    }
}

// const tree = new binarySearchTree()
// console.log(tree)


//Leetcode 543: Diameter of Binary Tree 

const diameterOfBinaryTree = function(root) {
    const diameter = (node,res) => {
        if (!node) return 0;
        const left = diameter(node.left,res);
        const right = diameter(node.right,res);

        res[0] = Math.max(res[0], left + right);

        return Math.max(left, right) + 1;

    }

    const res = [0]
    diameter(root, res);
    return res[0];
};

//Leetcode 101 Symmetric Tree 
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function(root) {
    // Special case...
    if (!root)
        return true;
    // Return the function recursively...
    return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (leftroot, rightroot) {
    // If both root nodes are null pointers, return true...
    // If exactly one of them is a null node, return false...
    // If root nodes haven't same value, return false...
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};

//Leetcode 226 Invert Binary Tree 
//Given the root of a binary tree, invert the tree, and return its root.

function invertTree(root) {
    if (root === null) {
        return null;
    }

    // Swap the left and right children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Invert the left subtree
    invertTree(root.left);
    // Invert the right subtree
    invertTree(root.right);

    return root;
}

// LeetCode 108. Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced binary search tree.

function sortedArrayToBST(nums) {
    function convertListToBST(left, right) {
        if (left > right) {
            return null;
        }

        // Choose the middle element of the current subarray
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        // Recursively build the left subtree
        node.left = convertListToBST(left, mid - 1);

        // Recursively build the right subtree
        node.right = convertListToBST(mid + 1, right);

        return node;
    }

    return convertListToBST(0, nums.length - 1);
}

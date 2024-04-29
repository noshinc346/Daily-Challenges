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
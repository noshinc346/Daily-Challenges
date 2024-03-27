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
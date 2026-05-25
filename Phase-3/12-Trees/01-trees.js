class Node {
    constructor(value) {
        this.left= null;
        this.value = value
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        if (value == null || value == undefined) {
            return
        }
        const newNode = new Node(value)

        if (this.root == null) {
            this.root = newNode
            return
        }
        let current = this.root
        if (value < current.value) {
            if (current.left == null) {
                current.left = newNode
                return
            }
            current = current.left
        }
        else {
            if (current.right == null) {
                current.right = newNode
                return
            }
            current = current.right
        }
    }


    search(value) {
        if (value == null || value == undefined) {
            return
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    dfsInorder() {
        let result = []
        function traverse(node) {
            if (node == null) {
                traverse(node.left)
                result.push(node.value)
                traverse(node.right)
            }
        }
        traverse(this.root)
        return result
    }

    dfsPreorder(node) {
        const result = []
        function traverse(node) {
            if (node == null) {
                result.push(node.value)
                traverse(node.left)
                traverse(node.right)
            }
        }
        traverse(this.root)
        return result
    }

    dfsPostorder(node) {
        const result = []
        function traverse(node) {
            if (node == null) {
                traverse(node.left)
                traverse(node.right)
                result.push(node.value)
            }
        }
        traverse(this.root)
        return result
    }
    bfs(){
    const result = []
    const queue = []
    if(this.root != null)queue.push(this.root)
    let index = 0

    while(index < queue.length){
        const node = queue[index]
        result.push(node.value)
        index++

        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
    return result
    }
}


const tree = new Tree()

tree.insert(25)

tree.insert(12)

tree.insert(30)

tree.insert(35)

tree.insert(29)

console.log(tree);

console.log(tree.dfsInorder());
console.log(tree.dfsPreorder());
console.log(tree.dfsPostorder());

console.log(tree.bfs());









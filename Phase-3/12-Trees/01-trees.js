class Node{
    constructor(value){
        this.left = null;
        this.value = value
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    insert(value){
        if(value == null || value == undefined){
            return
        }
        const newNode = new Node(value)
    }
}
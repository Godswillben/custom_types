class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
        }else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    // Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }else {
                    // right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if (value > currentNode.value){
                currentNode =  currentNode.right;
            }else if (currentNode.value === value){
                return currentNode;
            }
        }
        return null;
    }
    remove(value){
        if (!this.root){
            return null;
        }
        let currentNode =  this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
            }else if (value>currentNode.value){
            }else if(currentNode.value === value){
                // We have a match, get to work

                // Option 1: No right child:
                if(currentNode.right === null){
                    // Option 2: Right child which doesn't have a leftg child
                }else if(currentNode.right.left === null){
                //option 3: Right child which doesn't have a left child
                }else if(currentNode.right.left === null){
                // Option 3: Right child that has a left child
                }else {
                }
                return true;
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

//       9
//  4       20
//1   6   15    170

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
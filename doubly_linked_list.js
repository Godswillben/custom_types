class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        console.log("appending: ", this)
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value); 
            currentNode = currentNode.next;
        }
        
        return array;
    }

    insert(index, value){
        // TODO: check params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
          }

        if (index >= this.length){
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList()
    }

    traverseToIndex(index){
        // TODO: check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            
            currentNode = currentNode.next;
            counter++;
        }
        console.log("indexedNode", currentNode)
        return currentNode
    }

    remove(index){
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.printList();
// myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2)
// console.log(myLinkedList.printList())

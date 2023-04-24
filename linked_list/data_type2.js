class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        // Code here
        const newNode = {
            value:  value,
            next: null 
        };
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
        return this
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        // const holdingPointer = this.head; // my solution but not neat
        // this.head = newNode;
        // this.head.next = holdingPointer;
        // tutors solution
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }
    // insert(index, value){
    //     if (index > this.length){
    //         this.append(value)
    //     }
    //     if(index === 0){
    //         this.prepend(value)
    //     }
    //     const newNode = {
    //         value: value,
    //         next: null
    //     }
    //     let currentNode = this.head;
    //     let counter = 0;
    //     while(true){
    //         if (index === counter){

    //         }
    //     }
        
    // } // my insert method though not completed

    insert(index, value){
        // check params
        if (index >= this.length){
            return this.append(value);
        }
        if(index === 0){
            this.prepend(value)
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }
    traverseToIndex(index){
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
    remove(index){
        // check params
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
} 

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList)



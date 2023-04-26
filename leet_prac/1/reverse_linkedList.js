/**
 * Givien a linked List return the reverse
 */

/**
 * What do we return if we are given null
 * -> we return null
 * What do we return if we are given a single node
 * -> we return a single node
 */

const reverseLinkedList = function (head){
    let prev = null;
    let current = head;

    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}


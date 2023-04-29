/** Question
 * Given a Linked List Return the Reverse
 */

/** Constraints
 * What do we return if we get null or a single node
 * -> Return null and the node
 */

const reverseLinkedList = function(head){
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


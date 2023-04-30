/** Question 
 * Implement class Queue with stacks, 
 * queue methods you need to implement are enqueue, dequeue, peek, and empty
 */

/** Very Constraints
 * Do the queue methods we implement need to perform at the same 
 * space and time complexity of an original queue?
 * -> No, but they should be as performant as possible
 */

class QueueWithStacks {
    constructor(){
        this.in=[];
        this.out=[];
    }

    enqueue(val){
        this.in.push(val)
    }

    dequeue(){
        if(this.out.length === 0){
            while(this.in.length){
                this.out.push(this.in.pop())
            }
        }
        return this.out.pop()
    }

    peek(){
        // if(this.out.length === 0){
        //     return this.in[0]
        // }
        // return this.out[this.out.length - 1]
        if(this.out.length === 0){
            while(this.in.length){
                this.out.push(this.in.pop())
            }
        }
        return this.out[this.out.length - 1]
    }

    empty(){
        return this.in.length === 0 && this.out.length ===0;
    }
    
}

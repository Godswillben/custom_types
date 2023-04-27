class QueuesWithStacks{
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
        if(this.out.length === 0){
            while(this.in.length){
                this.out.push(this.in.pop())
            }
        }
        return this.out[this.out.length -1];
    }
}
// [1,2,3,4,5]
// [5, 4, 3, 2, 1]

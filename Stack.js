// implement the pop functionality



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        const temp = this.first
        this.first  =this.first.next
        return temp
    }
}


const stack = new Stack();
console.log(stack);
stack.push("node1");
console.log(stack);
stack.push("node2");
console.log(stack);
stack.push("node3");
console.log(stack);
stack.push("node4");
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);
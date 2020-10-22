// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creates an empty Queue keeping track of the first and last items
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) { //new node can only be inserted at the end of the queue - Contant 0(1)
        const node = new _Node(data); //create new node

        if (this.first === null) { //if queue is empty
            this.first = node; //the new node become the first item in the queue
        };

        if (this.last) { //if this.last exists
            this.last.next = node; //the new node becomes the last item
        };
        
        this.last = node; //make the new node the last item on the queue
    };

    dequeue() { //removal can happen only in the beginning of the queue - Contant 0(1)
       if (this.first === null) { //if the queue is empty 
           return; //there is nothing to return
       };

       const node = this.first;
       this.first = this.first.next;
        
       if (node === this.last) { //if this is the last item in the queue
           this.last = null;
       };
       return node.value;
   }
}
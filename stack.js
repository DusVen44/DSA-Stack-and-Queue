// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next; //pointer
    };
};

// Creates an empty Stack
class Stack {
    constructor() {
        this.top = null;
    };

    push(data) { //This function has a time complexity of Contstant 0(1)
        if (this.top === null) { //if the stack is empty
            this.top = new _Node(data, null); //new node will be at the top
            return this.top; //return the new node
        };
        const node = new _Node(data, this.top); //create the new node with the data and have pointer to the top
        this.top = node; 
    };

    pop() {
        const node = this.top; //start at the top
        this.top = node.next; //point to the next item and make it the top
        return node.data; //return the data of the new top node
    }

};

function main() { //main function to create stack
    let starTrek = new Stack(); //Create a new empty stack called starTrek
    starTrek.push('Kirk'); //Add names
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    return starTrek; //return starTrek stack
}

function peek() { //function to see what name is at the top of the stack
    let starTrek = main(); //create the starTrek stack
    return starTrek.top; //return the top item
};

function isEmpty() { //function to check if stack is empty
    let starTrek = main(); //creat the starTrek stack
    if (!starTrek.top) { //if there is no top item
        return 'Stack is empty' //return this string
    }
    return 'Stack is NOT empty' //if there is a top item, return THIS string
};


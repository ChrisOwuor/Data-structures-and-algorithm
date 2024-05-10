class Stack {
  constructor() {
    this.top = null;
    this.stack = [];
    this.size = this.stack.length;
  }

  peek() {
    console.log(this.top);
    return;
  }

  push(data) {
    this.stack.push(data);
    this.top = this.stack[0];
    this.size++;
  }
  pop() {
    this.stack.pop();
    this.size--;
    this.top = this.stack[0];
  }
}

const stack = new Stack();
stack.push(8);
stack.push(55);
stack.push(90);
stack
stack.pop();
stack.peek();

class Stack {
  constructor() {
    this.stack = [];
    this.size = this.stack.length;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(data) {
    this.stack.push(data);
    this.size++;
  }
  pop() {
    this.stack.pop();
    this.size--;
  }
}

const stack = new Stack();
stack.push(8);
stack.push(55);
stack.push(90);
console.log(stack.peek());
stack

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  is_empty() {
    return this.size === 0;
  }

  push(data) {
    let node = new Node(data);
    if (this.is_empty()) {
      this.top = node;
      this.size++;
    } else {
      let top = this.top;
      node.next = top;
      this.top = node;
      this.size++;
    }
  }
  peek() {
    return this.is_empty() ? "empty" : this.top.data;
  }
  pop() {
    let poppedData = this.top.data;
    if (this.is_empty()) {
      console.log("empty");
    } else if (this.size === 1) {
      this.top = null;
      this.size--;
      return poppedData;
    } else {
      this.top = this.top.next;
      this.size--;
      return poppedData;
    }
  }
}

const stack = new Stack();
console.log(stack.peek());

stack.push(44);
console.log(stack.peek());

stack.push(449);
console.log(stack.peek());

stack.push(899);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.peek());

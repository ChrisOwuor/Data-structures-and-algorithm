class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  is_empty() {
    return this.size === 0;
  }
  peek() {
    if (this.is_empty()) {
      console.log("empty");
    } else {
      console.log(thi.head.data);
    }
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
  pop() {
    if (this.is_empty()) {
      console.log("empty");
    } else {
      this.top = this.top.next;
      this.size--;
    }
  }
}

let stack = new StackLinkedList();
stack.push(44);
stack.push(45);
stack.push(490);
stack.pop()

stack;
console.log(stack);

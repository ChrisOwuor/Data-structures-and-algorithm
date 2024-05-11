class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class QueueLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  is_empty() {
    return this.size === 0;
  }
  enqueue(data) {
    let node = new Node(data);
    if (this.is_empty()) {
      this.top = node;
      this.size++;
    } else {
      let top = this.top;
      while (top.next !== null) {
        top = top.next;
      }
      top.next = node;
      this.size++;
    }
  }
  dequeue() {
    if (this.is_empty()) {
      console.log("empty");
    } else {
      this.top = this.top.next;
      this.size--;
    }
  }
}

const queue = new QueueLinkedList();
queue.enqueue(44);
queue.enqueue(49);
queue.enqueue(490);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue;

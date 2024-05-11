class Queue {
  constructor() {
    this.queue = [];
    this.size = this.queue.length;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(data) {
    this.queue.push(data);
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("empty");
    } else {
      let deleted = this.queue.shift();
      this.size--;
      console.log(deleted);
      return deleted;
    }
  }
}
const queue1 = new Queue();
queue1.enqueue(90);
queue1.enqueue(99);
queue1.enqueue(939);
queue1.enqueue(909);
console.log(queue1.dequeue());
console.log(queue1.dequeue());

queue1;

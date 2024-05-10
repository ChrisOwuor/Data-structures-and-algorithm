class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.size = 0;
    this.head = null;
  }

  get_head() {
    return this.size === 0 ? "empty" : this.head;
  }

  get_size() {
    return this.size;
  }

  print() {
    if (this.size === 0) {
      return "empty";
    } else {
      let elements = "";
      let current_node = this.head;
      while (current_node !== null) {
        elements += current_node.data + " ";
        current_node = current_node.next;
      }
      return this.size + "|  " + elements;
    }
  }
  prepend(data) {
    let node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.size++;
    } else {
      let current_node = this.head;
      node.next = current_node;
      this.head = node;
      this.size++;
    }
  }
  append(data) {
    let node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.size++;
    } else {
      let current_node = this.head;
      while (current_node.next !== null) {
        current_node = current_node.next;
      }
      current_node.next = node;
      this.size++;
    }
  }
  insert(data, index) {
    if (index === 0) {
      this.prepend();
    } else if (index > this.size || index < 0) {
      console.log("invalid index");
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      let node = new Node(data);
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  delete() {
    if (this.size === 0) {
      console.log("empty");
    } else if (this.size === 1) {
      this.head = null;
      this.size--;
    } else {
      let prev = null;
      let current = this.head;
      while (current.next !== null) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.size--;
    }
  }
}

const list = new LinkedList();
list.prepend(34);
list.prepend(33);
list.append(90);
list.append(90);
console.log(list);
console.log(list.print());
//2
//1

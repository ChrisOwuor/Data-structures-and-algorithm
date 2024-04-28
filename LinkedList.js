/**
 *
 * A linked list is a linear data structure where elements are not stored at contiguous
 * locations like arrays; instead, each element (commonly called a node) points to the next one. It consists
 * of nodes where each node contains a data field and a reference (or link) to the next node in the sequence.
 */

class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Reference to the next node
  }
}

/**
 * In the code above, we define a Node class.
 * Each node has a data property to store its value and a next
 * property to reference the next node in the list.
 *
 *
 */

class LinkedList {
  constructor() {
    this.head = null; // Reference to the first node in the list
  }

  // Method to print the head of the list
  printHead() {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      console.log("Head of the list:", this.head);
    }
  }

  // Method to add data to the list
  add(data) {
    const newNode = new Node(data);
    /**
     * 1:newNode={data:1,next:null}
     * 2:newNode={data:2,next:null}
     * 3:newNode={data:3,next:null}
     */
    if (this.head === null) {
      this.head = newNode;
      /**
       * 1:this.head= {data:1,next:null}
       */
    } else {
      let current = this.head;
      /**
       * 2:current={data:1,next:null}
       * 2:current.next === null
       * 3:curent ={data:1,next:{data:2,next:null}}
       */
      while (current.next !== null) {
        /**
         * 1:loop dont excecute
         * 2:loop dont excecute
         * 2:curent ={data:1,next:{data:2,next:null}}
         * current.next !== null
         * current = current.next
         * current.next ={data:2,next:null}
         * after this line loop will find that next === null and the loop stops excecuting but the current node is now updated from
         * head
         * after exiting the loop we shall current node so that the next prop is associated with the
         * new node creeated
         */
        current = current.next;
      }

      current.next = newNode;
      /**
       * 2:current.next = {data:1,next:{data:2,next:null}}
       */
    }
  }
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
/**
 *  { data: 1, next: { data: 2, next: { data: 3, next: null } } }
 */
linkedlist.printHead();


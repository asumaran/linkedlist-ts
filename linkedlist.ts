type Data = string;

class ListNode {
  data?: Data;
  next?: ListNode;

  constructor(data: Data) {
    this.data = data;
  }
}

class LinkedList {
  head?: ListNode;
  next?: ListNode;

  append(data: Data) {
    if (this.head === undefined) {
      this.head = new ListNode(data);
      return;
    }

    let current = this.head;

    while (current.next !== undefined) {
      current = current.next;
    }

    current.next = new ListNode(data);
  }

  prepend(data: Data) {
    const currentHead = this.head;
    this.head = new ListNode(data);
    this.head.next = currentHead;
  }

  show() {
    let current = this.head;
    let message = [];

    if (current === undefined) {
      return;
    }

    while (current.next !== undefined) {
      message.push(`${current.data} -> `);
      current = current.next;
    }

    message.push(current.data);

    console.log(message.join(""));
  }
}

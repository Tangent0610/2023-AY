/*
使用 Linked List 實作 Stack 實作需包含以下方法。
push() : 添加新元素
pop():移除元素並返回被移除的元素。
size():返回所有元素數量。
const myStack = new Stack() 
myStack.push(1) 
myStack.push(2) 
myStack.push(3) 
myStack.pop() // 3 
myStack.size() // 2
*/

// 定義鏈結串列的節點:具有value與指向下一個node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
// 實作stack
  class Stack {
    constructor() {
      this.top = null;
      this.length = 0;
    }
  
// push:添加新元素到堆疊頂部
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.length++;
    }
  
// pop:移除並返回堆疊頂部的元素
    pop() {
      if (this.length === 0) {
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      this.length--;
      return poppedNode.value;
    }

// size:返回堆疊的元素數量
    size() {
      return this.length;
    }
  }
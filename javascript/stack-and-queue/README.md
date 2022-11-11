# Data Structures - Stacks & Queues

> ## 🏡 **[**Home**](../../README.md)**

---

### Skip to:

> ### [Implementation](#1-implementation)
>
> ### [PseudoQueue](#2-pseudoqueue)
>
> ### [First In, First Out - Animal Shelter](#3-first-in-first-out-animal-shelter)

---

| Resources |
|---|
| [Read: Stacks & Queues](https://bit.ly/3CHNTBv) |
| [Implementation: Stacks & Queues](https://bit.ly/3fFRhna) |

---

## 1. Implementation

> Using a `Linked List` as the underlying data storage mechanism, implement both a `Stack` and a `Queue`.
>
> Branch Name: `stack-and-queue`
>
> Challenge Type: `New Implementation`

---

### Features

## **Node**

- Create a `Node` class that has properties for the value stored in the Node, and a pointer to the `next` node.

## **Stack**

- Create a `Stack` class that has a `top` property.
  - It creates an empty Stack when instantiated.
  - This object should be aware of a default **empty** value, assigned to `top` when the stack is created.
- The class should contain the following methods:
  - `push`
    - Arguments: value.
    - **Adds** a new node with that value, to the **top** of the stack with an O(1) Time performance.
  - `pop`
    - Arguments: none.
    - Returns: the value of the node from the **top** of the stack.
    - **Removes** the node from the **top** of the stack.
    - Should raise exception when called on empty stack.
  - `peek`
    - Arguments: none.
    - Returns: Value of the node located at the **top** of the stack.
    - Should raise exception when called on empty stack.
  - `isEmpty`
    - Arguments: none.
    - Returns: **Boolean** indicating whether or not the stack is empty.

---

![Stack Visualization](https://bit.ly/3SjElAW)

---

## **Queue**

- Create a `Queue` class that has a `front` property.
  - It creates an empty Queue when instantiated.
  - This object should be aware of a default empty value, assigned to **front** when the queue is created.
- The class should contain the following methods:
  - `enqueue`
    - Arguments: value.
    - **Adds** a new node with that value, to the **back** of the queue, with an O(1) Time performance.
  - `dequeue`
    - Arguments: none.
    - Returns: Value of the node from the **front** of the queue.
    - **Removes** the node from the **front** of the queue.
    - Should raise exception when called on empty queue.
  - `peek`
    - Arguments: none.
    - Returns: Value of the node located at the **front** of the queue.
    - Should raise exception when called on empty stack.
  - `isEmpty`
    - Arguments: none.
    - Returns: **Boolean** indicating whether or not the queue is empty.

---

![Queue Visualization](https://bit.ly/3gbDHYU)

---

You have access to the `Node` class and all the properties on the `LinkedList` class.

---

## Testing

### Write tests to prove the following functionality:

1. Can successfully instantiate an ***empty*** stack
2. Can successfully ***push*** onto a stack
3. Can successfully ***push multiple*** values onto a stack
4. Can successfully ***pop*** off the stack
5. Can successfully ***empty*** a stack after multiple ***pops***
6. Can successfully ***peek*** the next item on the stack
7. Calling pop or peek on empty stack raises ***exception***

---

1. Can successfully instantiate an ***empty*** queue
2. Can successfully ***enqueue*** into a queue
3. Can successfully ***enqueue multiple*** values into a queue
4. Can successfully ***dequeue*** value out of a queue
5. Can successfully ***peek*** into a queue, seeing the expected value
6. Can successfully ***empty*** a queue after multiple ***dequeues***
7. Calling dequeue or peek on empty queue raises ***exception***

---

## 2. PseudoQueue

> Branch Name: `stack-queue-pseudo`
>
> Challenge Type: `Code Challenge / Algorithm`

---

## Feature Tasks

- Implement a Queue using two Stacks.
- Do not use an existing queue.

### Implement the following methods:

- `enqueue`
  - Arguments: value.
  - Inserts a value into the PseudoQueue, using a **first-in, first-out** approach.
- `dequeue`
  - Arguments: none.
  - Extracts a value from the PseudoQueue, using a **first-in, first-out** approach.

> NOTE: The Stack instances have only `push`, `pop`, and `peek` methods.
>
> You should use your own Stack implementation.
>
> Instantiate these Stack objects in your PseudoQueue constructor.

---

### Unit Tests

For each method that you define, write test assertions for the following conditions at **minimum**:

- “Happy Path” - Expected outcome
- Expected failure
- Edge Case (if applicable/obvious)

---

## 3. "First In, First Out" Animal Shelter

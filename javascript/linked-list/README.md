# Data Structures - Linked Lists

<a id="top"></a>

> ## 🏡 **[**Home**](../../README.md)**

---

### *Skip to:*

>## [Implementation](#1️⃣-implementation)
>
> ## [Insertions](#2️⃣-insertions)
>
> ## [Kth](#3️⃣-kth-from-end)
>
> ## [Zip](#4️⃣-linked-list-zip)
>
> ## [Reverse](#5️⃣-reverse)
>
> ## [Palindrome](#6️⃣-palindrome)

---

### Resources

- [Canvas: Read 05](https://bit.ly/3fjKS0L)
- [CF: Linked Lists](https://bit.ly/3dDE2CR)
- [Implement LinkedList with TDD](https://bit.ly/3dL3Sow)
- [Data Structures in Javascript: Singly Linked Lists](https://bit.ly/3frnWN8)
- [Geeks for Geeks: Linked Lists](https://bit.ly/3rhZjFu)
- [Javascript in Plain English: Linked Lists](https://bit.ly/3SHnRDn)

---

## 1️⃣ Implementation

> Create a new implementation of a `Linked List` data structure.
>
> Branch Name: `linked-list`
>
> Challenge Type: New Implementation

---

### Feature Tasks:

## **Node**

- Create a `Node` class that has properties for the `value` stored in the Node, and a pointer to the `next` Node.

## **Linked List**

- Create a `Linked List` class.
  - Within your `Linked List` class, include a `head` property.
  - Upon instantiation, an **empty** `Linked List` should be created.
- The class should contain the following methods:
  - `insert`
    - Arguments: value.
    - Returns: nothing.
    - Adds a new node with that value, to the **head** of the list, with an O(1) Time performance.
  - `includes`
    - Arguments: value.
    - Returns: Boolean.
    - Indicates whether that value exists as a Node’s value somewhere within the list.
  - `toString`
    - Arguments: none.
    - Returns: a string representing all the values in the Linked List, formatted as: "`{ a } -> { b } -> { c } -> NULL`"

---

## Testing - Implementation

### Write tests to prove the following functionality

1. Can successfully instantiate an empty linked list.
2. Can properly insert into the linked list.
3. The head property will properly point to the first node in the linked list.
4. Can properly insert multiple nodes into the linked list.
5. Will return true when finding a value within the linked list that exists.
6. Will return false when searching for a value in the linked list that does not exist.
7. Can properly return a collection of all the values that exist in the linked list.

**Ensure your tests are passing before you submit your solution.**

---

## Stretch Goal

Create a new branch called `doubly-linked-list`.

Using the resources available to you online, implement a doubly linked list (completely separate from your singly linked list).

---

## 2️⃣ Insertions

> Extend a Linked List to allow various insertion methods.

---

### Features:

Write the following methods:

- `append`
  - Arguments: new value.
  - Returns: nothing.
  - Adds a new node with the given value to the end of the list.
- `insertBefore`
  - Arguments: value, new value
  - Adds a new node & its given value immediately before the first node of a specified value.
- `insertAfter`
  - Arguments: value, new value
  - Adds a new node & its given value immediately after the first node of a specified value.

---

### Testing - `Insertions`

1. Can successfully add a node to the end of the linked list
2. Can successfully add multiple nodes to the end of a linked list
3. Can successfully insert a node before a node located in the middle of a linked list
4. Can successfully insert a node before the first node of a linked list
5. Can successfully insert after a node in the middle of the linked list
6. Can successfully insert a node after the last node of the linked list

---

### Stretch Goal

> Write an additional method to `delete` a node with a given value.

---

## 3️⃣ Kth From End

> k-th value from the end of a linked list.

### Features:

- `kthFromEnd`
  - Argument: a number, `k`, as a parameter.
  - Return the node’s value that is `k` places from the tail of the linked list.

---

### Testing - `kthFromEnd`

1. Where `k` is greater than the length of the linked list.
2. Where `k` and the length of the list are the same.
3. Where `k` is not a positive integer.
4. Where the linked list is of a size 1.
5. “Happy Path” where `k` is not at the end, but somewhere in the middle of the linked list.

---

### Stretch Goal

Implement a method that finds the node at the middle of the Linked List.

---

## 4️⃣ Linked List Zip

> Zip two linked lists together.

### Features:

- `zipLists`
  - Arguments: 2 linked lists.
  - Returns: One new linked list, zipped as noted.
  - Zip the two linked lists together, so that the nodes alternate between the two lists, and return a reference to the zipped list.

---

### Example

| list 1 | list 2 | output |
| --- | --- | --- |
| (**1**) -> (**3**) -> (**5**) -> (**null**) | (**2**) -> (**4** )-> (**null**) | (**1**) -> (**2**) -> (**3**) -> (**4**) -> (**5**) -> (**null**) |

---

### Testing - `zipLists`

1. “Happy Path” - Expected outcome
2. Expected failure
3. Edge Case (if applicable/obvious)

---

### Stretch Goal

> Implement another function that merges two sorted linked lists into a single sorted linked list.

---

## **Whiteboard Challenges**

### *Layout Example:*

![Whiteboard Layout Example](https://bit.ly/3WNBL9V)

---

## 5️⃣ Reverse

> Given a linked list, write a function that returns the list with all values in reverse order.

---

### Example

| Given List | Output |
| --- | --- |
| (**1**) -> (**2**) -> (**3**) -> (**null**) | (**3**) -> (**2**) -> (**1**) -> (**null**) |

---

## 6️⃣ Palindrome

> Validate whether or not a Linked List is palindrome.

---

### Example

| Given List | Output |
|--- | --- |
| **head** -> {**T**} -> {**A**} -> {**C**} -> {**O**} -> {**C**} -> {**A**} -> {**T**} | **TRUE**

---

### [Back to Top](#top)

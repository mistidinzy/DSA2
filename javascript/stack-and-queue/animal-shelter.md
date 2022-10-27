# 3. FIFO - Animal Shelter

> 🏡 **[**Home**](../../README.md)**

---

> Branch Name: `stack-queue-animal-shelter`
>
> Challenge Type: `Code Challenge / Algorithm`

---

## Feature Tasks

- Create a class called `AnimalShelter` which holds only dogs and cats.
- The shelter operates using a **`first-in, first-out`** approach.

### Implement the following methods:

- `enqueue`
  - Arguments: `animal` (can be either a dog or a cat object).
- `dequeue`
  - Arguments: `pref` (pref can be either "dog" or "cat")
  - Returns: either a `dog` or a `cat` object, based on preference.
  - If pref is not "dog" or "cat" then return `null`.

---

## Stretch Goal

If a preference isn't specified, then return whichever animal has been waiting in the shelter the ***longest***.

---

### Unit Tests

For each method that you define, write test assertions for the following conditions at **minimum**:

- “Happy Path” - Expected outcome
- Expected failure
- Edge Case (if applicable/obvious)

---

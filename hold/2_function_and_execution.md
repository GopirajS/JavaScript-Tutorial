<a href="#top" id="backToTop" style="
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
">⬆ Top</a>

<script>
document.querySelector('#backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
});
</script>

### ⚙️ **Functions and Execution**

1. [What are pure functions?](#what_are_pure_functions)

2. [What is function currying?](#what_is_function_currying)

3. [What is memoization?](#what_is_memoization)

4. [What is IIFE (Immediately Invoked Function Expression)?](<#what_is_iife>)

6. [What is debouncing?](#what_is_debouncing)

7. [What is throttling?](#what_is_throttling)

8. [What are function constructors?](#what_are_function_constructors)


9. [What is the difference between `call()`, `apply()`, and `bind()`?](<#what_is_the_difference_between_call()_apply()_and_bind()>)


<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_pure_functions"> What are Pure Functions in JavaScript?</h3>
---

### 🧠 **Definition:**

A **pure function** is a function that:

1. **Always returns the same output** for the same input.
2. **Does not cause any side effects** (doesn’t change anything outside the function).

> In simple words:
> A pure function is **predictable** and **self-contained**.

---

### ⚙️ **Example of a Pure Function:**

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always the same)
```

✅ Same input → same output, no side effects.

---

### ❌ **Example of an Impure Function:**

```js
let total = 0;

function addToTotal(a) {
  total += a; // modifies external variable (side effect)
  return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (output changes!)
```

❌ Not pure because it depends on and **changes external state**.

---

### 🧩 **Characteristics of Pure Functions:**

1. **Deterministic** → Same input always gives same output.
2. **No Side Effects** → Doesn’t modify external variables, DOM, files, or databases.
3. **Self-contained** → Only depends on input parameters.

---

### 📘 **Benefits of Pure Functions:**

- Easier to **test** and **debug**
- Predictable behavior → great for **functional programming**
- Helps in **caching/memoization** because results are consistent

---

### 🎯 **Simple Summary:**

> A **pure function** in JavaScript is a function that **always returns the same result for the same input** and **doesn’t modify anything outside itself**.
>
> Think of it as a **“black box”**: input goes in → output comes out → nothing else changes.

<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_iife" >What is an IIFE in JavaScript?</h3>

---

### 🧠 **Definition:**

**IIFE (Immediately Invoked Function Expression)** is a function that is:

1. **Declared**
2. **Executed immediately** after it’s defined

It runs **once** and doesn’t stay in the global scope.

> In simple words:
> An IIFE is a **function that runs itself instantly**.

---

### ⚙️ **Syntax:**

```js
(function() {
  console.log("This runs immediately!");
})();
```

✅ Output:

```
This runs immediately!
```

* The function is **wrapped in parentheses** `(function(){})` → makes it a **function expression**.
* The `()` at the end **calls it immediately**.

---

### 🧩 **Example with Parameters:**

```js
(function(name) {
  console.log(`Hello, ${name}!`);
})("John");
```

✅ Output:

```
Hello, John!
```

---

### 🧩 **Why Use IIFE?**

1. **Avoid polluting global scope**
   Variables inside IIFE are **private**.
2. **Encapsulation**
   Keeps code **self-contained**.
3. **Run code once**
   Useful for initialization code.

**Example:**

```js
(function() {
  let counter = 0;
  console.log("Counter initialized:", counter);
})();
console.log(typeof counter); // undefined (counter is private)
```

---

### 🎯 **Simple Summary:**

> An **IIFE** is a function in JavaScript that **runs immediately after it is created**.
>
> * Keeps variables **private**
> * Avoids **global pollution**
> * Useful for **initialization or one-time execution**

---

If you want, I can also make a **super simple diagram** to show **how IIFE works step by step**, which helps a lot for interviews. Do you want me to do that?

<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_function_currying" >What is Function Currying (Simple)?</h3>

**Currying** means **breaking a function with many arguments** into **many smaller functions**,
each taking **just one argument at a time**.

---

### 📘 **Example**

Normal function 👇

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
```

Curried version 👇

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3); // 5
```

---

### 🧠 **Think of it like this:**

You don’t give all inputs at once.
You give **one input now**, and it **remembers it**, then waits for the **next**.

---

### 🎯 **Why use it?**

- To **reuse functions** easily
- To **fix some arguments** and make specialized versions

Example:

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

---

👉 **In one line:**

> Currying means turning a function like `f(a, b)` into `f(a)(b)` — one argument at a time.

---


<span style="color:green;">============================================================================================================= </span>

<h3 id="what_is_memoization" >What is Memoization?</h3>

**Memoization** means **remembering (caching) the result of a function** so that
next time you call it with the **same input**, it **returns the saved result** instead of doing the work again.

---

### 📘 **Simple Example**

With memoization 👇

```js
function memoizedSquare() {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      console.log("Getting from cache...");
      return cache[n];
    }
    console.log("Calculating...");
    cache[n] = n * n;
    return cache[n];
  };
}

const square = memoizedSquare();

console.log(square(5)); // Calculates
console.log(square(5)); // Uses cache (faster)
```

---

### 🧠 **In Simple Words:**

> Memoization is like remembering answers to math problems so you don’t solve them again.

---

### 🎯 **Why use it?**

- Makes code **faster**
- Avoids repeating **expensive calculations**

---

👉 **In one line:**

> **Memoization** = Remembering old results to save time on future calls.


<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_debouncing"> ⭐ What is Debouncing in JavaScript?</h3>

**Debouncing means:
A function will run only after the user stops doing something for some time.**

---

## ⭐ Example

If a user is typing in a search box:

* They type "g" → wait
* They type "go" → wait
* They type "gop" → wait
* They stop typing → **now run the function**

So the function runs **only once** after typing stops.

---

## ⭐ Why we use debouncing?

* To avoid calling API many times
* To reduce unnecessary work
* To make the website faster

---

## ⭐ Very Simple Code Example

```javascript
function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func();
    }, delay);
  };
}
```

Usage:

```javascript
const search = debounce(() => {
  console.log("Search API call");
}, 500);
```

If user types fast, the function runs **only after 500ms** of no typing.



<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_throttling" >Throttling (in JavaScript)</h3>


**Throttling means:
A function will run only one time in a fixed time gap.
Even if you call it many times.**

---

## ⭐ Example

You scroll a page → browser gives many scroll events (maybe 100 times in 1 second).
But with throttling, your function runs **only once every 300ms**.

---

## ⭐ Why we use throttling?

* To stop a function from running too many times
* To make website fast
* To reduce load on browser or API

---

## ⭐ Very Simple Example Code

```javascript
function throttle(func, delay) {
  let run = true;

  return function () {
    if (run) {
      func();
      run = false;

      setTimeout(() => {
        run = true;
      }, delay);
    }
  };
}
```

Usage:

```javascript
window.addEventListener("scroll", throttle(() => {
  console.log("Scrolling...");
}, 500));
```

Even if user scrolls 100 times, your message prints **only once in 500ms**.


<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_function_constructors" >What is a Constructor Function?</h3>


A **constructor function** is a **special type of function** used to **create multiple objects with the same structure and behavior**.

It’s a pattern that came **before ES6 classes**, and it’s still important to understand because **classes are just syntactic sugar** over constructor functions.

---

### ⚙️ **Basic Example**

```js
// Constructor function (by convention, starts with a capital letter)
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  };
}

// Create objects using 'new'
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.sayHello(); // Hi, I'm Alice, and I'm 25 years old.
person2.sayHello(); // Hi, I'm Bob, and I'm 30 years old.
```

---

### 🧠 **How It Works**

When you call a function with `new`, JavaScript does four things automatically:

1. Creates a **new empty object**: `{}`
2. Sets `this` to point to that new object
3. Executes the constructor function’s body
4. Returns the newly created object automatically

So this:

```js
const person = new Person("Alice", 25);
```

is roughly the same as:

```js
const person = {};
person.__proto__ = Person.prototype;
Person.call(person, "Alice", 25);
```

---

<span style="color:green;">============================================================================================================= </span>

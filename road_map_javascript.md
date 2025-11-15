<a href="#top" id="backToTop" style=" position: fixed; bottom: 20px; right: 20px; background: #007bff; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 14px;">Top</a>

<script>
document.querySelector('#backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
});
</script>


### 🌟 **1. Introduction to JavaScript**

* [What are JavaScript versions like ES5, ES6, ESNext?](#versions)


### 🌟 **2. Variables**


* What is the difference between `var`, `let`, and `const`?
* What is hoisting? How does it affect variable declarations?
* What are variable naming rules in JS?
* What are global, block, and function scopes?
* What happens if you use a variable before declaring it?

---

### 🌟 **3. Data Types**


* What are the primitive data types in JS?
* Difference between `null` vs `undefined`?
* What is `Symbol` used for?
* What is the difference between number and bigint?
* What is type coercion?
* Difference between implicit vs explicit type conversion?
* What is the `typeof` operator and how does it behave with different types?

---

### 🌟 **4. Objects & Prototypes**


* What is an object in JavaScript?
* What is prototypal inheritance?
* How does the prototype chain work?
* What is `__proto__` vs `.prototype`?
* How do you create objects in multiple ways?
* What are the main built-in objects in JavaScript?

---

### 🌟 **5. Data Structures (from PDF)**


* What are Maps? When should we use them vs objects?
* What is the difference between Map vs WeakMap?
* What is a Set? What is a WeakSet?
* What are typed arrays and where are they used?
* What is JSON and how do you parse or stringify it?

---

### 🌟 **6. Equality & Comparison**


* Difference between `==` and `===`?
* What is `Object.is()` and when is it used?
* What is SameValueZero?
* How does JavaScript compare values internally?

---

### 🌟 **7. Loops & Iterations**


* Difference between `for`, `while`, and `do…while` loops?
* When should you use `for...in` vs `for...of`?
* What is the difference between iterables and iterators?
* What does `break` and `continue` do?

---

### 🌟 **8. Control Flow**


* How do `if`, `else`, and `switch` work?
* What is the purpose of `throw`?
* How does `try...catch...finally` work?
* What is an error object?

---

### 🌟 **9. Expressions & Operators**


* What are arithmetic, logical, and comparison operators?
* What is the difference between `===` and `Object.is`?
* What is the unary operator?
* What is the comma operator?
* What is the conditional (ternary) operator?

---

### 🌟 **10. Functions**


* What are the different ways to declare a function in JS?
* What is an arrow function and how does it differ from regular functions?
* What are default and rest parameters?
* What is the `arguments` object?
* What is recursion?
* What is an IIFE (Immediately Invoked Function Expression)?
* What is lexical scoping?
* What is a closure and why is it important?

---

### 🌟 **11. `this` Keyword**


* How does `this` behave in:

  * A regular function?
  * An arrow function?
  * A method inside an object?
  * An event handler?
  * A standalone function?
* What is `call`, `apply`, `bind` used for?
* What is explicit binding?

---

### 🌟 **12. Asynchronous JavaScript**


* What is the event loop?
* What is the call stack and task queue?
* Difference between macrotask and microtask queues?
* What are callbacks?
* What is callback hell?
* What are Promises and how do they work internally?
* Difference between `async` and `await`?
* What is `setTimeout` and `setInterval`?
* How does the fetch API work?

---

### 🌟 **13. Advanced Topics from PDF**

### **Classes**

* What are classes in JavaScript?
* How do constructor, methods, getters, and setters work?

### **Modules**

* Difference between CommonJS and ESM modules?
* What is `import` and `export`?
* Why does JS need modules?

### **Iterators & Generators**

* What is an iterator?
* What is a generator (`function*`)?
* How do generator functions pause and resume?

### **Memory Management**

* What is memory allocation?
* What is garbage collection?
* Difference between mark-and-sweep vs reference counting?
* What causes memory leaks?

### **DOM APIs**

* What is the DOM?
* How do you select elements?
* What is event bubbling and capturing?
* What is event delegation?

### **Debugging**

* How to debug in browser DevTools?
* What causes memory leaks?
* How to identify performance issues?

---
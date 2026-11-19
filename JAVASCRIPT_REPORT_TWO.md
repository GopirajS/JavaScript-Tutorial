
<!-- Page top -->
<div id="top"></div>

<!-- Back to Top button -->
<a href="#top" id="backToTop">⬆ Top</a>

<style>

html {
    scroll-behavior: smooth;
}

#backToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    z-index: 9999;
}

.answer-heading {
    color: green;
    text-align: center;
    cursor: pointer;
    scroll-margin-top: 20px;
}

.answer-heading:hover {
    color: darkgreen;
}

</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h2.answer-heading");
    headings.forEach(function (heading) {
        heading.addEventListener("click", function () {
            const questionsList = document.getElementById("questions-list");
            if (questionsList) {
                questionsList.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
</script>


## **Level 1 – JavaScript Fundamentals**

### **1. Variables and Data Types**

- [1.1 What is JavaScript?](#1.1)
- 1.2 What are variables in JavaScript?
- 1.3 What is the difference between `var`, `let`, and `const`?
- 1.4 What is variable declaration, initialization, and assignment?
- 1.5 What are primitive data types?
- 1.6 What are non-primitive data types?
- 1.7 What is the difference between `undefined` and `null`?
<!-- - 1.8 What is the difference between `typeof` and `instanceof`? -->
- [1.9 What is dynamic typing?](#1.9)
- [1.10 What is type coercion?](#1.10)
- 1.11 What is the difference between implicit and explicit conversion?
- 1.12 What are truthy and falsy values?
- 1.13 What is `NaN`?
- [1.14 What is the difference between `==` and `===`?](#1.14)
- 1.15 What is the difference between `Object` and `Array`?


**Coding practice:**

- Declare variables using `var`, `let`, and `const`.
- Identify the data type of different values.
- Convert a string into a number.
- Check whether a value is truthy or falsy.



### **2. Operators**

 - [2.1 What are arithmetic operators?](#2.1)
 - 2.2 What are comparison operators?
 - 2.3 What are logical operators?
 - 2.4 What is the difference between `&&` and `||`?
 - [2.5 What is the logical NOT operator  `!`?](#2.5)
 - 2.6 What is the ternary operator?
 - 2.7 What is the nullish coalescing operator (`??`)?
 - 2.8 What is optional chaining (`?.`)?
 - 2.9 What is the difference between `||` and `??`?
 - 2.10 What are assignment operators?
 - [2.11 What are increment and decrement operators?](#2.11)
 - [2.12 What is operator precedence?](#2.12)

**Coding practice:**

- Find the largest of two numbers.
- Check whether a number is even or odd.
- Use ternary operators to check eligibility.
- Use `??` to provide default values.
- Access nested object properties using `?.`.


### **3. Conditional Statements**

- 3.1 What is an `if` statement?
- 3.2 What is an `if...else` statement?
- [3.3 What is an `else if` ladder?](#3.3)
- 3.4 What is a nested `if` statement?
- [3.5 What is a `switch` statement?](#3.5)
- 3.6 What is the difference between `if...else` and `switch`?
- 3.7 What is the purpose of `break`?
- 3.8 What happens if we forget `break` in a switch statement?
- 3.9 Can we use conditions inside conditions?
- 3.10 When should we use `switch` instead of `if...else`?

**Coding practice:**

- Find positive, negative, or zero.
- Grade calculation based on marks.
- Login validation.
- Check user role (admin, manager, user).
- Calculate discount based on purchase amount.


### **4. Loops**

- 4.1 What is a loop?
- [4.2 What is a `for` loop?](#4.2)
- [4.3 What is a `while` loop?](#4.3)
- [4.4 What is a `do...while` loop?](#4.4)
- [4.5 What is the difference between `for...of` and `for...in`?](#4.5)
- 4.6 What is the difference between `while` and `do...while`?
- 4.7 What is a nested loop?
- 4.8 What is an infinite loop?
- 4.9 What is the purpose of `break`?
- 4.10. What is the purpose of `continue`?

**Coding practice:**

- Print numbers from 1 to 100.
- Print multiplication tables.
- Find the sum of numbers.
- Reverse a number.
- Print star patterns.
- Find even and odd numbers in an array.
- Find factorial of a number.


### **5. Functions**

- 5.1 What is a function?
- 5.2 Why do we use functions?
- 5.3 What is a function declaration?
- 5.4 What is a function expression?
- 5.5 What is an anonymous function?
- 5.6 What is an arrow function?
- 5.7 What is the difference between normal and arrow functions?
- [5.8 What are parameters and arguments?](#5.8)
- 5.9 What is a return statement?
- 5.10 What happens if we don't return anything?
- 5.11 What are default parameters?
- 5.12 What is a callback function?
- [5.13 What is a higher-order function?](#5.13)
- [5.14 What is a pure function?](#5.14)
- 5.15 What is a recursive function?
- 5.16 What is an IIFE?
- [5.17 What is function hoisting?](#5.17)

**Coding practice:**

- Create a function to add two numbers.
- Create a function to check palindrome.
- Create a function to find factorial.
- Pass one function as an argument to another.
- Create a calculator using functions.




### **6. Arrays**

- 6.1 What is an array?
- 6.2 How do you create an array?
- 6.3 How do you access array elements?
- [6.4 What is the difference between `push()` and `pop()`?](#6.4)
- [6.5 What is the difference between `shift()` and `unshift()`?](#6.5)
- [6.6 What is the difference between `slice()` and `splice()`?](#6.6)
- [6.7 What is `includes()`?](#6.7)
- [6.8 What is `indexOf()`?](#6.8)
- [6.9 What is `find()`?](#6.9)
- [6.10 What is `findIndex()`?](#6.10)
- [6.11 What is `filter()`?](#6.11)
- [6.12 What is `map()`?](#6.12)
- [6.13 What is `reduce()`?](#6.13)
- [6.14 What is `forEach()`?](#6.14)
- [6.15 What is the difference between `map()` and `forEach()`?](#6.15)
- 6.16 What is the difference between `filter()` and `find()`?
- [6.17 What is method chaining?](#6.17)
- [6.18 What is array destructuring?](#6.18)
- [6.19 What is the spread operator in arrays?](#6.19)
- 6.20 What is array flattening?
- [6.21 What is the difference between `sort()` and `reverse()`?](#6.21)
- [6.22 What is the difference between `some()` and `every()`?](#6.22)

**Important coding practice:**

- Find the sum of an array using `reduce()`.
- Find the maximum and minimum number.
- Remove duplicate values.
- Find even numbers using `filter()`.
- Find a user by ID using `find()`.
- Convert an array of objects into an array of names using `map()`.
- Group employees by department.
- Calculate total order amount.
- Sort products by price.
- Find the second-largest number.
- Flatten a nested array.



### **7. Objects**

- [7.1 What is an object?](#7.1)
- [7.2 How do you create an object?](#7.2)
- [7.3 How do you access object properties?](#7.3)
<!-- - [7.4 What is dot and bracket notation?](#7.4) -->
- [7.6 How do you add properties to an object?](#7.6)
- [7.7 How do you delete properties?](#7.7)
- [7.8 What is object destructuring?](#7.8)
- [7.9 What is the spread operator in objects?](#7.9)
- [7.10 What is object property shorthand?](#7.10)
- [7.11 What is a computed property name?](#7.11)
- 7.12 What is `Object.keys()`?
- 7.13 What is `Object.values()`?
- 7.14 What is `Object.entries()`?
- 7.15 What is `Object.assign()`?
- [7.16 What is the difference between shallow copy and deep copy?](#7.16)
- [7.17 What is object reference?](#7.17)
- 7.18 What is nested object access?
- 7.19 What is optional chaining?
- 7.20 What is the difference between `Object.freeze()` and `Object.seal()`?

**Coding practice:**

- Create an employee object.
- Add and delete object properties.
- Extract values using destructuring.
- Merge two objects.
- Clone an object.
- Convert object values into an array.
- Find employees whose salary is above 50,000.


### **8. Strings**

- 8.1 What is a string?
- 8.2 What is a template literal?
- [8.3 What is string interpolation?](#8.3)
- [8.4 What is `length`?](#8.4)
- [8.5 What is `charAt()`?](#8.5)
- [8.6 What is `includes()`?](#8.6)
- [8.7 What is `indexOf()`?](#8.7)
- [8.8 What is `slice()`?](#8.8)
- [8.9 What is `substring()`?](#8.9)
- [8.10 What is `replace()`?](#8.10)
- [8.11 What is `replaceAll()`?](#8.11)
- [8.12 What is `split()`?](#8.12)
- [8.13 What is `join()`?](#8.13)
- [8.14 What is `trim()`?](#8.14)
- 8.15 What is `toUpperCase()`?
- 8.16 What is `toLowerCase()`?
- 8.17 What is the difference between `slice()` and `substring()`?

**Coding practice:**

- Reverse a string.
- Check palindrome.
- Count vowels.
- Find duplicate characters.
- Count the frequency of each character.
- Convert a sentence into an array of words.
- Find the longest word.


### **9. Scope, Hoisting and Closures**

- [9.1 What is scope in JavaScript?](#9.1)
- 9.2 What is global scope?
- 9.3 What is function scope?
- 9.4 What is block scope?
- 9.5 What is lexical scope?
- 9.6 What is hoisting?
- 9.7 How does hoisting work with `var`?
- 9.8 How does hoisting work with `let` and `const`?
- 9.9 What is the temporal dead zone?
- 9.10 What is a closure?
- [9.11 Why do we use closures?](#9.11)
- [9.12 What is a real-world use case of closures?](#9.12)
- [9.13 What is variable shadowing?](#9.13)
- 9.14 What is the difference between scope and context?
- 9.15 How can closures help maintain private variables?


### **10.`this`Keyword and Execution Context**

- 10.1 What is `this` in JavaScript?
- 10.2 How does `this` work in a normal function?
- 10.3 How does `this` work in an arrow function?
- 10.4 What is the global execution context?
- 10.5 What is the function execution context?
- 10.6 What is the call stack?
- 10.7 What is the difference between `call()`, `apply()`, and `bind()`?
- 10.8 What is the `new` keyword?
- 10.9 What is the difference between function context and lexical context?
- 10.10 Why does `this` behave differently inside callbacks?

**Coding practice:**

- Create an object method using `this`.
- Change `this` using `call()`.
- Pass arguments using `apply()`.
- Create a reusable function using `bind()`.



### **11. ES6+ Features**

- [11.1 What is ES6?](#11.1)
- [11.2 What are template literals?](#11.2)
- [11.3 What is destructuring?](#11.3)
- [11.4 What is the spread operator?](#11.4)
- [11.5 What is the rest parameter?](#11.5)
- [11.6 What is the difference between spread and rest?](#11.6)
- [11.7 What are default parameters?](#11.7)
- [11.8 What are arrow functions?](#11.8)
- [11.9 What are enhanced object literals?](#11.9)
- [11.10 What are modules?](#11.10)
- [11.11 What are named exports?](#11.11)
- [11.12 What are default exports?](#11.12)
- [11.13 What is optional chaining?](#11.13)
- [11.14 What is nullish coalescing?](#11.14)
- [11.15 What are computed properties?](#11.15)



### **12. Callback Functions and Higher-Order Functions**

- [12.1 What is a callback?](#12.1)
- [12.2 Why do we use callbacks?](#12.2)
- [12.3 What is callback hell?](#12.3)
- [12.4 What is a higher-order function?](#12.4)
- [12.5 How does `map()` internally work?](#12.5)
- [12.6 How does `filter()` internally work?](#12.6)
- [12.7 How does `reduce()` internally work?](#12.7)
- [12.8 Can we create our own higher-order function?](#12.8)
- [12.9 What is function composition?](#12.9)
- [12.10 What is the difference between synchronous and asynchronous callbacks?](#12.10)

**Coding practice:**

- Write your own `map()` function.
- Write your own `filter()` function.
- Write your own `reduce()` function.
- Create a function that accepts another function as an argument.



### **13. Asynchronous JavaScript**

- 13.1 What is synchronous JavaScript?
- 13.2 What is asynchronous JavaScript?
- 13.3 What is blocking code?
- 13.4 What is non-blocking code?
- 13.5 What is the event loop?
- 13.6 What is the call stack?
- 13.7 What is the callback queue?
- 13.8 What is the microtask queue?
- 13.9 What is the difference between microtasks and macrotasks?
- 13.10 What is `setTimeout()`?
- 13.11 What is `setInterval()`?
- 13.12 What is `clearTimeout()`?
- 13.13 What is `clearInterval()`?
- 13.14 What is a Promise?
- 13.15 What are Promise states?
- 13.16 What is `.then()`?
- 13.17 What is `.catch()`?
- 13.18 What is `.finally()`?
- 13.19 What is Promise chaining?
- 13.20 What is `async/await`?
- 13.21 What is the difference between Promise and async/await?
- 13.22 What is `Promise.all()`?
- 13.23 What is `Promise.allSettled()`?
- 13.24 What is `Promise.race()`?
- 13.25 What is `Promise.any()`?
- [13.26 What is error handling in asynchronous code?](#13.26)
- 13.27 What is `try...catch`?
- 13.28 What happens when an async function throws an error?

**Coding practice:**

- Create a Promise.
- Handle Promise success and failure.
- Convert Promise chaining into async/await.
- Fetch API data.
- Execute multiple API calls using `Promise.all()`.
- Handle API failures using `try...catch`.
- Create a delay function using Promise.


### **14. DOM Manipulation**

- 14.1 What is the DOM?
- [14.2 What is the DOM tree?](#14.2)
- 14.3 What is `document`?
- 14.4 What is `getElementById()`?
- 14.5 What is `querySelector()`?
- 14.6 What is `querySelectorAll()`?
- 14.7 What is the difference between `innerHTML` and `textContent`?
- 14.8 What is `innerText`?
- 14.9 How do you create HTML elements using JavaScript?
- 14.10 What is `appendChild()`?
- 14.11 What is `remove()`?
- 14.12 What is `classList`?
- 14.13 What are DOM events?
- 14.14 What is event bubbling?
- 14.15 What is event capturing?
- 14.16 What is event delegation?
- 14.17 What is `preventDefault()`?
- 14.18 What is `stopPropagation()`?
- 14.19 What is the difference between `target` and `currentTarget`?
- 14.20 What is the difference between `addEventListener()` and inline event handlers?

**Coding practice:**

- Create a counter application.
- Create a todo list.
- Build form validation.
- Create a dropdown.
- Implement event delegation for a list.

### **15. Error Handling and Debugging**

- [15.1 What are JavaScript errors?](#15.1)
- [15.2 What is a syntax error?](#15.2)
- [15.3 What is a reference error?](#15.3)
- [15.4 What is a type error?](#15.4)
- [15.5 What is a runtime error?](#15.5)
- [15.6 What is `try...catch`?](#15.6)
- [15.7 What is `finally`?](#15.7)
- [15.8 What is `throw`?](#15.8)
- [15.9 How do you create a custom error?](#15.9)
- [15.10 What is debugging?](#15.10)
- [15.11 How do you use `console.log()`?](#15.11)
- [15.12 How do you use browser developer tools?](#15.12)
- [15.13 What are breakpoints?](#15.13)
- [15.14 How do you debug asynchronous code?](#15.14)




### **16. Prototypes and Inheritance**

- [16.1 What is a prototype?](#16.1)
- [16.2 What is the prototype chain?](#16.2)
- [16.3 What is prototypal inheritance?](#16.3)
- [16.4 What is `__proto__`?](#16.4)
- [16.5 What is `prototype`?](#16.5)
- [16.6 What is the difference between `prototype` and `__proto__`?](#16.6)
- [16.7 What is constructor function?](#16.7)
- [16.8 What is inheritance?](#16.8)
- [16.9 What is `Object.create()`?](#16.9)
- [16.10 What is the difference between classical and prototypal inheritance?](#16.10)
- [16.11 How does JavaScript search for an object property?](#16.11)



### **17. Classes and OOP**

- 17.1 What is a class?
- 17.2 What is a constructor?
- 17.3 What is an object instance?
- 17.4 What is inheritance using `extends`?
- 17.5 What is `super()`?
- 17.6 What are static methods?
- 17.7 What are getters and setters?
- 17.8 What is encapsulation?
- 17.9 What is abstraction?
- 17.10 What is polymorphism?
- 17.11 What is method overriding?
- 17.12 What is the difference between a class and a constructor function?
- 17.13 What are private class fields?
- 17.14 What is the difference between an instance method and a static method?

### **18. Memory Management**

- 18.1 How does JavaScript manage memory?
- 18.2 What is memory allocation?
- 18.3 What is garbage collection?
- 18.4 What is a memory leak?
- 18.5 What causes memory leaks?
- 18.6 How can closures cause memory leaks?
- 18.7 What is the difference between stack and heap memory?
- 18.8 What is a strong reference?
- 18.9 What is a weak reference?
- 18.10 What are `WeakMap` and `WeakSet`?
- 18.11 How can you identify memory leaks in browser developer tools?

### **19. Advanced Data Structures**

- [19.1 What is a `Set`?](#19.1)
- [19.2 What is a `Map`?](#19.2)
- [19.3 What is the difference between `Map` and `Object`?](#19.3)
- [19.4 What is the difference between `Set` and `Array`?](#19.4)
- [19.5 What is `WeakMap`?](#19.5)
- [19.6 What is `WeakSet`?](#19.6)
- [19.7 What is a `Symbol`?](#19.7)
- [19.8 What is an iterator?](#19.8)
- [19.9 What is an iterable?](#19.9)
- [19.10 What is a generator function?](#19.10)
- [19.11 What is the `yield` keyword?](#19.11)
- [19.12 What is the difference between an iterator and a generator?](#19.12)




### **20. Modules and Browser APIs**

- [20.1 What are JavaScript modules?](#20.1)
- [20.2 What is `import`?](#20.2)
- [20.3 What is `export`?](#20.3)
- [20.4 What is CommonJS?](#20.4)
- [20.5 What is ES Module?](#20.5)
- [20.6 What is the difference between `require()` and `import`?](#20.6)
- [20.7 What is the Fetch API?](#20.7)
- [20.8 What is the URL API?](#20.8)
- [20.9 What is localStorage?](#20.9)
- [20.10 What is sessionStorage?](#20.10)
- [20.11 What is the difference between localStorage and sessionStorage?](#20.11)
- [20.12 What are cookies?](#20.12)
- [20.13 What is the difference between cookies and localStorage?](#20.13)
- [20.14 What is JSON?](#20.14)
- [20.15 What is `JSON.stringify()`?](#20.15)
- [20.16 What is `JSON.parse()`?](#20.16)
- [20.17 What is CORS?](#20.17)
- [20.18 What are Web Workers?](#20.18)
- [20.19 What is the Intersection Observer API?](#20.19)
- [20.20 What is the Mutation Observer API?](#20.20)



### **21. Performance Optimization**

- [21.1 What is debouncing?](#21.1)
- [21.2 What is throttling?](#21.2)
- [21.3 What is lazy loading?](#21.3)
- [21.4 What is code splitting?](#21.4)
- [21.5 What is caching?](#21.5)
- [21.6 What is memoization?](#21.6)
- [21.7 What is event delegation?](#21.7)
- [21.8 What is tree shaking?](#21.8)
- [21.9 What is minification?](#21.9)
- [21.10 How do you optimize large arrays?](#21.10)
- [21.11 How do you optimize multiple API requests?](#21.11)
- [21.12 How do you prevent unnecessary DOM updates?](#21.12)


### **22. Security**

- [22.1 What is XSS?](#22.1)
- [22.2 What is CSRF?](#22.2)
- [22.3 What is SQL injection?](#22.3)
- [22.4 What is input validation?](#22.4)
- [22.5 What is output sanitization?](#22.5)
- [22.6 Why should we avoid `eval()`?](#22.6)
- [22.7 Why should sensitive tokens not be stored carelessly?](#22.7)
- [22.8 What is Content Security Policy?](#22.8)
- [22.9 How can you protect API requests?](#22.9)
- [22.10 How do you handle authentication securely?](#22.10)

### **23. JavaScript Coding and DSA**

- 23.1 Reverse a string.
- 23.2 Check whether a string is a palindrome.
- 23.3 Find the largest number in an array.
- 23.4 Find the second-largest number.
- 23.5 Remove duplicate elements.
- 23.6 Find missing numbers in an array.
- 23.7 Find duplicate elements.
- 23.8 Count the frequency of each element.
- 23.9 Find the intersection of two arrays.
- 23.10 Merge two sorted arrays.
- 23.11 Find two numbers whose sum equals a target.
- 23.12 Find factorial using recursion.
- 23.13 Generate Fibonacci numbers.
- 23.14 Check whether a number is prime.
- 23.15 Sort an array without using `sort()`.
- 23.16 Find the longest substring without repeating characters.
- 23.17 Group anagrams.
- 23.18 Find the most frequent character.
- 23.19 Implement binary search.
- 23.20 Implement bubble sort.
- 23.21 Implement selection sort.
- 23.22 Implement a stack.
- 23.23 Implement a queue.
- 23.24 Find the maximum sum of a subarray.
- 23.25 Analyze time and space complexity.

### **24. Real-World JavaScript Scenarios**

These are especially important for experienced developers.

- 24.1 How do you handle multiple API calls simultaneously?
- 24.2 How do you prevent duplicate API requests?
- 24.3 How do you implement retry logic for failed API calls?
- 24.4 How do you handle API timeouts?
- 24.5 How do you implement pagination?
- 24.6 How do you process 100,000 records efficiently?
- 24.7 How do you group transactions by user ID?
- 24.8 How do you calculate the total amount of all orders?
- 24.9 How do you implement a reusable validation function?
- 24.10 How do you handle unexpected API response data?
- 24.11 How do you avoid modifying the original array or object?
- 24.12 How do you manage shared data between multiple functions?
- 24.13 How do you handle concurrent asynchronous operations?
- 24.14 How do you implement a reusable debounce function?
- 24.15 How do you debug a production JavaScript issue?

## **Recommended learning order**

| Stage | Topics                            | Priority              |
| ----- | --------------------------------- | --------------------- |
| 1     | Variables, data types, operators  | Essential             |
| 2     | Conditions, loops, functions      | Essential             |
| 3     | Arrays, objects, strings          | Essential             |
| 4     | Scope, hoisting, closures, `this` | Very high             |
| 5     | ES6+, callbacks, HOF              | Very high             |
| 6     | Promises, async/await, event loop | Very high             |
| 7     | DOM, events, error handling       | High                  |
| 8     | Prototypes, classes, OOP          | High                  |
| 9     | Memory, Map, Set, modules         | Advanced              |
| 10    | Performance, security, Node.js    | Professional          |
| 11    | DSA and real-world scenarios      | Interview preparation |


<h2  class="answer-heading" id="1.1">1.1 What is JavaScript?</h2>


💡 **JavaScript** is a programming language used to make websites **interactive and dynamic**.

It helps us perform actions like button clicks, form validation, animations, API calls, and updating webpage content.

**🔑 Key Points:**

- 💻 **Programming Language:** Used to write instructions for computers.
- 🖱️ **Interactive:** Responds to user actions like clicks and typing.
- 🔄 **Dynamic:** Updates webpage content without reloading.
- 🎨 **Frontend:** Works with HTML and CSS to create websites.
- ⚙️ **Backend:** Runs on servers using Node.js.

**🌍 Real-Time Example:**

When you click a Login button:

1. 🔍 JavaScript checks the username and password.
2. 📡 Sends login details to the backend API.
3. ✅ Displays a success or error message.

**🧠 Remember:**

- HTML → Structure 🏗️
- CSS → Design 🎨
- JavaScript → Functionality ⚙️


<h2  class="answer-heading" id="1.9">1.9 What is Dynamic Typing in JavaScript?</h2>


💡 **Dynamic Typing** means variable data types are determined and updated at **runtime (while the code executes)** rather than at compile time.

JavaScript automatically identifies the data type based on the value assigned to a variable. We don't need to manually declare the data type.

**🔑 Key Points:**

- 🔤 **Automatic Type Detection:** JavaScript automatically identifies the data type.
- 🔄 **Changeable:** A variable can hold different data types during execution.
- ⚡ **Runtime:** Data types are determined while the program is running.
- 🚫 **No Manual Declaration:** We don't need to specify whether a variable is a number, string, or boolean.

**💻 Example:**

```js
let data = 100;
console.log(typeof data); // number

data = "Hello";
console.log(typeof data); // string

data = true;
console.log(typeof data); // boolean
```

**📤 Output:**

```js
number
string
boolean
```

**🧠 Remember:**

JavaScript is a **dynamically typed language** because variable data types are determined at **runtime**, and the same variable can store different data types during program execution.

<h2  class="answer-heading" id="1.10">1.10 What is Type Coercion in JavaScript?</h2>


💡 **Type Coercion** means JavaScript automatically changes one data type into another.

**🔑 Key Points:**

- JavaScript converts data types automatically.
- String can become a number.
- Number can become a string.

**💻 Example 1:**

```
let a = 10;
let b = "20";

console.log(a + b);
```

**📤 Output:**

```
1020
```

**🧠 Remember:**

Type Coercion = **Automatic data type conversion by JavaScript.**

<h2  class="answer-heading" id="1.14">1.14 What is the difference between`==`and`===`in JavaScript?</h2>


💡 Both are **comparison operators**, but they work differently.

### **1. 🔹 Double Equal (**`==`**)**

- Called **Loose Equality**.
- Compares values after automatic type conversion.
- Does not strictly check data types.

```js
console.log(10 == "10"); // true
```

### **2. 🔹 Triple Equal (**`===`**)**

- Called **Strict Equality**.
- Compares both **value and data type**.
- Does not perform automatic type conversion.

```js
console.log(10 === "10"); // false
```

### **🔑 Key Differences**

| `==`                          | `===`                 |
| ----------------------------- | --------------------- |
| Loose Equality                | Strict Equality       |
| Checks value after conversion | Checks value and type |
| Allows type conversion        | No type conversion    |

🧠 **Remember:**

- `==` → Checks value.
- `===` → Checks value + data type.

⭐ **Interview Tip:** Always prefer `===` to avoid unexpected type conversion issues.


<h2  class="answer-heading" id="2.1">2.1 What are Arithmetic Operators in JavaScript?</h2>

### ****

💡 **Arithmetic Operators** are used to perform mathematical calculations in JavaScript.

**🔑 Arithmetic Operators:**

| Operator | Name                | Example  | Result     |
| -------- | ------------------- | -------- | ---------- |
| `+`      | Addition            | `10 + 5` | 15         |
| `-`      | Subtraction         | `10 - 5` | 5          |
| `*`      | Multiplication      | `10 * 5` | 50         |
| `/`      | Division            | `10 / 5` | 2          |
| `%`      | Modulus (remainder) | `10 % 3` | 1          |
| `**`     | Exponentiation      | `2 ** 3` | 8          |
| `++`     | Increment           | `a++`    | Add 1      |
| `--`     | Decrement           | `a--`    | Subtract 1 |


**🧠 Remember:**

- `()` → First
- `**` → Second
- `*`, `/`, `%` → Third
- `+`, `-` → Fourth

<h2  class="answer-heading" id="2.5">2.5 What is the Logical NOT (**`!`**) Operator?</h2>



💡 The **Logical NOT (**`!`**) operator** reverses a boolean value.

- `true` becomes `false`.
- `false` becomes `true`.

**💻 Example:**

```
let isLoggedIn = true;

console.log(!isLoggedIn);
console.log(!false);
```

**📤 Output:**

```
false
true
```

<h2  class="answer-heading" id="2.11">2.11 What are Increment and Decrement Operators?</h2>

💡 These operators increase or decrease a variable's value by **1**.

**🔑 Operators:**

| Operator | Meaning                | Example |
| -------- | ---------------------- | ------- |
| `++`     | Increment (add 1)      | `a++`   |
| `--`     | Decrement (subtract 1) | `a--`   |

**💻 Example:**

```js
let a = 10;

a++;
console.log(a); // 11

a--;
console.log(a); // 10
```

**Prefix vs Postfix:**

```js
let a = 5;

console.log(++a); // 6 (increase first)
console.log(a++); // 6 (use first, increase later)
console.log(a);   // 7
```

- **Prefix (**`++a`**):** Increase first, then use the value.
- **Postfix (**`a++`**):** Use the value first, then increase it.

**🧠 Remember:**

- `++` = Add 1
- `--` = Subtract 1

<h2  class="answer-heading" id="2.12">2.12 What is Operator Precedence in JavaScript?</h2>


💡 **Operator Precedence** determines the order in which operators are evaluated in an expression.

**🔑 Key Points:**

- 🥇 Higher precedence operators execute first.
- ➡️ Lower precedence operators execute later.
- 🔄 Parentheses `()` can change the evaluation order.

**💻 Example:**

```js
let result = 10 + 5 * 2;

console.log(result);
```

**Output:**

```js
20
```

**Why?**

1. Multiplication (`*`) executes first: `5 * 2 = 10`.
2. Addition (`+`) executes next: `10 + 10 = 20`.

**🧠 Remember:**

- `*` → Higher precedence
- `+` → Lower precedence
- `()` → Used to control the order of execution.


<h2  class="answer-heading" id="3.3">3.3 What is an`else if`ladder in JavaScript?</h2>



💡 An **else if ladder** is used to check multiple conditions. JavaScript executes the block of the first condition that is `true`.

**🔑 Key Points:**

- 🔍 Checks multiple conditions one by one.
- ✅ Executes the first true condition.
- ❌ If no condition is true, the `else` block executes.
- 🎯 Useful for decision-making in programs.

**💻 Example:**

```js
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

**📤 Output:**

```
Grade B
```

**🧠 Remember:**

`if` → First condition

`else if` → Checks additional conditions

`else` → Executes when all conditions are false.


<h2  class="answer-heading" id="3.5">3.5 What is a`switch`statement in JavaScript?</h2>


💡 A **switch statement** is used to execute different blocks of code based on a matching value.

**🔑 Key Points:**

- 🔍 Checks a value against multiple cases.
- ✅ Executes the matching `case`.
- 🛑 `break` stops execution from continuing to the next case.
- 🔚 `default` executes when no case matches.

**💻 Example:**

```js
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

**📤 Output:**

```
Tuesday
```

**🧠 Remember:**

- `switch` → Checks the value.
- `case` → Matches the value.
- `break` → Stops the switch.
- `default` → Runs if no case matches.

⭐ **Real-time Example:** Used for checking payment status, user roles, order status, and menu options.

<h2  class="answer-heading" id="4.2">4.2 What is a`for`loop?</h2>


💡 A **for loop** is used to execute a block of code repeatedly until a specified condition becomes false.

**🔑 Key Points:**

- 🔄 Repeats code multiple times.
- 🔢 Uses a counter to track iterations.
- 🎯 Contains three parts: initialization, condition, and increment/decrement.

**💻 Syntax:**

```js
for (initialization; condition; increment) {
    // Code to execute
}
```

**💻 Example:**

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**📤 Output:**

```
1
2
3
4
5
```

**🧠 Remember:**

- `let i = 1` → Starting point.
- `i <= 5` → Condition to continue.
- `i++` → Increases the value by 1.

⭐ **Real-time Example:** Used to display user lists, process orders, and repeat tasks.

<h2  class="answer-heading" id="4.3">4.3 What is a `while` Loop?</h2>

💡 A **while loop** repeatedly executes code as long as the given condition is `true`.

**Syntax:**

```js
// 1. Initialization
let variableName = initialValue;

// 2. Condition check
while (condition) {
  // 3. Code block to execute
  codeToExecute;

  // 4. Update step (prevents infinite loops)
  updateVariable;
}
```

**💻 Example:**

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

**📤 Output:**

```
1
2
3
4
5
```

**How does it work?**

1. Check the condition: `i <= 5`.
2. If `true`, execute the code.
3. Increase `i` by 1.
4. Check the condition again.
5. Stop when the condition becomes `false`.

**🧠 Remember:** A `while` loop continues running **until the condition becomes false**.

<h2  class="answer-heading" id="4.4">4.4 What is a `do...while` Loop?</h2>

💡 A **do...while loop** executes the code at least once, then checks the condition.

**Syntax:**

```js
// 1. Initialization
let variableName = initialValue;

do {
  // 2. Code block (always runs at least once)
  codeToExecute;

  // 3. Update step
  updateVariable;
} while (condition); // 4. Condition check happens after execution
```

**💻 Example:**

```js
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

**📤 Output:**

```
1
2
3
4
5
```

**How does it work?**

1. Execute the code first.
2. Check the condition.
3. If `true`, execute again.
4. If `false`, stop.

**💻 Important Example:**

```
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

**Output:**

```
10
```

Even though the condition is `false`, the code executes once.

**🧠 Remember:**

- `while` → Checks condition first.
- `do...while` → Executes first, checks condition later.


<h2  class="answer-heading" id="4.5">What are`for...of` and`for...in` in JavaScript?</h2>


💡 Both are **looping statements** used to get data one by one.

**1.`for...of` – Get Values**

Used to get each value from an array or string.

```js
let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**Output:**

```
Apple
Mango
Orange
```

**2.&#x20;**`for...in`**&#x20;– Get Keys**

Used to get object property names (keys). For arrays, it gives indexes.

```js
let user = {
    name: "Arun",
    age: 25
};

for (let key in user) {
    console.log(key);
}
```

**Output:**

```
name
age
```

**🔑 Main Difference:**

| Loop       | What does it return? |
| ---------- | -------------------- |
| `for...of` | Values               |
| `for...in` | Keys / Indexes       |

**🧠 Easy way to remember:**

- `of` = Value
- `in` = Key

For arrays, usually use `for...of` when you need the values.


<h2  class="answer-heading" id="5.8">5.8 What are Parameters and Arguments in JavaScript?</h2>

💡 **Parameters** are variables defined in a function. **Arguments** are the actual values passed to the function when calling it.

**🔑 Key Points:**

- 📝 **Parameters:** Variables declared when creating a function.
- 📥 **Arguments:** Actual values passed when calling a function.
- 🔄 Arguments are assigned to their matching parameters.

**💻 Example:**

```js
function add(a, b) {  // Parameters
    return a + b;
}

add(10, 20);         // Arguments
```

**📤 Output:**

```js
30
```

**🧠 Remember:**

- `a, b` → Parameters (Function definition).
- `10, 20` → Arguments (Function call).

⭐ **Easy Trick:** Parameters are placeholders; arguments are actual values.

<h2  class="answer-heading" id="5.13">5.13 What is a Higher-Order Function in JavaScript?</h2>


💡 A **Higher-Order Function** is a function that takes another function as an argument or returns another function.

**🔑 Key Points:**

- 📥 **Accepts Function:** Takes another function as an argument.
- 📤 **Returns Function:** Can return another function.
- 🔄 **Code Reusability:** Helps reuse and organize code.

**💻 Example:**

```js
function greet(name) {
    return "Hello " + name;
}

function display(callback) {
    console.log(callback("Gopi"));
}

display(greet);
```

**📤 Output:**

```js
Hello Gopi
```

**🧠 Remember:**

A higher-order function either **accepts another function as an argument** or **returns a function**.

⭐ **Real-Time Examples:** `map()`, `filter()`, and `reduce()` are higher-order functions in JavaScript.

<h2  class="answer-heading" id="5.14">5.14 What is a Pure Function in JavaScript?</h2>


💡 A **Pure Function** is a function that always returns the same output for the same input and does not change any external data.

**🔑 Key Points:**

- 🎯 **Same Input, Same Output:** Always returns the same result for the same input.
- 🚫 **No Side Effects:** Does not modify external variables or data.
- 🔄 **Predictable:** Produces consistent results.

**💻 Example:**

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(10, 20));
```

**📤 Output:**

```
30
30
```

**🧠 Remember:**

A pure function:

- Takes input.
- Returns output.
- Does not change anything outside the function.

⭐ **Easy Trick:** Same input + Same output + No side effects = Pure Function.


<h2  class="answer-heading" id="5.17">5.17 What is Function Hoisting?</h2>

💡 **Function hoisting** means JavaScript allows you to call a function before its declaration in the code.

**💻 Example:**

```js
// Calling function before declaration
greet();

function greet() {
    console.log("Hello Arun");
}
```

**📤 Output:**

```
Hello Arun
```

**How does it work?**

JavaScript makes function declarations available before executing the code.

**🔑 Important:**

Function declarations are hoisted completely, but function expressions assigned to `let` or `const` are not available before initialization.

**Example:**

```js
sayHello(); // Error

const sayHello = function () {
    console.log("Hello");
};
```

**🧠 Remember:** Function declaration → Can call before declaration. Function expression → Cannot call before initialization.

<h2  class="answer-heading" id="6.4">6.4 What is the difference between push() and pop()?</h2>

💡 Both are JavaScript array methods used to add or remove elements at the **end of an array**.

**🔑 Difference:**

| `push()`                 | `pop()`                 |
| ------------------------ | ----------------------- |
| Adds an element          | Removes an element      |
| Adds at the end          | Removes from the end    |
| Returns new array length | Returns removed element |

**💻 Example:**

```js
let fruits = ["Apple", "Mango"];

fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);
```

**📤 Output:**

```js
["Apple", "Mango", "Orange"]
["Apple", "Mango"]
```

**🧠 Remember:**

- `push()` → Add an element at the end.
- `pop()` → Remove an element from the end.


<h2  class="answer-heading" id="6.5">6.5 What is the difference between shift() and unshift()?</h2>

💡 Both are JavaScript array methods used to add or remove elements at the **beginning of an array**.

**🔑 Difference:**

| `shift()`                  | `unshift()`              |
| -------------------------- | ------------------------ |
| Removes an element         | Adds an element          |
| Removes from the beginning | Adds at the beginning    |
| Returns removed element    | Returns new array length |

**💻 Example:**

```js
let fruits = ["Apple", "Mango"];

fruits.unshift("Orange");
console.log(fruits);

fruits.shift();
console.log(fruits);
```

**📤 Output:**

```
["Orange", "Apple", "Mango"]
["Apple", "Mango"]
```

**🧠 Remember:**

- `shift()` → Remove the first element.
- `unshift()` → Add an element at the beginning.

<h2  class="answer-heading" id="6.6">6.6 What is the difference between slice() and splice()?</h2>

💡 Both are JavaScript array methods, but they work differently.

**🔑 Difference:**

| `slice()`                      | `splice()`                          |
| ------------------------------ | ----------------------------------- |
| Extracts array elements        | Adds, removes, or replaces elements |
| Does not change original array | Changes original array              |
| Returns a new array            | Returns removed elements            |

**1.&#x20;**`slice()`**&#x20;– Get a Portion of an Array**

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 3);

console.log(result);
console.log(numbers);
```

**Output:**

```
[20, 30]
[10, 20, 30, 40, 50]
```

- `1` = Starting index.
- `3` = Ending index (not included).

**2.&#x20;**`splice()`**&#x20;– Add or Remove Elements**

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.splice(1, 2);

console.log(result);
console.log(numbers);
```

**Output:**

```
[20, 30]
[10, 40, 50]
```

- `1` = Starting index.
- `2` = Number of elements to remove.

**🧠 Remember:**

- `slice()` → Copy a portion; original array stays unchanged.
- `splice()` → Modify the original array.

**Easy trick:** `slice` = Copy, `splice` = Change.


<h2  class="answer-heading" id="6.7">6.7 What is includes()?</h2>

💡 `indexOf()` is used to find the **position (index)** of a value in an array or string.

- If the value exists → returns its index.
- If the value does not exist → returns `-1`.
- Index starts from `0`.

**💻 Example:**

```js
let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("Grapes"));
```

**📤 Output:**

```
1
3
-1
```

**🔑 Difference between&#x20;**`includes()`**&#x20;and&#x20;**`indexOf()`

| Method       | Returns              |
| ------------ | -------------------- |
| `includes()` | `true` or `false`    |
| `indexOf()`  | Index number or `-1` |

**🧠 Remember:**

- `includes()` → Checks whether a value exists.
- `indexOf()` → Finds the position of a value.

<h2  class="answer-heading" id="6.8">6.8 What is indexOf()?</h2>


💡 `indexOf()` is used to find the **position (index)** of a value in an array or string.

- If the value exists → returns its index.
- If the value does not exist → returns `-1`.
- Index starts from `0`.

**💻 Example:**

```js
let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("Grapes"));
```

**📤 Output:**

```
1
3
-1
```

**🔑 Difference between&#x20;**`includes()`**&#x20;and&#x20;**`indexOf()`

| Method       | Returns              |
| ------------ | -------------------- |
| `includes()` | `true` or `false`    |
| `indexOf()`  | Index number or `-1` |

**🧠 Remember:**

- `includes()` → Checks whether a value exists.
- `indexOf()` → Finds the position of a value.


<h2  class="answer-heading" id="6.9"> 6.9 What is find()?</h2>


💡 `find()` is used to find the **first element** in an array that matches a given condition.

- If a match is found → returns that element.
- If no match is found → returns `undefined`.
- It stops searching after the first match.

**💻 Example:**

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.find((eachItem) => eachItem > 25);

console.log(result);
```

**📤 Output:**

```
30
```

**🔑 How it works:**

1. 10 > 25 → false
2. 20 > 25 → false
3. 30 > 25 → true
4. Returns `30` and stops searching.

**🧠 Remember:**

- `find()` → Returns the first matching **element**.
- `filter()` → Returns **all matching elements**.


<h2  class="answer-heading" id="6.10">6.10 What is findIndex()?</h2>

💡 `findIndex()` is used to find the **index (position) of the first element** that matches a given condition.

- If a match is found → returns its index.
- If no match is found → returns `-1`.
- It stops searching after the first match.

**💻 Example:**

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.findIndex((eachItem) => eachItem > 25);

console.log(result);
```

**📤 Output:**

```
2
```

**🔑 How it works:**

1. 10 > 25 → false
2. 20 > 25 → false
3. 30 > 25 → true
4. Returns index `2` and stops searching.

**🔑 Difference between&#x20;**`find()`**&#x20;and&#x20;**`findIndex()`

| Method        | Returns                               |
| ------------- | ------------------------------------- |
| `find()`      | First matching element (`30`)         |
| `findIndex()` | Index of first matching element (`2`) |

**🧠 Remember:** `find()` returns the **value**; `findIndex()` returns its **position**.


<h2  class="answer-heading" id="6.11"> 6.11 What is filter()?</h2>


💡 `filter()` is used to get **all elements** from an array that match a given condition.

- Returns a new array.
- Returns all matching elements.
- If no elements match → returns an empty array `[]`.
- Does not modify the original array.

**💻 Example:**

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter((eachItem) => eachItem > 25);

console.log(result);
```

**📤 Output:**

```
[30, 40, 50]
```

**🔑 How it works:**

1. 10 > 25 → false
2. 20 > 25 → false
3. 30 > 25 → true
4. 40 > 25 → true
5. 50 > 25 → true

It returns all elements where the condition is `true`.

**🧠 Remember:**

- `find()` → Returns the first matching element.
- `filter()` → Returns all matching elements.


<h2  class="answer-heading" id="6.12">6.12 What is map()?</h2>


💡 `map()` is used to transform every element in an array and returns a **new array**.

- Processes every element.
- Returns a new array.
- Does not modify the original array.

**💻 Example:**

```js
let numbers = [1, 2, 3, 4];

let result = numbers.map((eachItem) => eachItem * 2);

console.log(result);
```

**📤 Output:**

```
[2, 4, 6, 8]
```

**🔑 How it works:**

1. 1 × 2 = 2
2. 2 × 2 = 4
3. 3 × 2 = 6
4. 4 × 2 = 8

**🔑 Real-life example:**

```js
let users = ["Arun", "Kumar", "Ravi"];

let result = users.map((eachUser) => "Hello " + eachUser);

console.log(result);
```

**📤 Output:**

```
["Hello Arun", "Hello Kumar", "Hello Ravi"]
```

**🧠 Remember:**

- `map()` → Transforms every element.
- `filter()` → Selects matching elements.
- `find()` → Returns the first matching element.


<h2  class="answer-heading" id="6.13">6.13 What is reduce()?</h2>


💡 `reduce()` is used to process all array elements and combine them into **one final value**.

- Processes each element one by one.
- Stores the running result in an accumulator (`answer`).
- Returns one final value.

**💻 Example:**

```js
let numbers = [1, 2, 3, 4];

let total = numbers.reduce((answer, eachItem) => {
    return answer + eachItem;
}, 0);

console.log(total);
```

**📤 Output:**

```
10
```

**🔑 How it works:**

| Step    | answer | eachItem | Result |
| ------- | ------ | -------- | ------ |
| Initial | 0      | -        | 0      |
| 1       | 0      | 1        | 1      |
| 2       | 1      | 2        | 3      |
| 3       | 3      | 3        | 6      |
| 4       | 6      | 4        | 10     |

**🔑 Understand the placeholders:**

```
numbers.reduce((answer, eachItem) => {
    return answer + eachItem;
}, 0);
```

- `answer` → Stores the previous result (accumulator).
- `eachItem` → Current array element.
- `0` → Initial value of `answer`.

**🧠 Real-life uses:**

- Calculate total price of products.
- Calculate total salary.
- Count items.
- Group data.

**🧠 Remember:**

- `map()` → Transforms every element.
- `filter()` → Selects matching elements.
- `reduce()` → Combines elements into one final value.


<h2  class="answer-heading" id="6.15">6.15 What is the difference between map() and forEach()?</h2>


💡 Both methods execute a function for every array element, but their purposes are different.

- `map()` → Transforms elements and returns a new array.
- `forEach()` → Executes an action for each element and returns `undefined`.

**🔑 Key Differences:**

| `map()`                                      | `forEach()`                                     |
| -------------------------------------------- | ----------------------------------------------- |
| Returns a new array                          | Returns `undefined`                             |
| Used to transform data                       | Used to perform actions                         |
| Can store the returned array                 | Cannot create a new array from its return value |
| Does not modify original array automatically | Does not modify original array automatically    |

**💻 Example:**

```js
let numbers = [1, 2, 3, 4];

// Using map()
let mapResult = numbers.map((eachItem) => {
    return eachItem * 2;
});

// Using forEach()
let forEachResult = numbers.forEach((eachItem) => {
    console.log(eachItem * 2);
});

console.log("Map:", mapResult);
console.log("ForEach:", forEachResult);
```

**📤 Output:**

```
2
4
6
8

Map: [2, 4, 6, 8]
ForEach: undefined
```

**🧠 Real-life example:**

- `map()` → Calculate a 10% discount for every product and create a new price array.
- `forEach()` → Display every product name in the console.

**🧠 Remember:**

Use `map()` when you need a **new array**.

Use `forEach()` when you just need to **execute an action** for every element.





<h2  class="answer-heading" id="6.17">6.17 What is Method Chaining in JavaScript Arrays?</h2>

💡 **Method Chaining** means calling multiple array methods one after another on the same array expression without storing the intermediate results in separate variables.

**🔑 Key Points:**

- 🔗 **Chaining:** Connect multiple methods using `.`.
- 🔄 **Multiple Operations:** Perform filtering, mapping, sorting, etc.
- 📦 **Clean Code:** Reduces unnecessary variables.

**💻 Example:**

```js
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(num => num > 2)
    .map(num => num * 2);

console.log(result);
```

**📤 Output:**

```
[6, 8, 10, 12]
```

**🔍 How it works:**

1. `filter()` → Selects numbers greater than 2.
2. `map()` → Multiplies each selected number by 2.

**🧠 Remember:**

Method chaining means **using multiple methods one after another** with the help of a dot (`.`).

⭐ Common array methods: `map()`, `filter()`, `reduce()`, `sort()`, and `slice()`.


<h2  class="answer-heading" id="6.18">6.18 What is Array Destructuring in JavaScript?</h2>


💡 **Array Destructuring** is a feature in JavaScript that allows us to extract array values and store them in separate variables easily.

**🔑 Key Points:**

- 📦 Extracts values from an array.
- 📝 Assigns values to separate variables.
- 🔢 Values are assigned based on their index position.
- ⚡ Reduces the need to access values using indexes.

**💻 Example:**

```js
let users = ["Gopi", "Arun", "Raj"];

let [first, second, third] = users;

console.log(first);
console.log(second);
console.log(third);
```

**📤 Output:**

```
Gopi
Arun
Raj
```

**🧠 Remember:**

- → Destructuring syntax.
- `first, second, third` → Variables.
- Values are assigned based on array position.

⭐ **Easy Trick:** Array destructuring means extracting array values into separate variables.

<h2  class="answer-heading" id="6.19">6.19 What is the Spread Operator in JavaScript Arrays?</h2>


💡 The **Spread Operator (**`...`**)** is used to expand array elements into individual values. It is commonly used to copy and combine arrays.

**🔑 Key Points:**

- 📦 **Copy:** Creates a shallow copy of an array.
- ➕ **Combine:** Merges multiple arrays.
- 🔓 **Expand:** Expands array elements into individual values.

**💻 Example 1: Copy an Array**

```js
let number1 = [1, 2, 3];
let number2 = [6, 7];

let newNumbers = [...number1,4,5,...number2];

console.log(number1);
console.log(number2);
console.log(newNumbers);
```

**📤 Output:**

```
[1, 2, 3]
[6, 7]
[1, 2, 3, 4, 5, 6 ,7]
```

**🧠 Remember:**

`...` → Spread Operator → Expands array elements.

⭐ **Real-time Use:** Copying arrays, merging arrays, and updating React state.



<h2  class="answer-heading" id="6.21">6.21 What is the difference between sort() and reverse()?</h2>


💡 Both are JavaScript array methods, but they perform different operations.

**🔑 Difference:**

| `sort()`                                        | `reverse()`                                     |
| ----------------------------------------------- | ----------------------------------------------- |
| Sorts array elements                            | Reverses array order                            |
| Arranges elements alphabetically or numerically | Changes first element to last and last to first |
| Modifies original array                         | Modifies original array                         |

**1.&#x20;**`sort()`**&#x20;– Arrange Elements**

```js
let numbers = [40, 10, 30, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

**Output:**

```
[10, 20, 30, 40]
```

**Note:** By default, `sort()` sorts values as strings. Use `(a, b) => a - b` for ascending numeric order.

**2.&#x20;**`reverse()`**&#x20;– Reverse Elements**

```js
let numbers = [10, 20, 30, 40];

numbers.reverse();

console.log(numbers);
```

**Output:**

```
[40, 30, 20, 10]
```

**🧠 Remember:**

- `sort()` → Arrange elements in order.
- `reverse()` → Reverse the existing order.


<h2  class="answer-heading" id="6.22"> 6.22 What is the difference between some() and every()?</h2>


💡 Both are JavaScript array methods used to check whether elements satisfy a condition. Both return a **boolean (**`true`**&#x20;or&#x20;**`false`**)**.

**🔑 Difference:**

| `some()`                               | `every()`                        |
| -------------------------------------- | -------------------------------- |
| Checks if at least one element matches | Checks if all elements match     |
| Returns `true` if any one matches      | Returns `true` only if all match |

**1.&#x20;**`some()`**&#x20;– At Least One**

```js
let numbers = [10, 20, 30, 40];

let result = numbers.some(num => num > 30);

console.log(result);
```

**Output:**

```
true
```

Explanation: `40` is greater than `30`, so the result is `true`.

**2.&#x20;**`every()`**&#x20;– All Elements**

```js
let numbers = [10, 20, 30, 40];

let result = numbers.every(num => num > 5);

console.log(result);
```

**Output:**

```
true
```

Explanation: All numbers are greater than `5`, so the result is `true`.

**🧠 Remember:**

- `some()` → At least **one** element must match.
- `every()` → **All** elements must match.



<h2  class="answer-heading" id="7.1">7.1 What is an Object in JavaScript?</h2>


💡 **An object** is a collection of data stored in **key-value pairs**.

- `key` → Property name.
- `value` → Data stored inside that property.
- Objects are used to store related information together.

**💻 Example:**

```js
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai",
    role: "Developer"
};

console.log(user);
console.log(user.name);
console.log(user.age);
```

**📤 Output:**

```
{
    name: "Arun",
    age: 25,
    city: "Chennai",
    role: "Developer"
}

Arun
25
```

**🔑 Understand the structure:**

```
let user = {
    name: "Arun",
    age: 25
};
```



<h2  class="answer-heading" id="7.2">7.2 How do you create an Object in JavaScript?</h2>



💡 We can create an object in JavaScript using **object literal&#x20;**`{}`. This is the most common method.

**1. Object Literal (Most commonly used)**

```js
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};

console.log(user);
```

**2. Using&#x20;**`new Object()`

```js
let user = new Object();

user.name = "Arun";
user.age = 25;
user.city = "Chennai";

console.log(user);
```

**3. Using Constructor Function**

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User("Arun", 25);

console.log(user1);
```

**📤 Output:**

```
{ name: "Arun", age: 25 }
```

**🔑 Key Points:**

| Method               | Usage                           |
| -------------------- | ------------------------------- |
| `{}`                 | Object literal                  |
| `new Object()`       | Object constructor              |
| Constructor function | Create multiple similar objects |

**🧠 Remember:** For normal JavaScript development, prefer **object literal&#x20;**`{}`.


<h2  class="answer-heading" id="7.3">7.3 How do you access Object Properties in JavaScript?</h2>



💡 We can access object properties using **Dot Notation (**`.`**)** and **Bracket Notation (**`[]`**)**.

**💻 Example:**

```js
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};

// 1. Dot Notation
console.log(user.name);

// 2. Bracket Notation
console.log(user["age"]);
```

**📤 Output:**

```
Arun
25
```

**🔑 1. Dot Notation (**`.`**)**

Use the property name directly after the object name.

```js
console.log(user.name);
console.log(user.city);
```

**🔑 2. Bracket Notation (**`[]`**)**

Use the property name inside quotes.

```js
console.log(user["name"]);
console.log(user["city"]);
```

**🔑 Important difference:**

Bracket notation is useful when the property name is stored in a variable or contains spaces.

```js
let property = "name";

console.log(user[property]); 
```

**📤 Output:**

```
Arun
```

**🧠 Remember:**

- `user.name` → Dot notation.
- `user["name"]` → Bracket notation.
- `user[property]` → Dynamic property access.


<h2  class="answer-heading" id="7.6">7.6 How do you add properties to an Object in JavaScript?</h2>



💡 We can add new properties to an existing object using **Dot Notation (**`.`**)** or **Bracket Notation (**`[]`**)**.

**💻 Example 1: Using Dot Notation**

```js
let user = {
    name: "Arun",
    age: 25
};

// Adding new properties
user.city = "Chennai";
user.role = "Developer";

console.log(user);
```

**📤 Output:**

```js
{
    name: "Arun",
    age: 25,
    city: "Chennai",
    role: "Developer"
}
```

**💻 Example 2: Using Bracket Notation**

```js
let user = {
    name: "Arun"
};

user["email"] = "arun@gmail.com";
user["phone"] = "9876543210";

console.log(user);
```

**📤 Output:**

```js
{
    name: "Arun",
    email: "arun@gmail.com",
    phone: "9876543210"
}
```

**🔑 Real-life example:**

```js
let product = {
    name: "Laptop",
    price: 50000
};

// Add new property
product.stock = 10;
product.brand = "Dell";

console.log(product);
```

**🧠 Remember:**

- `object.property = value` → Dot notation.
- `object["property"] = value` → Bracket notation.
- If the property already exists, assigning a value updates it instead of adding a duplicate.


<h2  class="answer-heading" id="7.7">7.7 How do you delete Properties from an Object in JavaScript?</h2>



💡 We can delete a property from an object using the `delete` operator.

**💻 Example:**

```js
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};

// Delete a property
delete user.age;

console.log(user);
```

**📤 Output:**

```js
{
    name: "Arun",
    city: "Chennai"
}
```

**🔑 Using Bracket Notation:**

```js
delete user["city"];

console.log(user);
```

**📤 Output:**

```js
{
    name: "Arun"
}
```

**🔑 Important Points:**

- `delete` removes a property from an object.
- It does not delete the entire object.
- If the property does not exist, it does not cause an error.

**🧠 Remember:**

- Add property → `user.age = 25`
- Update property → `user.age = 30`
- Delete property → `delete user.age`

<h2  class="answer-heading" id="7.8">7.8 What is Object Destructuring in JavaScript?</h2>



💡 **Object destructuring** means taking values from an object and storing them in separate variables easily.

**💻 Example:**

```js
let user = {
    name: "Arun",
    age: 25,
    city: "Chennai"
};

// Object destructuring
let { name, age } = user;

console.log(name);
console.log(age);
```

**📤 Output:**

```js
Arun
25
```

**🔑 Understand:**

```js
let { name, age } = user;
```

- `user` → Original object.
- `name` → Gets `"Arun"`.
- `age` → Gets `25`.

**🧠 Remember:** Destructuring makes it easy to get values from an object.


<h2  class="answer-heading" id="7.9">7.9 What is the Spread Operator in Objects?</h2>



💡 **Meaning:** The spread operator (`...`) is used to copy properties from one object into another object.

**🔑 Key Points:**

- `...` is called the **Spread Operator**.
- It copies all enumerable properties from an object.
- We can use it to create a new object.
- We can add new properties while copying.
- We can update existing properties while copying.
- It does not directly modify the original object (shallow copy).

**💻 Example:**

```js
let user = {
    name: "Gopi",
    age: 26
};

// Copy existing object and add a new property
let newUser = {
    ...user,
    city: "Chennai"
};

console.log(newUser);
```

**📤 Output:**

```js
{
    name: "Gopi",
    age: 26,
    city: "Chennai"
}
```

**🔍 Understand the Code:**

- `...user` → Copies all properties from the `user` object.
- `city: "Chennai"` → Adds a new property.
- `newUser` → Stores the copied properties and the new property.

**💻 Example 2: Updating an Existing Property**

```js
let user = {
    name: "Gopi",
    age: 26
};

let updatedUser = {
    ...user,
    age: 27
};

console.log(updatedUser);
```

**📤 Output:**

```js
{
    name: "Gopi",
    age: 27
}
```

**🔑 Important:** If the same property appears more than once, the **last value wins**.

**🧠 Remember:**

- `...user` → Copy properties.
- `...user, city: "Chennai"` → Copy and add a property.
- `...user, age: 27` → Copy and update a property.
- Original object remains unchanged.




<h2  class="answer-heading" id="7.10">7.10 What is Object Property Shorthand?</h2>



💡 **Meaning:** Object property shorthand allows us to write shorter object code when the property name and variable name are the same.

**🔑 Key Points:**

- Used when the **property name = variable name**.
- We don't need to write the same name twice.
- It makes code shorter and cleaner.
- It works when creating objects.


**💻 Example : With Shorthand**

```js
let name = "Gopi";
let age = 26;

let user = {
    name,
    age
};

console.log(user);
```

**📤 Output (Both Examples):**

```js
{
    name: "Gopi",
    age: 26
}
```

**🔍 Understand the Code:**

| Code         | Meaning                         |
| ------------ | ------------------------------- |
| `name: name` | Property name and variable name |
| `name`       | Shorthand for `name: name`      |
| `age: age`   | Property name and variable name |
| `age`        | Shorthand for `age: age`        |


**🧠 Remember:**

- `name: name` → Normal way.
- `name` → Shorthand way.
- Both produce the same object property.

**Important:** Shorthand works only when the variable name and property name are the same.


<h2  class="answer-heading" id="7.11">7.11 What is a Computed Property Name in JavaScript?</h2>


💡 A **Computed Property Name** allows us to use a **variable or expression as an object property name** instead of writing the property name directly.

**🔑 Key Points:**

- Use square brackets `[]` to define a computed property name.
- The expression inside `[]` is evaluated when the object is created.
- Useful when property names are dynamic.

**💻 Example:**

```js
let key = "username";

let user = {
    [key]: "Gopi"
};

console.log(user);
console.log(user.username);
```

**📤 Output:**

```js
{ username: 'Gopi' }
Gopi
```

**Another Example:**

```js
let firstName = "Gopi";
let lastName = "Raj";

let user = {
    [firstName + lastName]: "Developer"
};

console.log(user);
```

**Output:**

```js
{ GopiRaj: 'Developer' }
```

**🧠 Remember:**

- `key: "value"` → Normal property name.
- `[key]: "value"` → Dynamic (computed) property name.


<h2  class="answer-heading" id="7.16">7.16 What is the Difference Between Shallow Copy and Deep Copy?</h2>

💡 **Shallow Copy** copies only the first level of an object. Nested objects are still shared between the original and copied objects.

💡 **Deep Copy** creates a completely independent copy, including nested objects.

**🔑 Key Differences:**

| Shallow Copy                               | Deep Copy                                         |
| ------------------------------------------ | ------------------------------------------------- |
| Copies only the first level                | Copies all nested levels                          |
| Nested objects share references            | Nested objects have separate references           |
| Changes to nested data affect both objects | Changes to nested data do not affect the original |
| Faster and simpler                         | May require more processing                       |

**💻 1. Shallow Copy Example:**

```js
let user = {
    name: "Gopi",
    address: {
        city: "Chennai"
    }
};

let copy = { ...user };

copy.name = "Raj";
copy.address.city = "Salem";

console.log(user.name);
console.log(user.address.city);
```

**📤 Output:**

```
Gopi
Salem
```

Why?

- `name` is a primitive value, so changing it in the copy does not affect the original.
- `address` is a nested object, so both objects share the same reference.

**💻 2. Deep Copy Example:**

```js
let user = {
    name: "Gopi",
    address: {
        city: "Chennai"
    }
};

let copy = structuredClone(user);

copy.name = "Raj";
copy.address.city = "Salem";

console.log(user.name);
console.log(user.address.city);
```

**📤 Output:**

```
Gopi
Chennai
```

Why?

`structuredClone()` creates an independent copy, including nested objects.

**🧠 Remember:**

- Shallow Copy → Nested objects share references.
- Deep Copy → Nested objects have independent copies.
- `...` (Spread Operator) → Shallow copy.
- `structuredClone()` → Deep copy for supported data types.


<h2  class="answer-heading" id="7.17">7.17 What is an Object Reference in JavaScript?</h2>


💡 An **Object Reference** is a reference (memory address-like value) that points to where an object is stored in memory.

When you assign an object to another variable, JavaScript copies the reference, not the actual object.

**🔑 Key Points:**

- Objects are reference types in JavaScript.
- Two variables can point to the same object.
- Changing the object through one variable affects the other variable.

**💻 Example:**

```js
let user1 = {
    name: "Gopi",
    age: 26
};

let user2 = user1;

user2.name = "Raj";

console.log(user1.name);
console.log(user2.name);
```

**📤 Output:**

```
Raj
Raj
```

**Why does this happen?**

Both `user1` and `user2` point to the same object.

**Object Reference**

**user1** and **user2**

**Same Object**

name: "Raj", age: 26

**🧠 Remember:**

```js
let a = { name: "Gopi" };
let b = a;
```

`a` and `b` are two variables pointing to the **same object**, not two separate objects.


<h2  class="answer-heading" id="8.3">8.3 What is String Interpolation in JavaScript?</h2>


💡 **String Interpolation** means inserting variables or expressions directly inside a string using **template literals (backticks&#x20;**`` ` ``**)** and `${}`.

**🔑 Key Points:**

- Use backticks (`` ` ``) instead of single or double quotes.
- Use `${}` to insert variables or expressions.
- You can insert calculations and function results too.
- Makes strings easier to read and maintain.

**💻 Example:**

```js
let name = "Gopi";
let age = 26;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

**📤 Output:**

```
My name is Gopi and I am 26 years old.
```

**💻 Example with Expression:**

```js
let a = 10;
let b = 20;

console.log(`Total: ${a + b}`);
```

**📤 Output:**

```
Total: 30
```

**🧠 Remember:**

- `${variable}` → Insert a variable.
- `${expression}` → Evaluate an expression.
- `` `Hello ${name}` `` → Template literal with string interpolation.



<h2  class="answer-heading" id="8.4">8.4 What is length?</h2>


💡 **Meaning:** The `length` property is used to find how many characters are in a string or how many elements are in an array.

**🔑 Key Points:**

- `length` is a **property**, not a method.
- It counts string characters.
- It counts array elements.
- Array counting starts from 1, but array indexes start from 0.
- It does not modify the original string or array.

**💻 Example 1: String Length**

```js
let name = "Gopi";

console.log(name.length);
```

**📤 Output:**

```
4
```

**Understand:**

- `G` = 1
- `o` = 2
- `p` = 3
- `i` = 4

**💻 Example 2: Array Length**

```js
let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits.length);
```

**📤 Output:**

```
3
```

**Understand:**

| Index | Value  |
| ----- | ------ |
| 0     | Apple  |
| 1     | Mango  |
| 2     | Orange |

There are 3 elements, so `fruits.length` returns `3`.

**💻 Example 3: Using Length in a Loop**

```js
let fruits = ["Apple", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**📤 Output:**

```
Apple
Mango
Orange
```

**🔑 Why use&#x20;**`length`**&#x20;here?**

- `i = 0` → Starts from the first index.
- `i < fruits.length` → Continues while the index is less than 3.
- `i++` → Moves to the next index.
- `fruits[i]` → Gets the current fruit.

**🧠 Remember:**

- `"Gopi".length` → `4` (characters).
- `[10, 20, 30].length` → `3` (elements).
- `length` is a property, so **don't use parentheses** like `length()`.


<h2  class="answer-heading" id="8.5">8.5 What is charAt()?</h2>


💡 **Meaning:** `charAt()` is a string method used to get a character from a string using its index position.

**🔑 Key Points:**

- `charAt()` works with strings.
- It takes an **index number** as an argument.
- String indexes start from **0**.
- It returns only one character.
- If the index is outside the string, it returns an empty string (`""`).
- It does not modify the original string.

**💻 Example 1: Basic Usage**

```js
let name = "Gopi";

console.log(name.charAt(0));
console.log(name.charAt(1));
console.log(name.charAt(2));
console.log(name.charAt(3));
```

**📤 Output:**

```
G
o
p
i
```

**🔍 Understand the Code:**

| Character | G | o | p | i |
| --------- | - | - | - | - |
| Index     | 0 | 1 | 2 | 3 |


**💻 Example 2: Invalid Index**

```js
let name = "Gopi";

console.log(name.charAt(10));
```

**📤 Output:**

```
""
```

It returns an empty string because index `10` does not exist.



**🧠 Remember:**

- `length` → Finds the number of characters.
- `charAt(0)` → Gets the first character.
- `charAt(1)` → Gets the second character.
- `charAt()` uses **index positions starting from 0**.


<h2  class="answer-heading" id="8.6">8.6 What is includes()?</h2>


💡 **Meaning:** `includes()` is a string method used to check whether a particular word or character exists inside a string.

**🔑 Key Points:**

- `includes()` checks whether text is present in a string.
- It returns a **boolean value**: `true` or `false`.
- It is case-sensitive (`G` and `g` are different).
- It does not modify the original string.
- It can also be used with arrays.

**💻 Example 1: Basic Usage**

```js
let message = "Hello JavaScript";

console.log(message.includes("JavaScript"));
console.log(message.includes("Hello"));
console.log(message.includes("Python"));
```

**📤 Output:**

```
true
true
false
```


**💻 Example 2: Case-Sensitive Check**

```js
let name = "Gopi";

console.log(name.includes("G"));
console.log(name.includes("g"));
```

**📤 Output:**

```
true
false
```

**Why?**

The string contains uppercase `G`, not lowercase `g`.

**💻 Example 3: Real-Life Usage**

```js
let email = "gopi@gmail.com";

if (email.includes("@")) {
    console.log("Valid email format");
} else {
    console.log("Invalid email format");
}
```

**📤 Output:**

```
Valid email format
```

Here, we check whether the email contains the `@` symbol.

Note: This is only a basic check, not complete email validation.

**🧠 Remember:**

- `includes()` → Checks whether a value exists.
- Found → `true`.
- Not found → `false`.
- It is **case-sensitive**.



<h2  class="answer-heading" id="8.7">8.7 What is indexOf()?</h2>


💡 **Meaning:** `indexOf()` is a string method used to find the index position of a character or word inside a string.

**🔑 Key Points:**

- `indexOf()` searches for a character or word.
- It returns the **index position** of the first match.
- String indexes start from `0`.
- If the value is not found, it returns `-1`.
- It is case-sensitive.
- It does not modify the original string.

**💻 Example 1: Finding a Character**

```js
let name = "Gopi";

console.log(name.indexOf("G"));
console.log(name.indexOf("o"));
console.log(name.indexOf("i"));
console.log(name.indexOf("z"));
```

**📤 Output:**

```
0
1
3
-1
```

**💻 Example 2: Finding a Word**

```js
let message = "Hello JavaScript";

console.log(message.indexOf("JavaScript"));
console.log(message.indexOf("Hello"));
console.log(message.indexOf("Python"));
```

**📤 Output:**

```
6
0
-1
```

**🔍 Understand:**

- `"JavaScript"` starts at index `6`.
- `"Hello"` starts at index `0`.
- `"Python"` does not exist, so it returns `-1`.


**🔑 Difference Between&#x20;**`includes()`**&#x20;and&#x20;**`indexOf()`

| Method       | What it returns        |
| ------------ | ---------------------- |
| `includes()` | `true` or `false`      |
| `indexOf()`  | Index position or `-1` |

**🧠 Remember:**

- `indexOf("G")` → Finds the position.
- `indexOf("Python")` → Returns `-1` if not found.
- `includes("G")` → Checks whether it exists.

Both methods search strings, but their return values are different.


<h2  class="answer-heading" id="8.8">8.8 What is slice()?</h2>


💡 **Meaning:** `slice()` is a string method used to extract a part of a string without changing the original string.

**🔑 Key Points:**

- `slice()` extracts a portion of a string.
- It accepts a **start index** and an optional **end index**.
- The start index is included.
- The end index is excluded.
- It returns a new string.
- It does not modify the original string.
- It also supports negative indexes (counting from the end).

**🔑 Syntax:**

```js
string.slice(startIndex, endIndex);
```

- `startIndex` → Where to start extracting.
- `endIndex` → Where to stop (not included).

**💻 Example 1: Basic Usage**

```js
let message = "JavaScript";

let result = message.slice(0, 4);

console.log(result);
```

**📤 Output:**

```
Java
```

**🔍 Understand the Code:**

| Character | J | a | v | a | S | c | r | i | p | t |
| --------- | - | - | - | - | - | - | - | - | - | - |
| Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |

- `slice(0, 4)` → Starts at index `0`.
- Extracts characters at indexes `0, 1, 2, 3`.
- Stops before index `4`.

Result: `"Java"`

**💻 Example 2: Without End Index**

```js
let name = "JavaScript";

console.log(name.slice(4));
```

**📤 Output:**

```
Script
```

**Understand:** Starts at index `4` and extracts everything until the end.

**💻 Example 3: Negative Index**

```js
let name = "JavaScript";

console.log(name.slice(-6));
```

**📤 Output:**

```
Script
```

**Understand:** `-6` means start counting from the end of the string.


**🔑 Important Difference:**

| Method        | Purpose                             |
| ------------- | ----------------------------------- |
| `slice()`     | Extracts a portion of a string      |
| `substring()` | Also extracts a portion of a string |
| `indexOf()`   | Finds the position of text          |

**🧠 Remember:**

- `slice(0, 4)` → Start at 0, stop before 4.
- `slice(4)` → Start at 4, go to the end.
- `slice(-6)` → Start 6 characters from the end.
- Original string remains unchanged.




<h2  class="answer-heading" id="8.9">8.9 What is substring()?</h2>


💡 **Meaning:** `substring()` is a string method used to extract a part of a string using start and end index positions.

**🔑 Key Points:**

- `substring()` extracts a portion of a string.
- It accepts a **start index** and an optional **end index**.
- Start index is included.
- End index is excluded.
- It returns a new string.
- It does not modify the original string.
- Negative values are treated as `0`.

**🔑 Syntax:**

```js
string.substring(startIndex, endIndex);
```

- `startIndex` → Where to start extracting.
- `endIndex` → Where to stop (not included).

**💻 Example 1: Basic Usage**

```js
let message = "JavaScript";

let result = message.substring(0, 4);

console.log(result);
```

**📤 Output:**

```
Java
```

**🔍 Understand the Code:**

| Character | J | a | v | a | S | c | r | i | p | t |
| --------- | - | - | - | - | - | - | - | - | - | - |
| Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |

- `substring(0, 4)` → Starts at index `0`.
- Gets characters at indexes `0, 1, 2, 3`.
- Stops before index `4`.

Result: `"Java"`

**💻 Example 2: Without End Index**

```js
let name = "JavaScript";

console.log(name.substring(4));
```

**📤 Output:**

```
Script
```

It extracts everything from index `4` to the end.

**💻 Example 3: Negative Index**

```js
let name = "JavaScript";

console.log(name.substring(-4, 4));
```

**📤 Output:**

```
Java
```

**Understand:** Negative index `-4` is treated as `0`.

**🔑 Important Difference:&#x20;**`slice()`**&#x20;vs&#x20;**`substring()`

| Feature                     | `slice()`       | `substring()` |
| --------------------------- | --------------- | ------------- |
| Extract text                | Yes             | Yes           |
| Negative index              | Counts from end | Treated as 0  |
| Original string             | Unchanged       | Unchanged     |
| End index                   | Excluded        | Excluded      |
| Swaps start/end if reversed | No              | Yes           |

**Example:**

```js
let text = "JavaScript";

console.log(text.slice(4, 0));
console.log(text.substring(4, 0));
```

**📤 Output:**

```
(empty string)
Java
```

**🧠 Remember:**

- `substring(0, 4)` → Extracts from index 0 to 3.
- Negative indexes become `0`.
- If start index is greater than end index, `substring()` swaps them.
- Both `slice()` and `substring()` return a new string.

<h2  class="answer-heading" id="8.10">8.10 What is replace()?</h2>


💡 **Meaning:** `replace()` is a string method used to replace a particular word or character with another word or character.

**🔑 Key Points:**

- Replaces matching text in a string.
- Returns a new string.
- Does not modify the original string.
- By default, replaces only the **first match** when using a string search value.

**💻 Example:**

```js
let message = "Hello World";

let result = message.replace("World", "JavaScript");

console.log(result);
```

**📤 Output:**

```
Hello JavaScript
```

**🔍 Understand:**

- `"World"` → Text to find.
- `"JavaScript"` → Replacement text.
- `replace()` → Replaces the matching text.

**💻 Example 2: Replace a Character**

```js
let name = "Gopi";

console.log(name.replace("G", "S"));
```

**📤 Output:**

```
Sopi
```

**🧠 Remember:**

```js
string.replace(oldValue, newValue);
```

- First argument → What to replace.
- Second argument → What to replace it with.

<h2  class="answer-heading" id="8.11">8.11 What is replaceAll()?</h2>


💡 **Meaning:** `replaceAll()` is a string method used to replace **all occurrences** of a particular word or character in a string.

**🔑 Key Points:**

- Replaces all matching text.
- Returns a new string.
- Does not modify the original string.
- Useful when the same word or character appears multiple times.

**💻 Example:**

```js
let message = "Hello World, Hello JavaScript";

let result = message.replaceAll("Hello", "Hi");

console.log(result);
```

**📤 Output:**

```
Hi World, Hi JavaScript
```

**🔍 Understand:**

- `"Hello"` → Text to find.
- `"Hi"` → Replacement text.
- `replaceAll()` → Replaces every occurrence of `"Hello"`.

**🔑 Difference:&#x20;**`replace()`**&#x20;vs&#x20;**`replaceAll()`

| Method         | Purpose                                                              |
| -------------- | -------------------------------------------------------------------- |
| `replace()`    | Replaces the first matching occurrence (with a string search value). |
| `replaceAll()` | Replaces all matching occurrences.                                   |

**🧠 Remember:**

- `replace()` → First match.
- `replaceAll()` → All matches.



<h2  class="answer-heading" id="8.12">8.12 What is split()?</h2>


💡 **Meaning:** `split()` is a string method used to divide a string into multiple parts and return them as an **array**.

**🔑 Key Points:**

- Converts a string into an array.
- Uses a separator to split the string.
- Does not modify the original string.
- Returns an array of separated values.

**🔑 Syntax:**

```js
string.split(separator);
```

**💻 Example 1: Split by Space**

```js
let message = "Hello JavaScript World";

let result = message.split(" ");

console.log(result);
```

**📤 Output:**

```js
["Hello", "JavaScript", "World"]
```

**🔍 Understand:**

- `" "` → Space is the separator.
- `split(" ")` → Splits wherever it finds a space.
- Result → Three separate words inside an array.

**💻 Example 2: Split by Comma**

```js
let fruits = "Apple,Mango,Orange";

let result = fruits.split(",");

console.log(result);
```

**📤 Output:**

```
["Apple", "Mango", "Orange"]
```

**💻 Example 3: Split into Characters**

```js
let name = "Gopi";

console.log(name.split(""));
```

**📤 Output:**

```
["G", "o", "p", "i"]
```

**🧠 Remember:**

- `split(" ")` → Splits by space.
- `split(",")` → Splits by comma.
- `split("")` → Splits into characters.
- `split()` → String to Array.

<h2  class="answer-heading" id="8.13">8.13 What is join()?</h2>


💡 **Meaning:** `join()` is an array method used to combine all array elements into a single string.

**🔑 Key Points:**

- Converts an array into a string.
- Joins elements using a separator.
- Default separator is a comma (`,`).
- Does not modify the original array.

**💻 Example:**

```js
let fruits = ["Apple", "Mango", "Orange"];

let result = fruits.join(" ");

console.log(result);
```

**📤 Output:**

```
Apple Mango Orange
```

**💻 Example 2:**

```js
let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits.join(", "));
```

**📤 Output:**

```
Apple, Mango, Orange
```

**🧠 Remember:**

- `split()` → String to Array.
- `join()` → Array to String.


<h2  class="answer-heading" id="8.14">8.14 What is trim()?</h2>


💡 **Meaning:** `trim()` is a string method used to remove extra spaces from the beginning and end of a string.

**🔑 Key Points:**

- Removes spaces from the beginning and end.
- Does not remove spaces between words.
- Returns a new string.
- Does not modify the original string.

**💻 Example:**

```js
let name = "   Gopi Raj   ";

let result = name.trim();

console.log(result);
```

**📤 Output:**

```
"Gopi Raj"
```

**🔍 Understand:**

- `trim()` removes spaces before `Gopi`.
- `trim()` removes spaces after `Raj`.
- Space between `Gopi` and `Raj` remains.

**🧠 Remember:**

- `trim()` → Removes spaces from both sides.
- `trimStart()` → Removes spaces from the beginning.
- `trimEnd()` → Removes spaces from the end.

<h2  class="answer-heading" id="9.1">9.1 What is Scope in JavaScript?</h2>


💡 **Scope** defines where a variable or function can be accessed in JavaScript.

In simple words, scope determines **where you can use a variable in your code**.

**🔑 Types of Scope:**

1. **Global Scope:** A variable declared outside all functions and blocks can be accessed throughout its accessible script or module context.
2. **Function Scope:** A variable declared inside a function can be accessed only within that function.
3. **Block Scope:** A variable declared with `let` or `const` inside `{}` can be accessed only within that block.

**💻 Example:**

```js
// Global Scope
let name = "Gopi";

function displayUser() {

    // Function Scope
    let age = 26;

    if (true) {

        // Block Scope
        let city = "Chennai";

        console.log(name);
        console.log(age);
        console.log(city);
    }

    console.log(age);
    // console.log(city); // Error
}

displayUser();

console.log(name);
// console.log(age); // Error
```

**📤 Output:**

```
Gopi
26
Chennai
26
Gopi
```

**🧠 Remember:**

| Scope    | Accessible Where?                 |
| -------- | --------------------------------- |
| Global   | Throughout its accessible context |
| Function | Inside the function               |
| Block    | Inside the `{}` block             |

**Important:** `var` is function-scoped, whereas `let` and `const` are block-scoped.



<h2  class="answer-heading" id="9.11">9.11 Why Do We Use Closures in JavaScript?</h2>


💡 We use **Closures** to remember and access variables from an outer function even after that outer function has finished executing.

**🔑 Why Do We Use Closures?**

1. **Data Privacy:** Protect variables from direct access outside a function.
2. **Remember Previous Values:** Maintain values between function calls.
3. **Maintain State:** Keep track of counters, user data, etc.
4. **Function Factories:** Create multiple functions with different stored values.

**💻 Example – Data Privacy:**

```js
function createBankAccount(initialBalance) {
  // Private variable: inaccessible from outside createBankAccount
  let balance = initialBalance;

  // Return an object with inner functions (closures)
  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited: ${amount}`;
      }
      return "Invalid deposit amount";
    },
    credit(amount){
        if(amount < balance){
        balance -= amount;
        return `Credited: ${amount}`;

        }
      return "Invalid Credit amount";

    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(100);

console.log(myAccount.getBalance()); 
console.log(myAccount.deposit(50));  
console.log(myAccount.credit(10));  
console.log(myAccount.getBalance());

// Direct access fails
console.log(myAccount.balance);      // undefined

```

**📤 Output:**

```
100
Deposited: 50
Credited: 10
140

```

**How does it work?**

1. `createBankAccount()` creates the `balance` variable.
2. It returns the `deposit()` function.
3. `createBankAccount()` finishes execution.
4. But `deposit()` still remembers the `balance` variable.
5. Every time we call `account()`, it updates the same balance.

**🧠 Real-Life Example:**

Think of a bank account. The balance should not be directly accessible or modified by anyone. Instead, we provide functions like `deposit()` and `withdraw()` to manage it.

**Remember:** Closure = **Function + Remembered Outer Variables**.


<h2  class="answer-heading" id="9.11">9.12 What is a Real-World Use Case of Closures?</h2>


💡 Closures are commonly used to **maintain private data, preserve state, and remember values** even after the outer function has finished executing.

**🔑 Real-World Use Cases:**

1. **Bank Account:** Maintain private account balance.
2. **Counter:** Remember the previous count.
3. **API Rate Limiting:** Track how many API requests a user makes.
4. **Event Handlers:** Remember values when handling button clicks.
5. **Function Factories:** Create reusable functions with different configurations.

**💻 Example 1 – Counter Application:**

```js
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

**📤 Output:**

```
1
2
3
```

**💻 Example 2 – API Rate Limiting:**

```js
function createRateLimiter() {
    let requestCount = 0;

    return function () {
        requestCount++;

        if (requestCount > 3) {
            return "API limit exceeded";
        }

        return "API request allowed";
    };
}

let checkRequest = createRateLimiter();

console.log(checkRequest());
console.log(checkRequest());
console.log(checkRequest());
console.log(checkRequest());
```

**📤 Output:**

```
API request allowed
API request allowed
API request allowed
API limit exceeded
```

**🧠 Remember:**

Closures are useful whenever you need a function to **remember and maintain data between multiple function calls** without exposing that data directly.

<h2  class="answer-heading" id="9.13">9.13 What is Variable Shadowing in JavaScript?</h2>

💡 **Variable Shadowing** happens when a variable declared inside a function or block has the same name as a variable in an outer scope. The inner variable takes priority within its scope.

**🔑 Key Points:**

- Inner and outer variables have the same name.
- The inner variable hides (shadows) the outer variable within its scope.
- Outside the inner scope, the outer variable is accessible again.

**💻 Example:**

```js
let name = "Gopi";

function displayUser() {
    let name = "Raj";

    console.log(name);
}

displayUser();

console.log(name);
```

**📤 Output:**

```
Raj
Gopi
```

**How does it work?**

1. Global `name` contains `"Gopi"`.
2. Inside `displayUser()`, another `name` contains `"Raj"`.
3. Inside the function, JavaScript accesses the inner variable.
4. Outside the function, JavaScript accesses the global variable.

**🧠 Remember:**

Variable Shadowing = **An inner variable hides an outer variable with the same name within its scope.**



<h2  class="answer-heading" id="11.1">11.1 What is ES6?</h2>


💡 **ES6 (ECMAScript 2015)** is a major JavaScript update that introduced new features to make code shorter, cleaner, and easier to understand.

**🔑 Key Points:**

- Introduced `let` and `const`.
- Introduced arrow functions.
- Introduced template literals.
- Introduced destructuring.
- Introduced spread and rest operators.
- Introduced classes and promises.

**Example:**

```
const name = "Gopi";

let age = 26;

console.log(`My name is ${name}`);
```

**Remember:** ES6 makes JavaScript development easier and more modern.

<h2  class="answer-heading" id="11.2">11.2 What are template literals?</h2>


💡 **Template literals** allow us to write strings using backticks (`` ` ``) and insert variables directly using `${}`.

**🔑 Key Points:**

- Use backticks instead of single or double quotes.
- Use `${}` to insert variables.
- Supports multiple lines.
- Makes string creation easier.

**Example:**

```
let name = "Gopi";
let age = 26;

let message = `My name is ${name} and my age is ${age}`;

console.log(message);
```

**Output:**

```
My name is Gopi and my age is 26
```

**Remember:** Backticks + `${}` = Template Literals.

<h2  class="answer-heading" id="11.3">11.3 What is destructuring?</h2>


💡 **Destructuring** is a feature used to extract values from arrays or objects and store them in separate variables.

**🔑 Key Points:**

- Extracts values easily.
- Works with arrays and objects.
- Reduces repeated code.
- Object destructuring uses property names.
- Array destructuring uses position.

**Example: Object Destructuring**

```
let user = {
    name: "Gopi",
    age: 26
};

let { name, age } = user;

console.log(name);
console.log(age);
```

**Output:**

```
Gopi
26
```

**Remember:** Destructuring extracts values from arrays or objects.

<h2  class="answer-heading" id="11.4">11.4 What is the spread operator?</h2>


💡 **Spread operator (**`...`**)** is used to expand elements of an array or properties of an object.

**🔑 Key Points:**

- Uses three dots (`...`).
- Copies array elements.
- Copies object properties.
- Helps combine arrays and objects.
- Creates shallow copies.

**Example:**

```
let numbers = [10, 20, 30];

let newNumbers = [...numbers, 40, 50];

console.log(newNumbers);
```

**Output:**

```
[10, 20, 30, 40, 50]
```

**Remember:** Spread operator expands existing values.

<h2  class="answer-heading" id="11.5">11.5 What is the rest parameter?</h2>


💡 **Rest parameter (**`...`**)** is used to collect multiple function arguments into a single array.

**🔑 Key Points:**

- Uses three dots (`...`).
- Collects multiple arguments.
- Stores arguments in an array.
- Must be the last parameter in a function.

**Example:**

```
function addNumbers(...numbers) {
    console.log(numbers);
}

addNumbers(10, 20, 30, 40);
```

**Output:**

```
[10, 20, 30, 40]
```

**Remember:** Rest parameter collects multiple values into an array.

<h2  class="answer-heading" id="11.6">11.6 What is the difference between spread and rest?</h2>


💡 Both use three dots (`...`), but their purposes are different.

**🔑 Key Points:**

| Spread Operator               | Rest Parameter                                |
| ----------------------------- | --------------------------------------------- |
| Expands values                | Collects values                               |
| Used to copy or combine       | Used to collect arguments                     |
| Works with arrays and objects | Used in function parameters and destructuring |

**Example: Spread**

```
let numbers = [10, 20, 30];

let newNumbers = [...numbers];

console.log(newNumbers);
```

**Output:**

```
[10, 20, 30]
```

**Example: Rest**

```
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30);
```

**Output:**

```
[10, 20, 30]
```

**Remember:**

- Spread (`...`) → Expands values.
- Rest (`...`) → Collects values.

<h2  class="answer-heading" id="11.7">11.7 What are default parameters?</h2>


💡 **Default parameters** allow us to assign default values to function parameters when no value or `undefined` is passed.

**🔑 Key Points:**

- Provides a default value.
- Used in function parameters.
- If no argument is passed, the default value is used.
- If a value is passed, that value is used instead.

**Example:**

```
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Gopi");
greet();
```

**Output:**

```
Hello Gopi
Hello Guest
```

**Remember:** Default parameters provide a fallback value when an argument is missing or `undefined`.

<h2  class="answer-heading" id="11.8">11.8 What are arrow functions?</h2>


💡 **Arrow functions** are a shorter way to write functions in JavaScript using the `=>` symbol.

**🔑 Key Points:**

- Uses the arrow symbol `=>`.
- Provides shorter function syntax.
- Useful for callbacks and array methods.
- Does not have its own `this` value.

**Example: Normal Function**

```
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

**Example: Arrow Function**

```
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

**Output:**

```
30
```

**Shorter Arrow Function:**

```
const add = (a, b) => a + b;

console.log(add(10, 20));
```

**Remember:** Arrow functions provide shorter syntax for writing functions.

## **Quick Revision – ES6 Keywords**

| Concept            | Main Purpose                  |
| ------------------ | ----------------------------- |
| ES6                | Modern JavaScript features    |
| Template Literals  | Insert variables into strings |
| Destructuring      | Extract values                |
| Spread             | Expand values                 |
| Rest               | Collect values                |
| Spread vs Rest     | Expand vs Collect             |
| Default Parameters | Provide default values        |
| Arrow Functions    | Shorter function syntax       |


<h2  class="answer-heading" id="11.9">11.9 What are Enhanced Object Literals in JavaScript?</h2>


💡 **Enhanced Object Literals** are features introduced in ES6 that make creating JavaScript objects easier and shorter by reducing unnecessary syntax.

**🔑 Key Features:**

1. **Property Shorthand:** Use a variable directly as an object property.
2. **Method Shorthand:** Define methods without writing `function`.
3. **Computed Property Names:** Use variables or expressions as property names.

**💻 1. Property Shorthand**

Before ES6:

```js
let name = "Gopi";
let age = 26;

let user = {
    name: name,
    age: age
};
```

After ES6:

```js
let name = "Gopi";
let age = 26;

let user = {
    name,
    age
};

console.log(user);
```

**Output:**

```js
{ name: 'Gopi', age: 26 }
```

Why? If the variable name and property name are the same, we can write it only once.

**💻 2. Method Shorthand**

Before ES6:

```js
let user = {
    name: "Gopi",

    display: function () {
        console.log("Hello " + this.name);
    }
};
```

After ES6:

```js
let user = {
    name: "Gopi",

    display() {
        console.log("Hello " + this.name);
    }
};

user.display();
```

**Output:**

```
Hello Gopi
```

**💻 3. Computed Property Names**

```js
let key = "username";

let user = {
    [key]: "Gopi"
};

console.log(user);
```

**Output:**

```
{ username: 'Gopi' }
```

**🧠 Remember:**

| Feature            | Meaning                              |
| ------------------ | ------------------------------------ |
| Property Shorthand | Short way to write object properties |
| Method Shorthand   | Short way to define object methods   |
| Computed Property  | Dynamic object property names        |

**Interview Tip:** Enhanced Object Literals help us write cleaner, shorter and more readable JavaScript objects.



<h2  class="answer-heading" id="11.10">11.10 What are modules?</h2>


💡 **Meaning:** Modules allow us to split JavaScript code into separate files and reuse that code in other files.

**🔑 Key Points:**

- Helps organize large projects.
- Makes code reusable.
- `export` is used to share code.
- `import` is used to access code from another file.

**Example:**

**math.js**

```
export const add = (a, b) => a + b;
```

**app.js**

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

**Output:**

```
30
```

**Remember:** Export shares code; Import uses shared code.

<h2  class="answer-heading" id="11.11">11.11 What are named exports?</h2>


💡 **Meaning:** Named exports allow us to export multiple variables or functions from one JavaScript file using their names.

**🔑 Key Points:**

- We can export multiple items.
- Import using the same exported names.
- Use curly braces `{}` when importing.
- We can rename imports using `as`.

**Example:**

**math.js**

```js
export const name = "Gopi";

export function add(a, b) {
    return a + b;
}
```

**app.js**

```js
import { name, add } from "./math.js";

console.log(name);
console.log(add(10, 20));
```

**Output:**

```
Gopi
30
```

**Remember:** Named exports use `{}` when importing.

<h2  class="answer-heading" id="11.12">11.12 What are default exports?</h2>


💡 **Meaning:** A default export allows us to export one main function, variable, or class from a JavaScript file.

**🔑 Key Points:**

- Only one default export per file.
- Import without curly braces `{}`.
- We can choose any name while importing.

**Example:**

**user.js**

```js
export default function getUser() {
    return "Gopi";
}
```

**app.js**

```js
import getUser from "./user.js";

console.log(getUser());
```

**Output:**

```
Gopi
```

**Remember:** Default export uses no curly braces when importing.

<h2  class="answer-heading" id="11.13">11.13 What is optional chaining?</h2>


💡 **Meaning:** Optional chaining (`?.`) allows us to access object properties safely without getting an error when a value is `null` or `undefined`.

**🔑 Key Points:**

- Uses `?.` operator.
- Prevents errors when accessing missing or nullish properties.
- Returns `undefined` if the value before `?.` is `null` or `undefined`.
- Useful for nested objects and API responses.

**Example:**

```js
let user = {
    name: "Gopi",
    address: {
        city: "Chennai"
    }
};

console.log(user.address?.city);
console.log(user.company?.name);
```

**Output:**

```
Chennai
undefined
```

**Remember:** `?.` safely accesses properties without throwing an error when the value is `null` or `undefined`.

<h2  class="answer-heading" id="11.14">11.14 What is nullish coalescing?</h2>


💡 **Meaning:** Nullish coalescing (`??`) provides a default value only when the left-side value is `null` or `undefined`.

**🔑 Key Points:**

- Uses `??` operator.
- Checks only `null` and `undefined`.
- Does not replace `0`, `false`, or empty string (`""`).
- Useful for providing default values.

**Example:**

```js
let username = null;

let result = username ?? "Guest";

console.log(result);
```

**Output:**

```
Guest
```

**Example 2:**

```js
let age = 0;

console.log(age ?? 18);
```

**Output:**

```
0
```

**Remember:** `??` uses the default value only for `null` or `undefined`.

<h2  class="answer-heading" id="11.15">11.15 What are computed properties?</h2>


💡 **Meaning:** Computed properties allow us to use a variable or expression as an object property name.

**🔑 Key Points:**

- Uses square brackets `[]`.
- Property name comes from a variable or expression.
- Useful when property names are dynamic.
- Helps create objects with changing property names.

**Example:**

```js
let key = "name";

let user = {
    [key]: "Gopi"
};

console.log(user);
```

**Output:**

```
{
    name: "Gopi"
}
```

**Understand:**

- `key` contains `"name"`.
- `[key]` uses the value of the variable as the property name.
- The resulting object has a `name` property.

**Remember:** Computed properties use `[]` to create dynamic property names.

## **Quick Revision – Key Points**

| Concept                  | Main Purpose                        |
| ------------------------ | ----------------------------------- |
| Modules                  | Split code into separate files      |
| Named Exports            | Export multiple items               |
| Default Exports          | Export one main item                |
| Optional Chaining `?.`   | Safely access properties            |
| Nullish Coalescing `??`  | Provide fallback for null/undefined |
| Computed Properties `[]` | Create dynamic property names       |



<h2  class="answer-heading" id="12.1">12.1 What is a callback?</h2>


💡 **Meaning:**

A callback is a function that we pass as an argument to another function. The receiving function can execute that callback when needed.

**Example:**

```js
function greet(name, callback) {
  console.log("Hello " + name);

  callback();
}

function sayWelcome() {
  console.log("Welcome to JavaScript");
}

greet("Arun", sayWelcome);
```

**Output:**

```
Hello Arun
Welcome to JavaScript
```

**Understand step by step:**

1. `sayWelcome` is a function.
2. We pass `sayWelcome` as an argument to `greet()`.
3. Inside `greet()`, the `callback` parameter receives that function.
4. `callback()` executes the received function.

**Important syntax:**

```js
function firstFunction(callback) {
  callback();
}

function secondFunction() {
  console.log("Callback executed");
}

firstFunction(secondFunction);
```

Notice the difference:

- `secondFunction` – passes the function without executing it.
- `secondFunction()` – executes the function immediately.

**Remember:** A callback is a function passed to another function to be called later or at a specific point.

<h2  class="answer-heading" id="12.2">12.2 Why do we use callbacks?</h2>


💡 **Meaning:**

We use callbacks when we want one function to execute another function after a particular task or event.

**Example 1: Execute code after a task**

```js
function getUser(callback) {
  const user = {
    name: "Arun",
    age: 25
  };

  callback(user);
}

function displayUser(user) {
  console.log(user.name);
}

getUser(displayUser);
```

**Output:**

```
Arun
```

**Example 2: setTimeout**

```js
console.log("Start");

setTimeout(() => {
  console.log("Task completed");
}, 2000);

console.log("End");
```

**Output:**

```js
Start
End
Task completed
```

Here, the callback executes after approximately 2 seconds.

**Real-world usage:**

- Handling button clicks.
- Processing API responses with callback-based APIs.
- Reading files in Node.js.
- Executing code after a timer.
- Handling events.

**Remember:** Callbacks help us decide what code should execute after a particular operation or event.

<h2  class="answer-heading" id="12.3">12.3 What is callback hell?</h2>


💡 **Meaning:**

Callback hell happens when multiple callbacks are nested inside one another, making the code difficult to read, understand, and maintain.

**Example:**

Imagine an e-commerce application:

1. Get user details.
2. Get the user's orders.
3. Get the order details.
4. Process the payment.

```js
getUser(userId, function(user) {

  getOrders(user.id, function(orders) {

    getOrderDetails(orders[0].id, function(details) {

      processPayment(details, function(result) {

        console.log("Payment successful");

      });

    });

  });

});
```

**Problem:**

- Too many nested functions.
- Difficult to understand the execution flow.
- Difficult to handle errors.
- Difficult to maintain.

**How can we avoid callback hell?**

Use Promises and `async/await`.

**Promise example:**

```js
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => processPayment(details))
  .then(result => console.log("Payment successful"))
  .catch(error => console.log(error));
```

**Async/await example:**

```js
async function makePayment(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    const result = await processPayment(details);

    console.log("Payment successful");
  } catch (error) {
    console.log(error);
  }
}
```

**Remember:** Callback hell means deeply nested callbacks. Promises and `async/await` make asynchronous code easier to manage.

<h2  class="answer-heading" id="12.4">12.4 What is a higher-order function?</h2>


💡 **Meaning:**

A higher-order function (HOF) is a function that does at least one of these things:

1. Accepts another function as an argument.
2. Returns another function.

**Example 1: Accepts another function**

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(10, 20, add));
```

**Output:**

```
30
```

Here:

- `calculate()` is a higher-order function.
- `add()` is a callback function.
- `operation` receives the `add` function.

**Example 2: Returns another function**

```js
function multiplyBy(number) {

  return function(value) {
    return value * number;
  };

}

const double = multiplyBy(2);

console.log(double(5));
```

**Output:**

```
10
```

Here, `multiplyBy()` returns another function.

**Remember:** A higher-order function accepts a function or returns a function (or both).

<h2  class="answer-heading" id="12.5">12.5 How does map() internally work?</h2>


💡 **Meaning:**

`map()` is a higher-order array method that executes a callback for every array element and returns a new array containing the callback results.

**Example:**

```js
const numbers = [1, 2, 3, 4];

const result = numbers.map((number) => {
  return number * 2;
});

console.log(result);
```

**Output:**

```
[2, 4, 6, 8]
```

**Understand internally:**

Imagine JavaScript processes each element one by one:

| Iteration | number | Operation | Result |
| --------- | ------ | --------- | ------ |
| 1         | 1      | 1 × 2     | 2      |
| 2         | 2      | 2 × 2     | 4      |
| 3         | 3      | 3 × 2     | 6      |
| 4         | 4      | 4 × 2     | 8      |

**How does it work?**

1. `map()` receives a callback function.
2. It visits each array element.
3. It passes the current element to the callback.
4. It collects each returned value into a new array.
5. Finally, it returns that new array.

**Can we create our own map function?**

Yes!

```js
function myMap(array, callback) {

  const result = [];

  for (let i = 0; i < array.length; i++) {

    result.push(callback(array[i], i, array));

  }

  return result;
}

const numbers = [1, 2, 3, 4];

const output = myMap(numbers, (number) => {
  return number * 2;
});

console.log(output);
```

**Output:**

```
[2, 4, 6, 8]
```

This is a simplified implementation of `map()` for ordinary arrays. The native method also handles sparse arrays and other specification details.

**Remember:** `map()` transforms every element and returns a new array.

<h2  class="answer-heading" id="12.6">12.6 How does filter() internally work?</h2>


💡 **Meaning:**

`filter()` is a higher-order array method that checks every element against a condition and returns a new array containing only the elements that pass the condition.

**Example:**

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((number) => {
  return number > 3;
});

console.log(result);
```

**Output:**

```
[4, 5, 6]
```

**Understand internally:**

| Iteration | number | Condition | Result |
| --------- | ------ | --------- | ------ |
| 1         | 1      | 1 > 3     | false  |
| 2         | 2      | 2 > 3     | false  |
| 3         | 3      | 3 > 3     | false  |
| 4         | 4      | 4 > 3     | true   |
| 5         | 5      | 5 > 3     | true   |
| 6         | 6      | 6 > 3     | true   |

Only elements where the callback returns a truthy value are included.

**Can we create our own filter function?**

```js
function myFilter(array, callback) {

  const result = [];

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }

  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];

const output = myFilter(numbers, (number) => {
  return number > 3;
});

console.log(output);
```

**Output:**

```
[4, 5, 6]
```

**Remember:** `filter()` checks a condition and returns only matching elements.

<h2  class="answer-heading" id="12.7">12.7 How does reduce() internally work?</h2>


💡 **Meaning:**

`reduce()` is a higher-order array method that processes array elements one by one and combines them into a single accumulated result.

That result can be a number, string, object, array, or another value.

**Example:**

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((answer, eachItem) => {
  return answer + eachItem;
}, 0);

console.log(total);
```

**Output:**

```
10
```

**Understand the syntax:**

```js
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

| Placeholder          | Meaning                                    |
| -------------------- | ------------------------------------------ |
| `accumulator`        | Stores the result from previous iterations |
| `currentValue`       | Current array element                      |
| `initialValue`       | Starting value of accumulator              |
| `updatedAccumulator` | New value returned for the next iteration  |

**Understand internally, step by step:**

Our array:

```js
[1, 2, 3, 4]
```

Initial value:

```
0
```

## How reduce() calculates

| **Step** | **Calculation** | **Answer** |
| -------- | --------------- | ---------- |
| 1        | 0 + 1           | 1          |
| 2        | 1 + 2           | 3          |
| 3        | 3 + 3           | 6          |
| 4        | 6 + 4           | 10         |

**Final accumulated result**

# **10**

**Can we create our own reduce function?**

```js
function myReduce(array, callback, initialValue) {

  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {

    accumulator = callback(accumulator, array[i], i, array);

  }

  return accumulator;
}

const numbers = [1, 2, 3, 4];

const total = myReduce(numbers, (answer, eachItem) => {
  return answer + eachItem;
}, 0);

console.log(total);
```

**Output:**

```
10
```

This simplified version assumes an initial value is supplied and doesn't implement every native `reduce()` edge case.

**Real-world example – Calculate total order amount:**

```js
const orders = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 1000 },
  { product: "Keyboard", price: 2000 }
];

const total = orders.reduce((sum, order) => {
  return sum + order.price;
}, 0);

console.log(total);
```

**Output:**

```
53000
```

**Remember:** `reduce()` combines array elements into one accumulated result.

<h2  class="answer-heading" id="12.8">12.8 Can we create our own higher-order function?</h2>


💡 **Meaning:**

Yes. We can create our own higher-order functions by accepting another function as an argument or returning a function.

**Example – Custom calculator:**

```js
function calculator(a, b, callback) {
  return callback(a, b);
}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

console.log(calculator(10, 5, add));
console.log(calculator(10, 5, subtract));
console.log(calculator(10, 5, multiply));
```

**Output:**

```
15
5
50
```

**Understand:**

- `calculator()` accepts a callback.
- `add`, `subtract`, and `multiply` are passed as arguments.
- The calculator executes whichever function it receives.

**Real-world usage:**

- Custom array methods.
- Reusable validation functions.
- Middleware in Express.js.
- Event handling.
- Authentication and authorization middleware.

**Remember:** We can create reusable functions that accept other functions to customize their behavior.

<h2  class="answer-heading" id="12.9">12.9 What is function composition?</h2>


💡 **Meaning:**

Function composition means combining two or more functions so that the output of one function becomes the input of another function.

**Example:**

```js
function double(number) {
  return number * 2;
}

function addTen(number) {
  return number + 10;
}

const result = addTen(double(5));

console.log(result);
```

**Output:**

```
20
```

**Understand step by step:**

**Initial value: 5**

**double(5) = 5 × 2 = 10**

**addTen(10) = 10 + 10 = 20**

**Final result: 20**

**Create a reusable compose function:**

```js
function compose(...functions) {
  return function(value) {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, value);
  };
}

const double = number => number * 2;
const addTen = number => number + 10;

const calculate = compose(addTen, double);

console.log(calculate(5));
```

**Output:**

```
20
```

`reduceRight()` executes the functions from right to left.

**Remember:** Function composition combines smaller functions to create a bigger operation.

<h2  class="answer-heading" id="12.10">12.10 What is the difference between synchronous and asynchronous callbacks?</h2>


💡 **Meaning:**

The difference is when the callback gets executed.

**1. Synchronous callback**

A synchronous callback executes immediately as part of the current function execution. It completes before the next statement continues.

```js
function calculate(a, b, callback) {

  const result = a + b;

  callback(result);

}

console.log("Start");

calculate(10, 20, function(answer) {
  console.log(answer);
});

console.log("End");
```

**Output:**

```
Start
30
End
```

Understand:

1. Print `Start`.
2. Call `calculate()`.
3. Execute the callback immediately and print `30`.
4. Print `End`.

**2. Asynchronous callback**

An asynchronous callback executes later, after an asynchronous operation or event is ready.

```js
console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 2000);

console.log("End");
```

**Output:**

```js
Start
End
Callback executed
```

Understand:

1. Print `Start`.
2. Schedule the callback using `setTimeout()`.
3. Print `End` without waiting for the timer.
4. After approximately 2 seconds, the callback executes.




<h2  class="answer-heading" id="13.26">13.26 What is Error Handling in Asynchronous Code?</h2>


💡 **Error Handling in Asynchronous Code** means detecting and handling errors that occur while executing asynchronous operations, such as API requests, database queries, file operations, etc.

In simple words, when an asynchronous operation fails, we need to handle the error instead of allowing our application to crash or behave unexpectedly.

**🔑 Key Points:**

- Use `try...catch` with `async/await`.
- Use `.catch()` with Promises.
- Handle API errors, network failures and database errors.
- Always provide meaningful error messages.

**💻 1. Using Async/Await with Try/Catch**

```js
async function getUser() {
    try {
        let response = await fetch(
            "https://invalid-url-example.com/users"
        );

        let data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}

getUser();
```

**How does it work?**

1. `getUser()` starts executing.
2. `await fetch()` waits for the API response.
3. If the request fails, an error is thrown.
4. `catch` handles the error.

**💻 2. Using Promise with .catch()**

```js
fetch("https://invalid-url-example.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("API Error:", error.message);
    });
```

**💻 3. Real-World Example – Node.js Database Operation**

```js
async function getUsers() {
    try {
        let users = await User.find();

        return users;

    } catch (error) {
        console.log("Database Error:", error.message);

        throw error;
    }
}
```

Here, if the database query fails, `catch` handles the error and `throw error` passes it to the calling function for further handling.

**🧠 Remember:**

| Asynchronous Code      | Error Handling              |
| ---------------------- | --------------------------- |
| Promise                | `.catch()`                  |
| Async/Await            | `try...catch`               |
| Node.js database query | `try...catch`               |
| API request            | `.catch()` or `try...catch` |

**Interview Tip:** Always handle asynchronous errors properly so that API failures, database errors and network issues do not cause unexpected application behaviour.

*Note:* `fetch()` does not throw an error for HTTP error responses like 404 or 500. Check `response.ok` and handle those responses separately.

<h2  class="answer-heading" id="14.2">14.2 What is the DOM Tree in JavaScript?</h2>


💡 **DOM (Document Object Model) Tree** is a tree-like structure created by the browser from an HTML document. It represents HTML elements as objects that JavaScript can access and modify.

In simple words, the browser converts HTML code into a **parent-child tree structure**.

**🔑 Key Points:**

1. The DOM represents an HTML document as a tree.
2. Every HTML element becomes a node.
3. Elements can have parent, child and sibling relationships.
4. JavaScript uses the DOM to access, modify, add or remove HTML elements.

**💻 Example – HTML Code:**

```html
<html>
    <body>
        <h1>Hello Gopi</h1>

        <p>Welcome to JavaScript</p>
    </body>
</html>
```

**🧠 Remember:**

- DOM = HTML represented as objects.
- DOM Tree = Parent-child structure of HTML nodes.
- JavaScript = Used to access and manipulate the DOM.

**Interview Tip:** The DOM allows JavaScript to dynamically change webpage content, styles and structure without reloading the entire page.



<h2  class="answer-heading" id="15.1">15.1 What are JavaScript errors?</h2>


💡 JavaScript errors are problems in our code that prevent the program from working as expected.

**Example:**

```js
let result = 10 / ;
```

**Explanation:** This code has a mistake, so JavaScript cannot execute it correctly.

<h2  class="answer-heading" id="15.2">15.2 What is a syntax error?</h2>


💡 A syntax error happens when we write JavaScript code incorrectly by breaking its writing rules.

**Example:**

```js
console.log("Hello"
```

**Explanation:** We forgot the closing parenthesis `)`, so JavaScript reports a syntax error.

<h2  class="answer-heading" id="15.3">15.3 What is a reference error?</h2>


💡 A reference error happens when we try to access a variable that has not been declared or is not available.

**Example:**

```js
console.log(username);
```

**Explanation:** The variable `username` is not declared, so JavaScript throws a ReferenceError.

<h2  class="answer-heading" id="15.4">15.4 What is a type error?</h2>


💡 A type error happens when we perform an operation that is not allowed for a particular data type.

**Example:**

```js
let name = null;

console.log(name.toUpperCase());
```

**Explanation:** We cannot call `toUpperCase()` on `null`, so JavaScript throws a TypeError.

<h2  class="answer-heading" id="15.5">15.5 What is a runtime error?</h2>


💡 A runtime error happens while the JavaScript program is executing, even if the code has no syntax errors.

**Example:**

```js
let user = null;

console.log(user.name);
```

**Explanation:** JavaScript starts executing the code, but accessing `name` from `null` causes an error.

**🧠 Remember the Difference:**

| Error           | Simple Meaning                             |
| --------------- | ------------------------------------------ |
| Syntax Error    | Writing code incorrectly                   |
| Reference Error | Using an unavailable variable              |
| Type Error      | Performing an invalid operation on a value |
| Runtime Error   | An error that occurs during execution      |

**Important:** ReferenceError and TypeError are specific types of runtime errors.


<h2  class="answer-heading" id="15.6">15.6 What is `try...catch`?</h2>


💡 `try...catch` is used to handle errors without stopping the entire program.

- `try` → Contains code that may cause an error.
- `catch` → Handles the error if one occurs.

**Example:**

```js
try {
    let result = 10 / x;
} catch (error) {
    console.log("Something went wrong");
}
```

<h2  class="answer-heading" id="15.7">15.7 What is `finally`?</h2>


💡 `finally` is a block that executes whether an error occurs or not.

**Example:**

```js
try {
    console.log("Try block");
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Finally block");
}
```

**Output:**

```
Try block
Finally block
```

<h2  class="answer-heading" id="15.8">15.8 What is `throw`?</h2>


💡 `throw` is used to manually create an error when a specific condition is not satisfied.

**Example:**

```js
let age = 15;

if (age < 18) {
    throw new Error("Age must be 18 or above");
}
```

**Explanation:** If age is below 18, JavaScript throws an error.

<h2  class="answer-heading" id="15.9">15.9 How do you create a custom error?</h2>


💡 A custom error is an error created by us to show a meaningful message for a specific problem.

**Example:**

```js
let age = 15;

try {
    if (age < 18) {
        throw new Error("User is not eligible");
    }
} catch (error) {
    console.log(error.message);
}
```

**Output:**

```
User is not eligible
```

<h2  class="answer-heading" id="15.10">15.10 What is debugging?</h2>


💡 Debugging is the process of finding and fixing errors in our code.

**Example:**

```js
let a = 10;
let b = 20;

console.log(a + b);
```

We use debugging to check variable values and understand where a problem occurs.

<h2  class="answer-heading" id="15.11">15.11 How do you use `console.log()`?</h2>


💡 `console.log()` is used to display values and messages in the console to understand what is happening in our code.

**Example:**

```js
let name = "Gopi";
let age = 26;

console.log(name);
console.log(age);
```

**Output:**

```
Gopi
26
```

<h2  class="answer-heading" id="15.12">15.12 How do you use browser developer tools?</h2>


💡 Browser Developer Tools are built-in browser tools used to inspect, test, and debug JavaScript and web pages.

**Key Points:**

- Press `F12` or `Ctrl + Shift + I` in Chrome.
- **Console** → Check errors and output.
- **Sources** → Debug JavaScript code.
- **Network** → Check API requests and responses.
- **Elements** → Inspect HTML and CSS.

<h2  class="answer-heading" id="15.13">15.13 What are breakpoints?</h2>


💡 Breakpoints are points where we temporarily pause JavaScript execution to check the code step by step.

**Key Points:**

- Help us find errors.
- Check variable values.
- Understand the execution flow.
- Continue execution one step at a time.

**Example:** Set a breakpoint on `console.log(total)` in the browser Sources tab. Execution pauses before that line runs.

<h2  class="answer-heading" id="15.14">15.14 How do you debug asynchronous code?</h2>


💡 Asynchronous debugging means finding and fixing errors in code that runs later, such as Promises, `async/await`, and API calls.

**Example:**

```js
async function getUser() {
    try {
        let response = await fetch("/api/users");
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("API Error:", error.message);
    }
}

getUser();
```

**Key Points:**

- Use `console.log()` to check values.
- Use `try...catch` to handle errors.
- Use browser breakpoints to pause execution.
- Check the Network tab to inspect API requests and responses.
- Use `await` to wait for Promise results.

**🧠 Remember:**

| Concept         | Purpose                          |
| --------------- | -------------------------------- |
| `try...catch`   | Handle errors                    |
| `finally`       | Always execute cleanup code      |
| `throw`         | Manually throw an error          |
| Custom Error    | Create meaningful error messages |
| Debugging       | Find and fix errors              |
| `console.log()` | Check values                     |
| Developer Tools | Inspect and debug code           |
| Breakpoints     | Pause code execution             |
| Async Debugging | Debug Promises and API calls     |




<h2  class="answer-heading" id="16.1">16.1 What is a prototype?</h2>

### **16.1 What is a Prototype?**

💡 **Meaning:** A prototype is an object from which another JavaScript object can inherit properties and methods.

**🔑 Key Points:**

- Every JavaScript object has an internal prototype link.
- Objects can reuse methods and properties from their prototype.
- This helps avoid writing the same methods repeatedly.

**💻 Example:**

```js
let user = {
    greet: function () {
        console.log("Hello!");
    }
};

let employee = Object.create(user);

employee.greet();
```

**📤 Output:**

```
Hello!
```

**🧠 Remember:** A prototype allows objects to share and reuse properties and methods.

<h2  class="answer-heading" id="16.2">16.2 What is the prototype chain?</h2>

### **16.2 What is the Prototype Chain?**

💡 **Meaning:** The prototype chain is the sequence of objects JavaScript checks when searching for a property or method.

**🔑 Key Points:**

- JavaScript first checks the current object.
- If the property is not found, it checks the object's prototype.
- This continues until it finds the property or reaches `null`.

**💻 Example:**

```js
let user = {
    name: "Gopi"
};

let employee = Object.create(user);

employee.role = "Developer";

console.log(employee.role);
console.log(employee.name);
```

**📤 Output:**

```
Developer
Gopi
```

**🔍 Understand:**

- `role` is found directly inside `employee`.
- `name` is not found inside `employee`, so JavaScript checks its prototype (`user`).

**🧠 Remember:** JavaScript searches the object first, then follows the prototype chain.

<h2  class="answer-heading" id="16.3">16.3 What is prototypal inheritance?</h2>

### **16.3 What is Prototypal Inheritance?**

💡 **Meaning:** Prototypal inheritance is a JavaScript feature that allows one object to inherit properties and methods from another object.

**💻 Example:**

```js
let person = {
    greet: function () {
        console.log("Hello, welcome!");
    }
};

let student = Object.create(person);

student.name = "Gopi";

student.greet();
console.log(student.name);
```

**📤 Output:**

```
Hello, welcome!
Gopi
```

**🔑 Key Points:**

- `person` is the prototype of `student`.
- `student` can access the `greet()` method from `person`.
- We don't need to copy the method into `student`.

**🧠 Remember:** Prototypal inheritance allows objects to reuse another object's properties and methods.

<h2  class="answer-heading" id="16.4">16.4 What is `__proto__`?</h2>

### **16.4 What is&#x20;**`__proto__`**?**

💡 **Meaning:** `__proto__` is a legacy accessor that allows you to access or change an object's internal prototype.

**💻 Example:**

```js
let user = {
    greet: function () {
        console.log("Hello Gopi!");
    }
};

let employee = {};

employee.__proto__ = user;

employee.greet();
```

**📤 Output:**

```
Hello Gopi!
```

**🔑 Key Points:**

- `__proto__` provides access to an object's prototype.
- It allows an object to inherit properties and methods.
- It is mainly used for learning and legacy compatibility.
- Prefer `Object.getPrototypeOf()` and `Object.setPrototypeOf()` in modern code.

**🧠 Remember:** `__proto__` refers to the prototype of an object.

<h2  class="answer-heading" id="16.5">16.5 What is `prototype`?</h2>

### **16.5 What is&#x20;**`prototype`**?**

💡 **Meaning:** `prototype` is a property of constructor functions that defines the object that instances created with `new` can inherit from.

**💻 Example:**

```js
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log("Hello " + this.name);
};

let user1 = new User("Gopi");

user1.greet();
```

**📤 Output:**

```
Hello Gopi
```

**🔍 Understand:**

- `User.prototype` stores the shared methods for `User` instances.
- `new User("Gopi")` creates an object.
- That object's internal prototype points to `User.prototype`.
- So `user1` can access the `greet()` method.

**🧠 Remember:** `prototype` is where constructor functions define methods for their instances to share.

<h2  class="answer-heading" id="16.6">16.6 What is the difference between `prototype` and `__proto__`?</h2>

### **16.6 What is the Difference Between&#x20;**`prototype`**&#x20;and&#x20;**`__proto__`**?**

💡 **Meaning:** `prototype` belongs to constructor functions, while `__proto__` accesses an object's internal prototype.

| `prototype`                                 | `__proto__`                                    |
| ------------------------------------------- | ---------------------------------------------- |
| Property of constructor functions           | Legacy accessor on objects                     |
| Used to define shared methods for instances | Used to access or change an object's prototype |
| Example: `User.prototype`                   | Example: `user1.__proto__`                     |

**💻 Example:**

```js
function User() {}

User.prototype.greet = function () {
    console.log("Hello!");
};

let user1 = new User();

console.log(user1.__proto__ === User.prototype);
```

**📤 Output:**

```
true
```

**🔍 Understand:**

- `User.prototype` is the prototype object used by instances.
- `user1.__proto__` accesses the prototype of `user1`.
- Both refer to the same object in this example.

**🧠 Remember:** `prototype` is used by constructors; `__proto__` accesses an object's prototype.

<h2  class="answer-heading" id="16.7">16.7 What is constructor function?</h2>

### **16.7 What is a Constructor Function?**

💡 **Meaning:** A constructor function is a regular JavaScript function used with the `new` keyword to create multiple objects with the same structure.

**💻 Example:**

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User("Gopi", 26);
let user2 = new User("Arun", 25);

console.log(user1.name);
console.log(user2.name);
```

**📤 Output:**

```
Gopi
Arun
```

**🔑 Key Points:**

When we use `new`:

1. JavaScript creates a new empty object.
2. The new object's prototype is linked to `User.prototype`.
3. `this` refers to the new object.
4. The constructor function executes.
5. The new object is returned automatically (unless the constructor explicitly returns another object).

**🧠 Remember:** A constructor function is a reusable blueprint for creating objects.

<h2  class="answer-heading" id="16.8">16.8 What is inheritance?</h2>

### **16.8 What is Inheritance?**

💡 **Meaning:** Inheritance allows one object or class to reuse properties and methods from another object or class.

**💻 Example using Classes:**

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

class Developer extends Person {
    constructor(name, skill) {
        super(name);
        this.skill = skill;
    }
}

let dev = new Developer("Gopi", "JavaScript");

dev.greet();
console.log(dev.skill);
```

**📤 Output:**

```
Hello Gopi
JavaScript
```

**🔑 Key Points:**

- `Person` is the parent class.
- `Developer` is the child class.
- `extends` establishes inheritance.
- `super()` calls the parent constructor.
- The child class can use the parent's methods.

**🧠 Remember:** Inheritance helps reuse existing code instead of writing the same code again.

<h2  class="answer-heading" id="16.9">16.9 What is `Object.create()`?</h2>


💡 **Meaning:** `Object.create()` creates a new object using an existing object as its prototype.

**Syntax:**

```js
Object.create(prototypeObject);
```

**💻 Example:**

```js
let person = {
    greet: function () {
        console.log("Hello " + this.name);
    }
};

let employee = Object.create(person);

employee.name = "Gopi";
employee.role = "Developer";

employee.greet();

console.log(employee.role);
```

**📤 Output:**

```
Hello Gopi
Developer
```

**🔍 Understand:**

- `person` contains the shared `greet()` method.
- `Object.create(person)` creates a new object called `employee`.
- `employee` inherits `greet()` from `person`.
- `name` and `role` belong directly to `employee`.

**🔑 Key Points:**

- Creates a new object.
- Sets the given object as its prototype.
- Supports prototypal inheritance.
- Does not call a constructor function.

**🧠 Remember:** `Object.create()` creates an object that inherits directly from another object.


<h2  class="answer-heading" id="16.10">16.10 What is the difference between classical and prototypal inheritance?</h2>


💡 **Meaning:** Classical inheritance is based on classes and parent-child relationships, while prototypal inheritance is based on objects inheriting directly from other objects.

| Classical inheritance                  | Prototypal inheritance                  |
| -------------------------------------- | --------------------------------------- |
| Uses classes as blueprints             | Uses objects as prototypes              |
| Commonly uses `extends`                | Uses prototype links                    |
| Child class inherits from parent class | One object inherits from another object |
| Example: Java, C++                     | Example: JavaScript's prototype system  |

**💻 JavaScript examples:**

Classical-style inheritance using JavaScript classes:

```js
class Person {
    greet() {
        console.log("Hello!");
    }
}

class Developer extends Person {}

let dev = new Developer();
dev.greet();
```

Prototypal inheritance using objects:

```js
let person = {
    greet() {
        console.log("Hello!");
    }
};

let developer = Object.create(person);

developer.greet();
```

**📤 Output for both:**

```
Hello!
```

**🧠 Remember:** Classes provide a convenient syntax for inheritance in JavaScript, but JavaScript inheritance works through prototypes behind the scenes.



<h2  class="answer-heading" id="16.11">16.11 How does JavaScript search for an object property?</h2>


### **16.11 How Does JavaScript Search for an Object Property?**

💡 **Meaning:** JavaScript first checks the object itself. If the property is not found, it searches the object's prototype chain until it finds the property or reaches `null`.

**💻 Example:**

```js
let person = {
    name: "Gopi",
    city: "Chennai"
};

let employee = Object.create(person);

employee.role = "Developer";

console.log(employee.role);
console.log(employee.name);
console.log(employee.age);
```

**📤 Output:**

```
Developer
Gopi
undefined
```

**🔍 Understand:**

1. `employee.role` – Found directly inside `employee`.
2. `employee.name` – Not found inside `employee`, so JavaScript checks its prototype (`person`).
3. `employee.age` – Not found in either object, so JavaScript returns `undefined`.

**🔑 Key Points:**

- First, JavaScript checks the current object.
- Next, it checks the prototype.
- It continues through the prototype chain.
- If the property is not found, it returns `undefined`.

**🧠 Remember:** JavaScript searches from the current object up through its prototype chain.





<h2  class="answer-heading" id="19.1">19.1 What is a `Set`?</h2>

### **19.1 What is a&#x20;**`Set`**?**

💡 **Meaning:** A `Set` is a JavaScript data structure that stores unique values. It does not allow duplicate values.

**🔑 Key Points:**

- Stores only unique values.
- Automatically removes duplicates.
- Maintains insertion order.
- Supports adding, deleting, and checking values.

**💻 Example:**

```js
let numbers = new Set([10, 20, 30, 10, 20]);

console.log(numbers);

numbers.add(40);
numbers.delete(20);

console.log(numbers.has(30));
console.log(numbers.size);
```

**📤 Output:**

```js
Set(3) { 10, 20, 30 }
true
3
```

**🧠 Remember:** `Set` is useful when you need to store unique values without duplicates.

<h2  class="answer-heading" id="19.2">19.2 What is a `Map`?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.2 What is a&#x20;**`Map`**?**

💡 **Meaning:** A `Map` is a JavaScript data structure that stores data in key-value pairs. Each key must be unique.

**🔑 Key Points:**

- Stores data as key-value pairs.
- Keys can be any data type, including objects and functions.
- Keys must be unique.
- Maintains insertion order.

**💻 Example:**

```js
let user = new Map();

user.set("name", "Gopi");
user.set("age", 26);
user.set("role", "Developer");

console.log(user.get("name"));
console.log(user.has("age"));
console.log(user.size);
```

**📤 Output:**

```js
Gopi
true
3
```

**🔍 Understand:**

- `set()` – Adds or updates a key-value pair.
- `get()` – Gets a value using its key.
- `has()` – Checks whether a key exists.
- `size` – Returns the number of entries.

**🧠 Remember:** `Map` stores key-value pairs and allows keys of any data type.

<h2  class="answer-heading" id="19.3">19.3 What is the difference between `Map` and `Object`?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.3 What is the Difference Between&#x20;**`Map`**&#x20;and&#x20;**`Object`**?**

💡 **Meaning:** Both store key-value pairs, but `Map` supports keys of any data type, while normal object keys are strings or symbols.

| Map                                  | Object                              |
| ------------------------------------ | ----------------------------------- |
| Keys can be any data type            | Keys are strings or symbols         |
| Uses `set()` and `get()`             | Uses dot or bracket notation        |
| Uses `size` to count entries         | Uses `Object.keys(obj).length`      |
| Maintains insertion order of entries | Has defined property ordering rules |
| Directly iterable                    | Not directly iterable by default    |

**💻 Example:**

```js
// Map
let userMap = new Map();

userMap.set(1, "Gopi");
userMap.set("role", "Developer");

console.log(userMap.get(1));

// Object
let user = {
    name: "Gopi",
    role: "Developer"
};

console.log(user.name);
```

**📤 Output:**

```
Gopi
Gopi
```

**🔍 Understand:**

- `Map` allows the number `1` as a key.
- In an object, `user.name` accesses a property using a string key.

**🧠 Remember:** Use `Map` for flexible key-value storage and `Object` for structured data.

<h2  class="answer-heading" id="19.4">19.4 What is the difference between `Set` and `Array`?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.4 What is the Difference Between&#x20;**`Set`**&#x20;and&#x20;**`Array`**?**

💡 **Meaning:** An Array stores multiple values and allows duplicates, while a Set stores only unique values.

| Array                             | Set                          |
| --------------------------------- | ---------------------------- |
| Allows duplicate values           | Does not allow duplicates    |
| Access values using indexes       | No index-based access        |
| Uses `length`                     | Uses `size`                  |
| Supports `push()`                 | Supports `add()`             |
| Uses `includes()` to check values | Uses `has()` to check values |

**💻 Example:**

```js
let numbersArray = [10, 20, 10, 30];

let numbersSet = new Set([10, 20, 10, 30]);

console.log(numbersArray);
console.log(numbersSet);
```

**📤 Output:**

```js
[10, 20, 10, 30]
Set(3) { 10, 20, 30 }
```

**🔍 Real-life Example:**

- Array: Store a list of orders, where repeated values may be valid.
- Set: Store unique email addresses or unique user IDs.

**🧠 Remember:** Array allows duplicates; Set automatically stores unique values.

<h2  class="answer-heading" id="19.5">19.5 What is `WeakMap`?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.5 What is a&#x20;**`WeakMap`**?**

💡 **Meaning:** A `WeakMap` is a collection that stores key-value pairs, where keys must be objects and are held weakly.

**🔑 Key Points:**

- Keys must be objects (or non-registered symbols).
- Values can be any data type.
- Does not prevent eligible keys from being garbage collected.
- Cannot be iterated using `for...of`.
- Does not have a `size` property.

**💻 Example:**

```js
let weakMap = new WeakMap();

let user = { name: "Gopi" };

weakMap.set(user, "Developer");

console.log(weakMap.get(user));
console.log(weakMap.has(user));
```

**📤 Output:**

```
Developer
true
```

**🔍 Understand:**

- `user` is an object used as the key.
- `weakMap` stores `"Developer"` as its value.
- If the object has no other references, it can be garbage collected.

**🧠 Remember:** WeakMap stores object-based keys without keeping those objects alive just because they are keys.

<h2  class="answer-heading" id="19.6">19.6 What is `WeakSet`?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.6 What is a&#x20;**`WeakSet`**?**

💡 **Meaning:** A `WeakSet` is a collection that stores unique objects using weak references.

**🔑 Key Points:**

- Stores only objects (or non-registered symbols).
- Does not allow primitive values like strings or numbers.
- Automatically allows eligible objects to be garbage collected.
- Does not support iteration.
- Does not have a `size` property.

**💻 Example:**

```js
let weakSet = new WeakSet();

let user1 = { name: "Gopi" };
let user2 = { name: "Arun" };

weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1));
console.log(weakSet.has(user2));
```

**📤 Output:**

```
true
true
```

**🔍 Understand:**

- `add()` – Adds an object.
- `has()` – Checks whether an object exists.
- `delete()` – Removes an object.

**🧠 Remember:** WeakSet stores unique objects and allows them to be garbage collected when no other references exist.

<h2  class="answer-heading" id="19.7">19.7 What is a `Symbol`?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.7 What is a&#x20;**`Symbol`**?**

💡 **Meaning:** A `Symbol` is a primitive data type in JavaScript used to create unique identifiers.

**🔑 Key Points:**

- Every `Symbol()` call creates a unique value.
- Commonly used as object property keys.
- Helps avoid accidental property-name conflicts.
- Symbols are not automatically included in `Object.keys()`.

**💻 Example:**

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

let user = {
    name: "Gopi",
    [id1]: 101
};

console.log(user.name);
console.log(user[id1]);
```

**📤 Output:**

```js
false
Gopi
101
```

**🔍 Understand:**

- Both symbols have the same description `"id"`.
- But they are different unique values.
- `[id1]` creates a symbol-based object property.

**🧠 Remember:** Symbol creates unique identifiers, even when descriptions are the same.

<h2  class="answer-heading" id="19.8">19.8 What is an iterator?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.8 What is an Iterator?**

💡 **Meaning:** An iterator is an object that allows you to access values one at a time using its `next()` method.

**🔑 Key Points:**

- Uses the `next()` method.
- Returns an object containing `value` and `done`.
- `done: false` means more values are available.
- `done: true` means iteration is complete.

**💻 Example:**

```js
let numbers = [10, 20, 30];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

**📤 Output:**

```js
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

**🔍 Understand:**

- `numbers[Symbol.iterator]()` creates an iterator.
- Each `next()` call returns the next value.
- After all values are processed, `done` becomes `true`.

**🧠 Remember:** An iterator provides values one at a time through `next()`.

<h2  class="answer-heading" id="19.9">19.9 What is an iterable?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.9 What is an Iterable?**

💡 **Meaning:** An iterable is an object that provides an iterator through the `[Symbol.iterator]()` method.

**🔑 Key Points:**

- Allows iteration using `for...of`.
- Arrays, strings, Maps, and Sets are built-in iterables.
- An iterable can provide an iterator using `[Symbol.iterator]()`.

**💻 Example:**

```js
let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**📤 Output:**

```
Apple
Mango
Orange
```

**🔍 Understand:**

- `fruits` is an iterable.
- `for...of` internally uses its iterator.
- JavaScript retrieves each value one at a time.

**🧠 Remember:** Iterable means an object that can provide an iterator and be looped through.

<h2  class="answer-heading" id="19.10">19.10 What is a generator function?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.10 What is a Generator Function?**

💡 **Meaning:** A generator function is a special function that can pause its execution and resume later using the `yield` keyword.

**🔑 Key Points:**

- Uses `function*` syntax.
- Uses `yield` to pause execution.
- Returns a generator object when called.
- Execution starts when `next()` is called.

**💻 Example:**

```js
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let result = numbers();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
```

**📤 Output:**

```js
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

**🔍 Understand:**

- `function*` creates a generator function.
- `yield 10` pauses and returns `10`.
- The next `next()` call resumes execution from where it paused.

**🧠 Remember:** Generator functions produce values one at a time and can pause and resume execution.

<h2  class="answer-heading" id="19.11">19.11 What is the `yield` keyword?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.11 What is the&#x20;**`yield`**&#x20;Keyword?**

💡 **Meaning:** The `yield` keyword pauses a generator function and returns a value to the caller.

**🔑 Key Points:**

- Used only inside generator functions.
- Pauses the generator's execution.
- Returns a value through `next()`.
- Execution resumes from the next statement when `next()` is called again.

**💻 Example:**

```js
function* userDetails() {
    console.log("Step 1");

    yield "Gopi";

    console.log("Step 2");

    yield "Developer";

    console.log("Step 3");
}

let user = userDetails();

console.log(user.next());
console.log(user.next());
```

**📤 Output:**

```js
Step 1
{ value: 'Gopi', done: false }
Step 2
{ value: 'Developer', done: false }
```

**🔍 Understand:**

1. First `next()` executes until the first `yield`.
2. It returns `"Gopi"` and pauses.
3. Second `next()` resumes execution.
4. It returns `"Developer"` and pauses again.

**🧠 Remember:** `yield` sends a value and pauses the generator until the next `next()` call.

<h2  class="answer-heading" id="19.12">19.12 What is the difference between an iterator and a generator?2.1 What are Arithmetic Operators in JavaScript?</h2>

### **19.12 What is the Difference Between an Iterator and a Generator?**

💡 **Meaning:** An iterator is an object that provides values using `next()`, while a generator is a convenient way to create an iterator using `function*` and `yield`.

| Iterator                                              | Generator                                     |
| ----------------------------------------------------- | --------------------------------------------- |
| An object with a `next()` method                      | Created using `function*`                     |
| Can be created manually                               | JavaScript creates the iterator automatically |
| Requires manual implementation when creating your own | Uses `yield` to produce values                |
| Returns `{ value, done }` from `next()`               | Also returns `{ value, done }` from `next()`  |

**💻 Iterator Example:**

```js
let iterator = {
    count: 1,

    next() {
        if (this.count <= 3) {
            return {
                value: this.count++,
                done: false
            };
        }

        return {
            value: undefined,
            done: true
        };
    }
};

console.log(iterator.next());
console.log(iterator.next());
```

**💻 Generator Example:**

```js
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

let result = numbers();

console.log(result.next());
console.log(result.next());
```

**📤 Output:**

```js
{ value: 1, done: false }
{ value: 2, done: false }
```

**🔍 Understand:**

- Iterator: We manually create an object and implement `next()`.
- Generator: JavaScript automatically creates the iterator using `function*` and `yield`.

**🧠 Remember:** Every generator produces an iterator, but iterators can also be created manually.

## **Quick Revision – Important Differences**

| Concepts              | Main difference                                  |
| --------------------- | ------------------------------------------------ |
| `Set` vs `Array`      | Unique values vs duplicates allowed              |
| `Map` vs `Object`     | Any key type vs string/symbol keys               |
| `WeakMap` vs `Map`    | Weakly held object keys vs regular keys          |
| `WeakSet` vs `Set`    | Weakly held objects vs any unique values         |
| Iterator vs Iterable  | Provides values vs provides an iterator          |
| Iterator vs Generator | Iteration object vs convenient iterator creation |


<h2  class="answer-heading" id="20.1">20.1 What are JavaScript modules?</h2>


💡 **Meaning:** JavaScript modules allow us to split code into separate files and reuse functions, variables, and classes between those files.

**Why do we need modules?**

Imagine you are building an e-commerce application. Instead of writing everything in one JavaScript file, you can separate the code:

```js
project/
│
├── app.js
├── user.js
├── product.js
├── order.js
└── payment.js
```

**Example:**

`user.js`

```js
export function getUser() {
    return "Gopi";
}
```

`app.js`

```js
import { getUser } from "./user.js";

console.log(getUser());
```

**Output:**

```
Gopi
```

**Key Points:**

- Modules help organize large applications.
- `export` shares code.
- `import` reuses code.
- Each ES module has its own scope.

**Remember:** Modules help split JavaScript code into reusable files.

<h2  class="answer-heading" id="20.2">20.2 What is `import`?</h2>


💡 **Meaning:** `import` is used to access functions, variables, or classes exported from another JavaScript module.

**Example:**

`math.js`

```js
export function add(a, b) {
    return a + b;
}
```

`app.js`

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

**Output:**

```
30
```

**Key Points:**

- Used to reuse code from another module.
- Supports named imports and default imports.
- Named imports use curly braces `{}`.
- Default imports do not require curly braces.

**Remember:** `import` brings exported code into another file.

<h2  class="answer-heading" id="20.3">20.3 What is `export`?</h2>


💡 **Meaning:** `export` allows us to share functions, variables, and classes from one JavaScript module so other files can use them.

**There are two main types:**

**1. Named Export**

```js
// user.js

export const name = "Gopi";

export function greet() {
    return "Hello Gopi";
}
```

Import:

```js
import { name, greet } from "./user.js";

console.log(name);
console.log(greet());
```

**2. Default Export**

```js
// user.js

export default function getUser() {
    return "Gopi";
}
```

Import:

```js
import getUser from "./user.js";

console.log(getUser());
```

**Output:**

```
Gopi
```

**Key Points:**

- Named exports allow multiple exports from a module.
- A module can have only one default export.
- Named imports must match exported names (unless aliased).
- Default imports can use any local name.

**Remember:** `export` shares code; `import` uses that shared code.

<h2  class="answer-heading" id="20.4">20.4 What is CommonJS?</h2>


💡 **Meaning:** CommonJS (CJS) is a module system commonly used in Node.js to share and reuse code using `require()` and `module.exports`.

**Example:**

`math.js`

```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

`app.js`

```js
const add = require("./math");

console.log(add(10, 20));
```

**Output:**

```
30
```

**Key Points:**

- Uses `require()` to import code.
- Uses `module.exports` or `exports` to share code.
- Commonly found in traditional Node.js projects.
- Loading is synchronous in the standard CommonJS module system.

**Remember:** CommonJS uses `require()` and `module.exports`.

<h2  class="answer-heading" id="20.5">20.5 What is ES Module?</h2>


💡 **Meaning:** ES Module (ESM) is the official JavaScript module system that uses `import` and `export` to share code between files.

**Example:**

`math.js`

```js
export function add(a, b) {
    return a + b;
}
```

`app.js`

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

**Output:**

```
30
```

**Key Points:**

- Uses `import` and `export`.
- Supported by modern browsers.
- Supported by modern Node.js.
- Supports static imports and dynamic `import()`.
- Modules have their own scope.

**Node.js configuration:**

In `package.json`:

```js
{
    "type": "module"
}
```

This tells Node.js to treat `.js` files as ES modules by default within that package scope.

**Remember:** ES Modules are the standard JavaScript module system.

<h2  class="answer-heading" id="20.6">20.6 What is the difference between `require()` and `import`?</h2>


💡 **Meaning:** Both are used to load code from another file, but `require()` belongs to CommonJS, while `import` is used by ES Modules.

| `require()`                     | `import`                                        |
| ------------------------------- | ----------------------------------------------- |
| CommonJS                        | ES Modules                                      |
| Commonly used in Node.js        | Used in browsers and Node.js                    |
| Can be called conditionally     | Static imports must be at the top level         |
| Loads synchronously in CommonJS | Static imports are handled by the module system |
| Uses `module.exports`           | Uses `export`                                   |

**Example:**

CommonJS:

```js
const express = require("express");
```

ES Module:

```js
import express from "express";
```

**Important:** ES Modules also support dynamic importing:

```js
const module = await import("./math.js");
```

**Remember:** `require()` = CommonJS; `import` = ES Modules.

<h2  class="answer-heading" id="20.7">20.7 What is the Fetch API?</h2>


💡 **Meaning:** The Fetch API is a browser API used to send HTTP requests and receive data from servers or external APIs.

**Real-life example:** Getting user information from a backend API.

**Example:**

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

**Output (example):**

```js
{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}
```

**Using async/await:**

```js
async function getUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

getUser();
```

**Key Points:**

- `fetch()` sends an HTTP request.
- `response.json()` converts the response body into JavaScript data.
- `await` waits for the Promise to settle.
- `catch` handles network errors and errors we throw.
- Fetch does not automatically reject for HTTP errors like 404 or 500; check `response.ok`.

**Remember:** Fetch API is used to communicate with backend APIs using HTTP requests.

<h2  class="answer-heading" id="20.8">20.8 What is the URL API?</h2>


💡 **Meaning:** The URL API allows us to create, read, modify, and work with URLs in JavaScript.

**Example:**

```js
let url = new URL("https://example.com/products?id=101");

console.log(url.hostname);
console.log(url.pathname);
console.log(url.searchParams.get("id"));
```

**Output:**

```js
example.com
/products
101
```

**Adding query parameters:**

```js
let url = new URL("https://example.com/products");

url.searchParams.set("category", "mobile");
url.searchParams.set("page", "1");

console.log(url.href);
```

**Output:**

```js
https://example.com/products?category=mobile&page=1
```

**Key Points:**

- `hostname` – Gets the domain name.
- `pathname` – Gets the path.
- `searchParams` – Gets or modifies query parameters.
- `href` – Gets the complete URL.

**Remember:** The URL API helps us easily read and modify URLs and query parameters.

<h2  class="answer-heading" id="20.9">20.9 What is localStorage?</h2>


💡 **Meaning:** `localStorage` is a browser storage feature that saves key-value data in the browser and keeps it even after closing and reopening the browser.

**Example:**

```js
// Store data
localStorage.setItem("username", "Gopi");

// Read data
let name = localStorage.getItem("username");

console.log(name);

// Remove one item
localStorage.removeItem("username");

// Clear all items for this origin
localStorage.clear();
```

**Output:**

```js
Gopi
```

**Key Points:**

- Data persists until removed or browser data is cleared.
- Stores values as strings.
- Shared across tabs of the same origin.
- Usually stores around 5 MB, depending on the browser.
- Not suitable for sensitive information such as authentication tokens that must be protected from JavaScript access.

**Real-life Uses:**

- Saving theme preference (dark/light).
- Remembering language selection.
- Storing non-sensitive user preferences.

**Remember:** `localStorage` keeps browser data even after closing the browser.

<h2  class="answer-heading" id="20.10">20.10 What is sessionStorage?</h2>


💡 **Meaning:** `sessionStorage` stores key-value data for a particular browser tab's page session. The data is cleared when that tab or window session ends.

**Example:**

```js
// Store data
sessionStorage.setItem("username", "Gopi");

// Read data
let name = sessionStorage.getItem("username");

console.log(name);

// Remove data
sessionStorage.removeItem("username");
```

**Output:**

```js
Gopi
```

**Key Points:**

- Data is available during the current tab session.
- Separate tabs generally have separate session storage.
- Data is cleared when the tab or window session ends.
- Stores values as strings.

**Real-life Uses:**

- Temporary form data.
- Temporary filters.
- Multi-step form progress in a tab.

**Remember:** `sessionStorage` keeps data for the current tab session.

<h2  class="answer-heading" id="20.11">20.11 What is the difference between localStorage and sessionStorage?</h2>


💡 **Meaning:** Both store data in the browser, but `localStorage` persists across browser sessions, while `sessionStorage` is limited to a tab's page session.

| localStorage                          | sessionStorage                              |
| ------------------------------------- | ------------------------------------------- |
| Data persists after browser restart   | Data ends when the tab session ends         |
| Shared across tabs of the same origin | Separate for each tab                       |
| Stores key-value pairs                | Stores key-value pairs                      |
| Uses `setItem()` and `getItem()`      | Uses `setItem()` and `getItem()`            |
| Manually remove data or clear it      | Automatically cleared when the session ends |

**Example:**

```js
localStorage.setItem("theme", "dark");

sessionStorage.setItem("step", "2");
```

**Real-life Example:**

- `localStorage`: Remember a user's dark mode preference when they return tomorrow.
- `sessionStorage`: Remember the current step of a form while the user works in that tab.

**Remember:** localStorage = persistent storage; sessionStorage = tab session storage.

<h2  class="answer-heading" id="20.12">20.12 What are cookies?</h2>


💡 **Meaning:** Cookies are small pieces of data stored by the browser and can be sent automatically with matching HTTP requests to a server.

**Example:**

```js
// Create a cookie
document.cookie = "username=Gopi; max-age=3600; path=/";

// Read cookies
console.log(document.cookie);
```

**Output:**

```js
username=Gopi
```

**Key Points:**

- Cookies store small amounts of data.
- Can have an expiration date or lifetime.
- Matching cookies are automatically sent with HTTP requests.
- `HttpOnly` cookies cannot be accessed through JavaScript.
- `Secure` cookies are sent only over HTTPS.
- `SameSite` controls cross-site cookie sending.

**Real-life Uses:**

- Session management.
- Authentication sessions.
- User preferences.

**Important:** For authentication, secure server-set cookies using `HttpOnly`, `Secure`, and appropriate `SameSite` settings are generally safer than storing session tokens in `localStorage`.

**Remember:** Cookies store small browser data and can automatically travel with HTTP requests.

<h2  class="answer-heading" id="20.13">20.13 What is the difference between cookies and localStorage?</h2>


💡 **Meaning:** Cookies can be sent automatically with HTTP requests, while localStorage stores data in the browser and is not automatically sent to the server.

| Cookies                                         | localStorage                                      |
| ----------------------------------------------- | ------------------------------------------------- |
| Small storage, typically around 4 KB per cookie | Usually several MB, browser-dependent             |
| Can be sent automatically with HTTP requests    | Not automatically sent                            |
| Supports expiration settings                    | Persists until removed or cleared                 |
| Can use `HttpOnly`                              | Accessible through JavaScript                     |
| Supports `Secure` and `SameSite` settings       | Does not provide these cookie security attributes |

**Example:**

Cookie:

```js
document.cookie = "user=Gopi; max-age=3600; path=/";
```

localStorage:

```js
localStorage.setItem("user", "Gopi");
```

**Real-life Example:**

- Cookies: Maintaining a secure login session.
- localStorage: Remembering a website's theme preference.

**Remember:** Cookies can communicate with the server automatically; localStorage is browser-side storage.

<h2  class="answer-heading" id="20.14">20.14 What is JSON?</h2>


💡 **Meaning:** JSON (JavaScript Object Notation) is a lightweight text format used to exchange and store data between applications, especially frontend and backend systems.

**Example:**

```js
{
    "id": 101,
    "name": "Gopi",
    "role": "Developer",
    "skills": ["JavaScript", "Node.js", "React"]
}
```

**Key Points:**

- JSON represents data using key-value pairs.
- Supports strings, numbers, booleans, arrays, objects, and `null`.
- JSON property names and strings must use double quotes.
- JSON is language-independent.
- Commonly used in REST API requests and responses.

**Real-life Example:**

Your React frontend sends user information to a Node.js backend in JSON format.

**Remember:** JSON is a common format for exchanging data between frontend and backend applications.

<h2  class="answer-heading" id="20.15">20.15 What is `JSON.stringify()`?</h2>


💡 **Meaning:** `JSON.stringify()` converts a JavaScript value or object into a JSON-formatted string.

**Example:**

```js
let user = {
    name: "Gopi",
    age: 26,
    role: "Developer"
};

let result = JSON.stringify(user);

console.log(result);
console.log(typeof result);
```

**Output:**

```js
{"name":"Gopi","age":26,"role":"Developer"}
string
```

**Understand:**

Before conversion:

```js
let user = {
    name: "Gopi",
    age: 26
};
```

After conversion:

```js
'{"name":"Gopi","age":26}'
```

**Real-life Use:**

```js
let user = {
    name: "Gopi",
    role: "Developer"
};

localStorage.setItem("user", JSON.stringify(user));
```

We use `JSON.stringify()` because localStorage stores strings, not JavaScript objects directly.

**Remember:** `JSON.stringify()` converts JavaScript data into a JSON string.

<h2  class="answer-heading" id="20.16">20.16 What is `JSON.parse()`?</h2>


💡 **Meaning:** `JSON.parse()` converts a valid JSON string into a JavaScript value or object.

**Example:**

```js
let userData = '{"name":"Gopi","age":26}';

let user = JSON.parse(userData);

console.log(user.name);
console.log(user.age);
console.log(typeof user);
```

**Output:**

```js
Gopi
26
object
```

**Real-life Use:**

```js
// Get string from localStorage
let userData = localStorage.getItem("user");

// Convert JSON string into JavaScript object
let user = JSON.parse(userData);

console.log(user.name);
```

**Key Points:**

- Converts JSON strings into JavaScript values.
- Used when reading JSON data from APIs or localStorage.
- Invalid JSON causes a `SyntaxError`.
- Use `try...catch` when JSON input may be invalid.

**Remember:** `JSON.parse()` converts a JSON string into JavaScript data.

<h2  class="answer-heading" id="20.17">20.17 What is CORS?</h2>


💡 **Meaning:** CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web page from one origin can access resources from another origin.

**First, understand Origin:**

An origin consists of:

1. Protocol – `http` or `https`
2. Domain – `example.com`
3. Port – `3000`, `5000`, etc.

For example:

```js
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

These are different origins because their ports are different.

**Example:**

Your React frontend requests data from your Node.js backend:

```js
fetch("http://localhost:5000/users");
```

The browser checks whether the backend allows requests from the frontend's origin.

**Node.js Express Example:**

Install:

```js
npm install cors
```

Configure:

```js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.get("/users", (req, res) => {
    res.json({ name: "Gopi" });
});

app.listen(5000);
```

**Key Points:**

- CORS is enforced by browsers.
- The server controls access through response headers.
- `Access-Control-Allow-Origin` is an important CORS response header.
- Some requests trigger a preflight `OPTIONS` request.
- CORS is not a replacement for authentication or authorization.

**Remember:** CORS controls browser access to resources across different origins.

<h2  class="answer-heading" id="20.18">20.18 What are Web Workers?</h2>


💡 **Meaning:** Web Workers allow JavaScript to run background tasks in a separate thread without blocking the browser's main thread.

**Why do we need them?**

Imagine your application performs a large calculation. Running it on the main thread may freeze the user interface.

Web Workers help move that calculation to a background thread.

**Example:**

`worker.js`

```js
self.onmessage = function (event) {
    let number = event.data;

    let result = number * number;

    self.postMessage(result);
};
```

`app.js`

```js
let worker = new Worker("worker.js");

worker.postMessage(10);

worker.onmessage = function (event) {
    console.log(event.data);
};
```

**Output:**

```
100
```

**Understand:**

| Code            | Meaning                             |
| --------------- | ----------------------------------- |
| `new Worker()`  | Creates a background worker         |
| `postMessage()` | Sends data to the worker            |
| `onmessage`     | Receives messages                   |
| `self`          | Refers to the worker's global scope |

**Key Points:**

- Runs JavaScript in a separate thread.
- Helps keep the UI responsive.
- Communicates using messages.
- Cannot directly access the DOM.
- Useful for heavy calculations and data processing.

**Remember:** Web Workers perform background JavaScript tasks without blocking the main UI thread.

<h2  class="answer-heading" id="20.19">20.19 What is the Intersection Observer API?</h2>


💡 **Meaning:** The Intersection Observer API detects when an element enters or leaves the visible area of another element or the browser viewport.

**Why do we need it?**

Imagine an e-commerce website with 100 products. You don't want to load every product image immediately.

You can load images when they become visible to the user.

**Example:**

```js
<img
    class="product"
    data-src="product.jpg"
    alt="Product"
/>
```

```js
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Product image is visible");

            observer.unobserve(entry.target);
        }
    });
});

let image = document.querySelector(".product");

observer.observe(image);
```

**Understand:**

- `IntersectionObserver()` creates an observer.
- `observe()` starts observing an element.
- `entry.isIntersecting` checks whether the element intersects the viewport or specified root.
- `unobserve()` stops observing that element.

**Key Points:**

- Detects visible elements.
- Useful for lazy loading images.
- Useful for infinite scrolling.
- Can detect when sections enter the viewport.

**Remember:** Intersection Observer detects when elements become visible on the screen.

<h2  class="answer-heading" id="20.20">20.20 What is the Mutation Observer API?</h2>


💡 **Meaning:** The Mutation Observer API watches for changes in the DOM, such as adding, removing, or modifying HTML elements and attributes.

**Why do we need it?**

Imagine JavaScript dynamically adds a new element to a page. You may want to detect when that element is added.

Mutation Observer helps monitor those changes.

**Example:**

```js
<div id="container">
    <p>Hello</p>
</div>
```

```js
let container = document.getElementById("container");

let observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        console.log("DOM changed:", mutation.type);
    });
});

observer.observe(container, {
    childList: true,
    attributes: true,
    subtree: true
});

// Add a new element
let newElement = document.createElement("p");

newElement.textContent = "Welcome Gopi";

container.appendChild(newElement);
```

**Output:**

```js
DOM changed: childList
```

**Understand:**

| Option               | Meaning                                 |
| -------------------- | --------------------------------------- |
| `MutationObserver()` | Creates an observer                     |
| `observe()`          | Starts watching an element              |
| `childList: true`    | Detects added or removed child elements |
| `attributes: true`   | Detects attribute changes               |
| `subtree: true`      | Watches descendants also                |
| `disconnect()`       | Stops observing                         |

**Key Points:**

- Detects DOM changes.
- Runs a callback when changes are detected.
- Useful for dynamically updated HTML.
- Can monitor attributes, child elements, and text changes.

**Remember:** Mutation Observer detects changes happening inside the DOM.

# **Important Revision – Module and Browser APIs**

| Concept               | Main purpose                                       |
| --------------------- | -------------------------------------------------- |
| Modules               | Split and reuse JavaScript code                    |
| `import`              | Bring code from another module                     |
| `export`              | Share code with other modules                      |
| CommonJS              | Node.js module system using `require()`            |
| ES Modules            | Standard module system using `import` and `export` |
| Fetch API             | Send HTTP requests                                 |
| URL API               | Read and modify URLs                               |
| localStorage          | Persistent browser storage                         |
| sessionStorage        | Tab session storage                                |
| Cookies               | Small browser data sent with HTTP requests         |
| JSON                  | Data exchange format                               |
| `JSON.stringify()`    | JavaScript value → JSON string                     |
| `JSON.parse()`        | JSON string → JavaScript value                     |
| CORS                  | Controls cross-origin browser access               |
| Web Workers           | Background JavaScript tasks                        |
| Intersection Observer | Detect element visibility                          |
| Mutation Observer     | Detect DOM changes                                 |

**My recommendation for your Node.js + React learning:** Pay special attention to Fetch API, ES Modules, JSON, CORS, localStorage, sessionStorage, and Cookies. These concepts are used frequently in real-world full-stack applications.




<h2  class="answer-heading" id="21.1">21.1 What is debouncing?</h2>


💡 **Meaning:** Debouncing delays the execution of a function until the user stops triggering an event for a specified amount of time.

**Real-life example:**

Imagine a search box. When a user types `JavaScript`, the application should not send an API request for every character.

Instead, wait until the user stops typing for 500 milliseconds, then send one API request.

**💻 Example:**

```js
function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

function searchProducts(value) {
    console.log("Searching:", value);
}

let optimizedSearch = debounce(searchProducts, 500);

// Simulate user typing
optimizedSearch("J");
optimizedSearch("Ja");
optimizedSearch("Java");
optimizedSearch("JavaScript");
```

**Output:**

```js
Searching: JavaScript
```

**🔍 Understand:**

1. `setTimeout()` delays the function execution.
2. `clearTimeout()` cancels the previous timer.
3. Every new event resets the timer.
4. The callback executes only after the user stops triggering events for 500 ms.

**Key Points:**

- Reduces unnecessary function calls.
- Useful for search boxes.
- Useful for form validation.
- Useful for window resize events.

**🧠 Remember:** Debouncing executes a function after the user stops triggering an event.

<h2  class="answer-heading" id="21.2">21.2 What is throttling?</h2>


💡 **Meaning:** Throttling limits how frequently a function can execute during a specified time interval.

**Real-life example:**

Imagine a user scrolling a webpage. The scroll event may trigger hundreds of times.

Instead of executing your function for every scroll event, you can allow it to execute only once every 500 milliseconds.

**💻 Example:**

```js
function throttle(callback, delay) {
    let lastExecution = 0;

    return function (...args) {
        let currentTime = Date.now();

        if (currentTime - lastExecution >= delay) {
            lastExecution = currentTime;
            callback(...args);
        }
    };
}

function handleScroll() {
    console.log("Scroll event executed");
}

let optimizedScroll = throttle(handleScroll, 500);

window.addEventListener("scroll", optimizedScroll);
```

**🔍 Understand:**

- `Date.now()` gets the current time.
- `lastExecution` stores the previous execution time.
- The function executes only when at least 500 ms have passed.
- Other events during that period are ignored.

**Key Points:**

- Controls function execution frequency.
- Useful for scroll events.
- Useful for mouse movement.
- Useful for window resize events.

**🧠 Remember:** Throttling executes a function at controlled time intervals.

**Debouncing vs Throttling:**

| Debouncing                         | Throttling                         |
| ---------------------------------- | ---------------------------------- |
| Waits until events stop            | Limits execution frequency         |
| Executes after inactivity          | Executes at controlled intervals   |
| Useful for search input            | Useful for scrolling               |
| Example: 500 ms after typing stops | Example: At most once every 500 ms |

<h2  class="answer-heading" id="21.3">21.3 What is lazy loading?</h2>


💡 **Meaning:** Lazy loading means loading resources only when they are needed instead of loading everything immediately.

**Real-life example:**

Imagine an e-commerce page containing 100 product images.

Without lazy loading, the browser may start loading all 100 images immediately.

With lazy loading, images can load when the user scrolls near them.

**💻 Example:**

```js
<img
    src="product-1.jpg"
    loading="lazy"
    alt="Product 1"
>

<img
    src="product-2.jpg"
    loading="lazy"
    alt="Product 2"
>
```

**🔍 Understand:**

- `loading="lazy"` tells the browser to defer loading the image until it approaches the viewport.
- Images are loaded when needed.
- This can reduce initial page loading work.

**Key Points:**

- Reduces initial loading time.
- Saves network bandwidth.
- Useful for images and videos.
- Useful for large pages with many resources.

**🧠 Remember:** Lazy loading loads resources only when they are needed.

<h2  class="answer-heading" id="21.4">21.4 What is code splitting?</h2>


💡 **Meaning:** Code splitting divides a large JavaScript application into smaller files or chunks that can be loaded when required.

**Real-life example:**

Imagine your application has three pages:

```js
E-commerce Application
│
├── Home Page
├── Products Page
└── Admin Dashboard
```

Without code splitting, the browser might download JavaScript for all three pages immediately.

With code splitting, the application can load the required page code when the user visits that page.

**💻 Example using Dynamic Import:**

```js
async function loadDashboard() {
    const dashboard = await import("./dashboard.js");

    dashboard.showDashboard();
}

loadDashboard();
```

`dashboard.js`

```js
export function showDashboard() {
    console.log("Dashboard loaded");
}
```

**Output:**

```
Dashboard loaded
```

**🔍 Understand:**

- `import()` dynamically loads a module.
- Dashboard code is loaded when `loadDashboard()` executes.
- The module is returned through a Promise.

**React Example:**

```js
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Dashboard />
        </Suspense>
    );
}
```

**Key Points:**

- Splits large application code.
- Loads code when required.
- Reduces initial JavaScript download.
- Useful for large React applications and route-based loading.

**🧠 Remember:** Code splitting divides large code into smaller chunks and loads them when needed.

<h2  class="answer-heading" id="21.5">21.5 What is caching?</h2>


💡 **Meaning:** Caching means storing previously fetched or calculated data so it can be reused instead of performing the same work again.

**Real-life example:**

Imagine your application requests user details from an API.

The first time, the application fetches data from the server.

The next time, it can reuse valid cached data instead of making another request.

**💻 Example:**

```js
let userCache = null;

async function getUser() {
    if (userCache) {
        console.log("Getting data from cache");
        return userCache;
    }

    console.log("Fetching data from API");

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    userCache = await response.json();

    return userCache;
}

async function main() {
    let first = await getUser();
    let second = await getUser();

    console.log(first.name);
    console.log(second.name);
}

main();
```

**Output (example):**

```js
Fetching data from API
Getting data from cache
Leanne Graham
Leanne Graham
```

**🔍 Understand:**

- First call: Fetches data from the API.
- Stores the result in `userCache`.
- Second call: Reuses the cached data.
- No second API request is needed.

**Key Points:**

- Reduces repeated API requests.
- Can improve application response time.
- Saves network resources.
- Cached data needs an appropriate expiration or invalidation strategy.

**🧠 Remember:** Caching reuses previously stored data instead of fetching or calculating it again.

<h2  class="answer-heading" id="21.6">21.6 What is memoization?</h2>


💡 **Meaning:** Memoization is an optimization technique that stores the result of a function and reuses it when the same inputs are provided again.

**Real-life example:**

Imagine calculating the total price of products.

If the same calculation is requested repeatedly with the same input, we can reuse the previous result.

**💻 Example:**

```js
function memoize(callback) {
    let cache = {};

    return function (number) {
        if (number in cache) {
            console.log("Getting result from cache");
            return cache[number];
        }

        console.log("Calculating result");

        let result = callback(number);

        cache[number] = result;

        return result;
    };
}

function square(number) {
    return number * number;
}

let optimizedSquare = memoize(square);

console.log(optimizedSquare(5));
console.log(optimizedSquare(5));
console.log(optimizedSquare(10));
```

**Output:**

```js
Calculating result
25
Getting result from cache
25
Calculating result
100
```

**🔍 Understand:**

- First `optimizedSquare(5)` calculates `5 * 5`.
- The result `25` is stored in the cache.
- Second `optimizedSquare(5)` reuses the stored result.
- `optimizedSquare(10)` calculates a new result.

**Key Points:**

- Stores previously calculated results.
- Avoids repeated calculations.
- Useful for expensive functions.
- Cache keys must account for all relevant function inputs.

**React Example:**

```js
const total = useMemo(() => {
    return products.reduce(
        (sum, product) => sum + product.price,
        0
    );
}, [products]);
```

**🧠 Remember:** Memoization stores function results and reuses them for the same inputs.

**Caching vs Memoization:**

| Caching                                     | Memoization                                     |
| ------------------------------------------- | ----------------------------------------------- |
| General technique for storing reusable data | Specific technique for storing function results |
| Can store API responses, files, or data     | Stores calculated function outputs              |
| Used in browsers, servers, and applications | Commonly used for expensive calculations        |

<h2  class="answer-heading" id="21.7">21.7 What is event delegation?</h2>


💡 **Meaning:** Event delegation is a technique where we attach one event listener to a parent element instead of adding separate event listeners to every child element.

**Real-life example:**

Imagine an e-commerce application displaying 100 products.

Each product has an Add to Cart button.

Instead of attaching 100 click listeners, we can attach one click listener to the parent container.

**💻 Example:**

```js
<div id="products">
    <button data-id="101">Add Product 1</button>
    <button data-id="102">Add Product 2</button>
    <button data-id="103">Add Product 3</button>
</div>
```

```js
let products = document.getElementById("products");

products.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        let productId = event.target.dataset.id;

        console.log("Added product:", productId);
    }

});
```

**Output (when Product 2 is clicked):**

```
Added product: 102
```

**🔍 Understand:**

- One event listener is attached to the parent `products`.
- When a button is clicked, the click event bubbles up to the parent.
- `event.target` identifies the clicked element.
- `matches("button")` checks whether the clicked element is a button.
- `dataset.id` gets its product ID.

**Key Points:**

- Reduces the number of event listeners.
- Uses event bubbling.
- Works well with dynamically added elements.
- Useful for lists, tables, and product collections.

**🧠 Remember:** Event delegation handles child events using a single parent event listener.

<h2  class="answer-heading" id="21.8">21.8 What is tree shaking?</h2>


💡 **Meaning:** Tree shaking is a build optimization technique that removes unused JavaScript code from the final application bundle.

**Real-life example:**

Imagine a utility module exports three functions, but your application uses only one.

`math.js`

```js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}
```

`app.js`

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

A build tool such as Webpack, Rollup, or Vite can identify unused exports and remove code that is safe to eliminate.

**Output:**

```
30
```

**Key Points:**

- Removes unused code during the build process.
- Reduces final JavaScript bundle size.
- Commonly works with ES Modules.
- Works best when modules are structured so unused code can be identified.

**🧠 Remember:** Tree shaking removes unused code from the production bundle.

<h2  class="answer-heading" id="21.9">21.9 What is minification?</h2>


💡 **Meaning:** Minification reduces JavaScript file size by removing unnecessary characters such as spaces, comments, and line breaks, and sometimes shortening variable names.

**Before Minification:**

```js
function calculateTotal(price, quantity) {
    let total = price * quantity;

    return total;
}

console.log(calculateTotal(100, 2));
```

**After Minification (example):**

```js
function calculateTotal(t,e){return t*e}console.log(calculateTotal(100,2));
```

**Output:**

```
200
```

**Key Points:**

- Reduces JavaScript file size.
- Removes unnecessary whitespace and comments.
- Can shorten variable names.
- Helps reduce download time.
- Commonly performed during production builds.

**🧠 Remember:** Minification makes JavaScript files smaller without changing their intended behavior.

<h2  class="answer-heading" id="21.10">21.10 How do you optimize large arrays?</h2>


💡 **Meaning:** We optimize large arrays by avoiding unnecessary loops, reducing repeated calculations, processing only required data, and choosing suitable data structures.

**Example:**

Imagine an application has 100,000 products, and we need to find products priced above ₹1,000.

**Normal Approach:**

```js
let products = [
    { name: "Mobile", price: 15000 },
    { name: "Mouse", price: 500 },
    { name: "Laptop", price: 50000 },
    { name: "Keyboard", price: 1500 }
];

let result = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 1000) {
        result.push(products[i]);
    }
}

console.log(result);
```

**Output:**

```js
[
    { name: "Mobile", price: 15000 },
    { name: "Laptop", price: 50000 },
    { name: "Keyboard", price: 1500 }
]
```

**Other optimization techniques:**

1. **Use suitable methods:** Choose `find()` when you need only the first matching item, rather than filtering the entire array.
2. **Avoid repeated calculations:** Calculate values once and reuse them.
3. **Use Map for lookups:** Use `Map` when you need frequent key-based searches.
4. **Use pagination:** Load only a small number of records at a time.
5. **Avoid unnecessary copying:** Large array copies consume additional memory.

**Example – Map for faster lookups:**

```js
let users = [
    { id: 101, name: "Gopi" },
    { id: 102, name: "Arun" },
    { id: 103, name: "Kumar" }
];

let userMap = new Map();

users.forEach(user => {
    userMap.set(user.id, user);
});

console.log(userMap.get(102));
```

**Output:**

```js
{ id: 102, name: "Arun" }
```

**🧠 Remember:** Optimize large arrays by reducing unnecessary processing and choosing the right data structure.

<h2  class="answer-heading" id="21.11">21.11 How do you optimize multiple API requests?</h2>


💡 **Meaning:** We optimize multiple API requests by running independent requests in parallel, avoiding duplicate requests, caching responses, and loading only required data.

**Problem:**

Imagine your dashboard needs three API requests:

```
1. Get User Details
2. Get Product Details
3. Get Order Details
```

If we call them one by one using `await`, they run sequentially.

**Not Optimized – Sequential Requests:**

```js
async function loadDashboard() {

    let user = await fetch("/api/user");

    let products = await fetch("/api/products");

    let orders = await fetch("/api/orders");

}
```

Each request waits for the previous one to finish.

**Optimized – Parallel Requests:**

```js
async function loadDashboard() {

    let [user, products, orders] = await Promise.all([
        fetch("/api/user"),
        fetch("/api/products"),
        fetch("/api/orders")
    ]);

    let userData = await user.json();
    let productData = await products.json();
    let orderData = await orders.json();

    console.log(userData);
    console.log(productData);
    console.log(orderData);
}

loadDashboard();
```

**🔍 Understand:**

- `Promise.all()` starts all independent requests together.
- It waits until all requests fulfill.
- Results are returned in the same order as the input promises.
- If one request rejects, `Promise.all()` rejects.

**Other useful techniques:**

| Technique              | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| `Promise.all()`        | Run independent requests in parallel               |
| `Promise.allSettled()` | Get the result of every request, even if some fail |
| Caching                | Avoid duplicate API calls                          |
| Debouncing             | Reduce repeated search API requests                |
| Pagination             | Fetch data in smaller batches                      |
| AbortController        | Cancel requests that are no longer needed          |

**🧠 Remember:** Run independent API requests in parallel instead of waiting for each request sequentially.

<h2  class="answer-heading" id="21.12">21.12 How do you prevent unnecessary DOM updates?</h2>


💡 **Meaning:** Preventing unnecessary DOM updates means changing only the elements that actually need to change instead of repeatedly updating the entire page.

**Real-life example:**

Imagine an e-commerce page displaying 100 products.

When the price of one product changes, we don't need to rebuild all 100 product elements.

We should update only that product's price.

**Example:**

```html
<div id="product">
    <h3>Mobile</h3>
    <p id="price">Price: ₹15000</p>
</div>
```

```
let priceElement = document.getElementById("price");

// Update only the required element
priceElement.textContent = "Price: ₹14000";
```

Here, we update only the price element instead of replacing the entire product section.

**Other techniques:**

1. **Update only changed elements:** Avoid rebuilding the entire DOM.
2. **Use DocumentFragment:** Build multiple elements before inserting them into the DOM.
3. **Avoid unnecessary DOM access:** Store frequently used element references.
4. **Use event delegation:** Avoid attaching too many event listeners.
5. **Use React memoization carefully:** `React.memo`, `useMemo`, and `useCallback` can help avoid unnecessary rendering work when appropriate.

**React Example:**

```js
import React from "react";

const User = React.memo(function User({ name }) {
    console.log("User component rendered");

    return <h3>{name}</h3>;
});

export default User;
```

`React.memo` can skip rendering this component when its props remain unchanged.

**Important:** React rendering and actual DOM updates are different. React can render a component without changing the DOM if the output is unchanged.

**🧠 Remember:** Update only what has changed instead of unnecessarily rebuilding the entire DOM.

# **Quick Revision – Performance Optimization**

| Topic                    | Main purpose                               |
| ------------------------ | ------------------------------------------ |
| Debouncing               | Execute after events stop                  |
| Throttling               | Control execution frequency                |
| Lazy Loading             | Load resources when needed                 |
| Code Splitting           | Divide code into smaller chunks            |
| Caching                  | Reuse previously stored data               |
| Memoization              | Reuse calculated function results          |
| Event Delegation         | One parent event listener                  |
| Tree Shaking             | Remove unused code                         |
| Minification             | Reduce file size                           |
| Large Array Optimization | Reduce unnecessary data processing         |
| API Optimization         | Reduce waiting time and duplicate requests |
| DOM Optimization         | Update only necessary elements             |






<h2  class="answer-heading" id="22.1">22.1 What is XSS?</h2>

💡 **Meaning:**

XSS is a security attack where an attacker injects malicious JavaScript code into a website. When another user visits that website, the malicious code may execute in their browser.

**Example:**

Imagine your application has a comment section.

An attacker submits this comment:

```js
<script>
  alert("Your account is hacked!");
</script>
```

If your application displays this comment as HTML without proper protection, the browser may execute the script.

**How to prevent XSS:**

- Escape user-generated content before displaying it as HTML.
- Avoid using `innerHTML` with untrusted data.
- Use React's normal JSX text rendering instead of `dangerouslySetInnerHTML`.
- Use Content Security Policy (CSP).

**Remember:** XSS means an attacker injects malicious code into a website that executes in another user's browser.


<h2  class="answer-heading" id="22.2">22.2 What is CSRF?</h2>

💡 **Meaning:**

CSRF is an attack where a malicious website tricks an authenticated user into performing an unwanted action on another website.

**Real-life example:**

Imagine:

1. You log in to your banking application.
2. Your browser stores an authentication cookie.
3. You visit an attacker's website.
4. That website secretly sends a request to your banking application.
5. Your browser may automatically attach the banking cookie.
6. If the banking application doesn't have proper CSRF protection, it might process the unwanted request.

**How to prevent CSRF:**

- Use CSRF tokens.
- Configure cookies with `SameSite`.
- Use `Secure` and `HttpOnly` cookie attributes where appropriate.
- Validate the `Origin` or `Referer` header as an additional defense.

**Remember:** CSRF tricks an authenticated user's browser into sending an unwanted request.


<h2  class="answer-heading" id="22.3">22.3 What is SQL injection?</h2>

💡 **Meaning:**

SQL Injection is an attack where an attacker inserts malicious SQL commands into application input to manipulate database queries.

**Example – Vulnerable query:**

Imagine a login form where the user enters a username.

```js
const username = req.body.username;

const query = `
  SELECT * FROM users
  WHERE username = '${username}'
`;
```

An attacker enters:

```js
' OR '1'='1' --
```

The resulting SQL query can have its original condition changed, potentially allowing unauthorized access.

**How to prevent SQL Injection:**

Use parameterized queries instead of directly inserting user input into SQL.

**Secure example using MySQL:**

```js
const username = req.body.username;

const [users] = await db.execute(
  "SELECT * FROM users WHERE username = ?",
  [username]
);
```

Here, the database treats the input as a value rather than executable SQL.

**Remember:** Never directly concatenate user input into SQL queries. Use parameterized queries or a safely configured ORM.


<h2  class="answer-heading" id="22.4">22.4 What is input validation?</h2>

💡 **Meaning:**

Input validation means checking whether user-provided data follows the expected format and rules before processing it.

**Example:**

Imagine a registration form.

You expect:

- Name: Required text.
- Email: Valid email format.
- Age: Number between 18 and 100.
- Password: Minimum 8 characters.

**Example using JavaScript:**

```js
function validateUser(user) {
  if (!user.name) {
    return "Name is required";
  }

  if (!user.email.includes("@")) {
    return "Invalid email";
  }

  if (user.password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return "Valid input";
}

const user = {
  name: "Arun",
  email: "arun@gmail.com",
  password: "arun12345"
};

console.log(validateUser(user));
```

**Output:**

```js
Valid input
```

In real applications, use validation libraries such as Joi, Zod, or express-validator.

**Remember:** Input validation checks whether incoming data is correct and acceptable.


<h2  class="answer-heading" id="22.5">22.5 What is output sanitization?</h2>

💡 **Meaning:**

Output sanitization means safely handling data before displaying or inserting it into a context where it could be interpreted as executable code.

**Example:**

Suppose a user submits this comment:

```js
<img src=x onerror=alert('Hacked')>
```

If you insert this directly into an HTML page, the browser may execute the event handler.

You should safely render the comment as text or use a trusted HTML sanitizer when HTML is genuinely required.

**React example:**

```js
function Comment({ message }) {
  return <p>{message}</p>;
}
```

React normally escapes text values rendered in JSX, so the HTML is displayed as text rather than executed.

**Remember:** Input validation checks incoming data. Output sanitization protects the context where data is displayed or used.


<h2  class="answer-heading" id="22.6">22.6 Why should we avoid `eval()`?</h2>

💡 **Meaning:**

`eval()` executes a string as JavaScript code.

**Example:**

```js
const code = "10 + 20";

const result = eval(code);

console.log(result);
```

**Output:**

```
30
```

**Why should we avoid it?**

1. **Security risk:** If an attacker controls the input, they may execute malicious JavaScript.
2. **Performance:** JavaScript engines have fewer optimization opportunities around `eval()`.
3. **Debugging:** Code executed through `eval()` can be harder to understand and debug.
4. **CSP restrictions:** A strict Content Security Policy can block its use.

**Better approach:**

If you want to calculate two numbers, use normal JavaScript:

```js
const a = 10;
const b = 20;

const result = a + b;

console.log(result);
```

**Remember:** Avoid `eval()` because it executes dynamic strings as code and can create serious security problems.


<h2  class="answer-heading" id="22.7">22.7 Why should sensitive tokens not be stored carelessly?</h2>

💡 **Meaning:**

Authentication tokens are used to identify or authorize users. If attackers steal these tokens, they may be able to access the user's account.

**Example:**

Imagine you store an authentication token in localStorage:

```js
localStorage.setItem("token", "abc123");
```

JavaScript running on the same page can read it:

```js
const token = localStorage.getItem("token");
```

If an XSS vulnerability exists, malicious JavaScript may steal that token.

**Safer approach:**

For many browser-based applications, use cookies configured with:

- `HttpOnly`: JavaScript cannot read the cookie.
- `Secure`: Cookie is sent only over HTTPS.
- `SameSite`: Helps control cross-site cookie sending.

**Example using Express.js:**

```js
res.cookie("token", accessToken, {
  httpOnly: true,
  secure: true,
  sameSite: "lax"
});
```

For production, also configure cookie expiration and an appropriate CSRF defense.

**Remember:** Never expose sensitive authentication tokens unnecessarily. Protect them against theft and unauthorized access.


<h2  class="answer-heading" id="22.8">22.8 What is Content Security Policy?</h2>

💡 **Meaning:**

Content Security Policy is a browser security mechanism that controls which sources are allowed to load or execute resources such as JavaScript, CSS, images, and fonts.

It helps reduce XSS attacks.

**Example:**

A server can send this HTTP response header:

```js
Content-Security-Policy: default-src 'self'; script-src 'self'
```

**Understand:**

- `default-src 'self'`: By default, allow resources from your own origin.
- `script-src 'self'`: Allow JavaScript from your own origin.
- Other unapproved script sources are blocked.

CSP can also restrict inline scripts and other resource types.

**Node.js example using Helmet:**

```js
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
```

Helmet helps configure security-related HTTP headers, including CSP. Configure its policy according to your application's requirements.

**Remember:** CSP controls which resources the browser is allowed to load and execute.


<h2  class="answer-heading" id="22.9">22.9 How can you protect API requests?</h2>

💡 **Meaning:**

API security means protecting your backend endpoints from unauthorized access, malicious input, and unwanted requests.

**Important security practices:**

1. **Authentication:** Verify who is making the request.
2. **Authorization:** Check what the user is allowed to access.
3. **Input validation:** Validate request body, parameters, and query strings.
4. **HTTPS:** Encrypt communication between client and server.
5. **Rate limiting:** Restrict excessive requests.
6. **CORS:** Configure which browser origins can access your API.
7. **SQL injection protection:** Use parameterized queries.
8. **Secure headers:** Use Helmet in Express.js.
9. **Error handling:** Avoid exposing database queries, passwords, or internal details.
10. **Logging and monitoring:** Track suspicious API activity.

**Node.js Express example:**

```js
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());
app.use(express.json());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100
}));

app.get("/api/profile", authenticateUser, (req, res) => {
  res.json({
    message: "Authorized access"
  });
});
```

Here:

- `helmet()` adds security-related HTTP headers.
- `express.json()` parses JSON request bodies.
- `rateLimit()` limits excessive requests.
- `authenticateUser` represents authentication middleware that you must implement.

**Remember:** Protect APIs using authentication, authorization, validation, HTTPS, rate limiting, and secure database queries.


<h2  class="answer-heading" id="22.10">22.10 How do you handle authentication securely?</h2>

💡 **Meaning:**

Secure authentication means verifying a user's identity and protecting their credentials and session information.

Use password hashing libraries such as `bcrypt` or `Argon2`.

```js
const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash(password, 12);
```

**2. Verify passwords**

```js
const isValid = await bcrypt.compare(
  enteredPassword,
  storedHashedPassword
);
```

**3. Use secure authentication**

- Use secure server-side sessions or properly implemented JWT authentication.
- Store browser authentication cookies with `HttpOnly`, `Secure`, and suitable `SameSite` settings.
- Set token/session expiration.
- Implement logout and session/token revocation.
- Use HTTPS.
- Apply role-based access control (RBAC).
- Never store passwords or secret keys in frontend code.

**4. Add extra security**

- Use multi-factor authentication (MFA).
- Limit login attempts.
- Protect password reset functionality.
- Avoid revealing whether an email address exists during login or password recovery.

**Remember:** Secure authentication involves password hashing, safe session/token handling, HTTPS, authorization, expiration, and additional protection such as MFA.


### Important differences to remember for interviews

| Concept             | Main purpose                                                        |
| ------------------- | ------------------------------------------------------------------- |
| XSS                 | Prevent malicious scripts from executing in a user's browser        |
| CSRF                | Prevent unwanted requests made using a user's authenticated browser |
| SQL Injection       | Prevent attackers from manipulating database queries                |
| Input Validation    | Check incoming data                                                 |
| Output Sanitization | Safely handle data before using or displaying it                    |
| CSP                 | Control allowed resource sources in the browser                     |
| Authentication      | Verify who the user is                                              |
| Authorization       | Verify what the user can access                                     |

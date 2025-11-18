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

# **🔥 Most Important JavaScript Interview Questions**

---

## **1. JavaScript Basics


*  [What is JavaScript?](#what_is_javascript)

*  [What are JavaScript data types?](#what_are_javascript_data_types)

*  [What is the difference between `var`, `let`, and `const`?](#what_is_the_difference_between_var_let_and_const)

*  [What is hoisting?](#what_is_hoisting)

*  [What is the `typeof` operator?](#what_is_the_typeof_operator)

*  [What are primitive and non-primitive values?](#what_are_primitive_and_non_primitive_values)

*  [What is NaN?](#what_is_nan)

*  [What is strict mode?](#what_is_strict_mode)

*  [What is the difference between `value` and `reference` types?](#what_is_the_difference_between_value_and_reference_types)

*  [What is the use of semicolons in JavaScript?](#what_is_the_use_of_semicolons_in_javascript)

*  [What is the difference between declaration and initialization?](#what_is_the_difference_between_declaration_and_initialization)

*  [What is type coercion?](#what_is_type_coercion)

*  [What is short-circuit evaluation?](#what_is_short_circuit_evaluation)

*  [What is the difference between `==` and `Object.is()`?](#what_is_the_difference_between_equale_and_object_is)

*  [What is the difference between mutable and immutable data?](#what_is_the_difference_between_mutable_and_immutable_data)

---

## **2. Functions & Execution 


* [What is an arrow function?](#what_is_an_arrow_function)

* [What is a function expression?](#test_gopi)

* [What is the `this` keyword?](#what_is_the_this_keyword)

* [What is a closure?](#what_is_a_closure)

* [What is lexical scope?](#what_is_lexical_scope)

* [What is an IIFE?](#what_is_an_iife)

* [What is recursion?](#what_is_recursion)

* [What are callbacks?](#what_are_callbacks)

* [What are higher-order functions?](#what_are_highe_order_functions)

* [What is currying?](#what_is_currying)

* [What is memoization?](#what_is_memoization)

* [What are the differences between `call()`, `apply()`, and `bind()`?](#what_are_the_differences_between_call_apply_and_bind)

* [What is debouncing?](#what_is_debouncing)

* [What is throttling?](#what_is_throttling)

* [What is the event loop?](#what_is_the_event_loop)

* [What is the call stack?](#what_is_the_call_stack)

* [What are microtasks and macrotasks?](#what_are_microtasks_and_macrotasks)

========================================================================


<h3 id="what_is_javascript">What is JavaScript?</h3>

JavaScript is a **programming language** commonly used to make web pages interactive.

Here’s the simple breakdown:

* **Runs in the browser** (Chrome, Firefox, Safari, etc.).
* **Adds interactivity** to websites—like dropdowns, sliders, form validation, animations.
* **Works alongside HTML and CSS** to build modern web applications.
* **Also runs on servers** using environments like **Node.js**.
* **Event-driven and dynamic**, meaning it can react instantly to user actions.
* **One of the core technologies of the web**, used almost everywhere.

If you want, I can also explain:
✔ how JavaScript works under the hood
✔ key concepts (DOM, events, variables, functions)
✔ differences between JavaScript and jQuery
✔ examples with jQuery (since you prefer that)

Just tell me!


========================================================================

<h3 id="what_are_javascript_data_types">What are JavaScript data types?</h3>


JavaScript has **8 main data types**. They fall into two categories: **primitive** and **non-primitive**.

---

## ✅ **Primitive Data Types (7 types)**

These hold a **single value** and are **immutable**.

1. **String**
   Text values.

   ```js
   let name = "John";
   ```

2. **Number**
   All numbers (integer, float, etc.).

   ```js
   let age = 25;
   ```

3. **BigInt**
   Large integers beyond Number limits.

   ```js
   let big = 12345678901234567890n;
   ```

4. **Boolean**
   Only `true` or `false`.

   ```js
   let isActive = true;
   ```

5. **Undefined**
   A variable declared but not assigned.

   ```js
   let x; // undefined
   ```

6. **Null**
   Intentional “empty” value.

   ```js
   let data = null;
   ```

7. **Symbol**
   Unique identifiers used mostly in advanced JS.

   ```js
   let id = Symbol("id");
   ```

---

## ✅ **Non-Primitive Data Type (1 type)**

8. **Object**
   Collections of key–value pairs.

   ```js
   let user = { name: "John", age: 20 };
   ```

Arrays, functions, dates—all are technically **objects**.




========================================================================

<h3 id="what_is_the_difference_between_var_let_and_const">What is the difference between `var`, `let`, and `const`?</h3>


Here’s a clear and simple explanation of the differences between **`var`**, **`let`**, and **`const`** in JavaScript:

## ✅ **1. Scope**

| Keyword   | Scope Type     | Meaning                                  |
| --------- | -------------- | ---------------------------------------- |
| **var**   | Function scope | Visible inside the entire function.      |
| **let**   | Block scope    | Visible only inside `{ }` blocks.        |
| **const** | Block scope    | Same as `let`, but cannot be reassigned. |

---

## ✅ **2. Reassignment**

| Keyword   | Reassign Value?                         |
| --------- | --------------------------------------- |
| **var**   | ✔ Yes                                   |
| **let**   | ✔ Yes                                   |
| **const** | ❌ No (but object contents *can* change) |

Example for `const` object:

```js
const user = { name: "John" };
user.name = "Peter"; // allowed
user = {}; // ❌ not allowed
```

---

## ✅ **3. Hoisting Behavior**

| Keyword   | Hoisted? | Usable Before Declaration?         |
| --------- | -------- | ---------------------------------- |
| **var**   | ✔ Yes    | ✔ Allowed (value = undefined)      |
| **let**   | ✔ Yes    | ❌ Not allowed (Temporal Dead Zone) |
| **const** | ✔ Yes    | ❌ Not allowed (TDZ)                |

Example:

```js
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // ❌ error (let not usable before declare)
let b = 20;
```

---

## ✅ **4. Use Cases (Best Practices)**

* **Use `let`** for variables that will change.
* **Use `const`** for values that should not change.
* **Avoid `var`** in modern JavaScript (causes unexpected behavior).



========================================================================

<h3 id="what_is_hoisting">What is hoisting?</h3>


**Hoisting** is JavaScript’s behavior of **moving variable and function declarations to the top of their scope** *before the code executes*.

In simple words:

> JavaScript reads all declarations first, then runs the code.

---

## ✅ **How hoisting works**

Only **declarations** are hoisted — **not** assignments.

### Example with `var`

```js
console.log(a); // undefined
var a = 10;
```

Behind the scenes:

```js
var a;        // hoisted
console.log(a);
a = 10;       // assignment stays here
```

---

## ✅ **Hoisting with `let` and `const`**

They are hoisted too, **but not initialized**, so you cannot use them before the declaration.

```js
console.log(b); // ❌ ReferenceError
let b = 20;
```

This happens because of the **Temporal Dead Zone (TDZ)**, the period before the variable is declared.

---

## ✅ **Hoisting with functions**

Function **declarations are fully hoisted**:

```js
sayHello(); // works

function sayHello() {
  console.log("Hello!");
}
```

But **function expressions** are not hoisted like declarations:

```js
sayHi(); // ❌ TypeError
var sayHi = function () {
  console.log("Hi!");
};
```

---

## 🚀 Summary

| Type                 | Hoisted?            | Usable Before Declaration? |
| -------------------- | ------------------- | -------------------------- |
| `var`                | ✔ Yes               | ✔ Yes (value = undefined)  |
| `let`                | ✔ Yes               | ❌ No (TDZ)                 |
| `const`              | ✔ Yes               | ❌ No (TDZ)                 |
| Function Declaration | ✔ Yes               | ✔ Yes                      |
| Function Expression  | ✔ Yes (as variable) | ❌ No                       |

---

If you want, I can also explain:
✔ TDZ with examples
✔ Hoisting in jQuery callbacks
✔ Common interview questions on hoisting


========================================================================

<h3 id="what_is_the_typeof_operator">What is the `typeof` operator?</h3>

## **8. What is the `typeof` operator?**

The **`typeof` operator** in JavaScript is used to **check the data type** of a value or variable.
It returns the type as a **string**.

### ✅ **Examples**

```js
typeof "Hello"      // "string"
typeof 123          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"   // (JavaScript bug)
typeof {}           // "object"
typeof []           // "object"   // arrays are objects
typeof function(){} // "function"
```

---

## ✅ **Key Points**

* It tells you **what type of data** a variable contains.
* It always returns a **string** (e.g., `"string"`, `"number"`).
* `typeof null` returning `"object"` is an old **JavaScript bug**, but kept for compatibility.
* Arrays return `"object"` because they are special kinds of objects.

---

========================================================================

<h3 id="what_are_primitive_and_non_primitive_values">What are primitive and non-primitive values?</h3>


## **9. What are primitive and non-primitive values?**

JavaScript values are divided into **primitive** and **non-primitive** types.

---

## ✅ **Primitive Values**

Primitive values are **simple**, **immutable**, and **stored directly** in memory.

### **Primitive types:**

1. **String**
2. **Number**
3. **Boolean**
4. **Undefined**
5. **Null**
6. **BigInt**
7. **Symbol**

### Example:

```js
let x = 10;
let y = x; 
x = 20;

// y is still 10 (copy of value)
```

Primitive values are **copied by value**.

---

## ✅ **Non-Primitive Values (Reference Types)**

These are **objects**. They are **mutable**, and stored by **reference**, not by value.

### Includes:

* **Object**
* **Array**
* **Function**
* **Date**, **RegExp**, **Map**, **Set**, etc.

### Example:

```js
let obj1 = { name: "John" };
let obj2 = obj1;
obj1.name = "Peter";

// obj2 also changes because both refer to the same object
```

Non-primitive values are **copied by reference**.

---

## 🚀 Summary Table

| Feature   | Primitive    | Non-Primitive                     |
| --------- | ------------ | --------------------------------- |
| Stored as | Value        | Reference                         |
| Mutable?  | No           | Yes                               |
| Copied as | Value copy   | Reference copy                    |
| Types     | 7 primitives | Objects (arrays, functions, etc.) |



========================================================================

<h3 id="what_is_nan">What is NaN?</h3>


## **10. What is `NaN`?**

**`NaN`** stands for **"Not-a-Number"**.
It is a special value in JavaScript that represents an **invalid number** or the result of a **failed numeric operation**.

---

## ✅ **When does `NaN` appear?**

### 1. Invalid mathematical operations

```js
0 / 0           // NaN
Math.sqrt(-1)   // NaN
```

### 2. Converting non-numeric strings to numbers

```js
Number("abc")   // NaN
parseInt("Hi")  // NaN
```

### 3. Arithmetic with undefined or invalid values

```js
undefined + 5   // NaN
```

---

## ✅ **Important properties of NaN**

### ❗ 1. `NaN` is of type **number**

```js
typeof NaN  // "number"
```

### ❗ 2. `NaN` is the **only value that is not equal to itself**

```js
NaN === NaN  // false
```

### ❗ 3. To check if a value is `NaN`, use:

```js
Number.isNaN(value)
```

---

## 🚀 Summary

* `NaN` = Not-a-Number.
* Appears when a numeric operation fails.
* Its type is `"number"`.
* It never equals itself.
* Use `Number.isNaN()` to check it safely.



========================================================================

<h3 id="what_is_strict_mode">What is strict mode?</h3>

## **12. What is Strict Mode (`"use strict"`) ?**

**Strict mode** is a feature in JavaScript that makes the code run in a **stricter**, more **secure**, and **error-sensitive** way.

You enable it by adding:

```js
"use strict";
```

at the top of a file or inside a function.

---

## ✅ **Why strict mode exists**

It helps:

* catch common coding mistakes
* prevent unsafe or buggy behaviors
* make JavaScript run more reliably

---

## ✅ **What strict mode does**

### 1. **Disallows using undeclared variables**

```js
"use strict";
x = 10; // ❌ Error: x is not defined
```

### 2. **Prevents duplicate parameter names**

```js
"use strict";
function test(a, a) {} // ❌ Error
```

### 3. **Makes `this` behave correctly**

In strict mode, `this` in a function that is not a method becomes **undefined** instead of the global object.

```js
"use strict";
function test() {
  console.log(this); // undefined
}
test();
```

### 4. **Prevents deleting variables or functions**

```js
"use strict";
let x = 5;
delete x; // ❌ Error
```

### 5. **Stops silent errors**

Some operations that would normally fail silently now throw real errors.

---

## 🚀 Summary

* `"use strict"` makes JavaScript behave more strictly and safely.
* Helps catch bugs earlier.
* Blocks bad syntax and unsafe actions.


========================================================================

<h3 id="what_is_the_difference_between_value_and_reference_types">What is the difference between `value` and `reference` types?</h3>

## **Difference Between Value and Reference Types**

In JavaScript, data is stored in two ways: **value types** and **reference types**.

---

## ✅ **1. Value Types (Primitive Values)**

These include:

* Number
* String
* Boolean
* Null
* Undefined
* Symbol
* BigInt

### ✔ Stored **directly** in memory

### ✔ Copied **by value**

Meaning a new, independent copy is created.

#### Example:

```js
let a = 10;
let b = a;  // b gets a COPY of a
a = 20;

console.log(b); // 10 (not affected)
```

---

## ✅ **2. Reference Types (Non-Primitive Values)**

These include:

* Object
* Array
* Function
* Date, Map, Set, etc.

### ✔ Stored as **references (pointers)**

### ✔ Copied **by reference**

Meaning both variables point to the **same memory location**.

#### Example:

```js
let obj1 = { name: "John" };
let obj2 = obj1;  // both refer to same object
obj1.name = "Peter";

console.log(obj2.name); // "Peter" (affected)
```

---

## 🚀 **Summary Table**

| Feature       | Value Types                   | Reference Types            |
| ------------- | ----------------------------- | -------------------------- |
| Stored as     | Actual value                  | Memory address (reference) |
| Copy behavior | Copy of value                 | Copy of reference          |
| Mutability    | Immutable                     | Mutable                    |
| Examples      | string, number, boolean, etc. | objects, arrays, functions |

---

========================================================================

<h3 id="what_is_the_use_of_semicolons_in_javascript">What is the use of semicolons in JavaScript?</h3>

---

## **14. What is the use of semicolons in JavaScript?**

In JavaScript, **semicolons (`;`) are used to mark the end of a statement**.

Example:

```js
let x = 10;
console.log(x);
```

---

## ✅ **Why semicolons are used**

Semicolons:

1. **Separate statements**
2. **Prevent automatic semicolon insertion (ASI) errors**
3. Make your code **more predictable and cleaner**

---

## ⚠️ **JavaScript uses Automatic Semicolon Insertion (ASI)**

JavaScript can automatically insert semicolons **when you omit them**.

Example (valid without semicolon):

```js
let x = 10
console.log(x)
```

But **ASI sometimes fails** and creates bugs.

---

## ❗ Example where missing semicolon breaks code

```js
let a = 5
let b = a
(10 + 20).toString()
```

JavaScript reads it as:

```js
let b = a(10 + 20).toString(); // ❌ Error
```

If you add semicolons:

```js
let a = 5;
let b = a;
(10 + 20).toString(); // ✔ Works
```

---

## 🚀 Summary

* Semicolons end statements.
* They avoid ASI-related bugs.
* JavaScript **can** work without them, but using semicolons is safer.

---

Ready for the next question!



========================================================================

<h3 id="what_is_the_difference_between_declaration_and_initialization">What is the difference between declaration and initialization?</h3>


## **15. What is the difference between declaration and initialization?**

### ✅ **1. Declaration**

Declaration means **creating a variable** (telling JavaScript it exists).

Example:

```js
let x;
```

The variable `x` is **declared** but not given a value.
Its value is automatically **undefined**.

---

### ✅ **2. Initialization (or assignment)**

Initialization means **giving a value** to the declared variable.

Example:

```js
x = 10;  // initialization (assigning value)
```

You can also declare and initialize at the same time:

```js
let y = 20;
```

---

## 🚀 **Summary Table**

| Action             | Meaning               | Example      |
| ------------------ | --------------------- | ------------ |
| **Declaration**    | Creating the variable | `let a;`     |
| **Initialization** | Giving it a value     | `a = 5;`     |
| **Both together**  | Declare + initialize  | `let a = 5;` |


========================================================================

<h3 id="what_is_type_coercion">What is type coercion?</h3>

---

## **16. What is type coercion?**

**Type coercion** is the process where JavaScript **automatically converts one data type to another** when needed.

JavaScript does this because it is a **dynamically typed** and **loosely typed** language.

---

## ✅ **Two Types of Type Coercion**

### **1. Implicit Coercion (Automatic)**

JavaScript converts types **behind the scenes**.

Examples:

#### String coercion:

```js
"5" + 2   // "52"   (number → string)
```

#### Number coercion:

```js
"5" - 2   // 3     (string → number)
"10" * 2  // 20
```

#### Boolean coercion:

```js
if ("hello") { }  // "hello" becomes true
```

---

### **2. Explicit Coercion (Manual)**

You convert types **yourself** using functions.

Examples:

```js
Number("5")      // 5
String(123)      // "123"
Boolean(0)       // false
```

---

## 🚀 Summary

| Type                  | Meaning                           | Example           |
| --------------------- | --------------------------------- | ----------------- |
| **Implicit Coercion** | JavaScript converts automatically | `"5" + 1 → "51"`  |
| **Explicit Coercion** | You convert manually              | `Number("5") → 5` |

Type coercion is how JavaScript decides the correct data type while performing operations.


========================================================================

<h3 id="what_is_short_circuit_evaluation">What is short-circuit evaluation?</h3>

## **17. What is short-circuit evaluation?**

**Short-circuit evaluation** is a behavior in JavaScript where **logical operators** (`&&` and `||`) stop evaluating as soon as the final result is known.

---

## ✅ **1. AND operator (`&&`)**

In `A && B`:

* If **A is false**, JavaScript **does not check B**
* It returns the **first false value**

### Example:

```js
false && "Hello"   // false
0 && 5             // 0
```

### Only if A is true:

```js
true && "Hello"    // "Hello"
```

---

## ✅ **2. OR operator (`||`)**

In `A || B`:

* If **A is true**, JavaScript **does not check B**
* It returns the **first true value**

### Example:

```js
true || "Hello"   // true
"Hi" || 0         // "Hi"
```

### Only if A is false:

```js
0 || "Hello"      // "Hello"
```

---

## 🚀 **Why short-circuit evaluation is useful**

* To set **default values**

```js
let name = userName || "Guest";
```

* To check conditions safely

```js
user && user.profile && user.profile.name;
```

---

## **Summary**

| Operator | Stops When            | Returns          |                      |                 |
| -------- | --------------------- | ---------------- | -------------------- | --------------- |
| `&&`     | First **false** value | That false value |                      |                 |
| `        |                       | `                | First **true** value | That true value |


========================================================================

<h3 id="what_is_the_difference_between_equale_and_object_is">What is the difference between `==` and `Object.is()`?</h3>

## **18. What is the difference between `==` and `Object.is()`?**

### **1. `==` (Loose Equality)**

`==` compares two values **after performing type coercion**.

✔ Converts types if needed
✔ Can produce unexpected results
✔ Easy to misuse

### Examples:

```js
5 == "5"        // true  (string → number)
0 == false      // true  (boolean → number)
null == undefined // true
```

---

## **2. `Object.is()`**

`Object.is()` checks **strict equality without type coercion**,
but with **more accurate handling** of special cases.

✔ No type conversion
✔ Correctly compares tricky values
✔ More precise than `===` in some cases

### Examples:

```js
Object.is(5, "5")      // false
Object.is(0, -0)       // false   (=== treats them as equal)
Object.is(NaN, NaN)    // true    (=== says false)
Object.is(true, true)  // true
```

---

## 🚀 **Key Differences**

| Feature         | `==`        | `Object.is()`           |
| --------------- | ----------- | ----------------------- |
| Type coercion?  | ✔ Yes       | ❌ No                    |
| NaN equals NaN? | ❌ No        | ✔ Yes                   |
| 0 equals -0?    | ✔ Yes       | ❌ No                    |
| Accuracy        | Low (loose) | Very high               |
| Best for        | Never use   | Checking exact equality |

---

## **Summary**

* `==` → loose equality (with type conversion)
* `Object.is()` → strict, accurate equality (even better than `===` in edge cases)



========================================================================

<h3 id="what_is_the_difference_between_mutable_and_immutable_data">What is the difference between mutable and immutable data?</h3>

## **20. What is the difference between mutable and immutable data?**

### ✅ **Immutable Data**

Immutable data **cannot be changed** after it is created.

When you modify it, JavaScript creates a **new value** instead of editing the original.

### Examples (Immutable):

* Number
* String
* Boolean
* Undefined
* Null
* Symbol
* BigInt

```js
let str = "Hello";
str[0] = "Y";   // ❌ does nothing
str = "Yellow"; // creates a NEW string
```

---

## **Mutable Data**

Mutable data **can be changed or updated** after creation.

These are **non-primitive** values (objects).

### Examples (Mutable):

* Object
* Array
* Function
* Map, Set, Date, etc.

```js
let user = { name: "John" };
user.name = "Peter";   // ✔ modifies the same object
```

---

## 🚀 **Summary Table**

| Feature        | Immutable                      | Mutable                    |
| -------------- | ------------------------------ | -------------------------- |
| Can it change? | ❌ No                          | ✔ Yes                      |
| Stored as      | Value                          | Reference                  |
| Examples       | string, number, boolean, etc.  | objects, arrays, functions |
| Changing value | Creates a *new* variable/value | Modifies *existing* value  |



========================================================================


<h3 id="what_is_an_arrow_function"> What are Arrow Functions in JavaScript?</h3>

**Answer:**
**Arrow functions** are a **shorter way** to write functions in JavaScript.
They were introduced in **ES6 (ES2015)** to make code simpler and cleaner.

---

### 📘 **Example — Normal Function vs Arrow Function**

**Regular function:**

```js
function add(a, b) {
  return a + b;
}
```

**Arrow function:**

```js
const add = (a, b) => a + b;
```

✅ Both do the same thing, but the arrow function is shorter and easier to read.

---

### ⚙️ **Rules & Features**

1. If there’s **only one line**, you can skip `{}` and `return`.

   ```js
   const greet = () => "Hello!";
   ```

2. If there’s **only one parameter**, you can skip the parentheses.

   ```js
   const square = x => x * x;
   ```

3. Arrow functions **don’t have their own `this`** —
   they **use `this` from the surrounding scope** (lexical `this`).

---

### ⚠️ **Example — `this` Difference:**

```js
const person = {
  name: "John",
  sayHi: () => console.log("Hi " + this.name)
};

person.sayHi(); // Output: "Hi undefined" ❌
```

Here, arrow functions don’t bind `this` to `person`;
they take it from the outer (global) scope.

---

### 🎯 **In short:**

> **Arrow functions** are **shorter and simpler** function syntax introduced in ES6,
> but they **don’t have their own `this`, `arguments`, or `prototype`.**

========================================================================


<h3 id="test_gopi"> What is a function expression? </h3>

A **function expression** is a function that is **assigned to a variable**, rather than declared with a name.

It is created at the time the code runs (runtime), not hoisted like a function declaration.

---

## ✅ **Example of a function expression**

```js
const greet = function() {
  console.log("Hello!");
};
```

Here, the function is **anonymous** (has no name) and is assigned to `greet`.

You call it like this:

```js
greet();
```

---

## 🚀 **Key Characteristics of Function Expressions**

### ✔ **1. Not hoisted** like function declarations

You cannot use them before they are defined.

```js
sayHi();  // ❌ Error

const sayHi = function() {
  console.log("Hi");
};
```

---

### ✔ **2. Can be anonymous or named**

Anonymous:

```js
const a = function() {};
```

Named:

```js
const b = function myFunc() {};
```

---

### ✔ **3. Often used in callbacks**

```js
setTimeout(function() {
  console.log("Done");
}, 1000);
```

---

## **Summary**

* A function expression is a function stored in a variable.
* It is not hoisted.
* It can be anonymous or named.
* Commonly used in callbacks.




========================================================================

<h3 id="#what_is_the_this_keyword">What is the `this` keyword?</h3>

`this` is a special keyword in JavaScript that refers to the **current execution context** — meaning **the object that is calling the function**.

Its value changes depending on **how** and **where** a function is called.

---

## ✅ **1. In an object method**

`this` refers to **the object**.

```js
const user = {
  name: "John",
  show() {
    console.log(this.name);
  }
};

user.show(); // "John"
```

---

## ✅ **2. In a regular function (non-strict mode)**

`this` refers to the **global object** (`window` in browsers).

```js
function test() {
  console.log(this);
}

test(); // window
```

---

## ✅ **3. In strict mode**

`this` becomes **undefined** inside regular functions.

```js
"use strict";

function test() {
  console.log(this);
}

test(); // undefined
```

---

## ✅ **4. In event listeners**

`this` refers to the **DOM element** that received the event.

```js
button.addEventListener("click", function () {
  console.log(this); // the button element
});
```

---

## ✅ **5. In arrow functions**

Arrow functions **do not have their own `this`**.
They **inherit** `this` from the parent scope (lexical `this`).

```js
const obj = {
  name: "John",
  show: () => {
    console.log(this); // NOT obj → inherits from outer scope
  }
};

obj.show();
```

---

## **Summary**

`this` refers to **who is calling the function**:

| Situation                    | `this` refers to                            |
| ---------------------------- | ------------------------------------------- |
| Method inside object         | The object                                  |
| Regular function             | Global object (or undefined in strict mode) |
| Arrow function               | Inherited parent `this`                     |
| Event listener               | The DOM element                             |
| Constructor function / class | New instance                                |

If you want, I can give real interview trick questions about `this`.

========================================================================

<h3 id="#what_is_a_closure">What is a closure?</h3>

## **27. What is a closure?**

A **closure** is a feature in JavaScript where an **inner function remembers and can access variables from its outer function**, even after the outer function has finished executing.

In simple words:

> A closure allows a function to **keep using** variables **outside its own scope**.

---

## ✅ **Example**

```js
function outer() {
  let count = 0;

  function inner() {
    console.log(count);   // inner can access count
  }

  return inner;
}

const fn = outer();
fn();  // 0
```

Even though `outer()` has finished running,
the inner function still **remembers** `count`.

---

## 🚀 Why closures are useful

* Private variables
* Function factories
* Module pattern
* Maintaining state without classes

### Example: Private variable

```js
function counter() {
  let num = 0;

  return function() {
    num++;
    return num;
  };
}

const c = counter();
c(); // 1
c(); // 2
c(); // 3
```

`num` stays private inside the closure.

---

## **Summary**

* Closure = inner function + lexical environment.
* Lets a function remember variables from its parent scope.
* Useful for private data and state management.


========================================================================

<h3 id="#what_is_lexical_scope">What is lexical scope?</h3>


## **28. What is lexical scope?**

**Lexical scope** (also called **static scope**) means that the **scope of a variable is determined by where it is written in the code**, not where it is called.

In simple terms:

> Variables are accessible based on their **physical location** in the source code.

---

## ✅ **How lexical scope works**

Inner functions can access:

* their own variables
* variables from their outer (parent) functions
* variables from the global scope

But outer functions **cannot** access variables inside inner functions.

---

## ✅ **Example**

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x);  // inner can access outer’s variable
  }

  inner();
}

outer();
```

Because `inner` is **written inside** `outer`, it has access to `outer`'s scope.

---

## 🚫 **Outer cannot access inner variables**

```js
function outer() {
  let x = 10;

  function inner() {
    let y = 20;
  }

  console.log(y); // ❌ Error: y is not defined
}
```

---

## 🚀 **Summary**

* Lexical scope is determined by **code structure**, not function calls.
* Inner functions can access outer variables.
* Outer functions cannot access inner variables.
* Lexical scope enables **closures**.


========================================================================

<h3 id="#what_is_an_iife">What is an IIFE?</h3>


## **29. What is an IIFE?**

An **IIFE** stands for **Immediately Invoked Function Expression**.

It is a function that is:

1. **Defined**, and
2. **Executed immediately** (without being called later)

---

## ✅ **Basic syntax**

```js
(function () {
  console.log("IIFE running!");
})();
```

* The function is wrapped in parentheses → makes it an **expression**, not a declaration.
* The final `()` immediately **executes** it.

---

## ✅ **Why use an IIFE?**

### ✔ 1. To avoid polluting the global scope

Variables inside an IIFE stay **private**.

```js
(function () {
  let secret = "hidden";
})();
console.log(secret); // ❌ Error
```

### ✔ 2. To create private variables and modules

### ✔ 3. To run setup code immediately

### ✔ 4. Commonly used before ES6 modules existed

---

## ✔ Example with parameters

```js
(function (name) {
  console.log("Hello " + name);
})("John");
```

---

## **Summary**

* IIFE = function executed right after it is created.
* Keeps variables private.
* Prevents global scope pollution.
* Often used for initialization code.


========================================================================


<h3 id="#what_is_recursion">What is recursion?</h3>


**Recursion** is a technique where a function **calls itself** to solve a problem.

A recursive function must have:

1. **Base case** → stops the recursion
2. **Recursive case** → the function calling itself again with a smaller/simpler input

---

### **Example**

```js
function countdown(n) {
  if (n === 0) return;   // base case
  console.log(n);
  countdown(n - 1);      // recursive call
}
```

---

### **In simple words**

Recursion is when a function solves a problem by breaking it into smaller versions of itself until it reaches a stopping point.


========================================================================


<h3 id="#what_are_callbacks">What are callbacks?</h3>


A **callback** is a function that is **passed as an argument to another function** and is executed **later**.

In simple words:
**A callback is a function you give to another function so it can call it back when it's ready.**

---

## ✅ Example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("John", function () {
  console.log("Welcome!");
});
```

---

## ✔ Why callbacks are used?

* To handle **asynchronous operations** (like API calls, timers, reading files)
* To execute code **after** something else completes
* To customize function behavior

---

## 🕒 Asynchronous callback example

```js
setTimeout(function () {
  console.log("This runs later");
}, 1000);
```

---

## Summary

* A callback is a function passed to another function.
* It runs after the first function finishes or when an event occurs.
* Common in asynchronous JavaScript.

Want the next one?



========================================================================

<h3 id="#what_are_highe_order_functions">What are higher-order functions?</h3>


A **higher-order function (HOF)** is a function that does **at least one** of the following:

1. **Takes another function as an argument**, OR
2. **Returns a function**

If a function does either of those, it is a higher-order function.

---

## ✅ Example: Taking a function as an argument

```js
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}

repeat(3, () => console.log("Hello"));
```

---

## ✅ Example: Returning a function

```js
function multiplyBy(n) {
  return function (x) {
    return x * n;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

---

## ✔ Common higher-order functions in JavaScript

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `setTimeout()`
* Event listeners

---

## **Summary**

A higher-order function is any function that **accepts a function**, **returns a function**, or **does both**.


========================================================================

<h3 id="#what_is_currying">What is currying?</h3>

**Currying** is a technique where a function that takes multiple arguments is transformed into **a series of functions**, each taking **one argument at a time**.

Instead of:

```js
func(a, b, c)
```

Currying makes it:

```js
func(a)(b)(c)
```

---

## ✅ Example of a curried function

```js
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 6
```

---

## ✅ Why use currying?

* Reuse functions with preset values (partial application)
* More flexibility in function composition
* Cleaner functional programming style

---

## ✔ Example: Partial application

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(10)); // 20
```

---

## **Summary**

Currying breaks a multi-argument function into a chain of single-argument functions, allowing more reusable and flexible functional code.



========================================================================

<h3 id="#what_is_memoization">What is memoization?</h3>

**Memoization** is an optimization technique where a function **stores the results** of expensive calculations and **reuses** them when the same inputs occur again.

In simple words:
**Memoization = caching function results.**

---

## ✅ Example: Without memoization

```js
function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}

slowSquare(5); // Calculating... → 25
slowSquare(5); // Calculating... → 25  (repeated work!)
```

---

## ✅ Example: With memoization

```js
function memoizedSquare() {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];  // return from cache
    }
    console.log("Calculating...");
    cache[n] = n * n;    // store in cache
    return cache[n];
  };
}

const square = memoizedSquare();

console.log(square(5)); // Calculating... → 25
console.log(square(5)); // 25 (from cache, fast!)
```

---

## ✔ Why use memoization?

* Avoid repeating heavy computations
* Improve performance
* Useful in recursion (like Fibonacci)
* Used in React (e.g., `useMemo`, `useCallback`)

---

## **Summary**

Memoization improves performance by **storing previous results** and returning them immediately when the same inputs appear again.


========================================================================


<h3 id="#what_are_the_differences_between_call_apply_and_bind">What are the differences between `call()`, `apply()`, and `bind()`?</h3>

All three are used to **set the value of `this`** in a function, but they differ in **how arguments are passed** and **when the function runs**.

---

# ✅ **1. `call()`**

### **Calls the function immediately**

Arguments are passed **individually**.

**Syntax:**

```js
func.call(thisArg, arg1, arg2, ...)
```

**Example:**

```js
function greet(a, b) {
  console.log(this.name, a, b);
}

greet.call({ name: "John" }, "Hello", "World");
```

---

# ✅ **2. `apply()`**

### **Calls the function immediately**

Arguments are passed **as an array**.

**Syntax:**

```js
func.apply(thisArg, [arg1, arg2, ...])
```

**Example:**

```js
greet.apply({ name: "John" }, ["Hello", "World"]);
```

---

# ✅ **3. `bind()`**

### **Does NOT call the function immediately**

It returns a **new function** with `this` permanently set.

**Syntax:**

```js
const newFunc = func.bind(thisArg, arg1, arg2, ...)
```

**Example:**

```js
const newGreet = greet.bind({ name: "John" }, "Hello");
newGreet("World"); // runs later
```

---

# ⭐ Summary Table

| Method      | Calls Immediately? | Arguments Format | Returns New Function? |
| ----------- | ------------------ | ---------------- | --------------------- |
| **call()**  | ✔ Yes              | Individual args  | ✘ No                  |
| **apply()** | ✔ Yes              | Array of args    | ✘ No                  |
| **bind()**  | ✘ No               | Individual args  | ✔ Yes                 |

---

If you want, I can show real-world use cases (event handlers, borrowing methods, constructors).


========================================================================


<h3 id="#what_is_debouncing">What is debouncing?</h3>

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




========================================================================

<h3 id="#what_is_throttling">What is throttling?</h3>


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


========================================================================

<h3 id="#what_is_the_event_loop">What is the event loop?</h3>

The **event loop** is the mechanism that allows JavaScript (which is single-threaded) to handle **asynchronous** operations without blocking the main thread.

It continuously checks:

1. **Call stack** (what is currently running)
2. **Callback/task queues** (what should run next)
3. Moves tasks from the queues → stack when the stack is empty

This makes JavaScript appear fast and non-blocking.

---

## ✔ Simple explanation

JavaScript can do one thing at a time (single-threaded).
But async tasks like **setTimeout**, **Promises**, and **fetch** run in the background (browser/web APIs).
When they're done, the event loop pushes their callbacks back into the call stack **when it's free**.

---

## ✔ Diagram (simple)

```
Call Stack  ←----------- push callbacks -----------  Task Queue
       ↑                                             (micro + macro)
       |                                                    ↑
       -------------- Event Loop ---------------------------
```

---

## ✔ Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 0);

console.log("End");
```

### Output:

```
Start
End
Inside timeout
```

Even with `0 ms`, the timeout runs later because the event loop waits for the call stack to empty.

---

## ✔ Microtasks vs Macrotasks

* **Microtasks (higher priority)**

  * Promises (`.then`)
  * MutationObserver
  * queueMicrotask()

* **Macrotasks**

  * setTimeout
  * setInterval
  * DOM events
  * setImmediate (Node)

Event loop first clears **microtasks**, then **macrotasks**.

---

## **Summary**

The event loop:

* Checks if the call stack is empty
* Moves callbacks from queues into the stack
* Allows JavaScript to run asynchronous code efficiently

Ready for the next one!


========================================================================

<h3 id="#what_is_the_call_stack">What is the call stack?</h3>

The **call stack** is a data structure used by JavaScript to keep track of **which function is currently running** and **what function to return to next**.

It works in a **LIFO** (Last In, First Out) order.

---

## ✅ How the call stack works

* When a function is **called**, it is **pushed** onto the stack.
* When the function **finishes**, it is **popped** off the stack.
* JavaScript can run **only one function at a time** because it has a single call stack → single-threaded.

---

## ✔ Example

```js
function a() {
  b();
}

function b() {
  console.log("Hello");
}

a();
```

### Call stack steps:

1. `a()` pushed
2. inside `a()`, call `b()` → `b()` pushed
3. `b()` prints → popped
4. `a()` finishes → popped

Stack becomes empty again.

---

## ✔ Visual representation

```
| b() |
| a() |
-------
(call stack)
```

After finishing:

```
(empty)
```

---

## ✔ Key points

* Single-threaded → one function at a time
* Functions are pushed/popped as they run
* If a function never ends → **stack overflow**
* Works together with **event loop** for async tasks

---

## **Summary**

The call stack is the part of the JavaScript engine that tracks function execution in a last-in-first-out order.


========================================================================

<h3 id="#what_are_microtasks_and_macrotasks">What are microtasks and macrotasks?</h3>

In JavaScript’s event loop, asynchronous operations are divided into **two types of queues**:

1. **Microtasks** → highest priority
2. **Macrotasks** → lower priority

Microtasks always run **before** macrotasks.

---

# ✅ **Microtasks**

These are *small, fast tasks* that should run **immediately after the current code finishes**, *before* any rendering or other tasks.

### **Examples of microtasks**

* **Promises** (`.then`, `.catch`, `.finally`)
* **queueMicrotask()**
* **MutationObserver**
* Node.js: `process.nextTick()`

### **Executed when?**

After the current call stack is empty, **all microtasks** are executed **before any macrotask**.

---

# ✅ **Macrotasks**

These are *larger asynchronous tasks* that go into the macrotask queue.

### **Examples of macrotasks**

* `setTimeout`
* `setInterval`
* `setImmediate` (Node.js)
* DOM events (click, scroll)
* Network requests (`fetch`, XHR callback)
* I/O operations

### **Execution pattern**

The event loop runs:

1. One macrotask
2. Then **all microtasks**
3. Then the next macrotask
4. Repeat…

---

# ✔ Example (important!)

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### **Output**

```
Start
End
Promise   ← microtask (runs first)
Timeout   ← macrotask (runs later)
```

Even with `0 ms`, `setTimeout` waits because **microtasks always have priority**.

---

# ⭐ Summary Table

| Feature   | Microtask Queue                | Macrotask Queue               |
| --------- | ------------------------------ | ----------------------------- |
| Priority  | ⭐ Higher                       | Lower                         |
| Examples  | Promises, queueMicrotask       | setTimeout, events, intervals |
| Execution | Runs *after* call stack clears | Runs after microtasks         |

---

If you want, I can explain:

* How event loop processes both step-by-step
* Real interview examples
* Trick questions involving microtasks vs macrotasks


========================================================================


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


 **JavaScript interview questions** 

---

### 🧠 **Core JavaScript (Basics)**


1. [What is JavaScript?](#what_is_javascript)

2. [What are the different data types in JavaScript?](#what_are_the_different_data_types_in_javascript)

3. [What is the difference between `var`, `let`, and `const`?](#what_is_the_difference_between_var_let_and_const)

4. [What are primitive and non-primitive data types?](#what_are_primitive_and_non_primitive_data_types)

5. [What is hoisting in JavaScript?](#what_is_hoisting_in_javascript)

6. [What is a closure?](#what_is_a_closure)

7. [What is scope in JavaScript?](#what_is_scope_in_javascript)

8. [What is the difference between local and global scope?](#what_is_the_difference_between_local_and_global_scope)

9. [What is a lexical scope?](#what_is_a_lexical_scope)

12. [What is the `typeof` operator used for?](#what_is_the_typeof_operator_used_for)

13. [What is the difference between `null` and `undefined`?](#what_is_the_difference_between_null_and_undefined)

16. [What is the difference between function declaration and function expression?](#what_is_the_difference_between_function_declaration_and_function_expression)

17. [What are arrow functions?](#what_are_arrow_functions)

18. [What are template literals?](#what_are_template_literals)

21. [What is destructuring assignment?](#what_is_destructuring_assignment)

22. [What are spread and rest operators?](#what_are_spread_and_rest_operators)

23. [What are higher-order functions?](#what_are_higher_order_functions)

24. [What is a callback function?](#what_is_a_callback_function)

25. [What is the difference between synchronous and asynchronous code?](#what_is_the_difference_between_synchronous_and_asynchronous_code)

26. [What is the event loop?](#what_is_the_event_loop)

27. [What is the call stack?](#what_is_the_call_stack)

28. [What is the difference between `map()`, `forEach()`, `filter()`, and `reduce()`?](#what_is_the_difference_between_methods)

30. [How does `this` behave in arrow functions?](#how_does_this_behave_in_arrow_functions)

31. [What is prototypal inheritance?](#what_is_prototypal_inheritance)

32. [What are prototypes in JavaScript?](#what_are_prototypes_in_javascript)

33. [What is the difference between `Object.create()` and a constructor function?](#what_is_the_difference_between_object_create_and_a_constructor_function)

34. [How can you create objects in JavaScript?](#how_can_you_create_objects_in_javascript)

35. [What are classes in JavaScript?](#what_are_classes_in_javascript)

36. [What are getters and setters?](#what_are_getters_and_setters)

37. [What is encapsulation in JavaScript?](#what_is_encapsulation_in_javascript)

38. [What are static methods in classes?](#what_are_static_methods_in_classes)

39. [What is polymorphism in JavaScript?](#what_is_polymorphism_in_javascript)

40. [What is inheritance in ES6 classes?](#what_is_inheritance_in_es6_classes)

---



<h3 id="what_is_javascript">💡 What is JavaScript?</h3>

**JavaScript (JS)** is a **programming language** that makes websites **interactive, dynamic, and smart**.

It runs **inside the web browser**, so when you open a webpage, JavaScript can:

* React to your **clicks**, **typing**, or **scrolling**
* Change the **content or style** of the page without reloading
* Talk to **servers** (for example, to get or send data)
* Create **animations**, **popups**, or even **games**


<span style="color:green;">============================================================================================================= </span>



<h3 id="what_are_the_different_data_types_in_javascript">💡 what are the different data types in javascript</h3>


**Data types** are the **different kinds of values** you can store and use in JavaScript.

---

### 📘 **JavaScript has 2 main types:**

#### 1. **Primitive Data Types**

These hold **single values** (not objects).

| Type          | Example           | Description                            |
| ------------- | ----------------- | -------------------------------------- |
| **String**    | `"Hello"`         | Text data (inside quotes)              |
| **Number**    | `42`, `3.14`      | Numbers (no separate int/float)        |
| **Boolean**   | `true` or `false` | Yes/No or On/Off values                |
| **Undefined** | `let x;`          | Variable declared but no value yet     |
| **Null**      | `let x = null;`   | Empty or no value                      |
| **Symbol**    | `Symbol("id")`    | Unique value (used for object keys)    |
| **BigInt**    | `123n`            | Very large numbers beyond normal limit |

---

#### 2. **Non-Primitive (Reference) Data Types**

These hold **collections** or **complex data**.

| Type         | Example                  | Description                    |
| ------------ | ------------------------ | ------------------------------ |
| **Object**   | `{name: "Ali", age: 25}` | Stores data in key–value pairs |
| **Array**    | `[1, 2, 3]`              | List of values                 |
| **Function** | `function sayHi() {}`    | Block of reusable code         |

---

### 🧠 **Example:**

```js
let name = "John";        // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let city;                 // Undefined
let car = null;           // Null
let user = {id: 1, name: "John"}; // Object
let numbers = [1, 2, 3];  // Array
```



<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_the_difference_between_var_let_and_const">Difference between `var`, `let`, and `const` </h3>

All three are used to **declare variables**, but they behave differently.

---

### 🧱 **1. `var`**

* 🕐 **Old way** (used before ES6)
* 🌍 **Function-scoped** (works inside a function)
* 🔁 **Can be redeclared and updated**
* ⚠️ Can cause bugs because it gets **hoisted**

**Example:**

```js
var name = "John";
var name = "Mike"; // ✅ allowed
console.log(name); // Mike
```

---

### 🧩 **2. `let`**

* 🆕 Introduced in ES6 (modern way)
* 📦 **Block-scoped** (only works inside `{ }`)
* 🚫 **Cannot be redeclared** in the same block
* ✅ **Can be updated**

**Example:**

```js
let age = 25;
age = 30;      // ✅ can update
// let age = 35; // ❌ cannot redeclare in same scope
console.log(age); // 30
```

---

### 🔒 **3. `const`**

* 📦 **Block-scoped** like `let`
* 🚫 **Cannot be redeclared or updated**
* 🧠 Must be given a value when created

**Example:**

```js
const city = "Paris";
// city = "London"; ❌ cannot change
console.log(city); // Paris
```

However — for **objects and arrays**, `const` means the *reference* cannot change,
but the **contents** can still be modified 👇

```js
const person = { name: "John" };
person.name = "Mike"; // ✅ allowed
console.log(person);  // { name: "Mike" }
```

---

### 🎯 **In short:**

| Keyword   | Scope    | Redeclare | Reassign | Hoisted?          | Use Case            |
| --------- | -------- | --------- | -------- | ----------------- | ------------------- |
| **var**   | Function | ✅ Yes     | ✅ Yes    | ✅ Yes (undefined) | Old code            |
| **let**   | Block    | ❌ No      | ✅ Yes    | ⚠️ No (in TDZ)    | Changeable variable |
| **const** | Block    | ❌ No      | ❌ No     | ⚠️ No (in TDZ)    | Fixed value         |

---

👉 **Simple tip:**

> ✅ Use `let` for variables that can change,
> ✅ Use `const` for values that shouldn’t change,
> ❌ Avoid `var` in modern code.


<span style="color:green;">============================================================================================================= </span>



<h3 id="what_are_primitive_and_non_primitive_data_types"> What are primitive and non-primitive data types in JavaScript?</h3>

**Answer:**
In JavaScript, **data types are divided into two categories — primitive and non-primitive.**

* **Primitive data types** are **basic, single values** that are **stored directly in memory**.
  They are **immutable**, meaning their value cannot be changed once created.
  There are **seven primitive types:**
  👉 `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, and `BigInt`.

  **Example:**

  ```js
  let name = "John";   // String
  let age = 25;        // Number
  let isActive = true; // Boolean
  ```

* **Non-primitive data types** are **complex data structures** that **store references** to memory.
  They are **mutable**, meaning their contents can be changed.
  Common non-primitive types include **Objects**, **Arrays**, and **Functions**.

  **Example:**

  ```js
  let person = { name: "John", age: 25 }; // Object
  let numbers = [1, 2, 3];                // Array
  ```

---

### 🧠 **In short:**

| Type              | Stores            | Changeable? | Example                  |
| ----------------- | ----------------- | ----------- | ------------------------ |
| **Primitive**     | Single value      | ❌ No        | `"Hello"`, `25`, `true`  |
| **Non-Primitive** | Reference to data | ✅ Yes       | `{}`, `[]`, `function()` |

---

✅ **One-line summary:**

> Primitive types hold single simple values, while non-primitive types hold references to complex data like objects and arrays.



<span style="color:green;">============================================================================================================= </span>




<h3 id="what_is_hoisting_in_javascript" > 💬 What is Hoisting in JavaScript?</h3>

**Answer:**
**Hoisting** in JavaScript means that **variable and function declarations are moved to the top** of their scope **before the code runs**.

So you can **use a function or variable before you actually write it** in the code.

---

### 📘 **Example with `var`:**

```js
console.log(name); // undefined
var name = "John";
```

✅ Here, JavaScript **moves** the declaration `var name;` to the top internally,
so it becomes:

```js
var name;
console.log(name); // undefined
name = "John";
```

---

### ⚙️ **Example with Function:**

```js
sayHello(); // Works fine

function sayHello() {
  console.log("Hello!");
}
```

✅ Function declarations are **fully hoisted**,
so you can call them **before** they appear in the code.

---

### ⚠️ **Important Notes:**

* `var` is hoisted but **initialized as `undefined`**.
* `let` and `const` are hoisted too, **but not accessible** before declaration
  (this area is called the **Temporal Dead Zone**).

```js
console.log(age); // ❌ Error
let age = 25;
```

---

### 🎯 **In short:**

> **Hoisting** means JavaScript moves declarations to the top before execution,
> allowing you to use functions and variables before declaring them.


<span style="color:green;">============================================================================================================= </span>





<h3 id="what_is_a_closure">What is a closure?</h3>
**Answer:**
A **closure** is when a **function remembers and can use variables** from **its outer function**,
**even after the outer function has finished running**.

In short:

> A closure gives a function access to variables that were outside its scope.

---

### 📘 **Example:**

```js
function outer() {
  let count = 0; // variable in outer function

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() runs and returns inner()

counter(); // 1
counter(); // 2
counter(); // 3
```

✅ Even though `outer()` has finished running,
the `inner()` function **remembers** the variable `count`.
That’s a **closure**.

---

### 🎯 **Why Closures are Useful**

* To **remember state** between function calls
* To **create private variables**
* Commonly used in **event handlers**, **callbacks**, and **modules**

---

### 🧠 **In short:**

> A **closure** is formed when an inner function **remembers variables** from its **outer function’s scope**, even after the outer function is done running.


<span style="color:green;">============================================================================================================= </span>




<h3 id="what_is_scope_in_javascript"> What is Scope in JavaScript?</h3>


**Answer:**
**Scope** in JavaScript means **where variables and functions are accessible** in your code.

In other words — it decides **which parts of the program can see or use a variable**.

---

### 📘 **Types of Scope in JavaScript:**

1. 🧱 **Global Scope**

   * Variables declared **outside any function or block**
   * Can be used **anywhere** in the code

   ```js
   let name = "John"; // global
   function sayName() {
     console.log(name); // can access
   }
   sayName(); // John
   ```

2. ⚙️ **Function Scope**

   * Variables declared **inside a function**
   * Can be used **only inside that function**

   ```js
   function greet() {
     let message = "Hello!";
     console.log(message);
   }
   greet();
   // console.log(message); ❌ Error — not accessible outside
   ```

3. 📦 **Block Scope** (`let` and `const`)

   * Variables declared inside `{ }`
   * Can be used **only inside that block**

   ```js
   {
     let age = 25;
     console.log(age); // works
   }
   // console.log(age); ❌ Error
   ```

---

### 🧠 **In short:**

> **Scope** defines **where a variable can be accessed or used** in your program.
>
> * `var` → function scope
> * `let` & `const` → block scope
> * outside everything → global scope


<span style="color:green;">============================================================================================================= </span>




<h3 id="what_is_the_difference_between_local_and_global_scope"> What is the difference between local and global scope in JavaScript?</h3>


### 💬 **Q: **

**Answer:**
In JavaScript, **scope** decides **where a variable can be accessed**.
There are two main types — **global** and **local**.

---

### 🌍 **Global Scope**

* A variable declared **outside any function or block**.
* Can be **accessed from anywhere** in the program.

**Example:**

```js
let name = "John"; // Global variable

function greet() {
  console.log(name); // ✅ accessible here
}

greet();
console.log(name); // ✅ accessible here too
```

---

### 🧱 **Local Scope**

* A variable declared **inside a function or block `{}`**.
* Can be **used only inside that function or block**.

**Example:**

```js
function sayHi() {
  let message = "Hello!"; // Local variable
  console.log(message);   // ✅ works
}

sayHi();
// console.log(message); ❌ Error — not accessible outside
```

---

### 🎯 **Main Differences**

| Feature            | Global Scope               | Local Scope                    |
| ------------------ | -------------------------- | ------------------------------ |
| **Where declared** | Outside any function/block | Inside a function or block     |
| **Accessible**     | Everywhere in code         | Only inside where it’s defined |
| **Lifetime**       | Exists until page closes   | Exists while function runs     |
| **Risk**           | Can cause name conflicts   | Safe and isolated              |

---

👉 **In short:**

> **Global scope** = variable usable anywhere.
> **Local scope** = variable usable only inside its function or block.



<span style="color:green;">============================================================================================================= </span>





<h3 id="what_is_a_lexical_scope"> What is Lexical Scope in JavaScript?</h3>

**Answer:**
**Lexical scope** means that **a function can access variables defined in its outer (parent) scope**,
**where it was written**, not where it’s called.

In simple words:

> A function **remembers the place in the code** where it was created,
> and it can use variables from that place.

---

### 📘 **Example:**

```js
function outer() {
  let name = "John"; // variable in outer function

  function inner() {
    console.log(name); // can access 'name' from outer()
  }

  inner();
}

outer(); // Output: John
```

✅ Here, `inner()` can use `name` because it’s **inside the lexical scope** of `outer()`.

---

### ⚙️ **Another Example (even if called later):**

```js
function outer() {
  let greeting = "Hello";

  function inner() {
    console.log(greeting);
  }

  return inner;
}

const myFunc = outer();
myFunc(); // Output: Hello
```

Even though `outer()` finished running,
`inner()` **remembers** `greeting` — this is **lexical scoping + closure**.

---

### 🎯 **In short:**

> **Lexical scope** means **inner functions can access variables from their outer functions**,
> because of **where they are defined** in the code — not where they are called.




<span style="color:green;">============================================================================================================= </span>






<h3 id="what_is_the_typeof_operator_used_for"> What is the `typeof` operator used for in JavaScript?</h3>

**Answer:**
The **`typeof` operator** is used to **check the data type** of a value or variable in JavaScript.

It returns the **type as a string** (like `"number"`, `"string"`, `"boolean"`, etc.).

---

### 📘 **Example:**

```js
console.log(typeof "Hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {name: "Ali"}); // "object"
console.log(typeof [1, 2, 3]);     // "object"
console.log(typeof function(){});  // "function"
```

---

### ⚠️ **Special Note:**

There’s one known **quirk** in JavaScript:

```js
console.log(typeof null); // "object"
```

This is a **bug** in the language that exists for backward compatibility —
`null` is **not** actually an object.

---

### 🎯 **In short:**

> The `typeof` operator tells you **what type of data** a variable holds.
> It’s mainly used for **type checking and debugging**.




<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_the_difference_between_null_and_undefined"> What is the difference between `null` and `undefined` in JavaScript?</h3>


**Answer:**
Both `null` and `undefined` mean **“no value”**, but they are **used differently**.

---

### 🟡 **`undefined`**

* A variable is **`undefined`** when it is **declared but not assigned** a value.
* It means **“value not defined yet.”**

**Example:**

```js
let a;
console.log(a); // undefined
```

---

### ⚫ **`null`**

* `null` is a **value you assign yourself** to show that a variable is **empty on purpose**.
* It means **“nothing”** or **“no value.”**

**Example:**

```js
let b = null;
console.log(b); // null
```

---

### ⚙️ **Key Differences:**

| Feature     | `undefined`              | `null`                       |
| ----------- | ------------------------ | ---------------------------- |
| **Type**    | `"undefined"`            | `"object"` (bug in JS)       |
| **Set by**  | JavaScript automatically | Programmer manually          |
| **Meaning** | Value not assigned       | Empty or intentional nothing |
| **Example** | `let x;` → `undefined`   | `let x = null;` → `null`     |

---

### 🎯 **In short:**

> * `undefined` → variable declared but not assigned.
> * `null` → variable intentionally set to “no value.”


<span style="color:green;">============================================================================================================= </span>




<h3 id="what_is_the_difference_between_function_declaration_and_function_expression"> What is the difference between a Function Declaration and a Function Expression in JavaScript?</h3>


### 🧩 **1. Function Declaration**

* It’s a function that is **defined with the `function` keyword** and has a **name**.
* It is **hoisted**, meaning you can **call it before it’s defined**.

**Example:**

```js
sayHello(); // ✅ Works because it's hoisted

function sayHello() {
  console.log("Hello!");
}
```

✅ JavaScript moves (hoists) the entire function to the top during execution.

---

### ⚙️ **2. Function Expression**

* A function stored **inside a variable**.
* It can be **named or anonymous**.
* It is **not hoisted**, so you **can’t call it before defining** it.

**Example:**

```js
sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization

const sayHi = function() {
  console.log("Hi!");
};

sayHi(); // ✅ Works
```

---

### 🔑 **Main Differences:**

| Feature                         | Function Declaration       | Function Expression            |
| ------------------------------- | -------------------------- | ------------------------------ |
| **Syntax**                      | `function name() {}`       | `const name = function() {}`   |
| **Hoisting**                    | ✅ Yes                      | ❌ No                           |
| **Can call before definition?** | ✅ Yes                      | ❌ No                           |
| **Common usage**                | Regular reusable functions | Callbacks, anonymous functions |

---

### 🎯 **In short:**

> * **Function Declaration** → fully hoisted, can be used before defining.
> * **Function Expression** → not hoisted, must be defined before use.


<span style="color:green;">============================================================================================================= </span>




<h3 id="What are Arrow Functions in JavaScript?"> What are Arrow Functions in JavaScript?</h3>

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


<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_template_literals">  What are Template Literals in JavaScript?</h3>


**Answer:**
**Template literals** are a way to **create strings easily** in JavaScript using **backticks (`` ` ``)** instead of quotes.

They let you **embed variables and expressions** directly inside the string using **`${ }`**.

---

### 📘 **Example (Old Way vs Template Literal):**

**Before (using + for concatenation):**

```js
let name = "John";
let age = 25;

console.log("My name is " + name + " and I am " + age + " years old.");
```

**Using Template Literals:**

```js
let name = "John";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

✅ Easier to read and write.

---

### 🧩 **Other Features**

1. **Multi-line strings**
   You can write text on multiple lines without using `\n`.

   ```js
   let message = `
   Hello,
   This is a multi-line
   string!
   `;
   console.log(message);
   ```

2. **Expressions inside `${ }`**
   You can even use JavaScript code inside.

   ```js
   let a = 5, b = 10;
   console.log(`Sum: ${a + b}`); // Output: Sum: 15
   ```

---

### 🎯 **In short:**

> **Template literals** use backticks (`` ` ``) and `${ }` to make strings
> easier to write, read, and include variables or expressions.


> **String interpolation** is the process of **embedding variables or expressions inside strings** using `${ }` within **template literals (backticks)**.

<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_destructuring_assignment">   What is Destructuring Assignment in JavaScript?</h3>

**Answer:**
**Destructuring assignment** is a feature in JavaScript that lets you **unpack (extract) values** from **arrays or objects** into separate variables easily.

It makes code **shorter and easier to read**.

---

### 📘 **1. Array Destructuring**

You can extract values from an array:

```js
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);  // red
console.log(second); // green
console.log(third);  // blue
```

You can also skip values:

```js
const [a, , c] = [1, 2, 3];
console.log(a, c); // 1 3
```

---

### 📦 **2. Object Destructuring**

You can extract properties from an object:

```js
const person = { name: "John", age: 25, city: "New York" };

const { name, age } = person;

console.log(name); // John
console.log(age);  // 25
```

You can also rename variables:

```js
const { name: userName, city: userCity } = person;
console.log(userName); // John
console.log(userCity); // New York
```

---

### ⚙️ **3. Default Values**

You can set default values when the property doesn’t exist:

```js
const { country = "USA" } = person;
console.log(country); // USA
```

---

### 🎯 **In short:**

> **Destructuring** lets you **quickly extract values** from arrays or objects
> and store them in variables — making your code cleaner and shorter.

<span style="color:green;">============================================================================================================= </span>

<h3 id="what_are_spread_and_rest_operators">   What are Spread and Rest Operators in JavaScript?</h3>

**Answer:**
Both the **spread (`...`)** and **rest (`...`)** operators use **three dots**,
but they work in **opposite ways** depending on where they’re used.

---

### 🌀 **1. Spread Operator (`...`)**

➡️ **Used to expand (spread out)** elements from arrays or objects.

It takes items **out of** an array or object.

**Example (Array):**

```js
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

console.log(moreNumbers); // [1, 2, 3, 4, 5]
```

**Example (Object):**

```js
const person = { name: "John", age: 25 };
const updatedPerson = { ...person, city: "New York" };

console.log(updatedPerson);
// { name: "John", age: 25, city: "New York" }
```

✅ It’s great for **copying** or **combining** arrays and objects.

---

### 🧩 **2. Rest Operator (`...`)**

➡️ **Used to collect (gather)** multiple values into a single variable.

It takes items **into** an array.

**Example (Function Parameters):**

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3, 4)); // 10
```

**Example (Destructuring):**

```js
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

---

### ⚙️ **Main Difference:**

| Operator           | Meaning         | Direction | Example Use            |
| ------------------ | --------------- | --------- | ---------------------- |
| **Spread (`...`)** | Expands values  | Outward   | Combine arrays/objects |
| **Rest (`...`)**   | Collects values | Inward    | Gather function args   |

---

### 🎯 **In short:**

> **Spread (`...`)** expands values out of arrays/objects.
> **Rest (`...`)** gathers multiple values into an array.



<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_higher_order_functions">   What are Higher-Order Functions in JavaScript?</h3>

**Answer:**
A **higher-order function** is a function that **either:**

1. **Takes another function as an argument**, or
2. **Returns a function** as its result.

These are often used to make code **more reusable and flexible**.

---

### 📘 **Example 1: Function Taking Another Function**

```js
function greet(name) {
  return "Hello " + name;
}

function processUser(name, callback) {
  console.log(callback(name));
}

processUser("John", greet);
// Output: Hello John
```

✅ Here, `processUser` is a **higher-order function** because it takes `greet` (a function) as an argument.

---

### 📘 **Example 2: Function Returning Another Function**

```js
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

✅ Here, `multiplier` returns another function — so it’s also a **higher-order function**.

---

### ⚙️ **Common Higher-Order Functions in JavaScript:**

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `setTimeout()` / `setInterval()`

Example:

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

### 🎯 **In short:**

> A **higher-order function** is any function that **takes another function as input or returns a function as output**.


<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_a_callback_function"> What is a Callback Function in JavaScript</h3>


**Answer:**
A **callback function** is a **function passed as an argument** to another function,
and it is **called (executed)** **after** the main function finishes its work.

It’s used to **control when a function runs**, especially in **asynchronous code**.

---

### 📘 **Example (Simple):**

```js
function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  const userName = "John";
  callback(userName); // calling the callback function
}

processUser(greet);
// Output: Hello, John
```

✅ Here, `greet` is a **callback function**, passed into `processUser`.

---

### ⚙️ **Example (With setTimeout – Asynchronous):**

```js
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```

🕒 The callback inside `setTimeout` runs **later**, after 2 seconds —
that’s how callbacks help handle **asynchronous tasks** like delays, API calls, etc.

---

### ⚠️ **Callback Hell (Nested Callbacks):**

Too many callbacks can make code messy:

```js
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log("All done!");
    });
  });
});
```

That’s why **Promises** and **async/await** were introduced — to make this cleaner.

---

### 🎯 **In short:**

> A **callback function** is a function passed to another function
> that gets **executed later**, after a task is completed.



<span style="color:green;">============================================================================================================= </span>




<h3 id="what_is_the_difference_between_synchronous_and_asynchronous_code"> What is the difference between Synchronous and Asynchronous code in JavaScript</h3>


### ⚙️ **1. Synchronous Code**

* Tasks are executed **one after another**, **in order**.
* Each task **waits** for the previous one to finish before running.
* This can **block** the program if a task takes too long.

**Example:**

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

🕒 Output (in order):

```
Task 1  
Task 2  
Task 3
```

✅ Each line runs **one by one** — that’s **synchronous**.

---

### ⚙️ **2. Asynchronous Code**

* Tasks **don’t wait** for each other.
* Some tasks run **in the background**, and the program **continues running**.
* Used for operations like **API calls**, **timers**, or **file reading**.

**Example:**

```js
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (after 2 seconds)");
}, 2000);

console.log("Task 3");
```

🕒 Output:

```
Task 1  
Task 3  
Task 2 (after 2 seconds)
```

✅ `setTimeout` runs **later**, without blocking the other code.

---

### 📘 **In short:**

| Feature       | Synchronous                   | Asynchronous                 |
| ------------- | ----------------------------- | ---------------------------- |
| **Execution** | One line at a time (in order) | Tasks can run later          |
| **Blocking**  | Blocks next code until done   | Doesn’t block                |
| **Examples**  | Loops, math operations        | setTimeout, fetch, API calls |
| **Used for**  | Simple, quick code            | Delayed or background tasks  |

---

### 🎯 **Simple Summary:**

> **Synchronous** = one after another (waits).
> **Asynchronous** = runs in background (doesn’t wait).



<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_the_event_loop"> What is the Event Loop in JavaScript?</h3>

**Answer:**
The **Event Loop** is the **mechanism** in JavaScript that **handles asynchronous operations** (like `setTimeout`, promises, or API calls)
and ensures the code runs in the **right order** — even though JavaScript runs on **a single thread**.

---

### ⚙️ **How It Works (Simple Version):**

1. 🧠 **Call Stack** — where JavaScript runs your main code (line by line).
2. 📬 **Web APIs / Callback Queue** — where asynchronous tasks wait (like `setTimeout`, `fetch`, etc.).
3. 🔁 **Event Loop** — keeps checking:

   * “Is the call stack empty?”
   * If yes, it **takes the next task** from the queue and **runs it**.

---

### 📘 **Example:**

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");
```

🕒 **Output:**

```
Start
End
Inside setTimeout
```

✅ The event loop lets `setTimeout` run **after** 2 seconds
— without blocking “End” from running.

---

### 🔄 **In short:**

> The **Event Loop** constantly checks the **call stack** and **callback queue**,
> making sure JavaScript can handle **asynchronous tasks** smoothly —
> even though it runs **one thing at a time**.

---

### 🧠 **Easy analogy:**

Think of JavaScript as a **chef** (single thread).

* The **call stack** is the chef’s counter (where they cook).
* The **event loop** is the waiter who brings new orders when the chef is free.
* The **callback queue** is the waiting line of dishes to cook next.



<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_the_call_stack"> What is the Call Stack in JavaScript?</h3>


**Answer:**
The **call stack** is a part of the JavaScript engine that helps it **keep track of the order in which functions are called and executed.**

JavaScript is **single-threaded**, which means it can **only do one thing at a time**.
So the **call stack** is like a **to-do list** for functions — it tells JavaScript **which function to run next**.

---

### ⚙️ **How it Works Step-by-Step**

When you run a JavaScript program:

1. The engine starts at the **global execution context** (your main script).
2. Every time a function is **called**, JavaScript **pushes** it onto the **call stack**.
3. When a function finishes running, it gets **popped** off the stack.
4. JavaScript always runs the function on **top of the stack first** (LIFO – Last In, First Out).

---

### 📘 **Example:**

```js
function one() {
  console.log("One");
  two();
  console.log("One Finished");
}

function two() {
  console.log("Two");
}

one();
```

🧠 **Step-by-Step in the Call Stack:**

1. Start program → **Global context** pushed.
2. `one()` called → pushed to stack.
3. Inside `one()`, `two()` is called → pushed to stack.
4. `two()` runs → prints "Two" → popped off the stack.
5. `one()` continues → prints "One Finished" → popped off the stack.
6. Stack is empty → program ends.

🪜 **Call Stack Timeline:**

```
Step 1: [ Global ]
Step 2: [ Global, one() ]
Step 3: [ Global, one(), two() ]
Step 4: [ Global, one() ]   // after two() finishes
Step 5: [ Global ]          // after one() finishes
Step 6: []                  // stack empty
```

---

### ⚠️ **Stack Overflow**

If a function keeps calling itself **without stopping**,
the stack keeps filling up until the program **crashes**.

```js
function loop() {
  loop(); // calls itself forever
}
loop(); // ❌ RangeError: Maximum call stack size exceeded
```

---

### 🎯 **In short:**

> The **call stack** is a structure that **keeps track of the functions being executed** in JavaScript.
> It uses a **Last In, First Out (LIFO)** process — the most recent function call is always handled first.
> When the stack is empty, the program is done running.



<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_the_difference_between_methods"> What is the difference between `map()`, `forEach()`, `filter()`, and `reduce()`?</h3>



### 🧩 1. **`forEach()`**

👉 Used to **loop through** each element in an array.
It **does not return** anything — just performs an action.

**Example:**

```js
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
```

🟢 Output:

```
2
4
6
```

✅ **Use when:** you just want to **run code for each item** (like printing or updating).

---

### 🧩 2. **`map()`**

👉 Creates a **new array** by **transforming** each element.
The **length stays the same**, but the **values can change**.

**Example:**

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
```

🟢 Output:

```
[2, 4, 6]
```

✅ **Use when:** you want a **new array** with **modified values**.

---

### 🧩 3. **`filter()`**

👉 Creates a **new array** with elements that **meet a condition**.
It **filters out** the ones that don’t match.

**Example:**

```js
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(num => num % 2 === 0);
console.log(even);
```

🟢 Output:

```
[2, 4]
```

✅ **Use when:** you want to **keep only some elements** based on a test.

---

### 🧩 4. **`reduce()`**

👉 Reduces an array to **a single value** (like sum, average, or object).
You provide a **callback** and an **initial value**.

**Example:**

```js
let numbers = [1, 2, 3, 4];
let total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);
```

🟢 Output:

```
10
```

✅ **Use when:** you want to **combine all elements** into **one result**.

---

### 🧠 **Quick Summary Table**

| Method        | Returns New Array? | Purpose                | Example Result   |
| ------------- | ------------------ | ---------------------- | ---------------- |
| **forEach()** | ❌ No               | Loop through items     | Just prints/logs |
| **map()**     | ✅ Yes              | Transform each item    | `[2,4,6]`        |
| **filter()**  | ✅ Yes              | Select some items      | `[2,4]`          |
| **reduce()**  | ❌ (any value)      | Combine into one value | `10`             |

---

### 🎯 **Simple Summary:**

> * `forEach()` → just loop
> * `map()` → transform values
> * `filter()` → keep what you need
> * `reduce()` → make one final result


<span style="color:green;">============================================================================================================= </span>


<h3 id="how_does_this_behave_in_arrow_functions"> How does `this` behave in arrow functions?</h3>


### 🧠 **In normal functions:**

`this` depends on **how the function is called**.
It can refer to **different objects** — for example, the global object, an object that owns the method, or `undefined` (in strict mode).

Example:

```js
const person = {
  name: "John",
  showName: function() {
    console.log(this.name);
  }
};

person.showName(); // "John"
```

✅ Here, `this` refers to the `person` object.

---

### ⚡ **In arrow functions:**

Arrow functions **don’t have their own `this`**.
Instead, they **inherit `this` from their surrounding (parent) scope** —
this is called **lexical `this` binding**.

Example:

```js
const person = {
  name: "John",
  showName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

person.showName(); // "John"
```

✅ The arrow function inside `setTimeout` doesn’t create a new `this`;
it **uses `this` from the `showName()` function**, which points to `person`.

---

### ❌ If you use a normal function inside `setTimeout`:

```js
const person = {
  name: "John",
  showName: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};

person.showName(); // undefined
```

😵 Here, `this` inside the normal function refers to the **global object**, not `person`.

---

### 🧩 **In short:**

| Function Type       | `this` Behavior                                                    |
| ------------------- | ------------------------------------------------------------------ |
| **Normal Function** | `this` depends on how the function is **called**                   |
| **Arrow Function**  | `this` is **inherited** from the **parent scope** (lexical `this`) |

---

### 🎯 **Simple Summary:**

> In arrow functions, `this` doesn’t change — it always refers to the value of `this` in the **scope where the arrow function was created**,
> not where it’s called.


<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_prototypal_inheritance"> What is Prototypal Inheritance in JavaScript?</h3>

### 🧠 **Definition:**

**Prototypal Inheritance** means that in JavaScript,
**objects can inherit properties and methods from other objects** using something called a **prototype**.

Every JavaScript object has a hidden property called `[[Prototype]]` (or `__proto__`) that points to another object — its **prototype**.

If JavaScript doesn’t find a property or method on an object,
it **looks up the chain** (to its prototype) until it finds it.
This is called the **prototype chain**.

---

### ⚙️ **Example:**

```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats);  // true  (inherited from animal)
dog.walk();             // "Animal walks"
```

✅ Here:

* `dog` doesn’t have `eats` or `walk` directly.
* But because `dog`’s prototype is `animal`, it **inherits** those properties.

---

### 📘 **Prototype Chain:**

If you access `dog.eats`, JavaScript looks like this:

```
dog → animal → Object.prototype → null
```

If it doesn’t find the property anywhere, it returns **undefined**.

---

### 🧩 **Using classes (simplified way):**

Modern JavaScript uses the `class` syntax,
but behind the scenes, it still uses **prototypal inheritance**.

```js
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark!");
  }
}

const dog = new Dog();
dog.speak(); // "Bark!"
```

✅ `Dog` inherits from `Animal` using prototypes under the hood.

---

### 🎯 **Simple Summary:**

> **Prototypal inheritance** means that objects can **inherit properties and methods** from other objects through a **prototype chain**.
> It’s how JavaScript implements **object inheritance** — each object can “borrow” from another.


<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_prototypes_in_javascript"> What are Prototypes in JavaScript?</h3>


### 🧠 **Definition:**
In JavaScript, every object has a special hidden property called a **prototype**.  
A **prototype** is simply another **object** from which the current object can **inherit properties and methods**.

Think of a prototype as a **blueprint** or a **backup object** —  
if JavaScript doesn’t find something directly on your object, it will look for it in the **prototype**.

---

### ⚙️ **Example:**
```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal); // set 'animal' as prototype of 'dog'
console.log(dog.eats);  // true (inherited from animal)
dog.walk();             // "Animal walks"
```

✅ Here:
- `dog` itself doesn’t have `eats` or `walk`.
- But because its **prototype** is `animal`, it can **use** those properties.

---

### 📘 **Prototype Chain:**
When you try to access a property:
1. JavaScript checks the object itself.
2. If not found, it checks the object’s **prototype**.
3. If not found there, it keeps moving up the chain (`Object.prototype`, then `null`).

Example:
```
dog → animal → Object.prototype → null
```

---

### 🧩 **Functions also have prototypes**
When you create a function in JavaScript,  
it automatically gets a property called **`prototype`** (used when creating new objects with `new`).

Example:
```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};

const p1 = new Person("John");
p1.sayHello(); // "Hello, I'm John"
```

✅ Here, `sayHello` is stored in `Person.prototype`,  
and all objects created with `new Person()` can **access** it.

---

### 🎯 **Simple Summary:**
> A **prototype** is an **object** that another object **inherits from**.  
> It’s like a “parent” object that provides shared properties and methods.  
> Prototypes enable **JavaScript’s inheritance system** — known as **prototypal inheritance**.


<span style="color:green;">============================================================================================================= </span>



<h3 id="what_is_the_difference_between_object_create_and_a_constructor_function"> What is the difference between `Object.create()` and a Constructor Function?</h3>


### 🧩 **1. `Object.create()`**

* It creates a **new object** and lets you **manually set its prototype**.
* You pass in an **existing object** to use as the new object’s **prototype**.
* It does **not** call a constructor or set properties automatically — you have to assign them yourself.

**Example:**

```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal); // set prototype to animal
dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
dog.walk();            // "Animal walks"
```

✅ **Key point:**
`dog` inherits directly from `animal`.

---

### 🧩 **2. Constructor Function**

* A **function** used with the `new` keyword to **create and initialize** objects.
* It automatically sets up the **prototype** through `FunctionName.prototype`.
* Used for creating **multiple similar objects** easily.

**Example:**

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log(this.name + " walks");
};

const dog = new Animal("Dog");
dog.walk(); // "Dog walks"
```

✅ **Key point:**
Using `new` automatically links `dog` to `Animal.prototype`.

---

### 📘 **Main Differences Table**

| Feature                    | `Object.create()`                                         | Constructor Function                                             |
| -------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| **Prototype setup**        | You manually choose which object is the prototype         | Prototype is linked automatically using `FunctionName.prototype` |
| **Initialization**         | No automatic setup (you assign values yourself)           | Runs constructor to initialize properties                        |
| **Syntax**                 | `Object.create(protoObj)`                                 | `new FunctionName()`                                             |
| **Use case**               | When you want to directly inherit from an existing object | When you want to create many similar objects (like classes)      |
| **Example of inheritance** | `Object.create(animal)`                                   | `new Animal("Dog")`                                              |

---

### 🎯 **Simple Summary:**

> * `Object.create()` → makes a **new object** that **inherits** from another object.
> * **Constructor function** → makes objects using a **template (function)** and sets up inheritance **automatically**.

Both achieve inheritance — `Object.create()` is **manual and direct**,
while constructor functions are **automatic and reusable**.


<span style="color:green;">============================================================================================================= </span>




<h3 id="how_can_you_create_objects_in_javascript">How can you create objects in JavaScript?</h3>


JavaScript gives you **several ways** to create objects.
Here are the **main methods** 👇

---

### 🧩 **1. Object Literal (Most Common & Simple)**

You create an object directly using `{}`.

```js
const person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};

console.log(person.name); // John
person.greet();           // Hello!
```

✅ **Use when:** you just need one or a few objects quickly.

---

### 🧩 **2. Using the `new Object()` Constructor**

This uses JavaScript’s built-in `Object` constructor.

```js
const person = new Object();
person.name = "John";
person.age = 25;
```

✅ **Same as literal**, just longer — rarely used today.

---

### 🧩 **3. Using a Constructor Function**

You define a **function** that acts as a **blueprint** for objects,
and use the `new` keyword to create instances.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 25);
console.log(person1.name); // John
```

✅ **Use when:** you want to create **many similar objects**.

---

### 🧩 **4. Using `Object.create()`**

You create a new object and set its **prototype** manually.

```js
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
```

✅ **Use when:** you want to **inherit** directly from another object.

---

### 🧩 **5. Using ES6 `class` Syntax**

Modern and cleaner syntax — works like constructor functions but easier to read.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("John", 25);
p1.greet(); // Hi, I'm John
```

✅ **Use when:** you want **object-oriented style** code (recommended for large apps).

---

### 📘 **Summary Table**

| Method                   | Example                | Use Case                               |
| ------------------------ | ---------------------- | -------------------------------------- |
| **Object Literal**       | `{ name: "John" }`     | Simple, one-time objects               |
| **`new Object()`**       | `new Object()`         | Same as literal, rarely used           |
| **Constructor Function** | `new Person()`         | Create many similar objects            |
| **`Object.create()`**    | `Object.create(proto)` | Create objects with a custom prototype |
| **Class**                | `new Person()`         | Modern OOP style creation              |

---

### 🎯 **Simple Summary:**

> You can create objects in JavaScript using:
> **1️⃣ Object literal**, **2️⃣ new Object()**, **3️⃣ constructor functions**, **4️⃣ Object.create()**, or **5️⃣ ES6 classes**.
>
> All methods create objects — they just differ in **how they define structure and inheritance**.


<span style="color:green;">============================================================================================================= </span>



<h3 id="what_are_classes_in_javascript">What are Classes in JavaScript?</h3>

### 🧠 **Definition:**

A **class** in JavaScript is a **template (or blueprint)** for creating objects.
It allows you to define properties and methods in one place,
so you can easily create **multiple objects** with the same structure and behavior.

> In simple words:
> A **class** is like a **mold**, and objects are the **products** made from that mold.

---

### ⚙️ **Example:**

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age}`);
  }
}

const person1 = new Person("John", 25);
const person2 = new Person("Emma", 30);

person1.greet(); // Hi, my name is John and I'm 25
person2.greet(); // Hi, my name is Emma and I'm 30
```

✅ Here:

* `constructor()` is a special method that runs when you create a new object with `new`.
* `this` refers to the new object being created.
* `greet()` is a method shared by all `Person` objects.

---

### 🧩 **Classes are “syntactic sugar”**

JavaScript **classes are not new** —
they are just a **cleaner way** to write what used to be done with **constructor functions** and **prototypes**.

Under the hood:

```js
class Person {} 
// is similar to
function Person() {}
```

So, classes are **syntactic sugar** over JavaScript’s **prototypal inheritance**.

---

### 🧬 **Inheritance with Classes:**

You can make one class inherit from another using `extends`.

```js
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks
```

✅ `Dog` inherits from `Animal`, and can also **override** methods.

---

### 🎯 **Simple Summary:**

> A **class** in JavaScript is a **blueprint** for creating objects with shared properties and methods.
>
> * Defined using the `class` keyword
> * Uses a `constructor()` to initialize objects
> * Can **inherit** from other classes using `extends`
> * Is just a **cleaner, modern syntax** for prototype-based inheritance.



<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_getters_and_setters">What are Getters and Setters in JavaScript?</h3>


### 🧠 **Definition:**

**Getters** and **Setters** are special methods in JavaScript that let you **control how object properties are accessed and updated**.

* A **getter** is used to **read** a property’s value.
* A **setter** is used to **set or change** a property’s value.

They make objects **look like they have normal properties**, but behind the scenes, they actually run functions.

---

### ⚙️ **Example (using object literal):**

```js
const person = {
  firstName: "John",
  lastName: "Doe",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName);  // John Doe (getter runs)
person.fullName = "Emma Smith"; // setter runs
console.log(person.firstName);  // Emma
```

✅ **What happens:**

* When you access `person.fullName`, the **getter** runs.
* When you assign a value to `person.fullName`, the **setter** runs.

---

### 🧩 **Using Getters and Setters in a Class**

```js
class Person {
  constructor(name) {
    this._name = name; // the underscore is a naming convention
  }

  // Getter
  get name() {
    return this._name.toUpperCase();
  }

  // Setter
  set name(newName) {
    if (newName.length < 3) {
      console.log("Name too short!");
    } else {
      this._name = newName;
    }
  }
}

const p = new Person("John");
console.log(p.name);  // JOHN
p.name = "Li";        // Name too short!
p.name = "Emma";      // sets successfully
console.log(p.name);  // EMMA
```

✅ Getters and setters make your code **safe** and **clean** —
you can **validate data**, **transform values**, or **hide internal logic**.

---

### 📘 **Why use Getters and Setters?**

| Purpose             | Description                                    |
| ------------------- | ---------------------------------------------- |
| **Control access**  | Add logic before reading or writing properties |
| **Validation**      | Prevent invalid values                         |
| **Computed values** | Return derived data (e.g., `fullName`)         |
| **Encapsulation**   | Hide how data is stored internally             |

---

### 🎯 **Simple Summary:**

> * **Getter (`get`)** → runs when you **read** a property.
> * **Setter (`set`)** → runs when you **assign** a value.
> * They help you **control**, **validate**, or **compute** data while keeping syntax clean.

<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_encapsulation_in_javascript">What is Encapsulation in JavaScript?</h3>

### 🧠 **Definition:**

**Encapsulation** means **keeping data (properties)** and **methods (functions)** that work on that data **together in one unit (object)**
— and **hiding the internal details** from the outside world.

In simple words:

> Encapsulation = **protecting data** inside an object and **only exposing what’s necessary**.

---

### ⚙️ **Example (Without Encapsulation):**

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age; // anyone can change it directly
  }
}

const p = new Person("John", 25);
p.age = -5; // ❌ Invalid, but no protection!
console.log(p.age); // -5
```

Here, the `age` property can be changed freely — even to an invalid value.

---

### ✅ **With Encapsulation (Using Getters and Setters):**

```js
class Person {
  #age; // private property (only inside the class)

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative!");
    } else {
      this.#age = value;
    }
  }
}

const p = new Person("John", 25);
console.log(p.age); // 25
p.age = -5; // Age cannot be negative!
```

✅ Here:

* The property `#age` is **private** — cannot be accessed outside the class.
* You can only change it through the **setter**, which adds **validation**.

---

### 🧩 **Before ES2022 (Old Way using underscore convention):**

Developers used `_property` to indicate it’s “private,”
even though it wasn’t truly hidden.

```js
class Person {
  constructor(name, age) {
    this._age = age; // meant to be private
  }
}
```

Now, we use **`#`** for real privacy.

---

### 📘 **Benefits of Encapsulation:**

| Benefit             | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| **Data Protection** | Prevents direct modification of important data                        |
| **Validation**      | You can check data before updating                                    |
| **Cleaner Code**    | Keeps related logic together                                          |
| **Flexibility**     | You can change internal implementation without affecting outside code |

---

### 🎯 **Simple Summary:**

> **Encapsulation** means bundling data and methods together in one object or class,
> and **hiding internal details** using private properties (`#`) or controlled access (`get` / `set`).
>
> It helps make your code **secure, organized, and maintainable**.


<span style="color:green;">============================================================================================================= </span>


<h3 id="what_are_static_methods_in_classes"> What are Static Methods in Classes?</h3>


### 🧠 **Definition:**

A **static method** is a method that **belongs to the class itself**,
**not to objects (instances)** created from that class.

You call a static method **using the class name**, not the object.

---

### ⚙️ **Example:**

```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // 8 ✅
```

✅ `add()` is a **static method**, so you call it with the **class name**, not through an object.

If you try:

```js
const calc = new MathHelper();
console.log(calc.add(5, 3)); // ❌ Error: add is not a function
```

You’ll get an error — because static methods **don’t belong to the object**.

---

### 🧩 **Static vs Instance Methods**

| Type                | How to call       | Belongs to                  | Example            |
| ------------------- | ----------------- | --------------------------- | ------------------ |
| **Static method**   | Class name        | The class itself            | `MathHelper.add()` |
| **Instance method** | Object (instance) | The object created by class | `person.greet()`   |

---

### 📘 **Real-world Example:**

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  static createGuest() {
    return new User("Guest");
  }
}

const guest = User.createGuest(); // call static method
guest.greet(); // Hello, Guest!
```

✅ `createGuest()` is **static**, used for **creating a default object**.

---

### 🎯 **Simple Summary:**

> **Static methods** are functions defined inside a class that
> belong to the **class itself**, not to individual objects.
>
> They’re used for **utility**, **helper**, or **factory** functions —
> things that don’t depend on instance data.

---

💡 **Remember:**
You call them like this → `ClassName.methodName()`
Not like this → `object.methodName()`

<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_polymorphism_in_javascript"> What is Polymorphism in JavaScript?</h3>

### 🧠 **Definition:**

**Polymorphism** means **“many forms.”**
In JavaScript (and OOP), it allows **different classes to use the same method name** but with **different behavior**.

In simple words:

> Polymorphism lets different objects **respond differently to the same method**.

---

### ⚙️ **Example:**

```js
class Animal {
  speak() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof! 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow! 🐱");
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => animal.speak());
```

✅ **Output:**

```
Woof! 🐶
Meow! 🐱
Some generic sound
```

All the objects (`Dog`, `Cat`, `Animal`) have a method called `speak()`,
but each one **acts differently** — that’s **polymorphism**.

---

### 🧩 **Types of Polymorphism (in simple terms):**

| Type                           | Meaning                                                            | Example                                  |
| ------------------------------ | ------------------------------------------------------------------ | ---------------------------------------- |
| **Compile-time (Overloading)** | Same method name, different parameters (not fully supported in JS) | `sum(a, b)` vs `sum(a, b, c)`            |
| **Run-time (Overriding)**      | Child class overrides parent class method                          | `Dog.speak()` overrides `Animal.speak()` |

JavaScript mainly uses **method overriding** (runtime polymorphism).

---

### 📘 **Why use Polymorphism?**

* Makes code **flexible** and **reusable**
* Avoids long `if-else` or `switch` statements
* Allows you to **treat different objects the same way**

---

### 🎯 **Simple Summary:**

> **Polymorphism** means one method name can have **different behaviors**
> depending on which object calls it.
>
> It’s like giving the same “command” to different objects,
> and each one **acts in its own way**.

<span style="color:green;">============================================================================================================= </span>


<h3 id="what_is_inheritance_in_es6_classes"> What is Inheritance in ES6 Classes?</h3>

### 🧠 **Definition:**

**Inheritance** allows one class (child/subclass) to **acquire properties and methods** of another class (parent/superclass).

In simple words:

> A child class **inherits** features from a parent class, so you **don’t have to rewrite common code**.

---

### ⚙️ **Syntax:**

* Use the `extends` keyword for inheritance.
* Use `super()` to call the parent class constructor.

---

### 📘 **Example:**

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Dog inherits from Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks
```

✅ Here:

* `Dog` **inherits** from `Animal`.
* `Dog` can **override** methods like `speak()`.
* `Dog` also has access to properties like `name` defined in `Animal`.

---

### 🧩 **Key Points about Inheritance:**

| Feature     | Description                                                |
| ----------- | ---------------------------------------------------------- |
| `extends`   | Makes one class inherit from another                       |
| `super()`   | Calls the parent class constructor (needed in child class) |
| Overriding  | Child can redefine methods of parent                       |
| Reusability | Avoids duplicating code                                    |

---

### ⚡ **Example with `super()`**

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // calls Animal constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.breed); // Golden Retriever
dog.speak();             // Buddy barks
```

✅ `super(name)` ensures the parent’s constructor runs and sets `name`.

---

### 🎯 **Simple Summary:**

> **Inheritance in ES6 classes** lets a **child class reuse code** from a **parent class**.
>
> * Use `extends` to inherit
> * Use `super()` to call the parent constructor
> * Child can override or extend parent methods

It’s a **core OOP principle** for **code reuse, organization, and flexibility**.



<span style="color:green;">============================================================================================================= </span>

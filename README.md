# <span style="color:#ef476f">Introduction</span>

In JavaScript, understanding scopes helps you know where variables and functions are accessible in your code. There are three main types of scopes: global, local (or function), and block scope. Let’s break each down with definitions, points, and examples.

## <span style="color:#06d6a0" >Local variables Vs Global variables</span>

- Local variables exist only during the function's executions, while global variables remain in memory for the duration of the program.

- Local variables can be accessed only within the function or block where it is defined, whereas global variables are accessed throughout the entire program.

- Scope: In programming, scope refers to the visibility or accessibility of variables in different parts of your code. In JavaScript, scopes can be global or local to functions.

## <span style="color:#ffd166">1. Global Scope</span>

- **Definition**:
  - Variables defined outside of any function or block are in the global scope. They can be accessed anywhere in your code.
- **Characteristics:**

  - Declared with `var`, `let`, or `const` outside any function or block {}.
  - Accessible from any part of your code (inside functions and blocks too).
  - Too many global variables can clutter your code and lead to conflicts.

    #### Example:

    ```js
    let globalVar = "I am global"; // Global scope
    function greet() {
      console.log(globalVar); // Can access global variable
    }
    greet(); // Outputs: I am global
    console.log(globalVar); // Also accessible here
    ```

---

## <span style="color:#ffd166">2. Local (Function) Scope</span>

- **Definition:**
  - Variables declared `inside a function` are in the local scope of that function. They cannot be accessed outside of it.
- **Characteristics:**

  - Declared with var, let, or const inside a function.
  - Accessible only within that function (or inner functions).
  - Good for keeping variables isolated to specific tasks or processes within functions.

    #### Example:

    ```js
    function sayHello() {
      let localVar = "I am local"; // Local scope
      console.log(localVar); // Accessible inside the function
    }

    sayHello(); // Outputs: I am local
    console.log(localVar); // Error: localVar is not defined
    ```

---

## <span style="color:#ffd166">3. Block Scope:</span>

- **Definition:**

  - Variables declared inside a block ({ ... }) using `let` or `const` are limited to that block.

- **Characteristics:**

  - Declared with let or const `(not var)` inside a block, like within `loops` or `if` statements.
  - Not accessible outside of the block they are declared in.
  - Helps keep variables confined to specific sections of code.

    #### Example:

    ```js
    if (true) {
      let blockVar = "I am block scoped"; // Block scope
      console.log(blockVar); // Accessible inside the block
    }

    console.log(blockVar); // Error: blockVar is not defined
    ```

---

## <span style="color:#06d6a0">Reuse of a variable name in a different scope</span>

- Scope can `isolate` a variable within a function, even when you reuse the same variable name elsewhere in a different scope.

This example shows you how the use of scope lets you reuse the same variable name in different functions:

```js
function listOne() {
  let listItems = 10;
  console.log(listItems); // 10
}

function listTwo() {
  let listItems = 20;
  console.log(listItems); // 20
}

listOne();
listTwo();
```

---

### <span style="color:#ef476f"> NOTE:</span>

- In JavaScript, when you declare a variable with `var` inside a block (such as an if statement), it is `not block-scoped`. Instead, it has function scope if it's inside a function, or global scope if it's outside of any function.

  ```js
  if (true) {
    var funcScopedVar = "I am function scoped"; // Function scope
  }
  console.log(funcScopedVar); // Accessible outside the if block

  //example2
  function testScope() {
    if (true) {
      var funcScopedVar = "I am function scoped"; // Now it's function scoped
    }
    console.log(funcScopedVar); // Accessible here within the function
  }

  testScope(); // Works fine
  console.log(funcScopedVar); // Error: funcScopedVar is not defined
  ```

- `let` and `const`: These two keywords respect block scope, making them safer to use within blocks.

---

## <span style="color:#06d6a0" >Summary Table</sapn>:

| Scope Type             | Declared with         | Accessible In                     | Example Syntax                   |
| ---------------------- | --------------------- | --------------------------------- | -------------------------------- |
| Global Scope           | `var`, `let`, `const` | Entire program                    | `let globalVar = "Hello";`       |
| Local (Function) Scope | `var`, `let`, `const` | Within the function where defined | `function test() { let a = 5; }` |
| Block Scope            | `let`, `const`        | Only within the block `{ }`       | `if (true) { let b = 10; }`      |

---

# <h1 style="color:#fca311">Understanding Closures in JavaScript</h1>

In JavaScript, **closures** are a powerful feature that let functions access variables from their outer (lexical) scope, even after the outer function has finished executing. Closures allow for persistent data storage and encapsulation within functions, and they are fundamental to many advanced JavaScript patterns.

## <span style="color:#fcbf49">Prerequisites:</span> Scope in JavaScript

To understand closures, it’s essential to have a firm grasp of **scope**—specifically **global scope**, **local (function) scope**, and **block scope**.

- **<span style="color:#ef233c">Global Scope**</span>: Variables declared outside of any function or block are accessible anywhere in the program.
- **<span style="color:#ef233c">Local (Function) Scope</span>**: Variables declared within a function are accessible only within that function.
- **<span style="color:#ef233c">Block Scope</span>**: Variables declared with `let` or `const` within a block `{ }` are accessible only within that block.

These scopes help control where variables can be accessed in a program. Closures extend this concept by allowing a function to "remember" variables from its scope, even after the function that created them has completed.

## <span style="color:#fcbf49">What Is a Closure?</span>

A **closure** is created when:

1. A function is defined inside another function (called an **outer function**).
2. The inner function **captures variables** from the outer function's scope.
3. The inner function **maintains access** to these captured variables, even after the outer function has finished executing.

In other words, closures allow a function to "remember" its environment, meaning the variables it had access to when it was created.

## <span style="color:#fcbf49">Example of a Closure</span>

- Here’s a simple example of how closures work:

```javascript
function outerFunction() {
  let outerVar = "I'm from the outer scope";

  function innerFunction() {
    console.log(outerVar); // innerFunction "remembers" outerVar from outerFunction
  }

  return innerFunction; // Return the inner function as a closure
}

const myClosure = outerFunction(); // outerFunction has finished executing here
myClosure(); // Outputs: I'm from the outer scope
```

## <span style="color:#fcbf49">Why Use Closures? </span>

Closures have several practical applications in JavaScript, such as:

1.  <span style="color:#ef233c">Data Privacy:</span> Closures allow you to hide variables, making them inaccessible from outside the function where they're defined. This enables encapsulation of data.

    ```js
    function counter() {
      let count = 0; // Private variable

      return function () {
        count += 1;
        return count;
      };
    }

    const increment = counter();
    console.log(increment()); // Outputs: 1
    console.log(increment()); // Outputs: 2
    ```

2.  <span style="color:#ef233c">Stateful Functions:</span> Closures allow functions to maintain state across multiple calls without using global variables.

3.  <span style="color:#ef233c">Function Factories:</span> Closures enable you to create multiple instances of a function with different data, like functions that remember certain configurations or variables.

    ```js
    function createMultiplier(factor) {
      return function (number) {
        return number * factor;
      };
    }

    const double = createMultiplier(2);
    const triple = createMultiplier(3);

    console.log(double(5)); // Outputs: 10
    console.log(triple(5)); // Outputs: 15
    ```

4.  **<span style="color:#ef233c">Partial Application and Currying**:</span> Closures can be used to create functions that are pre-configured with certain parameters. This is useful for creating more flexible functions and reducing redundancy.

    ```javascript
    function greet(greeting) {
      return function (name) {
        return `${greeting}, ${name}!`;
      };
    }

    const sayHello = greet("Hello");
    console.log(sayHello("Alice")); // Outputs: Hello, Alice!
    console.log(sayHello("Bob")); // Outputs: Hello, Bob!
    ```

## <span style="color:#fcbf49">Key Takeaways</span>

- Closures are functions that "remember" the variables from their outer scope.
- Closures are created naturally when a function is defined inside another function and references variables from the outer function.
- Closures help manage scope effectively, allowing for data privacy and state retention without relying on global variables.
- By understanding closures and scope, you can write more flexible, encapsulated, and powerful JavaScript code!

---

# <span style="color:green">Understanding Lexical Scoping and Closures in JavaScript</span>

In JavaScript, functions can access variables from their enclosing (outer) functions thanks to a concept called **lexical scoping**. This is important because it defines how variable names are resolved in nested functions.

## What is Lexical Scoping?

When a function is created in JavaScript, it keeps a reference to its surrounding scope. This means that an inner function can use variables defined in its outer function, even after the outer function has finished running.

### Key Concepts

- **Scope Chain**: Each function remembers the scope in which it was defined. This allows inner functions to access outer variables.

- **Closure**: When an inner function is returned from an outer function, it creates a closure. A closure is the inner function plus its environment, which includes all the variables from the outer function at the time the inner function was created.

---

## What It Means

- Scope: In programming, scope refers to the visibility or accessibility of variables in different parts of your code. In JavaScript, scopes can be global or local to functions.

- Surrounding Scope: When you create a function inside another function (or any block of code), the inner function can access variables that are declared in the outer function or block. This is what is meant by the "surrounding scope."

- Reference to the Scope: When the inner function is created, it "remembers" the environment in which it was defined. This means that it keeps a reference to the variables that were accessible at that moment. Even if the outer function has finished executing, the inner function still has access to those variables.

### Analogy

Think of a function as a classroom:

- The outer function is like a teacher who creates a classroom (the scope).
- The inner function is like a student in that classroom.
- The student (inner function) can access all the resources (variables) available in the classroom (outer function), such as books and notes (variables).
- Even after the teacher leaves the classroom, the student can still use the books and notes they had access to while the teacher was there.

## Example

Here’s a simple example to illustrate how this works:

```javascript
function outerFunction() {
  let outerVar = "I'm from the outer scope"; // Variable in the outer function

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from innerFunction
  }

  return innerFunction; // Returning the inner function
}

const myClosure = outerFunction(); // Call outerFunction, which returns innerFunction
myClosure(); // Outputs: I'm from the outer scope
```

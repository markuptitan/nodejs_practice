# 🚀 Day 2: Modules and Packages 🚀

## Welcome to Day 2 of My 30-Day Node.js Learning Journey!

Today, I’m diving into the world of modules and packages in Node.js. Understanding how to use modules and manage dependencies is essential for building robust applications. Let’s get started!

### 🎯 My Goals for Today:

- Understand the basics of **CommonJS** modules.
- Learn how to use `require` and `module.exports`.
- Get familiar with `npm` for managing packages and dependencies.

### 📦 Understanding CommonJS Modules

In Node.js, CommonJS modules allow me to organize my code into separate files and reuse pieces of code across different parts of my application. Each file in Node.js is treated as a separate module.

### 🔄 Using require and module.exports

To include modules in my project, I use `require`. To export functions, objects, or values from a module, I use `module.exports`.

**Example:**

1. **Create a Module**: I will create a file named: `math.js`:

```node.js
// math.js (module)
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;

module.exports = { add, subtract }
```

2. **Use the Module**: Then, I’ll create a file named `app.js` to use the `math.js` module:

```
// app.js
const math = require('./math');

console.log(math.add(2, 3));      // Outputs: 5
console.log(math.subtract(5, 3)); // Outputs: 2
```

### 🌐 Exploring npm Packages and Dependencies

npm (Node Package Manager) allows me to install and manage third-party packages and dependencies in my project.

**Initializing a new Node.js project**
To start using _npm_ I need to initialize a new project.

```
npm init -y
```

This command creates a `package.json` file with default settings

**Install a package**: For this part I will be using `lodash`. You can find more packages [here](https://subhojit.me/blog/10-essential-npm-packages-for-javascript-beginners-in-2024/).

```
npm install lodash
```

**Using an installed Package**:

Let's update `app.js` to use the package `lodash`:

```
// app.js
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(array);

console.log(shuffledArray); // Outputs the array `array` shuffled
```

### 📄 Exploring `package.json`

The `package.json` file is crucial for managing my project. Here’s an example of what it looks like after initializing the project and installing lodash:

```
{
  "name": "my_node_project",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {},
  "author": "markuptitan",
  "license": "ISC"
}

```

This file contains metadata about my project, scripts for running tasks, and a list of dependencies.

### ✅ Summary and Reflection

By the end of Day 2, I’ve learned how to use modules in Node.js and manage dependencies with npm. Reflecting on today’s lessons:

- **How do modules help in organizing my code?**
  Modules allow me to break down my code into reusable pieces, making it easier to manage and maintain.
- **What are some advantages of using npm packages?**
  npm packages provide pre-built solutions for common tasks, saving me time and effort in development.
- **How can I find and choose the right npm packages for my projects?**
  I can search for packages on the npm website, read documentation and reviews, and choose packages that are well-maintained and widely used.

That’s it for Day 2! Tomorrow, I’ll explore asynchronous programming in Node.js. Stay tuned and happy coding! 🚀💻

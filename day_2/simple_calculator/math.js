const add = (...args) => {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  console.log(sum);
};

const multiply = (...args) => {
  if (args.length === 0) {
    console.log(0);
    return;
  }
  let product = 1;
  for (const arg of args) {
    product *= arg;
  }
  console.log(product);
};

const divide = (...args) => {
  if (args.length === 0) {
    throw new Error("At least one argument is required");
  }
  if (args.length === 1) {
    console.log(args[0]);
    return;
  }
  let quotient = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    quotient /= args[i];
  }
  console.log(quotient);
};

const minus = (...args) => {
  if (args.length === 0) {
    console.log(0);
    return;
  }
  let difference = args[0];
  for (let i = 1; i < args.length; i++) {
    difference -= args[i];
  }
  console.log(difference);
};

module.exports = { add, multiply, divide, minus };

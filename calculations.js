const calculate = (a, b, op) => {
  const operations = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': b === 0 ? "Error" : a / b
  };

  return operations[op] ?? "Invalid Operator";
};

// Usage:
console.log(calculate(900, 8, '*')); // 12
console.log(calculate(800, 3, '-')); // 5
console.log(calculate(700, 3, '+')); // 5
console.log(calculate(600, 8, '*')); // 5
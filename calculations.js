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
console.log(calculate(30, 8, '*')); // 12
console.log(calculate(400, 3, '-')); // 5
console.log(calculate(500, 3, '+')); // 5
console.log(calculate(600, 8, '*')); // 5
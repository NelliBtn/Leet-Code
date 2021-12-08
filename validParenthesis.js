var isValid = function (s) {

  if (s.length % 2 !== 0) {
    return false;
  }

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    // if it is an openning bracket
    if (brackets[current]) {
      // move it to the stack
      stack.push(current);
    } else {
      // if it is a closing bracket
      const lastBracket = stack[stack.length - 1];
      // it should match the last one in the stack
      if (brackets[lastBracket] === current) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("([}}])")); // false
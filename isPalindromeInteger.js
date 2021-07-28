// Given an integer x, return true if x is palindrome integer.

const isPalindrome = function (x) {
  const numStr = x.toString();
  let reversed = '';
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }
  return reversed === numStr ? true : false;
};

// console.log(isPalindrome(121));
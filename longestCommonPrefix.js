var longestCommonPrefix = function (strs) {

  let firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    for (let word of strs) {
      if (firstStr[i] !== word[i]) {
        firstStr = firstStr.slice(0, i)
      }
    }
  }

  return firstStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
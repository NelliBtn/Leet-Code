const romanToInt = function (s) {

  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {

    const current = symbols[s[i]];
    const next = symbols[s[i + 1]];

    current < next ? result = result - current : result = result + current;
  }

  return result;
};

console.log(romanToInt("MCMXCIV")); //1994
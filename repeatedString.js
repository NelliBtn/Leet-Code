const s = 'aba';
const n = 10; // 7

const s1 = 'a';
const n1 = 100000000;


function repeatedString(s, n) {
  
  // create a long string variable that is equal to single string to start with
  // iterate the original string to add characters one by one
  // check length with 'n' after each concatenation
  // when length === n, count char 'a' in long string ( with match() or split().length - 1)

  let longString = s;

  if (longString.length === 1) {
    return n;
  }

  for (let i = 0; i < s.length; i++ ) {
    if(longString.length < n) {
      longString += s[i];
      if (i === s.length - 1) {
        i = -1;
      } 
    }
  }
  if (longString.length === n) {
    const numberOfA = longString.split('a').length - 1;
    return numberOfA;
  }
}


console.log (repeatedString(s1, n1))

// not finished 6/23 tests :(
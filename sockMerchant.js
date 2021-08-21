/**
 * There is a large pile of socks that must be paired by color. 
 * Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.
 */

const n = 9;
const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]; // 3

const n1 = 10;
const array1 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] //4


function sockMerchant(n, ar) {
  ar.sort();
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      result++;
      ar.splice(i, 2);
      i--;
    }
  }
  return result;
}

console.log(sockMerchant(n1, array1))
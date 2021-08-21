/**
 * Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
 * It is always possible to win the game.
 * For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
 */

const array = [0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {

  let countJumps = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) { // if it's safe to jump 2 clouds
      i++; // increment index +1, it will incremenet another +1 on the next loop
      countJumps++; // increment jump count
    } else if (c[i + 1] === 0) { // check if it is safe to jump 1 cloud and it's not undefined
      countJumps++; // increment jump count
    }
    // i++
  }

  return countJumps;
}

console.log(jumpingOnClouds(array))
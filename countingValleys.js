const steps = 10;
const path = 'DUDDDUUDUU'; //2

function countingValleys(steps, path) {
  //check edge cases
  if (isNaN(steps)) throw new TypeError('first input is NaN!');
  if (typeof path !== 'string') throw new TypeError('second input is not a string!');

  // make an array of the path to modify
  let cutPath = path.split('');
  console.log(cutPath)
  let currentAltitude = 0;
  let numberOfValleys = 0;
  for (let i = 0; i < cutPath.length; i++) {
    // keep track of current altitude
    cutPath[i] === "U" ? currentAltitude++ : currentAltitude--;

    // if current step === to the previous step
    if (cutPath[i] === cutPath[i-1]) {
    // if step is Down and the altitude is below sea level
      if (cutPath[i] === 'D' && currentAltitude < -1) {
      // count +1 valey
      numberOfValleys++;
      // cut off the previuos piece of path
      cutPath = cutPath.slice(i)
      }
    }
  }

  return numberOfValleys;
};

console.log(countingValleys(steps, path));

//         _ /\      _
//             \    /
//              \/\/
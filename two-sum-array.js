// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Input: nums = [3,2,4], target = 6
// Output: [1, 2]
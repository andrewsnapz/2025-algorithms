/*
  keypoints:
  1. array of numbers, find all unique triplets (the value themselves, not the index)
  2. all the unique numbers must equal zero
  3. need a way to track all unique combiations
  
  input: array of numbers
  output: array of unique triplets
  
  brute force:
  three for loops O(n^3)
  
  optimal solution:
  two pointer / sort array
*/

function threeSum(nums) {
  const triplets = [];
  const history = {};
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    let pt1 = i + 1;
    let pt2 = nums.length - 1;

    while (pt1 < pt2) {
      const sum = current + nums[pt1] + nums[pt2];
      if (sum < 0) {
        pt1++;
      } else if (sum > 0) {
        pt2--;
      } else {
        const triplet = [current, nums[pt1], nums[pt2]];
        if (!history[triplet]) {
          history[triplet] = true;
          triplets.push([current, nums[pt1], nums[pt2]]);
        }
        pt1++;
        pt2--;
      }
    }
  }

  return triplets;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

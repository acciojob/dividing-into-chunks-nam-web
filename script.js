const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

  const result = [];
  let currentSubarray = [];
  let sum = 0;

  for (const num of arr) {
    // If adding the next element doesn't exceed n, add it to the current subarray
    if (sum + num <= n) {
      currentSubarray.push(num);
      sum += num;
    } else {
      // If adding the next element exceeds n, start a new subarray
      result.push(currentSubarray);
      currentSubarray = [num];
      sum = num;
    }
  }

  // Push the last subarray to the result
  result.push(currentSubarray);

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

function josephus(n, i) {
  let position = 0; // Start with the base case position (0 for 1 person)

  // Iterate from 1 to n to calculate the position of the survivor
  for (let k = 1; k <= n; k++) {
    position = (position + i) % k;

    // Explanation:
    // - position: Current position of the survivor in the previous circle (0-based)
    // - i: Interval step to determine the next position to be eliminated
    // - % k: Wraps around the circle to ensure the position stays within the bounds
    //   of the current number of people (k) in the circle
  }

  // Adjust for 1-based indexing
  return position + 1;
}

// Test cases
for (let x = 1; x < 12; x++) console.log(josephus(x, 3)); // ➞ 31

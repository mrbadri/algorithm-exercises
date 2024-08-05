/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

function sameFrequency(num1, num2) {
  const numstr1 = num1.toString();
  const numstr2 = num2.toString();

  if (numstr1.length !== numstr2.length) return false;

  const frequencyCounter = {};

  for (let i = 0; i < numstr1.length; i++) {
    frequencyCounter[numstr1[i]] = (frequencyCounter[numstr1[i]] || 0) + 1;
    frequencyCounter[numstr2[i]] = (frequencyCounter[numstr2[i]] || 0) - 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] !== 0) return false;
  }

  return true;
  // good luck. Add any arguments you deem necessary.
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // true

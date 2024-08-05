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
  const numsrt1 = num1.toString();
  const numsrt2 = num2.toString();

  if (numsrt1.length !== numsrt2.length) return false;

  for (let i = 0; i < numsrt1.length; i++) {
    let hasFrq = false;
    for (let j = 0; j < numsrt2.length; j++) {
      if (numsrt1[i] === numsrt2[j]) hasFrq = true;
    }
    if (!hasFrq) return false;
  }

  return true;

  // good luck. Add any arguments you deem necessary.
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

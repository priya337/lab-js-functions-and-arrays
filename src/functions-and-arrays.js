// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
    // Alternatively, we could use Math.max:
    // return Math.max(a, b);
  }
  

// Iteration 2 | Find the Longest Word
//const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;
  
    let longestWord = words[0];  // Start with the first word as the longest
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];  // Update if a longer word is found
      }
    }
    return longestWord;
  }
  
  const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
  console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
//const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;  // Start with zero sum
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];  // Add each number to the sum
    }
    return sum;
  }
  
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  console.log(sumNumbers(numbers));  // Outputs: 87
  
// Iteration 4 | Numbers Average
//const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
  
function averageNumbers(numbers) {
    if (numbers.length === 0) return 0;
  
    let sum = sumNumbers(numbers);  // Use sumNumbers function from before
    let average = sum / numbers.length;  // Calculate average
    return average;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));  // Outputs: 6

// Iteration 5 | Find Elements
function doesWordExist(words, word) {
    if (words.length === 0) return null;
  
    return words.includes(word);  // Checks if the word exists in the array
  }
  
  const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
  console.log(doesWordExist(words2, "matter"));  // Outputs: true
  console.log(doesWordExist(words2, "hello"));   // Outputs: false
  

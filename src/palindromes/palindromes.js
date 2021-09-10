const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  let middle = Math.floor(sentence.length / 2);
  const newStack = new Stack;

  for (let i = 0; i < middle; i++) {
    newStack.push(sentence[i]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;
  
  for (let i = middle; i < sentence.length; i++){
    if (sentence[i] !== newStack.pop()) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;

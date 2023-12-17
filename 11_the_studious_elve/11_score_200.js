/*
In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one:
a challenge to form a Christmas palindrome.

A palindrome is a word that reads the same forwards and backwards. The elves want to know
if it is possible to form a palindrome by making, at most, one exchange of letters.

Create a function getIndexsForPalindrome that receives a string and returns:

• If it is already a palindrome, an empty array.
• If it is not possible, null.
• If a palindrome can be formed with one change, an array with the two positions (indexes)
that must be swapped to create it.
*/

// TESTS ******************************************************

function getIndexsForPalindrome(word) {
  const w = word.split("");
  const n = Math.floor(w.length / 2) - 1;
  const solution = [];

  for (let i = 0; i <= n; i++)
    if (w[i] != w[w.length - 1 - i]) solution.push(i);

  if (solution.length == 1) {
    if (w.length % 2 != 0)
      if (w[n + 1] == w[solution[0]]) {
        solution.push(n + 1, w.length - 1 - solution[0]);
        solution.shift();
      } else solution.push(n + 1);
    else return null;
  }

  [w[solution[0]], w[solution[1]]] = [w[solution[1]], w[solution[0]]];

  if (w.join("") != w.reverse().join("")) return null;
  return solution;
}

// TESTS ******************************************************

console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
console.log(getIndexsForPalindrome("rotaratov")); // [4,8]
console.log(getIndexsForPalindrome("1233421")); // [3,4]
console.log(getIndexsForPalindrome("axaaaaaa"));

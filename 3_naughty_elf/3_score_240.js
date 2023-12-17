/*
In Santa's workshop, a mischievous elf has been playing around with the gift production
line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified
sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that
was added or removed in the manufacturing chain. If there is no difference between the
sequences, return an empty string.

Please, keep in mind:

• There will always be one different step or none.
• The modification can occur anywhere in the string.
• The original steps could be empty
*/

function findNaughtyStep(original, modified) {
  const remove = original.length > modified.length;
  let impostor;

  return (remove ? original : modified).split("").every((x, i) => {
    if (original[i] != modified[i]) {
      impostor = remove ? original[i] : modified[i];
      return false;
    }

    return true;
  })
    ? ""
    : impostor;
}

// TESTS ******************************************************

let original = "abcd";
let modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified)); // 'f'

original = "abcde";
modified = "abcde";
console.log(findNaughtyStep(original, modified)); // ''

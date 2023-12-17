/*
What an idea Sam Elfman has had! He wants to offer a service that creates a customized
Christmas tree 🎄 in a matter of seconds.

To create it, we are given a string to form the tree and a number that indicates its height.

Each character of the string represents an ornament of the tree, and we use them
cyclically until we reach the indicated height. At least, they will always pass us one.

We must return a multiline string with the Christmas tree made with the ornaments, the
indicated height plus a final line with the trunk formed by the character | in the center and,
finally, a newline \n.

Note:

• The tree should always be centered, for that reason add blank spaces to the left of each line.
• Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.
• The ornaments have a white space between them for separation.
*/

function createChristmasTree(ornaments, height) {
  const length = (height * (height + 1)) / 2;
  let output = ornaments
    .repeat(Math.ceil(length / ornaments.length))
    .split("")
    .join(" ");

  const res = [];
  for (let i = 1; i <= height; i++) {
    let a = i * 2;
    res.push(" ".repeat(height - i) + output.substr(0, a - 1));
    output = output.substr(a);
  }

  res.push(" ".repeat(height - 1) + "|\n");
  return res.join("\n");
}

// TESTS ******************************************************
console.log(createChristmasTree("123", 4));
/*
   1
  2 3
 1 2 3
1 2 3 1
   |
*/

console.log(createChristmasTree("*@o", 3));
/*
  *
 @ o
* @ o
  |
*/

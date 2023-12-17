/*
Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

Your task is to write a function that, given a size n (integer), generates a drawing of a 3D
gift using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as
a parameter:
*/

function drawGift(size, symbol) {
  if (size == 1) return "#\n";
  if (size == 2) return " ##\n###\n##\n";

  let output = "#".repeat(size);

  output += `\n#${symbol.repeat(size - 2)}#`.repeat(size - 2);

  output = output
    .split("\n")
    .map((row, i) => {
      return i % (size - 1)
        ? `${row}${symbol.repeat(Math.max((i % size) - 1, 0))}#`
        : `${row}${symbol.repeat(size - 2)}#`;
    })
    .splice(1, size - 2);

  output.unshift("#".repeat(size));
  const part2 = output.slice().reverse();
  output.push("#".repeat(size) + symbol.repeat(size - 2) + "#");

  for (let i = 0; i < size; i++)
    output[i] = " ".repeat(size - i - 1) + output[i];

  return output.concat(part2).join("\n") + "\n";
}

// TESTS ******************************************************
console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"));
/*
#
*/

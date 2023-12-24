/*
We are programming some robots called giftbot 🤖🎁 that autonomously navigate gift warehouses.

We are creating a function to which we pass: the warehouse 🏬 they must navigate and the
movements ↔️ they can make.

The warehouse is represented as an array of text strings, where:
• . means there is a clear path.
• * means there is an obstacle.
• ! is the robot's initial position.
The movements are an array of text strings, where:

• R moves the robot one position to the right.
• L moves the robot one position to the left.
• U moves the robot one position upwards.
• D moves the robot one position downwards.
It must be taken into account that the robot cannot overcome obstacles or the warehouse boundaries.

Given a warehouse and the movements, we need to return the array with the robot's final position.
*/

function autonomousDrive(store, movements) {
  let [y, x] = [-1, -1];
  const n = store[0]?.length;

  for (let i = 0; i < n; i++)
    if (store[i].includes("!")) {
      y = i;
      x = store[i].indexOf("!");
      break;
    }

  movements.forEach((direction) => {
    switch (direction) {
      case "L":
        if (x > 0 && store[y][x - 1] == ".") {
          store[y] = store[y].substr(0, x - 1) + "!." + store[y].substr(x + 1);
          x--;
        }

        break;
      case "R":
        if (x < n - 1 && store[y][x + 1] == ".") {
          store[y] = store[y].substr(0, x) + ".!" + store[y].substr(x + 2);
          x++;
        }
        break;
      case "D":
        if (y < store.length - 1 && store[y + 1][x] == ".") {
          store[y] = store[y].substr(0, x) + "." + store[y].substr(x + 1);
          y++;
          store[y] = store[y].substr(0, x) + "!" + store[y].substr(x + 1);
        }
        break;
      case "U":
        if (y > 0 && store[y - 1][x] == ".") {
          store[y] = store[y].substr(0, x) + "." + store[y].substr(x + 1);
          y--;
          store[y] = store[y].substr(0, x) + "!" + store[y].substr(x + 1);
        }
        break;
    }
  });

  return store;
}

// TEST

const store = ["**.!"];
// const store = ["!"];

const movements = ["L"];
const result = autonomousDrive(store, movements);
console.log(result.join("\n"));
/*
[
  ".......",
  "...*!*."
]
*/

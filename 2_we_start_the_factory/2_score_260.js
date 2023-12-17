/*
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given
a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.
*/

function manufacture(gifts, materials) {
  const avaible = [];

  gifts.forEach((gift) => {
    if (gift.split("").every((req) => materials.indexOf(req) >= 0))
      avaible.push(gift);
  });

  return avaible;
}

// TESTS ******************************************************

let gifts = ["tren", "oso", "pelota"];
let materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

gifts = ["juego", "puzzle"];
materials = "jlepuz";

console.log(manufacture(gifts, materials)); // ["puzzle"]

gifts = ["libro", "ps5"];
materials = "psli";

console.log(manufacture(gifts, materials)); // []

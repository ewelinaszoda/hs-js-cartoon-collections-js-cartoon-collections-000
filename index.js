function dwarfRollCall(dwarves) {
  var numberedDwarves = [];
  for (let i = 0; i < dwarves.length; i++) {
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `);
    //change the array to the string and change the deafaul seperator comma 
  } return numberedDwarves.join("");
}

function summonCaptainPlanet(planeteerCalls) {
  var newArray = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`);
  } 
  return newArray;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

// function findTheCheese(foods) {
//   for (let i = 0; i < foods.length; i++) {
//     if (foods[i] == "cheddar") {
//       return foods[i];
//     }
//     else if (foods[i] == "gouda") {
//       return foods[i];
//     }
//   else if (foods[i] == "camembert") {
//       return foods[i];
//     } 
//   } return "no cheese!";
// }

function findTheCheese(food) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i < food.length; i++) {
    if (food.includes(cheeses[i])) {
      return cheeses[i];
    }
  }
  return 'no cheese!';
}

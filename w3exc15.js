function groupAnimals(animals) {
  animals.sort()

  var output = [];

  for (var i = 0; animals.length>0 ; i++) {
    var temporary = []
    var firstLetter = animals[0][0];
    temporary.push(animals[0])
    animals.splice(0, 1)

    for (var j = 0; animals.length>0 && firstLetter === animals[0][0]; j++) {
      temporary.push(animals[0]);
      animals.splice(0, 1);
    }

     output.push(temporary);
  }
  return output
}

  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'anjing', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

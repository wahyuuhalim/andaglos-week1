// Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
 // you can only write your code here!
  
  animals.sort()
  var cekHuruf = animals[0][0];
  var result = [];
  var grupAnimals = [];
  
  for(var i = 0; i < animals.length; i++) {
    if (cekHuruf === animals[i][0]) {
      grupAnimals.push(animals[i])
    } else {
      result.push(grupAnimals);
      cekHuruf = animals[i][0]
      grupAnimals = [];
      grupAnimals.push(animals[i])
    }
  }
  
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
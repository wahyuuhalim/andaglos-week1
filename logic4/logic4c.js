// Logic Challenge - Mengelompokkan Hewan

// Problem
// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.
// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
// Code
function groupAnimals(animals) {
 // you can only write your code here!
  animals.sort()
  var cekHuruf = animals[0][0];
  var result = [];
  var grupAnimals = []
  
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
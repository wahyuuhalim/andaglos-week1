// Tugas 1

function shoutOut() {
  var halo = "Halo function";
  return halo;
}

console.log(shoutOut()) 
// Tugas 2

function calculateMultiply(num1,num2) {
 var hasilKali = num1 * num2;
 return hasilKali;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 

// Tugas 3

function processSentence(name,age,address,hobby) {
 var kalimat = "Nama saya " + name + ", umur saya " + age + "tahun, " + "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
 return kalimat; 
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
 
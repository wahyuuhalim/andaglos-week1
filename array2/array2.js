//Menggunakan Built-in Function pada Array

var input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
var elemen4 = input2[3];
var split = elemen4.split(' ', 3)


function dataHandling2() {
  input2.splice(1, 1, "Roman Alamsyah Elsharawy");
  input2.splice(2, 1, "Provinsi Bandar Lampung");
  input2.splice(4, 4, "Pria");
  input2.splice(5, 0, "SMA Internasional Metro");
  console.log(input2);
  console.log(split);
}

console.log(dataHandling2(input2));
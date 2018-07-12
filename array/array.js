//Melakukan looping data array

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(n) {
  
  for(var i = 0; i < n.length; i++) {
    console.log("Nomor ID: " + n[i][0]); 
    console.log("Nama Lengkap: " + n[i][1]);
    console.log("TTL: " + n[i][2], n[i][3]);
    console.log("Hobi: " + n[i][4]);
  }
}

console.log(dataHandling(input));

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
//1. Menyusun Barisan Bintang

var rows1 = 5;

console.log("Jika rows1 = " + rows1);
for (var i = 1; i <= rows1; i++) {
  console.log("*");
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;

console.log("Jika rows2 = " + rows2);
for (var i = 1; i <= rows2; i++) {
  var result = '';
  for (var j = 0; j <= rows2; j++) {
    result = result + '*'
  }
  console.log(result);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var result = '';

console.log("Jika rows3 = " + rows3)
for (var i = 1; i <= rows3; i++) {
  result += '*'
  console.log(result);
}

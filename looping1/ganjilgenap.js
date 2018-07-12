console.log("GANJIL-GENAP");
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("counter sekarang = " + i);
    console.log("GENAP")
  } else if (i % 2 !== 0) {
    console.log("counter sekarang = " + i);
    console.log("GANJIL");
  }
}

console.log("PERTAMBAHAN COUNTER 2");
for (var i = 1; i <= 100; i+=2) {
  if (i % 3 === 0) {
    console.log("counter sekarang = " + i);
    console.log("3 KELIPATAN 3");
  } else if(i % 3 !== 0){
    console.log("counter sekarang = " + i);
    console.log('');
  }
}

console.log("PERTAMBAHAN COUNTER 5");
for (var i = 1; i <= 100; i+=5) {
  if (i % 6 === 0) {
    console.log("counter sekarang = " + i);
    console.log("6 KELIPATAN 6");
  } else if(i % 6 !== 0){
    console.log("counter sekarang = " + i);
    console.log('');
  }
}

console.log("PERTAMBAHAN COUNTER 9");
for (var i = 1; i <= 100; i+=9) {
  if (i % 10 === 0) {
    console.log("counter sekarang = " + i);
    console.log("10 KELIPATAN 10");
  } else if(i % 10 !== 0) {
    console.log("counter sekarang = " + i);
    console.log('');
  }
}
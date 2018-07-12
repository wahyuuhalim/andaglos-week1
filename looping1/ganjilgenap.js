var counter = 1;

console.log("GANJIL-GENAP");
for (var i = 1; i <= 100; i++) {
  counter++
  if (counter % 2 === 0) {
    console.log("counter sekarang = " + counter);
    console.log("GENAP")
  } else if (counter % 2 !== 0) {
    console.log("counter sekarang = " + counter);
    console.log("GANJIL");
  }
}

//var counter2 = 1;

console.log("PERTAMBAHAN COUNTER 2");
for (var i = 1; i <= 100; i++) {
  counter += 2
  if (counter % 3 === 0) {
    console.log("counter sekarang = " + counter);
    console.log("3 KELIPATAN 3");
  } else {
    console.log('');
  }
  //console.log(counter2)
}

//var counter2 = 1;

console.log("PERTAMBAHAN COUNTER 5");
for (var i = 1; i <= 100; i++) {
  counter += 5
  if (counter % 6 === 0) {
    console.log("counter sekarang = " + counter);
    console.log("6 KELIPATAN 6");
  } else {
    console.log('');
  }
  //console.log(counter)
}

//var counter2 = 1;

console.log("PERTAMBAHAN COUNTER 9");
for (var i = 1; i <= 100; i++) {
  counter += 9
  if (counter % 10 === 0) {
    console.log("counter sekarang = " + counter);
    console.log("10 KELIPATAN 10");
  } else {
    console.log('');
  }
  //console.log(counter2)
}
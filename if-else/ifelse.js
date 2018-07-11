var nama = '';
var peran = '';

if (nama === '' && peran === '') {
  console.log("Nama harus diisi");
} else {
  
  if (nama === nama && peran === '') {
    console.log("Halo " + nama + ',' + " Pilih peranmu untuk memulai game..!")
  } else if (nama === nama && peran === 'ksatria') {
    console.log("Selamat datang di dunia Proxytia, " + nama + '.');
    console.log("Halo " + peran + ' ' + nama + ',' + ' ' + 'kamu dapat menyerang dengan senjatamu..!');
  } else if (nama === nama && peran === 'tabib') {
    console.log("Selamat datang di Dunia Proxytia, " + nama + '.');
    console.log("Halo " + peran + ' ' + nama + ',' + ' ' + "kamu akan membantu temanmu yang terluka..!");
  } else if (nama === nama && peran === 'penyihir') {
    console.log("Selamat datang di dunia Proxytia," + ' ' + nama + '.');
    console.log("Halo " + peran + ' ' + nama + ',' + ' ' + "ciptakan keajaiban yang membantu kemenanganmu..!");
  }

}

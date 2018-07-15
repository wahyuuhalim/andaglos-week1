// 1. Membuat Class dan Meng-Instance nya.

const angka1 = 2
const angka2 = 3
const kalkulator = new Kalkulator(angka1, angka2)
 
kalkulator.tambah()
console.log(kalkulator.hasil) // 5
kalkulator.kurang()
console.log(kalkulator.hasil) // -1
kalkulator.kali()
console.log(kalkulator.hasil) // 6
kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil) // 3
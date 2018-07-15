// Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
 // you can only write your code here!
 var daftarBarang = ['Sepatu stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'casing handphone'];
 var daftarHarga = [1500000, 500000, 250000, 175000, 50000];
 var sisaUang = money;
 var listPurchased = [];
 var laporanBelanja = {};

  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return 'mohon maaf uang tidak cukup'
  } else {
    for (var i = 0; i < daftarBarang.length; i++){
      if (daftarHarga[i] <= sisaUang) {
        sisaUang = sisaUang - daftarHarga[i];
        listPurchased.push(daftarBarang[i]);
      }
    }

    laporanBelanja.memberId = memberId;
    laporanBelanja.money = money;
    laporanBelanja.listPurchased = listPurchased;
    laporanBelanja.changeMoney = sisaUang;
  }

  return laporanBelanja;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
 //{ memberId: '1820RzKrnWn08',
 // money: 2475000,
 // listPurchased:
 //  [ 'Sepatu Stacattu',
 //    'Baju Zoro',
 //    'Baju H&N',
 //    'Sweater Uniklooh',
 //    'Casing Handphone' ],
 // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
 
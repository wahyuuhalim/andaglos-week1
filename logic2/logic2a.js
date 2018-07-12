// Logic Challenge - Palindrome

function palindrome(kata) {
 // you can only write your code here!
 var kataPertama = '';
 var kataKedua = '';

  for(var i = 0; i < kata.length; i++) {
    kataPertama += kata[i];
  }

  for(var i = kata.length - 1; i >= 0; i--) {
      kataKedua += kata[i];
  }

  if(kataPertama === kataKedua) {
    return true;
  } else if(kataPertama !== kataKedua) {
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
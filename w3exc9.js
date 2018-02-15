// logic = mencari nilai jumlahtotal, lalu dibagi dengan arr.length-Nya

function cariMean(arr) {
  // var tampung = 0 --> agar ada nilainya untuk ditambahlan
  var tampung = 0;

  //looping untuk mendapatkan panjang arr-nya
  for (i = 0; i < arr.length; i++) {
    tampung = tampung + arr[i];
  }
  //mendapatkan hasil yang diminta, total tampung, dibagi panjang arr, menggunkan Math.round untuk menghasilkan nilai pembulatan.
  return Math.round(tampung / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2

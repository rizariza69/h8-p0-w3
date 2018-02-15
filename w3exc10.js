function perkalianUnik(arr) {
  //var hasil untuk menampung Hasil perkalian dengan ARRAY
  var hasil = [];
  //melakukan pengulangan index i sesuai arr.length
  for (i = 0; i < arr.length; i++) {
    //membuat var kali = 1 (karena perkalian jika 0 = 0, maka dikalikan dengan 1)
    var kali = 1;
    // pengulangan ke-2 dengan index j untuk mendapatkan hasil perkalian ke-2
    for (j = 0; j < arr.length; j++) {
      //membuat kondisi if --> jika i tidak sama j, maka di kalikan
      if (i !== j) {
        kali = kali * arr[j];
      }
    }
    hasil.push(kali);
  }
  return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

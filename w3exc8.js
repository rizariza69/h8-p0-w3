// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
 // var max, untuk compare nilai maksimal
  var max = 0
// untuk mengulang sepanjang num(menjadi String) ditambahkan
  for (var i = 0; i < String(num).length - 1; i++) {
    //var pasangan = merupakan mendapatkan pasangan terbesar dari Array
    var pasangan = String(num)[i] + String(num)[i+1];
    // Kondisi mendapatkan nilai MAX, ada 1 cara dengan function baru dan (sort)
    if (max < pasangan ) {
      max = pasangan
    }
  }
  return max;
}

// // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

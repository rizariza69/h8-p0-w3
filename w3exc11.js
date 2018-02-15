// Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

function tentukanDeretAritmatika(arr) {
  var jarak = 0;

  // mencari jarak dari array dengan looping
  for (i = 0; i < arr.length - 1; i++) {
    //angka1 co/: 3 - (3-1) = 1 dan angka2 : (3+4) - 3 = 1
    var angka1 = arr[i] - arr[i - 1];
    var angka2 = arr[i + 1] - arr[i];
    // kondisi jika angka 2 sama dengan angka1 jarak tambah 1, jika bukan kurang 1
    if (angka2 === angka1) {
      jarak++;
    } else {
      jarak--;
    }
  }

  if (jarak > 0) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
// jaraknya konstan

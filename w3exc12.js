function tentukanDeretGeometri(arr) {
  var jarak = 0;

  // mencari jarak dari array dengan looping
  for (i = 0; i < arr.length - 1; i++) {
    //angka1 co/: 3 - (3-1) = 1 dan angka2 : (3+4) - 3 = 1
    var angka1 = arr[i] / arr[i - 1];
    var angka2 = arr[i + 1] / arr[i];
    // kondisi jika angka 2 sama dengan angka1 klai angka konsisten.
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
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


function angkaPalindrome(num) {

if (num < 9){
    return num+1
  } else {
    for(i = num ; i < 2000  ; i++) {
      var j = i.toString().split("").reverse().join("");

      if (i == j) {
        return i
      }
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

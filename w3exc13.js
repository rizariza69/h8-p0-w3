function targetTerdekat(arr) {
	var o = arr.indexOf('o');
	var x = arr.indexOf('x');

// jika x === -1, maka nilai menjadi 0
	if (x === -1) {
		return 0;
	}
// jika x lebih kecil dari o, maka dibalik, mengembalikan indexOf (o & x). lalu x - o
	if (x < o) {
		arr.reverse();
		o = arr.indexOf('o');
		x = arr.indexOf('x');
		return x - o;
	}
//untuk mengurangi x - o
	return x - o;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2

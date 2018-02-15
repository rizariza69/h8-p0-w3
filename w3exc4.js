


/* ditanya :
1.  keluaran yang diharapkan (pada console)
2.  ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
3. Mei
4.[1989, 21, 05]
4. 21-05-1989
5. Roman Alamsyah
 */

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling() {

var nama = input[1].split(' ')
var provinsi = input[2].split(' ')

nama.push('Elsharawy')
provinsi.unshift('Provinsi')

input.splice(1,1, nama.join(' '))
input.splice(2,1, provinsi.join(' '))
input.splice(4,1, 'Pria', 'SMA Internasional Metro')

console.log(input);

var menggantiBulan = input[3].split("/");
var bulan = parseInt(menggantiBulan[1]);

switch(bulan){
  case 01 : {bulan='Januari';break;}
  case 02 : {bulan='februari'; break;}
  case 03 : {bulan='maret'; break;}
  case 04 : {bulan='april'; break;}
  case 05 : {bulan='mei'; break;}
  }

console.log(bulan)

var sort = menggantiBulan
menggantiBulan.sort(function(a,b) {return b - a});
console.log(menggantiBulan)

var gantiStrip = input[3].split("/");
// menggantiBulan.join('-')
console.log(gantiStrip.join('-'))


var namaAja = input[1].split('')
namaAja.splice(15, 10)
  console.log(namaAja.join(''));

}

dataHandling();


// contoh splice :
// var arr = ["buku", "laptop", "komputer"];
// arr.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.

// console.log(arr); // ["buku", "laptop", "televisi", "komputer"]

// arr.splice(0, 2); // Menghapus 2 nilai dari index 0
// console.log(arr); // ["televisi", "komputer"]

// arr.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
// console.log(arr); // [majalah", "koran", "komputer"]

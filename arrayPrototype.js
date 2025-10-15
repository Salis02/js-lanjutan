const angka = [-1, 5, 0, -3, 2, -4, 3, 4, 1, -2, -5]

//Mencari angka <= 1 {
//Dengan looping dan kondisi
const mapAngka = (n) => {
    const newAngka = []
    for (let i = 0; i < angka.length; i++) {
        if (angka[i] <= n) {
            newAngka.push(angka[i]);
        }
    }

    if (newAngka.length === 0) {
        console.log('Angkat tidak ada yang cocok')
    } else {
        console.log(`Angka yang <= ${n} adalah : `, newAngka);
    }
}

mapAngka(1)

// Dengan filter
const newAngkaFilter = angka.filter((a) => a <= 1);

console.log(newAngkaFilter)
// }

// MAP
// 1. Membagi semua angka dengan 4
// const newAngkaMap = angka.map(a => a / 4);

// 2. Mengurangi semua angka dengan 10
const newAngkaMap = angka.map(a => a - 10);

// console.table(newAngkaMap);

//REDUCE
// Parameter:
// - accumulator → hasil penjumlahan sementara
// - currentValue → nilai elemen array yang sedang diproses
// Proses:
//   1. Iterasi pertama: accumulator = -1 (elemen pertama)
//   2. Iterasi kedua: -1 + 5 = 4
//   3. Iterasi ketiga: 4 + 0 = 4
//   ...
//   4. Hasil akhir = 0
const jumlahSemuaAngka = angka.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // jumlahkan nilai saat ini dengan hasil sebelumnya
}, 0); // nilai awal accumulator (opsional, tapi disarankan untuk keamanan) -> nol disini default, bisa kita ganti sesuai keinginan dan kondisi tertentu

console.log("Total jumlah semua angka:", jumlahSemuaAngka);

//METHOD CHAINING
//Cari angka > 2, kalikan 5, jumlahkan

// Langkah 1: filter() → ambil angka yang lebih besar atau sama dengan 2
// Langkah 2: map() → kalikan setiap angka hasil filter dengan 5
// Langkah 3: reduce() → jumlahkan semua hasilnya
const hasil = angka
    .filter(a => a >= 2)   // [5, 2, 3, 4]
    .map(a => a * 5)       // [25, 10, 15, 20]
    .reduce((acc, cur) => acc + cur, 0); // 25 + 10 + 15 + 20 = 70

console.log("Hasil akhir:", hasil); // Output: 70

// arrayFunctionsUnitTest.js
const angka = [-1, 5, 0, -3, 2, -4, 3, 4, 1, -2, -5];

// Fungsi: mencari angka <= n dengan looping
const mapAngka = (n) => {
  const newAngka = [];
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] <= n) {
      newAngka.push(angka[i]);
    }
  }
  return newAngka;
};

// Fungsi: filter angka <= 1
const newAngkaFilter = () => angka.filter((a) => a <= 1);

// Fungsi: map - mengurangi semua angka dengan 10
const newAngkaMap = () => angka.map((a) => a - 10);

// Fungsi: reduce - menjumlahkan semua angka
const jumlahSemuaAngka = () =>
  angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Fungsi: chaining - angka > 2, kali 5, jumlahkan
const hasilChaining = () =>
  angka
    .filter((a) => a >= 2)
    .map((a) => a * 5)
    .reduce((acc, cur) => acc + cur, 0);

// Export semua fungsi
module.exports = {
  angka,
  mapAngka,
  newAngkaFilter,
  newAngkaMap,
  jumlahSemuaAngka,
  hasilChaining,
};

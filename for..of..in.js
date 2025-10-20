// for...of => looping object iterable (string, array, arguments/nodelist)

// 1. Array
const penduduk = [
    'Supardi',
    'Nyi Blonyoh',
    'Jenderal Tamban Ban',
    'Suratman Wijayakusuma'
]

for (let i = 0; i <= penduduk.length; i++) {
    // console.log(penduduk[i]);
}

// penduduk.forEach(x => console.log(x));

for (const y of penduduk) {
    // console.log(y);
}

// 2. String => tidak bssa 
const nama = ['Salis', 'Nizar', 'Qomaruzzaman']

// nama.forEach = (m => console.log(m));

for (const [i, m] of nama.entries()) {
    // console.log(`${m} adalah nama ke-${i + 1}`);
}

// 3. NodeList
const daftarList = document.querySelectorAll('.testing');

// daftarList.forEach(m => console.log(m.innerHTML));

for (const list of daftarList) {
    // console.log(list.innerHTML)
}

// 4. Arguments => parameter yang ditampung secara default

function perkalian() {
    // Arguments tidak bisa menggunakan reduce, foreach, dsj
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

// console.log(perkalian(8, 4, 6, 7, 100));

// for...in => looping hanya enumerable, properti object

const data = {
    id: 147,
    nama: 'Salis Nizar Qomaruzaman',
    pekerjaan: 'Programmer',
    aset: {
        fisik: 'Motor',
        nonFisik: 'Saldo'
    }
}

for (m in data) {
    console.log(data[m]);
}

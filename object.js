//CARA MEMBUAT OBJEK PADA JAVASCRIPT

// 1. Object literal => tidak efektif jika data banyak, harus membuat ulang objek baru
let human = {
    nama: 'Salis Nizar Qomaruzaman',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat pagi ${this.nama}, energi kamu sekarang ${this.energi}`)
    }
}

let tumbuhan = {
    nama: 'Bunga Raflesia',
    asal: 'Indonesia',
    statusTanaman: function () {
        console.log(`Tanaman ${this.nama} dari ${this.asal} termasuk ke dalam tanaman dilindungi!`)
    }
}

// 2. Function deklaration => lebih mudah daripada literal, jika ada data baru cukup buat variabel baru misalnya

function hewan(jenis, kaki) {
    let hewan = {};
    hewan.jenis = jenis;
    hewan.kaki = kaki;

    hewan.anomali = function (anomali) {
        hewan.kaki += anomali;
        console.log(`Hewan ${this.jenis}, memiliki ${this.kaki} kaki`);
    }

    hewan.sakit = function (sakit) {
        let pengurang = sakit;
        hewan.kaki -= pengurang;
        console.log(`Karena hewan sakit, maka kakinya, berkurang ${pengurang} menjadi ${this.kaki}`)
    }

    return hewan;
}

let singa = hewan('mamalia', 4);

// 3. Constuctor function, dengan keyword new
// tidak perlu deklrasikan variabel dan return-nya
// dibelakang layar, this => membuat variable dan return this
// let this = {} | return this

function karakter(akhlak, etika) {
    this.akhlak = akhlak;
    this.etika = etika;
    this.x = 0;

    this.nilai = function (penalaran) {
        this.x = this.etika + this.akhlak / penalaran;
        console.log(`Hasil akhir adalah ${this.x}`)
    }

    this.remidi = function () {
        if (this.x >= 2) {
            console.log('Nilai aman, lur!');
        } else if (this.x <= 2 && this.x >= 1) {
            console.log('Mepet anjay!');
        } else {
            console.log('Ngulang kocak');
        }
    }
}

let salis = new karakter(1.0, 1.0)

// 4. Object.create()
// problem muncul ketika kita akan membuat sebuah objek yang memerlukan method dari objek yang lainnya, hal ini tentu akan membuat penambahan/pengurangan di masing-masing method menjadi manual

const methodKerja = {
    pagi: function (makan) {
        this.energi += makan * 2;
        console.log(`Semangat kerja di pagi hari dengan energi ${this.energi}`);
    },
    siang: function (makan, suasana) {
        this.energi += makan * 2 - suasana;
        console.log(`Karena sudah siang agak beda energinya, ${this.energi}`);
    },
    malam: function (makan, mood) {
        this.energi -= makan * 2 + mood;
        console.log(`Malam malam ngapain kerja anjay, ${this.energi}`);
    }
}

function kerja (nama, energi){
    let kerja = Object.create(methodKerja);
    kerja.nama = nama;
    kerja.energi = energi; 

    return kerja;
}

let nizar = kerja('Salis Nizar', 50);
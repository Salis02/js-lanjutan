//Function expression
const greeting = (nama) => {
    alert(`Halo ${nama}`)
}

// greeting('Salis')

//Implisit function
//Contoh dibawah : 1 parameter dan 1 return 
const sayang = nama => `${nama} sayang! Gimana kabar hari ini?`

// console.log(sayang('Salis'));


let family = [
    'Salis Nizar Qomaruzaman',
    'Mukafi Abdurrahman',
    'Martini Nur Hamidah',
    'Syifa Maulana',
    'Nayla Nurul Aulia',
    'Dhuha Sabitul Birri',
    'Ahmad Rauf Mustawa'
]

// Karena kita akan return object, bungkus { } ke dalam ( ) => ({ })
const printDetailFamily = family.map(
    nama => ({
        nama: nama,
        jmlHuruf: nama.length,
    }));

// console.table((printDetailFamily))

// THIS
// Kita tidak bisa mengggunakan konsep this di dalam arrow function 

//Function expression, disimpan ke dalam variable
const Nama = function () {
    this.nama = "Salis Nizar Qomaruzaman";
    this.umur = 24,
        this.sayHello = function () {
            console.log(`Halo ${this.nama}, umurmu sekarang ${this.umur} tahun, anjayy`);
        }

    setInterval(
        () => {
            console.log(this.umur++);
        }, 1000
    );
}

const testingNama = new Nama;


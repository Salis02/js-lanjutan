// DESTRUCTURING FUNCTION => expression pada JS yang bisa membongkar/memecah nilai array atau properti objek menjadi/kedalam variabel terpisah

// 1. ARRAY = const [....]
const name = [
    'Salis',
    'Nizar',
    'Qomaruzaman'
]

const [namaAwal, namaTengah, namaAkhir] = name;
// console.log(namaAwal, namaTengah, namaAkhir);

// Skipping item
const [Awal, , Akhir] = name;

// Swap items => tukar posisi
let a = 1;
let b = `Selamat pagi, ${namaAwal}`;

[b, a] = [a, b]
// console.log(a, b);

// REST PARAMETER
const hewan = ['kucing', 'harimau', 'anaconda', 'gajah', 'kupu-kupu']

const [hewanPertama, ...value] = hewan;
// console.log(...value);

// 2. OBJEK = const {....}, dan harus sama nama variable, beda harus memakai alias

const pegawai = {
    nama: 'Salis Nizar Qomaruzaman',
    email: 'email@email.com',
    jabatan: 'Programmer'
};

// Destructuring nama variable sama
const { nama, email, jabatan } = pegawai;
// console.log(nama, email, jabatan);

// Destructuring nama dengan alias
const {
    nama: namaPegawai,
    email: emailPegawai,
    jabatan: jabatanPegawai
} = pegawai;
// console.log(namaPegawai, emailPegawai, jabatanPegawai);

// Assigntment tanpa declarration object
({ menikah, umur } = { menikah: 'Lajang', umur: '24' });
// console.log(status);

// Default value
const mahasiswa = {
    prodi: 'informatika',
    kondisi: 'lulus'
}

const { prodi, kondisi = 'active' } = mahasiswa;
// console.log(kondisi);

const data = {
    id: 147,
    nama: 'Salis Nizar Qomaruzaman',
    pekerjaan: 'Programmer'
}

function getName({ nama, pekerjaan }) {
    alert(`Data ${nama} ditemukan! Subjek adalah seorang ${pekerjaan}`);
}

getName(data);


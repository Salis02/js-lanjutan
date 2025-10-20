// DESTRUCTURING FUNCTION => expression pada JS yang bisa membongkar/memecah nilai array atau properti objek menjadi/kedalam variabel terpisah

// 1. ARRAY = const [....]
const name = [
    'Salis',
    'Nizar',
    'Qomaruzaman'
]

const [namaAwal, namaTengah, namaAkhir] = name;

// console.log(namaAwal, namaTengah, namaAkhir);

// 2. OBJEK = const {....}, dan harus sama nama variable, beda harus memakai alias

const pegawai = {
    nama: 'Salis Nizar Qomaruzaman',
    email: 'email@email.com',
    jabatan: 'Programmer'
};

// Destructuring nama variable sama
const { nama, email, jabatan } = pegawai;

console.log(nama, email, jabatan);

// Destructuring nama dengan alias
const {
    nama: namaPegawai,
    email: emailPegawai,
    jabatan: jabatanPegawai
} = pegawai;

console.log(namaPegawai, emailPegawai, jabatanPegawai);
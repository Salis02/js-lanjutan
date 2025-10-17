// TAGGED TEMPLATES LITERAL

// 1. Konsep singkat
// Tagged Template Literal adalah fungsi khusus yang bisa digunakan untuk memproses template literal (``) sebelum hasil akhirnya dikembalikan.

const identitas = {
    nama: 'Salis Nizar Qomaruzaman',
    email: 'nizarsalis@gmail.com'
}

const testing = (strings, ...value) => {
    return strings.reduce(
        (result, str, i) =>
            `${result}${str}${value[i] || ''}`, ''
    )
}

const test = testing`Saya ${identitas.nama}, email saya ${identitas.email}`;

// document.body.innerHTML = test;

// 2. Implementasi di case yang lain =>  hightlight (sorotan) pada text dinamis

const hightlight = (strings, ...value) => {
    return strings.reduce(
        (result, str, i) =>
            `${result}${str}<span style="background-color: yellow; font-weight:bold;" >${value[i] || ''}</span>` , ''
    )
}

const nama = 'Salis Nizar Qomaruzaman';
const hobi = 'Programming';

document.body.innerHTML = hightlight`Halo ${nama}, hobimu ${hobi}, kan?`;
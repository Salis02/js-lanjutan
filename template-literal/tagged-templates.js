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
            `${result}${str}<span style="background-color: yellow; font-weight:bold;" >${value[i] || ''}</span>`, ''
    )
}

const nama = 'Salis Nizar Qomaruzaman';
const hobi = 'Programming';

// document.body.innerHTML = hightlight`Halo ${nama}, hobimu ${hobi}, kan?`;

// 3. Implementasi intermediate

// a. Mencegah kode jahat dijalankan di browser
// Output => User berkata: <script>alert('hack!')</script>

const safeHTML = (strings, ...values) => {
    const sanitize = str => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return strings.reduce((result, str, i) =>
        `${result}${str}${sanitize(values[i] || '')}`, ''
    );
}

const userInput = "<script>alert('hack!')</script>";

// document.body.innerHTML = safeHTML`User berkata: ${userInput}`;

// b. Mencegah query SQL dengan aman
// Output => SELECT * FROM users WHERE username='admin' AND password='1234'
const sql = (strings, ...values) => {
    return strings.reduce((query, str, i) => {
        const val = values[i] ? `'${values[i]}'` : '';
        return `${query}${str}${val}`;
    }, '');
}

const user = "admin";
const password = "1234";
const query = sql`SELECT * FROM users WHERE username=${user} AND password=${password}`;

console.log(query);


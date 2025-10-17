// TAGGED TEMPLATES LITERAL

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

document.body.innerHTML = test;
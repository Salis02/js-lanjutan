// 1. HTML FRAGMENTS 

//Object
const identitas = {
    nama: 'Salis Nizar Qomaruzaman',
    asal: 'Kebumen, Jawa Tengah',
    pekerjaan: 'Programmer',
    company: 'Indo Tekno Medic',
    email: 'nizarsalis@gmail'
}

const view = `
            <ul>
                <li>${identitas.nama}</li>
                <li>${identitas.asal}</li>
                <li>${identitas.pekerjaan}</li>
                <li>${identitas.company}</li>
                <li>${identitas.email}</li>
            </ul>
            `
// document.body.innerHTML = view;

// 2. Looping

//Array
const elektronik = [
    {
        nama: 'Handphone',
        catgory: 'Communication'
    },
    {
        nama: 'Fridge',
        catgory: 'Environment'
    },
    {
        nama: 'Television',
        catgory: 'Entertainment'
    },
    {
        nama: 'Computer/Laptop',
        catgory: 'Working'
    },
    {
        nama: 'Air Conditioner',
        catgory: 'Environment'
    },
    {
        nama: 'Radio',
        catgory: 'Information'
    },
    {
        nama: 'Playstation',
        catgory: 'Gaming'
    },
]

const result = `
    <div class="elektronik">
        ${elektronik.map(
    m => `
            <h3>${m.nama}</h3>
            <p>Adalah sebuah alat elektronik yang masuk ke dalam kategory ${m.category}. </p>
            `
).join('')}
    </div>
`

// document.body.innerHTML = result;

// 3. CONDITIONAL => ternary

const hewan = {
    jenis: 'mamalia',
    namaHewan: 'Singa',
    status: 'Hidup'
}

const lihatHewan = `
    <p>
        Lihatlah di sana, ada jenis ${hewan.jenis}. Nama hewannya adalah ${hewan.namaHewan}. Dia ${hewan.status ? `${hewan.status}` : 'mati'}
    </p>
`
// document.body.innerHTML = lihatHewan;

// 4. Nested => HTML Fragments

const investasi = {
    nama: 'Investasi',
    deskripsi: 'Sebuah penyaluran asset/harta ke sebuah platform yang berkredible dengan tujuan memperoleh keuntungan',
    contoh: [
        'uang',
        'emas',
        'perak',
        'dan sejenisnya'
    ]
}

const investasiContoh = (x) =>{
    return `
    <ol>
        <li>
            ${x.map(z =>`<p>${z}</p>`).join('')}
        </li>
    </ol>
    `
}

const testing = `
    <p>
        ${investasi.nama} adalah ${investasi.deskripsi}.<br>
        Adapun contoh dari ${investasi.nama} adalah sbb : <br>
        ${investasiContoh(investasi.contoh)}
    </p>
`
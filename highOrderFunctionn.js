//Kita akan belajar tentang High Order Function

// 1. Function selesai() akan dijadikan argument => callback 
function selesai() {
    alert(`Selesai mengerjakan tugas`)
}

// 2. Higher Order Function
// Contoh 1 :
function mulaiKerja(task, selesai) {
    console.log(`Salis mengerjakan tugas ${task}`);

    // setTimeout(() => {
    //     selesai();
    // }, 5000)
}

mulaiKerja('Belajar JS Lanjutan', selesai);

// Contoh 2  :
setTimeout(function () {
    console.log(`Halo Salis`)
}, 1000);

// KENAPA MENGGUNAKAN HIGHER ORDER FUNCTION

// 1. Abstaksi, debugging

//Function pertama, jika ingin modif looping harus modif variable
for (let i = 20; i > 0; i--) {
    // console.log(i)
}

//Function kedua, dengan parameter (n)
const looping = (n) => {
    if (n <= 1) {
        return `Input angka looping harus lebih dari 1`;
    } else {
        let hasil = ''
        for (let i = 0; i <= n; i++) {
            hasil += i + '\n';
        }
        return hasil;
    }
}
// console.log(looping(10))

//Function ketiga, menentukkan aksinya, bukan hanya looping berapa kali

const loop = (n, action) => {
    for (let i = 0; i <= n; i++) {
        action(i);
    }
}

// loop(10, alert);
loop(10, console.log);

function printGreetings(nama) {
    this.nama = nama;
    function greetings() {
        // let nama = 'Nizar Uciha' // nama local scope akan dipakai terlebih dahulu
        console.log(`Halo, ${nama}`);
    }
    greetings();
}

let sapaan = new printGreetings('Salis');

//CLOSURE
function semangat(waktu) {
    return function (nama) {
        console.log(`Selamat bekerja, ${nama}. Karena sekarang sudah ${waktu}, jangan lupa ngising`);
    }
}


let semangatPagi = semangat('pagi');
let semangatSiang = semangat('siang');
let semangatMalam = semangat('malam');

// console.dir(semangatPagi);
semangatPagi('Nizar')
semangatSiang('Qomar');
semangatMalam('Zaman');

let add = (
    function () {
        let counter = 0
        return function () {
            return ++counter;
        }
    }
)();

counter = 1000; //tidak akan dijadikan variable scope function expression, karena ada local variable di dalam add()

console.log(add());
console.log(add());
console.log(add);


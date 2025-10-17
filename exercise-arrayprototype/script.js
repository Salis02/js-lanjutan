// 1. Ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]')); //kita ubah hasil nodelist menjadi array dengan Array.from()

// 2. Pilih hanya yang 'JAVASCRIPT LANJUTAN'

let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // 3. Ambil durasi masing-masing video

    .map(item => item.dataset.duration)

    // 4. Ubah durasi menjadi int, ubah menit menjadi detik

    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    // 5. Jumlahkan semua detik

    .reduce((total, detik) => total + detik);

// 6. Ubah formatnya jadi jam, menit, dan detik

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// 7. Simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const jVideo = document.querySelector('.jumlah-video');
jVideo.textContent = `${jmlVideo} video.`

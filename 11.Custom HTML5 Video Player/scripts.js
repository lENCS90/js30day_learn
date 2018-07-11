/* Start pada menit ke - 3 */

/* 1. Ambil Element */
// element player => line 10
const player = document.querySelector('.player');

// element video => line 11
const video = player.querySelector('.viewer');

// element progress => line 14
const progress = player.querySelector('.progress');

// element progress bar => line 15
const progressBar = player.querySelector('.progress__filled');

// element toggle (element yang berjalan di dalam progress bar)
// => line 17
const toggle = player.querySelector('.toggle');

// element tombol skip => line 20 & 21
const skipButtons = player.querySelectorAll('[data-skip]');

// element range (jarak waktu play) => line 18 & 19
const ranges = player.querySelectorAll('.player__slider');

/* 2. Buat Fungsi */

// fungsi toggle ketika di play
function togglePlay() {
    // jika video dalam keadaan pause
    // if (video.paused) {
    //     // ketika fungsi dijalankan
    //     // maka lakukan play
    //     video.play();
    // }else{
    //     // selain itu lakukan pause
    //     video.pause();
    // }

    // kode singkat 1
    // video[video.paused ? 'play':'pause']();

    // kode singkat 2 (percabangan ternary dimasukkan ke const)
    const method = video.paused ? 'play':'pause';
    video[method]();
}

// fungsi ketika video di play / dipause
function updateButton() {
    // console.log('diupdate');
    // set icon ketika video di play / dipause
    // defaultnya adalah play, sehingga nilai
    // true dari this.paused adalah icon ►
    // sedangkan ketika tidak terplay
    // iconnya ⏸
    const icon = this.paused ? '►' : '⏸';
    // masukkan ke variable toggle => line 17
    // icon-nya
    toggle.textContent = icon;
}

// fungsi ketika skip dijalankan
function skip() {
    // console.log('Skipping');
    // muncul pesan Skipping ketika tombol skip di klik

    // coba tampilkan data set pada elementnya
    // console.log(this.dataset.skip);

    // set skip pada video
    video.currentTime += parseFloat(this.dataset.skip);
}

// fungsi ketika player slider berubah range nya
function handleRangeUpdate() {
    // console.log(this.name);
    // outputnya adalah nama dari element yang dikenai event
    // console.log(this.value);
    // outputnya adalah nilai dari element yang dikenai event

    // tes output nama dan nilainya
    // console.log(this.name);
    // console.log(this.value);

    // terapkan pada element video
    video[this.name]=this.value;
    // maksudnya adalah terapkan nilai pada element
    // yang ada di video
}

// fungsi untuk menangani progress player bar
function handleProgress() {
    // nilai persentasi diambil dari waktu video terkini
    // dibagi dengan durasi video dikali dengan 100, hasilnya
    // adalah persentase yang akan diupdate ke
    // progress player bar
    const percent = (video.currentTime / video.duration) * 100;
    
    // ambil element progressBar, lalu set
    // 
    progressBar.style.flexBasis = `${percent}%`;
    
}

// fungsi untuk menjalankan progress player bar
// ditempat mouse diklik
function scrub(e) {
    // console.log(e);
    // akan muncul posisi X nya dimana, sehingga bisa
    // dijadikan dasar untuk mengupdate, ketika
    // progress player bar diklik

    // selanjutnya buat kalkulasi waktu
    // sehingga panjangnya X pada progress player
    // bar sesuai dengan durasi video
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    // set pada current time video
    video.currentTime = scrubTime;
}

/* 3. Set Event Listener */

/* Play and Pause */
// set event ketika area video di klik maka jalankan
// fungsi togglePlay => line 29
video.addEventListener('click', togglePlay);

// set event ketika video dalam keadaan play
// maka button berubah bentuk tanda play
// fungsi updateButton => line 49
video.addEventListener('play', updateButton);

// set event begitu juga ketika video dalam keadaan pause
// maka button berubah bentuk semula
// fungsi updateButton => line 49
video.addEventListener('pause', updateButton);

/* set event ketika progress player bar berjalan */
// fungsi handleProgress => line 92
video.addEventListener('timeupdate',handleProgress);

// set event ketika tombol play diklik
// fungsi togglePlay => line 29
toggle.addEventListener('click', togglePlay);

/* set event ketika tombol skip diklik */
// fungsi skip => line 63
skipButtons.forEach(button => button.addEventListener('click',skip));

/* set event ketika klik pada player slider */
// fungsi handleRangeUpdate => line 75
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));

/* set event ketika digeser dengan mouse pada player slider */
// fungsi handleRangeUpdate => line 75
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

/*  set event click pada progress */
// fungsi scrub => line 107
progress.addEventListener('click',scrub);


/* Mouse Event */

// set variabel status mouse terkliknya atau disebut
// event mousedown

let mousedown = false;

/* set event mouse move pada progress */
// fungsi scrub => line 107
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e));
// penjelasan : ketika mouse bergerak pada progress
// player bar, maka cek apakah terjadi mousedown?
// jika iya maka jalankan fungsi scrub sesuai lokasi
// mousedown terjadi yang ditampung pada variabel e

/* set nilai variabel mousedown dengan event ke true*/
/* ketika mouse tidak terklik atau event mousedown */
// variabel mousedown => line 169
progress.addEventListener('mousedown', () => mousedown = true);

/* set nilai variabel mousedown dengan event ke false*/
/* ketika mouse tidak terklik atau event mouseup */
// variabel mousedown => line 169
progress.addEventListener('mouseup', () => mousedown = false);

/* CHALLENGE */
// Buat tombol fullscreen
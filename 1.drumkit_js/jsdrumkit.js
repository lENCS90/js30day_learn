// pindah prosedur window.addEvent.Listener ke posisi paling bawah
// window.addEventListener('keydown', function (e) {
	/*
	Menambahkan fungsi Event Listener berupa Keydown, 
	yaitu fungsi yang mendeteksi key pada keyboard
	yang sedang ditekan
	*/
	
	// console.log(e.keyCode);
	
	/*
	Menampilkan kode key pada keyboard ke console
	 */
	
	/*
	Diemplementasikan kedalam tag audio yang telah
	ditentukan di file html
	 */
	// const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // 1.set audio
	/*
	menentukan konstata audio yaitu konstanta tersebut akan diisi suara
	sesuai yang diinginkan dengan menggunakan selector dokumen
	dan memilih query selector terhadap tag 'audio' dan atribut data-key
	lalu input menggunakan nilai yang telah dibuat dimana didapat dari 
	fungsi keydown
	 */
	
	// const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // 6.set key untuk animasi

	// console.log(audio);
	// 2.check output audio
	
	// console.log(key);
	// 7.check output key

	/*
	lalu tampilkan isi dari konstata audio, output berupa baris tag audio
	yang dimana sesuai dengan key pada keyboard yang ditekan, misal huruf a
	maka muncul baris: <audio data-key="65" src="sounds/clap.wav"></audio>
	pada console.
	 */
	
	/*
	namun ketika menekan tombol yang data keynya tidak terdaftar di tag audio
	maka akan muncul nilai null, pertanda data tidak diketahui, sehingga dibuat
	percabangan untuk menanggulanginya
	 */
	// if (!audio) return;
	// 3. percabangan deteksi
	/*
	hentikan fungsi yang berjalan, jika outputnya bukan tag audio
	 */
	// audio.currentTime = 0;
	// 4. set waktu jeda
	/*
	set waktu jeda dari konstanta audio 0 detik
	 */
	// audio.play();
	// 5. set audio dimainkan
	/*
	audio mainkan
	 */

	 /*Proses animasi*/
	 // 7. set tambah class playing pada key
	 // key.classList.add('playing');

	 // 8. ubah properti CSS
	 // 	a. pada .playing{transform:scale(2);} hasilnya terlihat transitionnya
	 // 	b. pada .key{transition: all 1.07s ease;}
	 // 	c. ganti kembali .playing{transform:scale(1.1);}
	 
	 // 9. buat animasi setelah key ditekan
	 // const keys = document.querySelectorAll('.key');
	 /*
	 deklarasikan semua keys dengan querySelectorAll
	  */
	 
	  // 16. lalu buat fungsi playSound (agar lebih ringkas)
	  function playSound (e) {
	  	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // 1.set audio
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // 6.set key untuk animasi
		if (!audio) return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
	  }

	 // 10. Buat function removeTransition
	 function removeTransition (e) {
	 	// console.log(e);
	 	/*
	 	cek ketika fungsi dijalankan
	 	 */
	 	if (e.propertyName !== "transform") return;
	 	/*
	 	hentikan aplikasi jika propertyName bukan transform
	 	 */
	 	// console.log(e.propertyName);
	 	/*check apa yang dijalankan setelah transition*/

	 	// 12. ubah properti CSS
	 	// 	a. pada .playing{transform:scale(2);} hasilnya terlihat transitionnya
	 	
	 	// 13. cek notasi oop this
	 	// console.log(this);
	 	/*
	 	berisi div dengan data-key yang di tekan contoh
	 	<audio data-key="74" src="sounds/snare.wav"></audio>
	 	 */
	 	
	 	// 14. lalu hapus class playing di elementnya
	 	this.classList.remove('playing');
	 	/*
	 	sehingga menjadi animasi:
	 	1. tambah class playing sehingga ada animasi menyembul
	 	2. lalu setelah jarak transisi maka akan dihapus lagi
	 	 */
	 }

	 const keys = document.querySelectorAll('.key');

	 // 11. buat animasi transisi akhir pada setiap keys
	 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	 /*
	 lakukan perulangan pada konstanta keys jalankan function removeTransition 
	 ketika event transitionend ditambahkan ke dalam class key, 
	  */
	 
	 // 15. kembalikan rentang transisi menjadi 0.07s
	 
	 window.addEventListener('keydown', playSound);
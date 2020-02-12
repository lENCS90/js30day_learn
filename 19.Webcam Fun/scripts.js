// const video = document.querySelector('.player');
// const canvas = document.querySelector('.photo');
// const ctx = canvas.getContext('2d');
// const strip = document.querySelector('.strip');
// const snap = document.querySelector('.snap');

// /* Sambungkan video dengan element*/
// function getVideo() {
//   // set parameter geUserMedia
//   navigator.mediaDevices.getUserMedia({ video: true, audio: false })
//     .then(localMediaStream => {
//       // set video.srcObject dengan localMediaStream
//       video.srcObject = localMediaStream;
//       video.play();
//     })
//     .catch(err => {
//       console.error('Error : ', err);
//     });
// }

// /* Menampulkan gambar yang berada pada element video kedalam element canvas */
// function paintToCanvas() {
//   // set dimensi canvas berdasarkan lebar element video
//   const width = video.videoWidth;
//   const height = video.videoHeight;
//   canvas.width = width;
//   canvas.height = height;

//   // sematkan gambar dari element video ke element canvas per 16 milisecond
//   return setInterval(() => {
//     ctx.drawImage(video, 0, 0, width, height);
//   }, 16);
// }

// /* Fungsi memfoto dari rekaman video */
// function takePhoto() {
//   // Set jalankan suata memotret
//   snap.currentTime = 0;
//   snap.play();

//   // ambil data dari canvas
//   const data = canvas.toDataURL('image/jpeg');

//   // buat link untuk mengambil fotonya
//   const link = document.createElement('a');
//   // set link href berdasarkan nilai data
//   link.href = data;
//   // lalu set atributnya download dan nama filenya
//   link.setAttribute('download', 'kutnang');

//   // set label pada element link
//   // link.textContent = 'Download Image';
//   // ganti dengan
//   link.innerHTML = `<img src=${data} alt="Handsome Man" />`;
//   // agar langsung tampil tampilan foto di lokasi strip

//   // set element strip untuk menambahkan link pada first childnya
//   strip.insertBefore(link, strip.firstChild);

// }

// /* Filter => on next coding*/

// // Jalankan getVideo
// getVideo();

// /* tambahkan event pada element video */
// video.addEventListener('canplay', paintToCanvas);

/* Mulai Membuat filter */
/* 18:38 */
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error('Error : ', err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // ambil nilai pixel keselurhan di layar
    let pixels = ctx.getImageData(0, 0, width, height);

    // implement red effect ke setiap pixel
    // pixels = redEffect(pixels);

    // implement rgbSplit effect ke setiap pixel
    // pixels = rgbSplit(pixels);

    // implement greenscreen effect ke setiap pixel
    pixels = greenScreen(pixels);

    // lalu tempelkan lagi ke contextnya
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');

  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'kutnang');
  link.innerHTML = `<img src=${data} alt="Handsome Man" />`;

  strip.insertBefore(link, strip.firstChild);
}

// deklarasi fungsi redEffect
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
  }
  return pixels;
}
// efek RGBSplit
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 100] = pixels.data[i + 1] // green
    pixels.data[i - 150] = pixels.data[i + 2]; // blue
  }
  return pixels;
}

// function dibawah ini wes bos copas
function greenScreen(pixels) {
  const levels = {};
  // seleksi rgb input untuk masing2 namenya
  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });

  // lakukan perulangan untuk masing2 pixelsnya

  for (let i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // set kondisi sesuai range inputan rgbnya
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax
    ) {
      // set pixelnya untuk data alfa / transparannya
      pixels.data[i + 3] = 0;
    }
  }
  // kembalikan nilai olahan ke pixels
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);

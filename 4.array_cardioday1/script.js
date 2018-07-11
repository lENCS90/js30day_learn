// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

/* const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']; */

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
    // const fifteen = inventors.filter(inventor => (inventor.year >=1500 && inventor.year < 1600));
    // console.table(fifteen);
  /**
   * Penjelasan Kasus Filter
   * -> menyaring nama penemu yang lahir tahun 1500an, yaitu dengan menggunakan filter sebagai fungsi
   *    karena ditentukan penemu tahun 1500an maka, ditentukan yang meninggal sebelum tahun 1600
   *    jika kita menggunakan function maka akan terjadi perulangan setiap object penemu dicocokkan
   *    satu persatu, dengan mengunakan arrow function maka lebih pendek kodenya, secara fungsi sama
   */

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
    // const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    // console.table(fullNames);
  /**
   * Penjelasan Kasus Map
   * -> memetakan array yang mana merupakan isi pada object inventors,
   *    pada kasus ini setelah dipetakan, isi indeks 'first' pada objek
   *    digabungkan dengan indeks 'last' sehingga menjadikan nama lengkap
   *    dari para inventors
   */

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
    // const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
    // console.table(ordered);
  /**
   * mengurutkan ulang tahun penemu dari yang paling tua ke yang paling muda
   * Penjelasan sort
   * -> untuk memahaminya perlu membaca dari kanan ke kiri,
   *    ==> (a,b) => a.year > b.year ? 1 : -1
   *        maksudnya adalah panggil ternary if, dimana tahun lahir penemu a
   *        lebih besar dari penemu b maka, jika benar, status a bernilai 1
   *        sedangkan jika salah status b bernilai - 1, hasilnya dikembalikan
   *        ke masing-masing pada parameter (a,b), 
   *    ==> contoh: penemu a lahir tahun 1879, penemu b lahir tahun 1643, maka
   *        lahir tahun penemu a lebih besar dari pada tahun penemu b
   *        maka a bernilai 1, sedangkan b bernilai -1, urutan menjadi :
   *        penemu b lebih tua daripada penemu a, karena nilai urutan
   *        b menjadi lebih tinggi setelah nilai statusnya -1 dari status awalnya
   * -> lalu daftar arraynya di sort berdasarkan nilai indeksnya
   * -> setelah itu dimasukkan ke konstanta ordered
   * -> dan akhirnya di tampilkan
   */

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
/*   const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed-inventor.year);
    },0);
  console.log(totalYears); */
  
  // script penjelasan
    /* const totalYears = inventors.reduce((total, inventor) => {
      console.log(`\ntotal sebelumnya = `+ total +
                  `,\nhasil dari ${inventor['passed']}-${inventor['year']} Penemu bernama `+
                    inventor['first'] +` = ` + (inventor.passed-inventor.year)
                );
        return total + (inventor.passed-inventor.year);
      },0);
    
    console.log(`Total akhir dari setiap hasil selisih umur penemu adalah = ${totalYears}`); */
  /**
   * menghitung total keseluruhan umur penemu selama hidupnya
   * Penjelasan Reduce
   * mengurangi atau / reduce tahun lahir dan tahun meninggal penemu-penemu
   * --> setiap tahun meninggal penemu dikurangi dengan tahun kelahirannya
   *     ==> pada (inventor.passed-inventor.year)
   *         tahun meninggal dikurangi dengan tahun lahir
   *     ==> total +
   *         lalu ditambahkan dengan total
   *     ==> (total, inventor)
   *         setiap hasil pengurangan tahun meninggal dengan tahun lahir
   *         diakumulasi lalu ditambahkan dengan total
   *     ==> inventor.passed merujuk pada tahun meninggal penemu, sedangkan 
   *         inventor.year merujuk pada tahun kelahiran penemu, hal ini terjadi
   *         karena ketika inventor dikaitkan dengan nama indeks pada inventors
   *         maka secara otomatis inventor menjadi object TERHADAP nama indeks pada
   *         inventors
   * --> pada dasarnya variabel total dan inventor tidak mempunyai nilai,
   *     variabel total diinisialisasi dengan nilai 0, sedangkan variabel
   *     inventor dikaitkan dengan element indeks inventors sehingga menjadikan
   *     variabel inventor mempunyai nilai dengan nilai element indeks pada
   *     inventors 
   *     ==> contoh: penemu a meninggal pada tahun 1955 sedangkan lahir pada
   *         tahun 1879, hasil selisihnya adalah 76 dimasukkan ke nilai total sehingga
   *         menjadi total = 0 + 76, total = 76, lalu penemu b
   *         meninggal tahun 1727 dan lahir pada tahun 1643, hasil selisihnya
   *         adalah 84 dimasukkan ke nilai total sehingga menjadi total
   *         = 76 + 84, total = 160, begitu seterusnya, sampai element pada inventors
   *         habis, tugas reduce adalah menjumlah tiap-tiap total pada masing-masing
   *         element array penemu, lalu pada akhirnya menjadi nilai dari totalYears
   * --> fungsi reduce bekerja pada saat hasil return total pada setiap
   *     operasi return total + inventor.passed-inventor.year, reduce menjumlahkan
   *     tiap-tiap total pada baris setiap hasil return
   * --> lalu menjadi total hasil akhir dari totalYears
   */
  
  // 5. Sort the inventors by years lived
    /* const oldest = inventors.sort((a,b) => {
      const lastGuy = a.passed - a.year;
      const nextGuy = b.passed - b.year;
      console.log(a.first+' '+a.last+' '+lastGuy+' '+b.first+' '+b.last+' '+nextGuy+'\n\n');
      return lastGuy > nextGuy ? -1 : 1;
    });

    console.table(oldest); */
    /**
     * mengurutkan dari rentang umur yang paling tua dan paling muda
     * --> pada dasarnya a dan b adalah variabel yang belum di deklarasikan sebelumnya
     *     namun a dan b disematkan pada indeks 'passed' dan 'year' dari object inventors
     *     passed untuk tahun meninggal, sedangkan year untuk tahun dilahirkan
     * --> sedangkan nilai lastGuy dan nextGuy adalah hasil dari selisih a atau b passed
     *     dengan a atau b year, dengan kata lain adalah hasil selisih dari tahun meninggal
     *     dikurangi dengan tahun lahir, pada kasus ini digunakan 2 variabel penampung(lastGuy
     *     & nextGuy) untuk sebagai pembanding sehingga nantinya diberi nilai indeks -1 atau 1
     * --> lalu nilai indeks pada object inventors urut sesuai dengan penulisan awalnya
     *     namun diberi nilai 1 atau -1 tergantung dari perbandingan
     * --> setelah dibandingkan hasilnya jika indeks lastGuy lebih besar dari indeks nextGuy
     *     maka tambahkan nilai -1 pada indeks lastGuy, asumsinya semakin kecil nilai indeks
     *     element arraynya, semakin tinggi peringkatnya dengan kata lain yang paling tinggi
     *     adalah yang masa hidupnya paling panjang
     * --> contoh:
     *     ==> seorang penemu Bernama Nikolaus Copernicus lahir pada tahun 1473 dan meninggal pada
     *         tahun 1543, pada object array inventors urutannya adalah indeks ke-5(indeks
     *         dimulai dari 0), lalu seorang penemu lain Bernama Albert Einstein lahir pada tahun
     *         1879 dan meninggal tahun 1955, pada object array inventors urutannya adalah indeks
     *         ke-0
     *     ==> Albert Einstein masuk ke dalam proses, sehingga lastGuy = tahun meninggal - tahun 
     *         kelahiran, lastGuy = 1955 - 1879, lastGuy Bernilai 76, selanjutnya 
     *     ==> Galileo Galilei masuk ke dalam proses, sehingga nextGuy = tahun meninggal - tahun
     *         kelahiran, nextGuy = 1543 - 1473, nextGuy Bernilai 70
     *     ==> Lalu return ke perbandingan jika lastGuy nilainya lebih besar dari nextGuy maka,
     *         indeks dari lastGuy diberi nilai -1 namun jika nextGuy lebih besar dari lastGuy maka,
     *         indeks dari nextGuy diberi nilai 1
     *     ==> pada kasus ini nilai lastGuy lebih besar sehingga urutan indeksnya menjadi meningkat,
     *         dari urutan ke 0 menjadi tetap indeks ke 0, proses berlanjut hingga sampai inventors
     *         yang memiliki masa hidup paling lama nilai indeksnya semakin berkurang yang berarti
     *         tingkat posisinya semakin meninggi
     * --> nilai kembalian setiap dari perbandingan dikembalikan ke variabel a dan b
     * --> selanjutnya di urutkan sesuai dari indeks yang nilainya paling kecil ke nilai indeks yang
     *     membesar
     * --> nilai dialihkan ke variabel oldest
     * --> tampilkan isi dari oldest
     */

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

    /**
     * membuat daftar taman di Paris yang memiliki awalan nama 'de' di posisi manapun pada namanya
     * targetnya adalah link https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
     * --> pada dasarnya link dan streetName tidak memiliki nilai apapun, namun karena dari variabel 
     *     links memanggil fungsi map dan filter sehingga nilai kembalian link dan streetName berasal dari
     *     arrow function-nya, link mendapatkan hasil kembalian link.textContent, dan streetName mendapatkan
     *     hasil kembalian dari streetName.includes('de'), yang mana streetname adalah variabel turunan dari
     *     variabel link, sedangkan includes adalah fungsi dari prototipe string yang merupakan turunan setelah
     *     fungsi map
     * --> alur :
     *     ==> buka link https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
     *     ==> lalu jalankan seleksi melalui terminal terhadap kelas mw-category, tampung di variabel category
     *     ==> selanjutnya buat array dari seleksi tag a dari variabel category, tampung di variabel links
     *     ==> setelah itu jalankan fungsi map, untuk memetakan setiap element array yang ada di array links
     *         diambil konten atau isi teksnya nilai kembalian dialihkan ke variabel link
     *     ==> selanjutnya dari hasil pemetaan dengan fungsi map, jalankan fungsi filter sebagai fungsi penyaringan
     *     ==> yang nilai kembaliannya dikembalikan ke streetName setelah menjalankan fungsi includes, yang berarti
     *         jika kontent berisi kata 'de' maka alihkan nilai kembalian ke streetName
     *     ==> setelah itu hasil dari map dan filter ditampung ke variabel de
     * + Semua Syntax Diatas dijalankan di console browser
     */

  // 7. sort Exercise
  // Sort the people alphabetically by last name
    /* const alpha = people.sort(function(lastOne, nextOne) {
      const [aLast, aFirst] = lastOne.split(',');
      const [bLast, bFirst] = nextOne.split(',');
      return aLast > bLast ? 1 : -1;
    });

    console.table(alpha); */

    /**
     * mengurutkan nama belakang berdasarkan alfabet dari array people
     * hampir dengan kasus 5, seperangkat variabel : lastOne, nextOne, aLast, aFirst, bLast, bFirst merupakan
     * hasil dari pemetaan fungsi yang merupakan turunan dari fungsi sort, lastOne dan nextOne adalah nilai
     * kembalian hasil proses berikut: 
     * --> lastOne dan nextOne adalah satu paket element array nama depan dan nama belakangnya, dimana pada
     *     penggunaannya lastOne digunakan oleh variabel aLast sebagai nama belakang dari element array a dan
     *     variabel aFirst sebagai nama depan dari element array a, sedangkan nextOne digunakan oleh variabel
     *     bLast sebagai nama belakang dari element array b dan variabel bFirst sebagai nama depan dari element
     *     array b
     * --> untuk urutan indeks menggunakan perbandingan = jika aLast lebih besar indeksnya dari bLast, jika
     *     benar maka indeks bertambah nilai 1 sedangkan jika salah atau indeks bLast lebih besar dari aLast
     * --> hampir sama dengan kasus 5, bedanya pengurutkan berdasarkan alfabet di nama akhir, yang sesuai
     *     urutan abjad maka urutan indeksnya semakin menurun, tingkat dalam susunan arraynya semakin tinggi
     *     pada akhirnya urutan nama belakang berdasarkan urutan abjad
     */

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item]=0;
    }
    obj[item]++;
    return obj;
  },{});

  console.log(transportation);
  /**
   * menghitung jumlah benda yang jenisnya sama dari dalam array data
   * variabel obj untuk penampung jenis dari barang, sedangkan variabel
   * item sebagai variabel penampung jumlah barang
   * --> parameter ke 2 dari reduce tampak {}, hal ini berarti tiap item
   *     dalam object dimulai dari indeks ke-0, 
   * --> Percabangan ketika 1 jenis object tidak memiliki item,
   *     maka item di-assign dengan nilai 0
   *     ==> misal item bike (indeks ke-4), indeks selanjutnya memiliki
   *         nilai yang tidak sama dengan indeks ke-4 sehingga set object
   *         item menjadi 0, selanjutnya diberi nilai 1 (increment operator)
   *     ==> kembali ke posisi object, di cek lagi jika obj[item] bernilai
   *         false maka assign dengan nilai 0, namun kali ini obj[item]
   *         bernilai true, sehingga tambahkan kuantitas, lalu kembali ke
   *         posisi object(obj), cek lagi, jika false set item 0 lalu increment
   *         dengan nilai 1 jika true langsung increment, begitu seterusnya
   */
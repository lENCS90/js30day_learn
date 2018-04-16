// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
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

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

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
    // const totalYears = inventors.reduce((total, inventor) => {
    //     return total + (inventor.passed-inventor.year);
    //   },0);

    // console.log(totalYears);

  // 5. Sort the inventors by years lived
    // const oldest = inventors.sort((a,b) => {
    //   const lastGuy = a.passed - a.year;
    //   const nextGuy = b.passed - b.year;
    //   return lastGuy > nextGuy ? -1 : 1;
    // });

    // console.table(oldest);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

  // 7. sort Exercise
  // Sort the people alphabetically by last name
    // const alpha = people.sort(function(lastOne, nextOne) {
    //   const [aLast, aFirst] = lastOne.split(',');
    //   const [bLast, bFirst] = nextOne.split(',');
    //   return aLast > bLast ? 1 : -1;
    // });

    // console.table(alpha);
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  // const transportation = data.reduce(function (obj, item) {
  //   if (!obj[item]) {
  //     obj[item]=0;
  //   }
  //   obj[item]++;
  //   return obj;
  // },{});

  // console.log(transportation);
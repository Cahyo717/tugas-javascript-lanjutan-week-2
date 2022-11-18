//membuat 10 built function beserta penjelasan dan cara pemakaiannya 

// 1 - Object.keys()
// Object.keys() berfungsi untuk me return sebuah array pada objek yang diberikan

// contoh penggunaan Object.keys pada sebuah array object
const person = {
    firstName : "Cahyo",
    lastName  :"Novianto",
    Age       : 50,
    eyeColor  : "red"
};

const keys = Object.keys(person);
console.log(keys);
// output : [ 'firstName', 'lastName', 'Age', 'eyeColor' ]

// Contoh penggunaan Object.keys pada sebuah Array
const city = ["New york", "London", "Washington", "Las Vegas"]
const keysCity = Object.keys(city);
console.log(keysCity);
// output : [ '0', '1', '2', '3' ]

const fruit = "Apple";
const keysFruit = Object.keys(fruit);
console.log(keysFruit);
// output : [ '0', '1', '2', '3', '4' ]

// 2 - parseInt
// parseInt berfungsi untuk memecah (memparsing) string dan mengembalikan bilangan bulat atau NaN
// tujuan utama dari parseInt adalah untuk meng ekstrak sebuah angka dari string

// contoh penggunaan

// Syntax
// parseInt(string)

const myNumber = '3';
console.log(2 + myNumber);
// Contoh di atas akan mengembalikan nilai 23 karena kita memasukkan angka 2 ke sebuah string 
// dengan parseInt kita bisa mengekstrak '3' menjadi 3
console.log(2 + parseInt(myNumber));

// 3 - String
// String() method berfungsi untuk meng converts sebuah nilai ke sebuah string
// syntax : String(value)
console.log(String(Boolean(0)))
console.log(String(Boolean(1)))
console.log(String([1,2,3,4][1,1,1,1]))
console.log(String(4))

// 4 - Reduce()
// merupakan method array yang berfungi untuk mengeksekusi callback pada setiap elemen array, setelah dijalankan. method ini mengembalikan nilai tunggal 
// sintaks 
/* =========== Arrow Function =============== */
// reduce((accumulator, currentValue) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex) => { /* … */ })
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })
/* ===========Callback function=============== */
// reduce(callbackFn, initialValue)

/* ===========Contoh reduce=============== */
// Tanpa nilai awal 
const arrNumber = [1,2,3,4,5]

const result = arrNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(result); //output = 15

// dengan nilai awal
const arrAngka = [1,2,3,4,5]

const hasil = arrAngka.reduce((nilaiSebelumnya , nilaiSaatIni) => {
    return nilaiSaatIni + nilaiSebelumnya;
} , 10)

console.log(hasil); // Output = 25

// 5 - filter()
// filter() merupakan sebuah method yang berfungsi untuk mencari semua elemen array dengan kriteria yang telah ditentukan, method ini mengembalikan array baru dan tidak mengubah array pertama

// sintaks
/* =========== Arrow Function =============== */
// filter ((elemen, index, array) => {  })
/* =========== Callback function =============== */
// filter (callbackfn, thisValue)
// Nilai kembalian = mengembalikan array baru yang telah lulus pengujian fungsi callback atau sesuai kriteria, jika tidak ada yang sesuai kriteria, maka akan mengembalikan sebuah array kosong

//Contoh
//Filter bilangan genap

const values = [1,2,3,4,5,6,7,8,9];
const value = values.filter((elemen) => elemen % 2 === 0);
console.log(value);

//Memfilter object dalam Array

const users = [
    {
        name : 'cahyo',
        age : 25,
        gender : 'male',
    },
    {
        name : 'budi',
        age : 24,
        gender : 'male',
    },
    {
        name : 'anas',
        age : 23,
        gender : 'female'
    }
];

const userMale = users.filter((user) => user.gender === 'male');
console.log(userMale)

// 6 - find()
// find() method berfungsi untuk mencari elemen tertentu dalam array berdasarkan kriteria yang ditentukan 

// Sintaks 
/* =========== Arrow Function =============== */

// find((elemen, index, array => {  }))

/* =========== Callback Function =============== */

// find(callbackFn, thisValue)
// Contoh
// Mencari nilai di dalam array values kurang dari 5
const nilai = [1,2,3,4,5,6];

const nilaiAkhir = nilai.find((elemen) => elemen < 5);

console.log(nilaiAkhir);

// 7 - splice()
// splice() merupakan array method yang berfungsi untuk mengubah data pada suatu array termasuk menghapus, mengganti, atau menambah elemen baru
// Method ini mengubah array asli dan mengembalikan sebuah nilai berupa elemen yang dihapus
// sintaks 
//  splice(indexAwal, jumlahHapusElemen, elemenBaru);

const hari = ['senin', 'selasa', 'ayam', 'bebek', 'rabu', 'kamis'];
hari.splice(2,2);
console.log(hari);

// 8 - slice()
// slice() merupakan method javascript yang digunakan untuk menyalin sebagian elemen / indeks ke array baru, method ini tidak mengubah array asli
// sintaks
// slice(indexAwal, indexAkhir)
// Contoh

const hewan = ['kucing', 'anjing', 'ayam', 'kambing', 'sapi'];

const hewanBaru = hewan.slice(1,4);

console.log(hewanBaru);


// 9 - shift
// shift() adalah method untuk menghapus elemen pertama pada suatu array, method ini mengembalikan value yang dihapus dan mengubah panjang array
// sintaks 
// shift()
//contoh
const buah = ['pisang', 'anggur', 'apel'];
const hapusBuah = buah.shift();

console.log(hapusBuah);
console.log(buah);

// 10 - unshift
// unshift() merupakan method array yang berfungsi untuk menambahkan elemen baru ke sebuah array,
// sintaks
// contoh
const buah1 = ['apel', 'anggur'];
const jumlahBuah = buah1.unshift('pisang','mangga');

console.log(jumlahBuah);
console.log(buah1);




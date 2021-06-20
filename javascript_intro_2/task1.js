//1 includes -> function untuk mencari sebuah string pada sekumpulan string 
//dan mengembalikan true jika string yang di cari dalam sekumpulan string ada dan false jika tidak ada
let str = "Hello word"
let resultStr = str.includes("word")
console.log(resultStr);

//2 search -> funtion untuk mencari sebuah string pada sekumpulan string
//dan mengembalikan pososi index string tersebut jika ditemukan,jika tidak akan mengembalikan -1
let nama = "arya irama wahono"
console.log(nama.search("irama"));

//3 toFixed -> function untuk konversi number menjadi string dan membulatkan ke angka
//ke desimal tertentu sesuai parameter function tersebut
let nilai = 81.26
console.log(nilai.toFixed(1));

//4 toUpperCase -> function untuk konversi string menjadi huruf besar
let textUpper = "arya"
console.log(textUpper.toUpperCase());

//5 toLowerCase -> funtion untuk konversi string menjadi huruf kecil
let textLower = "ARYA IRAMA WAHONO"
console.log(textLower.toLowerCase());

//6 push -> function untuk menambahkan item baru ke array atau array of object dengan
//catatan item yang baru di tambahkan akan berada di akhir array
let color = ["red", "green", "blue"]
color.push("pink")
console.log(color);

//7 unshift -> function untuk menambahkan item baru ke array atau array of object dengan
//catatan item yang baru di tambahkan akan berada di awal array
color.unshift("purple")
console.log(color);

//8 shift f-> function untuk menghapus array pada index pertama pada array dan array of object
color.shift()
console.log(color);

//9 lastIndexOf -> funtion untuk mencari index suatu array pada sekumpulan array dan mengembalikan
//posisi array jika ditemukan,jika tidak makan akan mengembalikan -1
color.lastIndexOf("green")

//10 map -> funtion untuk membuat array baru/mengolah array menjadi array baru dari array yang ada
let objectColor = color.map(value => {
    return {
        color : value
    }
})

console.log(objectColor);



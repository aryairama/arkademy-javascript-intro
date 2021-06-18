const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
    if (nilaiAwal < 0 || typeof nilaiAwal !== "number") {
        console.log("Nilai awal tidak boleh negative dan harus number");
    } else if (nilaiAkhir < 0 || typeof nilaiAkhir !== "number") {
        console.log("Nilai akhir tidak boleh negative dan harus number");
    } else if (!Array.isArray(dataArray) || dataArray.length < 5) {
        console.log("data harus berupa array dan panjang array lebih dari 4");
    } else if (typeof callback !== "function") {
        console.log("callback harus berupa function");
    } else if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai awal harus kurang dari nilai akhir");
    } else {
        return callback(nilaiAwal, nilaiAkhir, dataArray)
    }
}
let prosesNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let nilai = dataArray.filter(value => {
        return value >= nilaiAwal && value <= nilaiAkhir
    })
    return console.log(nilai);
}
seleksiNilai(10, 20, [1, 19, 7, 4, 21], prosesNilai)
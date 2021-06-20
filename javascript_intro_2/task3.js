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
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else {
        return callback(nilaiAwal, nilaiAkhir, dataArray);
    }
};
let prosesNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let nilai = dataArray.filter((value) => {
        return value >= nilaiAwal && value <= nilaiAkhir;
    });
    if (nilai.length > 0) {
        nilai.sort((a, b) => a - b);
        console.log(nilai);
    } else {
        console.log("Jumlah angka dalam dataArray tidak ada");
    }
};
seleksiNilai(20, 43, [1, 19, 7, 4, 21, 22, 41, 20, 4, 3], prosesNilai);
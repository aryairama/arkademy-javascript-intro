let arkFood = (harga, voucher, jarak, pajak, callback) => {
    if (!Boolean(harga) || typeof harga !== "number" || harga < 1) {
        console.log("harga harus berupa number dan tidak boleh kosong");
    } else if (typeof voucher !== "string") {
        console.log("kupon harus berupa string/jika tidak memiliki bisa isi string kosong");
    } else if (!Boolean(jarak) || jarak < 0 || typeof jarak !== "number") {
        console.log("jarak harus berupa number dan tidak boleh kosong");
    } else if (typeof pajak !== "boolean" || pajak === "") {
        console.log("value pajak harus berupa true atau false");
    } else if (typeof callback !== "function") {
        console.log("callback harus berupa function");
    } else {
        return callback(harga, voucher, jarak, pajak)
    }
}
let priceCalculation = (harga, voucher, jarak, pajak) => {
    let diskon = 0
    let ongkir = 0
    let biayaPajak = 0
    let subTotal = 0
    if (harga >= 50000) {
        if (voucher === "ARKAFOOD5") {
            diskon = harga * 0.5
            if (diskon > 50000) {
                diskon = 50000
            }
        } else if (voucher === "DITRAKTIRARKADEMY") {
            diskon = harga * 0.6
            if (diskon > 30000) {
                diskon = 30000
            }
        }
    } else if (harga >= 25000 && harga < 50000) {
        if (voucher === "DITRAKTIRARKADEMY") {
            diskon = harga * 0.6
            if (diskon > 30000) {
                diskon = 30000
            }
        }
    }
    if (jarak > 2) {
        ongkir = (jarak - 2) * 3000 + 5000
    } else {
        ongkir = 5000
    }
    if (pajak === true) {
        biayaPajak = harga * 0.05
    }
    subTotal = harga - diskon + ongkir + biayaPajak
    console.log(`Harga  : ${harga}`);
    console.log(`Potongan : ${diskon}`);
    console.log(`Biaya Antar: ${ongkir}`);
    console.log(`Pajak : ${biayaPajak}`);
    console.log(`SubTotal : ${subTotal}`);
}

arkFood(75000, "ARKAFOOD5", 5, true, priceCalculation)

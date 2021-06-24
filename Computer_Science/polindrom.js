//polindrom
const palindrom = kata => {
    let reverse = ""
    if (Boolean(kata) && typeof kata === "string") {
        for (let i = kata.length - 1; i >= 0; i--) {
            reverse += kata[i]
        }
        if (kata.toLowerCase() === reverse.toLowerCase()) {
            console.log(`text "${kata}" merupakan polindrom`);
        } else {
            console.log(`text "${kata}" bukan polindrom`);
        }
    } else {
        console.log(`textInput tidak boleh kosong/empty dan harus berupa string`);
    }
}

palindrom("malam")
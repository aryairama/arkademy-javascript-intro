let printSegitiga = length => {
    if (Boolean(length) && typeof length === "number" && length > 0) {
        let segitiga = "";
        for (let i = 0; i < length; i++) {
            for (let k = 0; k < length - i; k++) {
                segitiga += `${k+1}`;
            }
            segitiga += "\n";
        }
        console.log(segitiga);
    } else {
        console.log("inputan tidak boleh kosong dan harus bertipe number")
    }
}

printSegitiga(10)
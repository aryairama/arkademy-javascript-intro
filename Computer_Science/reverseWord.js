//reverse kalimat
const reverseKalimat = kalimat => {
    if (Boolean(kalimat) && typeof kalimat === "string") {
        let arrayKalimat = kalimat.split(" ")
        let reverseKalimat = ""
        for (let i = arrayKalimat.length - 1; i >= 0; i--) {
            reverseKalimat += arrayKalimat[i] + " "
        }
        console.log(reverseKalimat)
    } else {
        console.log(`textInput tidak boleh kosong/empty dan harus berupa string`);
    }
}

reverseKalimat("Saya belajar Javascript")
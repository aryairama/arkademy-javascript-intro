const everage = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
    if (mtk === "" || typeof mtk !== "number" || mtk < 0 || mtk > 100) {
        console.log('input nilai Matematika yang anda masukkan tidak sesuai');
    } else if (ipa === "" || typeof ipa !== "number" || ipa < 0 || ipa > 100) {
        console.log('input nilai Ipa yang anda masukkan tidak sesuai');
    } else if (bahasaIndonesia === "" || typeof bahasaIndonesia !== "number" || bahasaIndonesia < 0 || bahasaIndonesia > 100) {
        console.log('input nilai Bahasa Indonesia yang anda masukkan tidak sesuai');
    } else if (bahasaInggris === "" || typeof bahasaInggris !== "number" || bahasaInggris < 0 || bahasaInggris > 100) {
        console.log('input nilai Bahasa Inggris yang anda masukkan tidak sesuai');
    } else {
        let ratarata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
        let grade
        if (ratarata > 89 && ratarata < 101) {
            grade = "A"
        } else if (ratarata > 79 && ratarata < 90) {
            grade = "B"
        } else if (ratarata > 69 && ratarata < 80) {
            grade = "C"
        } else if (ratarata > 59 && ratarata < 70) {
            grade = "D"
        } else if (ratarata >= 0 && ratarata < 60) {
            grade = "E"
        } else {
            grade = "Grade tidak ditemukan"
        }
        console.log(`Rata-rata = ${ratarata}`);
        console.log(`Grade = ${grade}`)
    }
}

everage(77, 88,46,90);
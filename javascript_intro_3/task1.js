const cekHariKerja = day => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = datDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error("Hari ini bukan hari kerja"))
            }
        }, 2000)
    })
}

//then catch
cekHariKerja(12)
    .then((ress) => {
    console.log(ress);
    }).catch((err) => {
    console.log(err);
    })

//try catch
const handleWorkDay = async () => {
    try {
        let day = await cekHariKerja("senin")
        console.log(day);
    } catch (error) {
        console.log(error);
    }
}

handleWorkDay()
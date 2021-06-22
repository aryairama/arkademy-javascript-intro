const cekHariKerja = day => {//arrow function dengan parameter day
    return new Promise((resolve, reject) => {//function return new Promise dengan paramter callback yang isi callbacknya berupa callback yang mewakili state 
        //fulfilled dan state rejected
        setTimeout(() => {//function setTimeout untuk menjeda eksekusi suatu program dengan jeda sekian detik
            if (!Boolean(day) || typeof day !== "string") {
                reject(new Error("paramter day haris berupa string dan tidak boleh kosong"))
            }
            const datDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']//variabel array berisi tanggal kerja
            let cek = datDay.find((item) => {//function find untuk mencari nilai pada variabel datDay yang cocok dengan parameter day
                return item === day//mereturn hasil yang cocok dengan parameter day
            })
            if (cek) {//jika hasil find ada
                resolve(cek)//variabel cek yang berisi result datDay.find dimasukkan kedalam callback resolve yang selanjutnya akan ditangani function then
            } else {//jika hasil find kosong atau tidak ada
                reject(new Error("Hari ini bukan hari kerja")); //mereturn new error dengan constructor error lalu dimasukkan kedalam callback reject 
              //yang selanjutnya akan ditangani function catch
            }
        }, 2000)//waktu tunggu eksesuki program selama dua detik
    })
}
console.log("test1");
//then catch
cekHariKerja("senin") //function yang mereturn promise
    .then((ress) => {
        //then digunakan untuk handle promise resolve/state Fulfilled,then menerima parameter berupa callback function
        //untuk mengakses parameter/value resolve dari return promise
        console.log(ress);
    }).catch((err) => {
        //catch digunakan untuk handle promise reject/state Rejected ,catch menerima parameter berupa callback function
        //untuk mengakses parameter/value reject dari return promise
        console.log(err);
    })
console.log("test2");
//try catch
const handleWorkDay = async () => {//async pada function menandakan bahwa didalam function tersebut akan ada proses asynchronous
    try {//digunakan untuk handle state fulfilled
        let day = await cekHariKerja("senin")//await digunakan untuk memberikan perintah untuk menunggu karena pada proses
         //tersebut akan ada pending sehingga membutuhkan beberapa waktu untuk initialization/asigment variabel
        console.log(day);
    } catch (error) {//handle state rejected
        console.log(error);
    }
}

handleWorkDay()
console.log("test3");
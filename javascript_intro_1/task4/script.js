//A
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",

}
console.log("sebelum diubah");
console.log(data);
data = {
    ...data,
    name: "Arya Irama Wahono",
    email: "aryairama987@gmail.com",
    hoby: ["Membaca", "Game Online"],
    address: {
        ...data.address,
        street : 'krandegan'//change value nested spreed
    }
}
console.log("sesudah diubah");
console.log(data);
//B
let {
    street : jalan,
    city : kota
} = data.address
console.log(`jalan : ${jalan}`)
console.log(`kota : ${kota}`)
//nested destruc
let {
    address: {
        street
    },
    email 
} = data

console.log(`address.street : ${street}`);
//set default destruc value jika tidak ada keys tersebut
let biodata = {
    email : "arya"
}

let { nama = "irama" } = biodata
console.log(nama);
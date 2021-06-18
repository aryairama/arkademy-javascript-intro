//1 includes
let str = "Hello word"
let resultStr = str.includes("word")
console.log(resultStr);

//2 search
let nama = "arya irama wahono"
console.log(nama.search("irama"));

//3 toFixed
let nilai = 81.26
console.log(nilai.toFixed(1));

//4 toUpperCase
let textUpper = "arya"
console.log(textUpper.toUpperCase());

//5 toLowerCase
let textLower = "ARYA IRAMA WAHONO"
console.log(textLower.toLowerCase());

//6 push
let color = ["red", "green", "blue"]
color.push("pink")
console.log(color);

//7 shift
color.unshift("purple")
console.log(color);

//8 shift
color.shift()
console.log(color);

//9 lastIndexOf
color.lastIndexOf("green")

//10 map
let objectColor = color.map(value => {
    return {
        color : value
    }
})

console.log(objectColor);



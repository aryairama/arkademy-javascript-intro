const dataColors = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()
        ajax.open("GET", "https://fakejsonapi.com/colors", true);
        ajax.send()
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    resolve(JSON.parse(ajax.responseText))
                } else {
                    reject("Server error")
                }
            }
        }
    })
}

const searchColors = async (search, type, limit) => {
    if (!Boolean(search) || !Boolean(type) || typeof search !== "string" || typeof type !== "string" || typeof limit !== "number" || limit < 0) {
        console.log("color and type must be a string and cannot be empty,limit must be a number and not a negative number");
    } else {
        try {
            let colors = await dataColors()
            let resultColors = []
            if (type === "name" || type === "hex") {
                resultColors = colors.filter((color) => {
                    return color[type].toLowerCase().includes(search.toLowerCase());
                });
            } else {
                console.log("search type must be  'name' or 'hex'");
            }
            if (resultColors.length > 0) {
                resultColors.slice(0,limit).forEach((color) => {
                    console.log("======================================");
                    console.log(`Color name : ${color.name}`)
                    console.log(`Color hex : ${color.hex}`);
                });
            } else {
                console.log("the color you are looking for does not exist");
            }
        } catch (error) {
            alert(error);
        }
    }
}

console.log("test1");
searchColors("black", "name",2)
console.log("test2");
let searchName = (search, limit, callback) => {
    const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela",
        "Bella", "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"
    ]
    if (!Boolean(search) || typeof search !== "string") {
        console.log("keyword pencarian harus berupa string dan tidak kosong");
    } else if (!Boolean(limit) || typeof limit !== "number") {
        console.log("limiter pencarian harus berupa number dan tidak kosong");
    } else if (typeof callback !== "function") {
        console.log("callback harus berupa function");
    } else {
        let result = name.filter(value => {
            return value.toLowerCase().includes(search.toLowerCase())
        })
        return callback(limit, result)
    }

}

let resultSearchName = (limit, result) => {
    let resultLimit = []
    if (result.length >= limit) {
        for (let i = 0; i < limit; i++) {
            resultLimit.push(result[i])
        }
    } else {
        resultLimit = result
    }
    console.log(resultLimit);
}

searchName("ar", 4, resultSearchName)
let dataEmployes = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()
        ajax.open("GET", "https://fakejsonapi.com/fake-api/employee/api/v1/employees", true)
        ajax.send()
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    resolve(JSON.parse(ajax.responseText));
                } else {
                    reject("Server error");
                }
            }
        }
    })
}

const searchEmployes = async (nameEmploye, limit) => {
    if (!Boolean(nameEmploye) || typeof nameEmploye !== "string" || typeof limit !== "number" || limit < 0) {
        console.log("employee name must be a string and limit must be a number and not a negative number");
    } else {
        try {
            let employe = await (await dataEmployes()).data;
            let resultSearch = employe.filter((person) => {
                return person.employee_name.toLowerCase().includes(nameEmploye.toLowerCase());
            });
            if (resultSearch.length > 0) {
                resultSearch = resultSearch.slice(0, limit);
                resultSearch.forEach((value) => {
                    console.log("======================================");
                    console.log(`Employee name : ${value.employee_name}`);
                    console.log(`Employee age : ${value.employee_age}`);
                    console.log(`EMployee salary :  ${value.employee_salary}`);
                });
            } else {
                console.log( "The name of the worker you are looking for does not exist");
            }
        } catch (error) {
            alert(error);
        }
    }
}

searchEmployes("ar", 2)
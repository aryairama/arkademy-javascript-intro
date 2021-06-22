const getName = async (method, url,limit) => {
  try {
    let name = await(await fetch(url, { method: method, cache: "default" })).json();
    name.slice(0,limit).map((value) => {
      console.log(`name : ${value.name}`);
    });
  } catch (error) {
    console.log(error);
  }
};

console.log("test1");
getName("GET", "https://jsonplaceholder.typicode.com/users",5);
console.log("test2");
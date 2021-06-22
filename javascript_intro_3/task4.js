const getName = async (method, url) => {
  try {
    let name = await(await fetch(url, { method: method, cache: "default" })).json();
    name.map((value) => {
      console.log(`name : ${value.name}`);
    });
  } catch (error) {
    console.log(error);
  }
};

getName("GET", "https://jsonplaceholder.typicode.com/users");

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January","February","March", "April","May","Juni","July","August",
      "September","October","November","Desember",
    ];
    if (!error) {
      callback(null,month)
    } else {
      callback(new Error("Sorry Data Not Found",[]),null)
    }
  }, 4000);
};

console.log("task1");
getMonth((status,data) => {
  if (!status) {
    data.map((value) => {
      console.log(value);
    })
  } else {
    console.log(data);
    console.log(status);
  }
})
console.log("task2");

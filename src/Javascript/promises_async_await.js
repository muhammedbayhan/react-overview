//Promises & async/await
//Promises

const fetchData = new Promise((resolve, reject) => {
  const dataİsFetched = true;
  if (dataİsFetched) {
    resolve("Data fetched!");
  } else {
    reject("Data not fetched!");
  }
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

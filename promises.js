let age = 40;

const promise = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("You can Vote ");
  } else {
    reject("You Can't vote ");
  }
});

promise
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });

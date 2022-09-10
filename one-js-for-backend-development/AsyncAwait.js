const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success...!!!');
  }, 1000);
});

async function getData() {
  // const res = [];
  const res = await promise;
  console.log(res);
}

getData();

fetch('')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getUser() {
  const res = await fetch('');
  const user = await res.json();

  const res2 = await fetch(`https://www.example.con/${user.id}`);
  const product = res2.json();

  console.log(product);
}

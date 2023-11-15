const masyvas = [];

for (let i = 0; i < 10; i++) {
  const skaicius = Math.floor(Math.random() * 11) + 1;
  masyvas.push(skaicius);
}

console.log(masyvas);
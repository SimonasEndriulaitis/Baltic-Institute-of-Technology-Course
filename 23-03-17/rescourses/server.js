const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'admin@bit.lt' && password === '1234') {
    res.redirect('/administratorius');
  } else {
    res.send('Invalid email or password');
  }
});

app.get('/administratorius', (req, res) => {
  res.send('Welcome, administrator!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

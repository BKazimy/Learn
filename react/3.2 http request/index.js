import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
//   console.log(req.headers);
});

app.get('/about', (req, res) => {
  res.send('About Page');
//   console.log(req.headers);
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
//   console.log(req.headers);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
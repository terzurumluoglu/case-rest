const app = require('./src/app/server');
const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
  const data = {
      message: 'Hello World!',
  }
  res.status(200).send(data);
});

app.listen(PORT, () => {
  const message = process.env.MESSAGE.split('{{PORT}}').join(PORT)
  console.log(message);
}).on('error', (error) => {
  console.log(error.code === 'EADDRINUSE' ? ERROR_MESSAGES[error.code] : error.code);
});
